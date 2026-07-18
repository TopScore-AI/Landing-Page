<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue"
import { Menu, X } from "lucide-vue-next"

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const { t } = useLocale()

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

watch(
  () => route.path,
  () => {
    isOpen.value = false
  },
)

const navLinks = [
  { href: "/features", key: "nav.features" as const },
  { href: "/how-it-works", key: "nav.howItWorks" as const },
  { href: "/tools", key: "nav.tools" as const },
  { href: "/pricing", key: "nav.pricing" as const },
  { href: "/contact", key: "contact.label" as const },
]
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-2xl shadow-slate-200/20'
        : 'bg-transparent py-8',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <div class="relative">
          <img
            src="/logo.png"
            alt="TopScore AI"
            class="w-12 h-12 rounded-2xl shadow-2xl shadow-brand-primary/10 group-hover:scale-110 transition-all duration-500"
          >
          <div
            class="absolute inset-0 rounded-2xl bg-brand-primary/20 scale-0 group-hover:scale-125 transition-all duration-500 -z-10 blur-xl"
          />
        </div>
        <span class="text-3xl font-display font-black tracking-tighter text-slate-900">TopScore AI</span>
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          :class="[
            'hover:text-brand-primary transition-all py-1 relative group',
            route.path === link.href ? 'text-brand-primary' : '',
          ]"
        >
          {{ t(link.key) }}
          <span
            :class="[
              'absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-500 group-hover:w-full',
              route.path === link.href ? 'w-full' : 'w-0',
            ]"
          />
        </NuxtLink>
      </div>

      <div class="hidden sm:flex items-center gap-8">
        <a
          href="https://app.topscoreapp.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-slate-900 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary transition-all shadow-2xl shadow-slate-200 hover:shadow-brand-primary/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
          aria-label="Get started with TopScore AI"
        >
          Get Started
        </a>
      </div>

      <button
        class="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Toggle Navigation Menu"
      >
        <X v-if="isOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </div>

    <AnimatePresence>
      <Motion
        v-if="isOpen"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -10 }"
        class="absolute top-full left-0 right-0 bg-white border-b border-slate-200 px-6 py-10 space-y-6 lg:hidden shadow-2xl"
      >
        <div class="flex flex-col gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            :class="[
              'text-xl font-display font-bold',
              route.path === link.href ? 'text-brand-primary' : 'text-slate-800',
            ]"
            @click="isOpen = false"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </div>
        <div class="pt-6 border-t border-slate-100">
          <a
            href="https://app.topscoreapp.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-center block shadow-lg shadow-slate-200"
          >
            {{ t("nav.download") }}
          </a>
        </div>
      </Motion>
    </AnimatePresence>
  </nav>
</template>
