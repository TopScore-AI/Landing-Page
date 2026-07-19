import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://topscoreapp.ai'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'TopScore AI',
  url: siteUrl,
  logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png`, width: 512, height: 512 },
  sameAs: [
    'https://twitter.com/TopScoreAI',
    'https://play.google.com/store/apps/details?id=com.topscoreapp.ai',
  ],
  description: 'Kenyan AI-powered education platform using Socratic method for visual-first learning with real curriculum diagrams and personalized tutoring.',
  areaServed: { '@type': 'Country', name: 'Kenya' },
  knowsAbout: ['Socratic Learning', 'Visual-First Education', 'CBC Curriculum', '8-4-4 Curriculum', 'IGCSE Curriculum', 'KCSE Revision', 'Voice & Screen Sharing', 'Real Educational Diagrams'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'TopScore AI',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${siteUrl}/#app`,
  name: 'TopScore AI',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Android, iOS, Web',
  url: siteUrl,
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.topscoreapp.ai',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KES', description: '7-day free trial for new users' },
  screenshot: `${siteUrl}/og-image.png`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    'Socratic AI Tutor with Visual Learning',
    'Real Educational Diagrams (Curriculum-Backed)',
    'Voice & Screen Sharing for Personalized Help',
    'Long-Term Memory & Personalization',
    'Thousands of Verified Resources',
    'Smart PDF Viewer with AI Analysis',
    'Multiplayer Competitive Quizzes',
    'AI Flashcards for Quick Review',
    'Real-Time Google Search Integration',
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${siteUrl}/#product`,
  name: 'TopScore AI - Visual-First Learning Platform',
  description: 'Socratic AI tutor with real curriculum diagrams, voice & screen sharing, and personalized learning for Kenyan students',
  image: `${siteUrl}/og-image.png`,
  brand: {
    '@type': 'Brand',
    name: 'TopScore AI',
  },
  offers: {
    '@type': 'Offer',
    url: siteUrl,
    priceCurrency: 'KES',
    price: '1000',
    availability: 'https://schema.org/InStock',
    description: 'Monthly premium subscription',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1250',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${siteUrl}/#local`,
  name: 'TopScore AI',
  url: siteUrl,
  logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressRegion: 'Nairobi',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-717-273-230',
    contactType: 'customer service',
    email: 'admin@topscoreapp.ai',
  },
  sameAs: [
    'https://twitter.com/TopScoreAI',
    'https://play.google.com/store/apps/details?id=com.topscoreapp.ai',
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use TopScore AI for KCSE Revision',
  description: 'Step-by-step guide on how to use TopScore AI to improve your KCSE grades',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Download the App',
      text: 'Download TopScore AI from Google Play Store or access via web browser',
      image: `${siteUrl}/screenshots/screen-0.png`,
    },
    {
      '@type': 'HowToStep',
      name: 'Select Your Curriculum',
      text: 'Choose between CBC, 8-4-4, or IGCSE curriculum based on your school system',
    },
    {
      '@type': 'HowToStep',
      name: 'Access Past Papers',
      text: 'Browse thousands of KCSE past papers with AI-powered explanations',
    },
    {
      '@type': 'HowToStep',
      name: 'Use AI Tutor',
      text: 'Ask questions 24/7 and get instant, curriculum-aligned answers',
    },
    {
      '@type': 'HowToStep',
      name: 'Track Progress',
      text: 'Monitor your improvement with personalized analytics and study streaks',
    },
  ],
}

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'TopScore AI - Kenya\'s #1 AI Tutor for Students',
  description: 'Learn how TopScore AI helps Kenyan students master CBC, KCSE, and IGCSE with 24/7 AI tutoring, past papers, and smart study tools.',
  thumbnailUrl: `${siteUrl}/screenshots/screen-0.png`,
  uploadDate: '2026-01-15',
  duration: 'PT2M30S',
  contentUrl: 'https://www.youtube.com/watch?v=demo',
  embedUrl: 'https://www.youtube.com/embed/demo',
  interactionStatistic: {
    '@type': 'InteractionCounter',
    interactionType: { '@type': 'WatchAction' },
    userInteractionCount: '15000',
  },
}

