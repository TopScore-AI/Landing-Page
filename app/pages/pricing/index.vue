<script setup lang="ts">
useHead({
  title: "Affordable AI Tutoring Plans — Weekly & Monthly",
  meta: [
    {
      name: "description",
      content:
        "Access Kenya's #1 AI tutor with flexible plans. Start for free or upgrade to Pro for unlimited AI interactions, voice tutoring, and premium CBC/KCSE resources.",
    },
    { property: "og:title", content: "Affordable AI Tutoring Plans — TopScore AI" },
    {
      property: "og:description",
      content: "Start for free or upgrade to Pro for unlimited AI interactions and premium curriculum resources.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/pricing" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/pricing" }],
})

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pricing | TopScore AI",
  url: "https://topscoreapp.ai/pricing",
  description: "View the flexible pricing plans for TopScore AI, designed to be accessible for every Kenyan student.",
  isPartOf: { "@id": "https://topscoreapp.ai/#website" },
}

useJsonLd(schema)
</script>

<template>
  <main class="min-h-screen">
    <Nav />
    <div class="container mx-auto px-4 pt-32">
      <Pricing />
    </div>
    <Footer />
  </main>
</template>
