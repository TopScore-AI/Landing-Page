<script setup lang="ts">
// Global shell — mirrors the persistent children of the Next.js root layout.

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration)
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error)
      })
  }
})
</script>

<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:transition-all"
    >
      Skip to main content
    </a>
    <Analytics />
    <NuxtPage />
    <BackToTop />
    <CookieConsent />
    <PWAInstallPrompt />
  </div>
</template>
