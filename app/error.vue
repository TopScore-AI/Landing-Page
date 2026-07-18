<script setup lang="ts">
import { Home, ArrowLeft } from 'lucide-vue-next'

const props = defineProps({
  error: {
    type: Object as PropType<{ statusCode?: number; statusMessage?: string; message?: string }>,
    default: () => ({}),
  },
})

const statusCode = computed(() => props.error?.statusCode || 500)
const statusMessage = computed(() => props.error?.statusMessage || 'Something went wrong')

const errorMessages: Record<number, { title: string; description: string }> = {
  404: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
  },
  500: {
    title: 'Server Error',
    description: 'Something went wrong on our end. Please try again later.',
  },
}

const errorInfo = computed(() => errorMessages[statusCode.value] || errorMessages[500])

useHead({
  title: `${statusCode.value} - ${errorInfo.value.title} | TopScore AI`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">
      <div class="mb-8">
        <h1 class="text-[180px] md:text-[220px] font-display font-black leading-none tracking-tighter bg-gradient-to-r from-brand-primary via-indigo-500 to-brand-secondary bg-clip-text text-transparent">
          {{ statusCode }}
        </h1>
      </div>

      <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
        {{ errorInfo.title }}
      </h2>

      <p class="text-lg text-slate-500 mb-12 max-w-md mx-auto">
        {{ errorInfo.description }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/"
          class="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-primary transition-all shadow-2xl shadow-slate-200 hover:shadow-brand-primary/20 hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <Home class="w-4 h-4" />
          Back to Home
        </NuxtLink>

        <button
          @click="$router.back()"
          class="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft class="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>