const viewTransitionStyle = `
  @view-transition { navigation: auto; }
  ::view-transition-old(root) { animation: 220ms cubic-bezier(0.4, 0, 1, 1) both vtFadeOut; }
  ::view-transition-new(root) { animation: 320ms cubic-bezier(0, 0, 0.2, 1) 80ms both vtFadeIn; }
  @keyframes vtFadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-8px); } }
  @keyframes vtFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  @media (prefers-reduced-motion: reduce) {
    ::view-transition-old(root), ::view-transition-new(root) { animation: none; }
  }

  /* Slide transition variant */
  .slide-transition-enter-active,
  .slide-transition-leave-active {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-transition-enter-from {
    opacity: 0;
    transform: translateX(20px);
  }
  .slide-transition-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }

  /* Scale transition variant */
  .scale-transition-enter-active,
  .scale-transition-leave-active {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .scale-transition-enter-from,
  .scale-transition-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }

  /* Fade transition variant */
  .fade-transition-enter-active,
  .fade-transition-leave-active {
    transition: opacity 300ms ease;
  }
  .fade-transition-enter-from,
  .fade-transition-leave-to {
    opacity: 0;
  }
`

export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  devtools: { enabled: true },

  // Static-site generation (mirrors Next.js `output: 'export'`)
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/app', '/privacy', '/terms', '/contact'],
    },
    routeRules: {
      '/': { headers: { 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY', 'Referrer-Policy': 'strict-origin-when-cross-origin' } },
    },
  },

  modules: ['@nuxtjs/color-mode', '@nuxt/fonts', 'motion-v/nuxt'],

  css: ['~/assets/css/globals.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'firebase/analytics',
        'firebase/app',
        'firebase/firestore',
        'lucide-vue-next',
        'reka-ui',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
      ],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('firebase')) {
              return 'firebase'
            }
            if (id.includes('reka-ui')) {
              return 'ui'
            }
            if (id.includes('lucide')) {
              return 'icons'
            }
          },
        },
      },
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'Newsreader', provider: 'google', styles: ['normal', 'italic'] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 700] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      bodyAttrs: { class: 'antialiased overflow-x-hidden selection:bg-brand-primary/20' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'shortcut icon', href: '/logo.png' },
        { rel: 'alternate', hreflang: 'en-KE', href: 'https://topscoreapp.ai' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      titleTemplate: '%s | TopScore AI',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'TopScore AI' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'KE' },
        { name: 'geo.placename', content: 'Kenya' },
        { name: 'ICBM', content: '-1.286389, 36.817223' },
        { name: 'google-site-verification', content: '83231e9246a44c2fbfebd62728e1f204' },
        { name: 'description', content: "TopScore AI uses the Socratic method for visual-first learning. Not a ChatGPT wrapper—real curriculum diagrams, voice & screen sharing, personalized AI tutoring with long-term memory. Free 7-day trial." },
        { name: 'keywords', content: "TopScore AI, Socratic learning Kenya, visual-first education, AI tutor with diagrams, voice screen sharing tutor, KCSE CBC IGCSE, real educational diagrams, personalized AI learning, competitive quizzes, smart PDF viewer, Kenya education platform, long-term memory AI, curriculum-backed resources, multiplayer learning, AI flashcards" },
        { name: 'author', content: 'TopScore AI' },
        { name: 'creator', content: 'TopScore AI' },
        { name: 'publisher', content: 'TopScore AI' },
        { name: 'application-name', content: 'TopScore AI' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_KE' },
        { property: 'og:site_name', content: 'TopScore AI' },
        { property: 'og:title', content: "TopScore AI — Learn Through Visual Discovery & Socratic Method" },
        { property: 'og:description', content: 'Not a ChatGPT wrapper. Real curriculum diagrams, voice & screen sharing, personalized AI tutoring with long-term memory. Free 7-day trial.' },
        { property: 'og:image', content: 'https://topscoreapp.ai/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'TopScore AI — Visual-First Learning with Socratic Method' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@TopScoreAI' },
        { name: 'twitter:creator', content: '@TopScoreAI' },
        { name: 'twitter:title', content: "TopScore AI — Visual-First Learning with Socratic Method" },
        { name: 'twitter:description', content: 'Real curriculum diagrams, voice & screen sharing, personalized AI tutoring. Free 7-day trial.' },
        { name: 'twitter:image', content: 'https://topscoreapp.ai/og-image.png' },
        { property: 'article:author', content: 'TopScore AI' },
        { property: 'article:publisher', content: 'https://topscoreapp.ai' },
        { property: 'article:section', content: 'Education' },
        { property: 'article:tag', content: 'AI Education, Kenya, CBC, KCSE, IGCSE' },
        { name: 'theme-color', content: '#2B4E9A' },
        { name: 'msapplication-TileColor', content: '#2B4E9A' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(websiteSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(softwareAppSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(productSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(videoSchema) },
      ],
      style: [{ innerHTML: viewTransitionStyle }],
    },
  },
})
