<script setup lang="ts">
useHead({
  title: "Smart Study Tools — Scanner, Quizzes & Science Lab",
  meta: [
    {
      name: "description",
      content:
        "All-in-one study suite: AI Smart Scanner, AI Quiz Generator, Virtual Science Lab, and AI Flashcard Generator for Kenyan learners.",
    },
    { property: "og:title", content: "Smart Study Tools — TopScore AI" },
    {
      property: "og:description",
      content: "Empower your studies with built-in tools: scanner, quizzes, science lab, and more.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/tools" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/tools" }],
})

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Study Tools | TopScore AI",
  url: "https://topscoreapp.ai/tools",
  description:
    "A comprehensive suite of digital study tools integrated directly into TopScore AI to help Kenyan students excel.",
  isPartOf: { "@id": "https://topscoreapp.ai/#website" },
  mainEntity: {
    "@type": "ItemList",
    name: "TopScore AI Study Tools",
    itemListElement: [
      "Smart Scanner",
      "AI Quiz Generator",
      "Science Lab",
      "Flashcard Generator",
      "Timetable",
      "Global Search",
      "PDF Viewer",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
}

useJsonLd(schema)
</script>

<template>
  <main class="min-h-screen">
    <Nav />
    <div class="container mx-auto px-4 pt-32">
      <Tools />
    </div>
    <Footer />
  </main>
</template>
