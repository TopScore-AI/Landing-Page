(function () {
  'use strict';
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- global error handling ---------- */
  window.addEventListener('error', function (e) {
    console.error('Global error:', e.error || e.message);
  });
  window.addEventListener('unhandledrejection', function (e) {
    console.error('Unhandled promise rejection:', e.reason);
  });

  /* ---------- service worker (offline + instant repeat visits) ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  /* ---------- ARIA landmarks + decorative eyebrows ---------- */
  var pageHeader = document.querySelector('header');
  if (pageHeader && !pageHeader.getAttribute('role')) pageHeader.setAttribute('role', 'banner');
  var pageNav = document.querySelector('header nav');
  if (pageNav && !pageNav.getAttribute('role')) {
    pageNav.setAttribute('role', 'navigation');
    pageNav.setAttribute('aria-label', 'Main navigation');
  }
  var pageMain = document.querySelector('main');
  if (pageMain && !pageMain.getAttribute('role')) pageMain.setAttribute('role', 'main');
  var pageFooter = document.querySelector('footer');
  if (pageFooter && !pageFooter.getAttribute('role')) pageFooter.setAttribute('role', 'contentinfo');
  document.querySelectorAll('.eyebrow').forEach(function (el) {
    el.setAttribute('role', 'presentation');
    el.setAttribute('aria-hidden', 'true');
  });

  /* ---------- external link security ---------- */
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    var rel = link.getAttribute('rel') || '';
    if (rel.indexOf('noopener') === -1) {
      link.setAttribute('rel', (rel + ' noopener noreferrer').trim());
    }
  });

  /* ---------- mobile menu ---------- */
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    navLinks.id = navLinks.id || 'primary-navigation';
    menuToggle.setAttribute('aria-controls', navLinks.id);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      navLinks.classList.toggle('is-open', !open);
      navLinks.removeAttribute('style');
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        navLinks.removeAttribute('style');
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        navLinks.removeAttribute('style');
      }
    }, { passive: true });
  }

  /* ---------- FAQ: ensure Space toggles accordion (Enter works natively) ---------- */
  document.querySelectorAll('.faq-item summary').forEach(function (summary) {
    summary.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        summary.click();
      }
    });
  });

  /* ---------- clean anchor URLs: intercept #hash clicks, update URL to /section ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var hash = a.getAttribute('href');
    if (hash === '#' || hash === '#main-content') return;
    var sectionId = hash.slice(1);
    a.addEventListener('click', function (e) {
      var target = document.getElementById(sectionId);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, '', '/' + sectionId);
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  /* ---------- scroll: sticky nav shadow + progress bar + hero parallax ---------- */
  var header = document.querySelector('header');
  var progressBar = document.getElementById('scrollProgress');
  var heroStage = document.querySelector('.hero .phone-stage');
  var heroOffset = heroStage ? heroStage.offsetTop : 0;
  var ticking = false;

  function updateOnScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 8);
    if (progressBar) {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
    }
    if (!prefersReducedMotion && heroStage && y < heroOffset + 800) {
      heroStage.style.transform = 'translateY(' + (y * 0.06) + 'px)';
    }
    ticking = false;
  }

  document.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(updateOnScroll); ticking = true; }
  }, { passive: true });
  updateOnScroll();

  /* ---------- scroll reveal ---------- */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      revealElements.forEach(function (el) { io.observe(el); });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- app showcase: sync sticky phone image to active item ---------- */
  var showcaseItems = document.querySelectorAll('.showcase-item');
  var showcaseImg = document.getElementById('showcaseImg');
  if (showcaseItems.length && showcaseImg && 'IntersectionObserver' in window) {
    var showcaseIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        showcaseItems.forEach(function (i) { i.classList.remove('active'); });
        entry.target.classList.add('active');
        var newSrc = entry.target.dataset.img;
        if (showcaseImg.src === newSrc) return;
        if (prefersReducedMotion) {
          showcaseImg.src = newSrc;
          showcaseImg.alt = entry.target.dataset.alt;
        } else {
          showcaseImg.classList.add('fading');
          setTimeout(function () {
            showcaseImg.src = newSrc;
            showcaseImg.alt = entry.target.dataset.alt;
            showcaseImg.classList.remove('fading');
          }, 200);
        }
      });
    }, { threshold: 0.5, rootMargin: '-35% 0px -35% 0px' });
    showcaseItems.forEach(function (item) { showcaseIO.observe(item); });
  }

  /* ---------- newsletter form validation + loading state ---------- */
  var newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    var emailInput = newsletterForm.querySelector('input[type="email"]');
    var emailError = document.getElementById('email-error');
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (emailInput) {
      emailInput.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
      emailInput.setAttribute('aria-invalid', 'false');
    }

    newsletterForm.addEventListener('submit', function (e) {
      var btn = newsletterForm.querySelector('.btn-dark');
      var email = emailInput ? emailInput.value.trim() : '';

      if (emailInput && !emailPattern.test(email)) {
        e.preventDefault();
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
        return;
      }

      if (emailInput) emailInput.setAttribute('aria-invalid', 'false');
      if (emailError) emailError.textContent = '';

      if (btn && newsletterForm.getAttribute('action').indexOf('REPLACE_ME') !== -1) {
        e.preventDefault();
        btn.textContent = 'Subscribing...';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.disabled = false;
          if (emailError) emailError.textContent = 'Newsletter signup is not configured yet.';
        }, 1200);
      } else if (btn) {
        btn.textContent = 'Subscribing...';
        btn.disabled = true;
      }
    });

    if (emailInput) {
      emailInput.addEventListener('input', function () {
        if (emailError) emailError.textContent = '';
        emailInput.setAttribute('aria-invalid', 'false');
      });
    }
  }

  /* ---------- demo iframe loading + error fallback ---------- */
  var demoIframe = document.getElementById('demoIframe');
  var demoLoading = document.getElementById('demoLoading');
  if (demoIframe && demoLoading) {
    var demoLoaded = false;
    var hideDemoLoading = function () {
      demoLoaded = true;
      demoLoading.style.display = 'none';
    };
    var showDemoError = function () {
      if (demoLoaded) return;
      demoLoading.innerHTML = '<p>Demo unavailable. <a href="https://app.topscoreapp.ai/?demo=true" target="_blank" rel="noopener noreferrer">Open in new tab</a></p>';
    };

    demoIframe.addEventListener('load', hideDemoLoading);
    setTimeout(function () {
      if (!demoLoaded) hideDemoLoading();
    }, 6000);
    setTimeout(function () {
      try {
        if (!demoLoaded && demoIframe.contentWindow === null) showDemoError();
      } catch (err) {
        /* cross-origin — load event or timeout handles visibility */
      }
    }, 8000);
  }

  /* ---------- cookie consent banner ---------- */
  function acceptCookies() {
    try { localStorage.setItem('cookieConsent', 'accepted'); } catch (err) {}
    var banner = document.getElementById('cookieConsent');
    if (banner) banner.style.display = 'none';
  }
  function declineCookies() {
    try { localStorage.setItem('cookieConsent', 'declined'); } catch (err) {}
    var banner = document.getElementById('cookieConsent');
    if (banner) banner.style.display = 'none';
  }
  window.acceptCookies = acceptCookies;
  window.declineCookies = declineCookies;

  var consentSet = false;
  try { consentSet = !!localStorage.getItem('cookieConsent'); } catch (err) {}
  if (!consentSet) {
    var cookieBanner = document.createElement('div');
    cookieBanner.id = 'cookieConsent';
    cookieBanner.className = 'cookie-banner';
    cookieBanner.setAttribute('role', 'dialog');
    cookieBanner.setAttribute('aria-label', 'Cookie consent');
    cookieBanner.innerHTML =
      '<div class="cookie-content">' +
        '<p>We use cookies to improve your experience. <a href="/privacy.html">Learn more</a></p>' +
        '<div class="cookie-actions">' +
          '<button type="button" onclick="acceptCookies()" class="btn btn-primary btn-sm">Accept</button>' +
          '<button type="button" onclick="declineCookies()" class="btn btn-ghost btn-sm">Decline</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(cookieBanner);
  }
}());
