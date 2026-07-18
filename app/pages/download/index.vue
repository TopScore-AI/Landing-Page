<script setup lang="ts">
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-vue-next"

useHead({
  title: "Download TopScore AI — Free on Android & iOS",
  meta: [
    {
      name: "description",
      content:
        "Get the TopScore AI app today. Access your personal AI tutor and 100,000+ Kenyan curriculum resources for CBC, 8-4-4, and IGCSE. Start learning for free.",
    },
    { property: "og:title", content: "Download TopScore AI — Kenya's #1 AI Tutor" },
    {
      property: "og:description",
      content: "Download the app free on Android or iOS and start mastering your curriculum today.",
    },
    { property: "og:url", content: "https://topscoreapp.ai/download" },
    { property: "og:image", content: "/og-image.png" },
  ],
  link: [{ rel: "canonical", href: "https://topscoreapp.ai/download" }],
})
</script>

<template>
  <main class="min-h-screen bg-white">
    <Nav />

    <div class="pt-40 pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8 }"
          >
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-brand-primary/20 text-brand-primary"
            >
              <Sparkles class="w-3.5 h-3.5" />
              Available Now
            </div>
            <h1 class="text-5xl md:text-7xl font-sans font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
              Your AI Tutor, <br > in your pocket.
            </h1>
            <p class="text-slate-500 text-xl leading-relaxed mb-12 font-medium max-w-lg">
              Master CBC, 8-4-4, and IGCSE from anywhere. Download the mobile app to access your full resource library
              and AI tutor even when offline.
            </p>

            <div class="flex flex-wrap gap-4 mb-16">
              <a
                href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                  alt="Get it on Google Play"
                  class="h-14 w-auto"
                >
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-105 active:scale-95">
                <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-14 w-auto" >
              </a>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <div
                v-for="(item, i) in [
                  { icon: ShieldCheck, colorClass: 'text-emerald-500', text: 'Verified Educational Content' },
                  { icon: Zap, colorClass: 'text-amber-500', text: 'Zero Lag AI Interaction' },
                  { icon: CheckCircle2, colorClass: 'text-indigo-500', text: 'Offline Resource Sync' },
                  { icon: Sparkles, colorClass: 'text-purple-500', text: 'National Rank Tracking' },
                ]"
                :key="i"
                class="flex items-center gap-3"
              >
                <div class="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <component :is="item.icon" class="w-5 h-5" :class="item.colorClass" />
                </div>
                <span class="text-sm font-bold text-slate-700">{{ item.text }}</span>
              </div>
            </div>
          </Motion>

          <Motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 1 }"
            class="relative"
          >
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-indigo-500/20 blur-3xl rounded-full" />
            <div
              class="relative bg-slate-900 rounded-[3rem] p-4 shadow-2xl border border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-700"
            >
              <div class="bg-white rounded-[2.5rem] overflow-hidden">
                <img src="/topscore_app_mockup.png" alt="TopScore AI Mobile App" class="w-full h-auto" >
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>
