<script setup lang="ts">
useHead({
  title: "App Preview — See TopScore AI in Action",
  meta: [
    {
      name: "description",
      content:
        "Explore the TopScore AI mobile app interface. See our 24/7 AI tutor, extensive CBC/KCSE resource library, and smart study tools designed for Kenyan learners.",
    },
    { property: "og:title", content: "App Preview — TopScore AI Mobile Experience" },
    {
      property: "og:description",
      content: "Take a tour of Kenya's most advanced AI learning app. Premium design for elite students.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/screenshots" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/screenshots" }],
})

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "App Previews | TopScore AI",
  url: "https://topscoreapp.ai/screenshots",
  description: "High-resolution previews and screenshots of the TopScore AI mobile application interface.",
  isPartOf: { "@id": "https://topscoreapp.ai/#website" },
}

useJsonLd(schema)
</script>

<template>
  <main>
    <Nav />
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Designed for <span class="text-brand-primary">Excellence</span>
        </h1>
        <p class="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          TopScore AI is more than just a tutoring app. It is a premium learning experience, built from the ground up to
          empower students and learners across Kenya.
        </p>
      </div>
      <Screenshots />
    </div>
    <Footer />
  </main>
</template>
