// TopScore AI website service worker
// Goal: instant repeat-visit + graceful offline page.
//
// Strategy:
//  - HTML pages: network-first (we want the latest copy), fall back to cache.
//  - Static assets (CSS / JS / SVG / images / fonts): stale-while-revalidate,
//    so the second visit is instant and the third visit is up to date.
//  - Bad navigations (offline + uncached URL): serve the dedicated offline
//    shell so the user is never stranded on a browser error page.
//
// To bump the cache after a deploy, change the version below.

const VERSION = 'v1.1.0';
const CORE_CACHE = `topscore-core-${VERSION}`;
const RUNTIME_CACHE = `topscore-runtime-${VERSION}`;
const NETWORK_TIMEOUT_MS = 5000;
const MAX_RUNTIME_ITEMS = 50;

// Clean (extensionless) URLs — these match what the site now links to and
// what Vercel's cleanUrls config actually serves navigation requests for.
const CORE_ASSETS = [
  '/',
  '/about',
  '/accessibility',
  '/contact',
  '/demo',
  '/ai-study-assistant',
  '/terms',
  '/privacy',
  '/404.html',
  '/offline.html',
  '/styles.css',
  '/styles-minimal.css',
  '/enhancements.css',
  '/shared.js',
  '/logo.png',
  '/logo-nav.png',
  '/icon-maskable-512.png',
  '/og-image.png',
  '/app-store-badge.svg',
  '/GetItOnGooglePlay_Badge_Web_color_English.svg',
  '/site.webmanifest',
  '/screenshots/screen-1.webp',
  '/screenshots/screen-2.webp',
  '/screenshots/screen-3.webp',
  '/screenshots/socratic-demo.webp',
  '/screenshots/voice-demo.webp',
  '/screenshots/diagram-water-cycle.webp',
];

function fetchWithTimeout(request, timeout = NETWORK_TIMEOUT_MS) {
  return Promise.race([
    fetch(request),
    new Promise(function (_, reject) {
      setTimeout(function () { reject(new Error('timeout')); }, timeout);
    }),
  ]);
}

async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    await limitCacheSize(cacheName, maxItems);
  }
}

function cacheResponse(cacheName, request, response) {
  if (!response || response.status !== 200) return;
  const copy = response.clone();
  caches.open(cacheName).then(function (cache) {
    cache.put(request, copy);
    limitCacheSize(cacheName, MAX_RUNTIME_ITEMS);
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CORE_CACHE && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Don't try to cache cross-origin requests (Google Fonts, GTM, etc.).
  if (url.origin !== self.location.origin) return;

  // Navigation requests: network-first, cache fallback, then offline shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetchWithTimeout(req)
        .then((res) => {
          cacheResponse(RUNTIME_CACHE, req, res);
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match('/offline.html') || caches.match('/404.html'))
        )
    );
    return;
  }

  // Same-origin static assets: stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetchWithTimeout(req)
        .then((res) => {
          cacheResponse(RUNTIME_CACHE, req, res);
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
