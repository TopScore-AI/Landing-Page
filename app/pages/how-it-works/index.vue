<script setup lang="ts">
useHead({
  title: "How It Works — Getting Started with TopScore AI",
  meta: [
    {
      name: "description",
      content:
        "Learn how to use TopScore AI to master your studies. 4 easy steps to start learning with an AI tutor and accessing thousands of localized Kenyan resources.",
    },
    { property: "og:title", content: "How It Works — TopScore AI Learning Journey" },
    {
      property: "og:description",
      content: "Your 4-step guide to mastering CBC, KCSE, and IGCSE with Kenya's #1 AI learning platform.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/how-it-works" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/how-it-works" }],
})

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How It Works | TopScore AI",
  url: "https://topscoreapp.ai/how-it-works",
  description:
    "Learn how to use TopScore AI to master your studies. 4 easy steps to start learning with an AI tutor and accessing thousands of localized Kenyan resources.",
  isPartOf: { "@id": "https://topscoreapp.ai/#website" },
  mainEntity: {
    "@type": "HowTo",
    name: "How to Get Started with TopScore AI",
    step: [
      { "@type": "HowToStep", position: 1, name: "Download & Sign Up", text: "Install TopScore AI and create a free account." },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Explore Subjects & Resources",
        text: "Instantly access CBC, 8-4-4, and IGCSE materials.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Study with AI",
        text: "Chat with your AI tutor or browse the resource library.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Build Your Streak",
        text: "Study daily to build streaks and unlock achievements.",
      },
    ],
  },
}

useJsonLd(schema)
</script>

<template>
  <main class="min-h-screen">
    <Nav />
    <div class="container mx-auto px-4 pt-32">
      <HowItWorks />
    </div>
    <Footer />
  </main>
</template>
