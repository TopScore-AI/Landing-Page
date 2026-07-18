<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Layout, ArrowRight } from "lucide-vue-next"

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 600
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>

<template>
  <AnimatePresence>
    <Motion v-if="isVisible" :initial="{ y: 100, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :exit="{ y: 100, opacity: 0 }"
      class="fixed bottom-6 left-4 right-4 z-50 sm:hidden">
      <a href="https://app.topscoreapp.ai" target="_blank" rel="noopener noreferrer"
        class="flex items-center justify-between bg-slate-900 border border-white/10 text-white p-4 rounded-3xl shadow-2xl glass-effect">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
            <Layout class="w-5 h-5 text-white" />
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-black tracking-tight">TopScore AI</span>
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Start Learning Free</span>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-brand-primary px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-wider">
          Start
          <ArrowRight class="w-3.5 h-3.5" />
        </div>
      </a>
    </Motion>
  </AnimatePresence>
</template>
