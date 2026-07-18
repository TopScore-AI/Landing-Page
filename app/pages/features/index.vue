<script setup lang="ts">
useHead({
  title: "Advanced AI Learning Features",
  meta: [
    {
      name: "description",
      content:
        "Explore TopScore AI features: 24/7 AI Tutor, CBC & KCSE resource library, Live Voice Tutor, and offline mode for Kenyan students.",
    },
    { property: "og:title", content: "Advanced AI Learning Features — TopScore AI" },
    { property: "og:description", content: "AI Tutor, Voice Tutor, and 100k+ resources for CBC, 8-4-4 & IGCSE." },
    { property: "og:url", content: "https://topscoreapp.ai/features" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/features" }],
})
</script>

<template>
  <main>
    <Nav />
    <div class="container mx-auto px-4 pt-32 space-y-24 pb-20">
      <Features />
      <ActiveVoiceShowcase />
      <Personalization />
    </div>
    <Footer />
  </main>
</template>
