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
  description: 'Kenyan premium AI-powered education platform supporting CBC, IGCSE & KCSE learners.',
  areaServed: { '@type': 'Country', name: 'Kenya' },
  knowsAbout: ['CBC Curriculum', '8-4-4 Curriculum', 'IGCSE Curriculum', 'KCSE Revision', 'Exam Preparation', 'AI Tutoring'],
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
  featureList: [
    '24/7 AI Tutor with Live Voice',
    'KCSE, CBC & IGCSE Past Papers',
    'AI-Graded English Compositions & Swahili Insha',
    'AI Flashcard Generator',
    'Smart Study Timetable',
    'Virtual Science Lab Experiments',
    'Offline Study Mode',
    'Personalized Progress Tracking',
  ],
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
`

export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  devtools: { enabled: true },

  // Static-site generation (mirrors Next.js `output: 'export'`)
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/app'],
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
        { name: 'description', content: "TopScore AI is Kenya's leading AI tutor for students. Master CBC, KCSE, and IGCSE with instant homework help, past papers, smart study tools, and AI-graded compositions. Free on Android & iOS." },
        { name: 'keywords', content: "TopScore AI, AI tutor Kenya, KCSE revision app, CBC learning app, IGCSE revision Kenya, Kenya education AI, AI homework help, KCSE past papers 2026, CBC Grade 9 resources, AI study assistant, Kenya school portal, Form 4 revision notes, Insha AI grading, English composition AI, Kenya student study app" },
        { name: 'author', content: 'TopScore AI' },
        { name: 'creator', content: 'TopScore AI' },
        { name: 'publisher', content: 'TopScore AI' },
        { name: 'application-name', content: 'TopScore AI' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_KE' },
        { property: 'og:site_name', content: 'TopScore AI' },
        { property: 'og:title', content: "TopScore AI — Kenya's #1 AI Tutor for CBC, KCSE & IGCSE" },
        { property: 'og:description', content: 'Master your exams with the most powerful AI tutor in Kenya. Get instant feedback on English & Kiswahili compositions, solve complex maths, and access thousands of resources.' },
        { property: 'og:image', content: 'https://topscoreapp.ai/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'TopScore AI — AI-Powered Learning for Kenyan Students' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@TopScoreAI' },
        { name: 'twitter:creator', content: '@TopScoreAI' },
        { name: 'twitter:title', content: "TopScore AI — Kenya's #1 AI Tutor for Kenyan Students" },
        { name: 'twitter:description', content: 'Personalized AI tutoring for CBC & KCSE students. Free on Android, iOS & Web.' },
        { name: 'twitter:image', content: 'https://topscoreapp.ai/og-image.png' },
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(websiteSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(softwareAppSchema) },
      ],
      style: [{ innerHTML: viewTransitionStyle }],
    },
  },
})
