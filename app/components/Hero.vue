<script setup lang="ts">
import { ArrowRight, Sparkles, Play } from "lucide-vue-next"
import { useTiltEffect, useMagneticEffect } from "~/composables/useScrollAnimation"
import { useAnalytics } from "~/composables/useAnalytics"

const { t } = useLocale()
const { trackCTAClick } = useAnalytics()

const handleGetStartedClick = () => {
  trackCTAClick('hero', 'Get Started')
}

const handleExploreClick = () => {
  trackCTAClick('hero', 'Explore Features')
}

const heroTitle = "Learn Through"
const heroSubtitle = "Visual Discovery"

const cards = [
  { icon: "play", title: "Socratic AI Tutor", desc: "Not a chatbot. Our AI guides you to answers through questions, building true understanding.", color: "bg-indigo-50 text-brand-primary", dark: false, delay: 0.4, float: "y", col: 0 },
  { icon: "sparkles", title: "Real Educational Diagrams", desc: "Curriculum-backed visual learning with real diagrams, not AI-generated images.", color: "bg-slate-900 text-white", dark: true, delay: 0.6, float: "y", col: 0 },
  { icon: "pdf", title: "Voice & Screen Sharing", desc: "Real-time calls where your AI tutor sees your screen and camera for personalized help.", color: "bg-emerald-50 text-emerald-600", dark: false, delay: 0.5, float: "x", col: 1 },
  { icon: "flash", title: "Competitive Quizzes", desc: "Challenge friends in multiplayer quizzes or practice solo with instant feedback.", color: "bg-rose-50 text-rose-600", dark: false, delay: 0.7, float: "x", col: 1 },
]

const heroCardsRef = ref<HTMLDivElement | null>(null)
const { elementRef: tiltRef } = useTiltEffect(8)
const { elementRef: ctaMagneticRef } = useMagneticEffect(0.4)

function cardAnimate(float: string) {
  return float === "y"
    ? { opacity: 1, y: [0, -15, 0] }
    : { opacity: 1, x: [0, 15, 0] }
}
function cardTransition(float: string, delay: number) {
  return {
    opacity: { duration: 0.5, delay },
    y: { duration: 0.5, delay },
    [float === "y" ? "y" : "x"]: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
  }
}
</script>

<template>
  <section class="relative pt-32 pb-40 overflow-hidden">
    <div class="absolute inset-0 bg-white -z-20" />

    <div class="absolute top-0 left-0 w-full h-full -z-15 opacity-40 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/30 rounded-full blur-[120px] animate-pulse" :style="{ animationDelay: '2s' }" />
    </div>

    <div class="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
      :style="{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }" />

    <div class="max-w-7xl mx-auto px-6 sm:px-10 relative">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
            class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            <Sparkles class="w-3 h-3" />
            <span>{{ t('hero.badge') }}</span>
          </Motion>

          <Motion as="h1" :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }"
            class="text-6xl md:text-8xl lg:text-[100px] font-display font-black leading-[0.95] lg:leading-[0.85] tracking-[-0.04em] text-slate-900 mb-8">
            <TextReveal :text="heroTitle" :delay="200" :stagger="50" />
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
              <TextReveal :text="t('hero.h1Grad')" :delay="400" :stagger="50" />
            </span>
            <span class="text-4xl md:text-6xl lg:text-7xl text-slate-400 tracking-tight font-bold mt-4 block">
              <TextReveal :text="heroSubtitle" :delay="600" :stagger="50" />
            </span>
          </Motion>

          <Motion as="p" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
            class="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mb-6 font-medium">
            Visual-first learning powered by the Socratic method. Our AI tutor doesn't just give answers—it guides you to discover them through questions, backed by real curriculum diagrams and thousands of verified resources.
          </Motion>

          <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }"
            class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-8">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Free 7-day premium trial • No credit card required
          </Motion>

          <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }"
            class="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a ref="ctaMagneticRef" href="https://app.topscoreapp.ai" target="_blank" rel="noopener noreferrer"
              @click="handleGetStartedClick"
              class="magnetic-button focus-visible-ring w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 transition-all hover:bg-brand-primary hover:shadow-brand-primary/20 hover:-translate-y-1 animate-pulse-glow"
              aria-label="Get started with TopScore AI">
              {{ t('hero.cta') }}
              <ArrowRight class="w-4 h-4" />
            </a>
            <a href="#features"
              @click="handleExploreClick"
              class="focus-visible-ring w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
              aria-label="Explore features">
              {{ t('hero.explore') }}
            </a>
          </Motion>

          <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 1, delay: 0.6 }"
            class="mt-16 pt-10 border-t border-slate-100 w-full flex flex-wrap justify-center lg:justify-start gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <a href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai" target="_blank" rel="noopener noreferrer">
              <img src="/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Google Play" class="h-8 w-auto" >
            </a>
            <div class="relative group">
              <div class="absolute -inset-1 bg-brand-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <span class="relative px-4 py-2 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg">
                Coming Soon to iOS
              </span>
            </div>
          </Motion>
        </div>

        <Motion :initial="{ opacity: 0, scale: 0.8, rotate: -5 }" :animate="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }"
          class="flex-1 relative w-full max-w-2xl lg:max-w-none">
          <div ref="tiltRef" class="relative grid grid-cols-2 gap-6 p-4 transition-transform duration-200 ease-out">
            <div class="absolute -inset-4 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5 rounded-[4rem] -z-10 blur-2xl" />

            <div v-for="col in [0, 1]" :key="col" :class="col === 1 ? 'space-y-6 pt-12' : 'space-y-6'">
              <Motion
                v-for="card in cards.filter((c) => c.col === col)" :key="card.title"
                :initial="{ opacity: 0, y: 20 }"
                :animate="cardAnimate(card.float)"
                :transition="cardTransition(card.float, card.delay)"
                :class="[
                  card.dark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900',
                  'p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border flex flex-col gap-6 hover:shadow-brand-primary/10 transition-all group',
                ]">
                <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner', card.color]">
                  <Play v-if="card.icon === 'play'" class="w-6 h-6" />
                  <Sparkles v-else-if="card.icon === 'sparkles'" class="w-6 h-6" />
                  <svg v-else-if="card.icon === 'pdf'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold tracking-tight mb-2">{{ card.title }}</h3>
                  <p :class="[card.dark ? 'text-slate-400' : 'text-slate-500', 'text-sm leading-relaxed font-medium']">{{ card.desc }}</p>
                </div>
              </Motion>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
