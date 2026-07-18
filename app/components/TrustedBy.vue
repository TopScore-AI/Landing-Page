<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue'

const metrics = [
  { value: '100K+', label: 'Learning Resources' },
  { value: '24/7', label: 'AI Tutor Access' },
  { value: '3', label: 'Curricula Support' },
  { value: '100%', label: 'Kenyan Made' },
]

const curricula = ['CBC (Early Years - Grade 12)', '8-4-4 (Form 1 - Form 4)', 'Cambridge IGCSE']
</script>

<template>
  <section class="bg-slate-50 py-16 mx-4 sm:mx-10 rounded-[3rem] border border-slate-100 mt-10">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <AnimatedSection animation="fadeUp">
        <p class="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-12">
          Trusted by students across Kenya
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay="0.1s">
        <div class="flex flex-wrap justify-center gap-4 mb-20">
          <span
            v-for="c in curricula"
            :key="c"
            class="px-6 py-3 bg-white border border-slate-100 rounded-full text-xs font-bold text-slate-600 shadow-sm hover:border-brand-primary/30 hover:shadow-md transition-all cursor-default"
          >
            {{ c }}
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay="0.15s">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div v-for="m in metrics" :key="m.label" class="flex flex-col gap-2">
            <strong class="text-4xl md:text-5xl font-display font-black text-brand-primary tracking-tight">
              {{ m.value }}
            </strong>
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">
              {{ m.label }}
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
