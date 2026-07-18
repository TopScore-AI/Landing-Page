<script setup lang="ts">
import { GraduationCap, BookOpen, Clock, ArrowRight } from "lucide-vue-next"

const curricula = [
  { title: "CBC", subtitle: "Competency Based Curriculum", desc: "Personalized learning paths designed to build real-world skills and competencies.", icon: GraduationCap, color: "bg-indigo-600" },
  { title: "IGCSE", subtitle: "International Standard", desc: "Preparation for IGCSE exams with international standard resources and AI grounding.", icon: BookOpen, color: "bg-brand-primary" },
  { title: "8-4-4", subtitle: "Transition Phase", desc: "Full support for students completing the 8-4-4 cycle with comprehensive past papers.", icon: Clock, color: "bg-slate-900" },
]
</script>

<template>
  <section id="curriculum" class="py-40 bg-white relative overflow-hidden border-y border-slate-50">
    <div class="max-w-7xl mx-auto px-6 sm:px-10">
      <div class="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
        <div class="max-w-2xl">
          <Motion :initial="{ opacity: 0, scale: 0.9 }" :while-in-view="{ opacity: 1, scale: 1 }"
            :in-view-options="{ once: true }"
            class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            Curriculum Coverage
          </Motion>
          <h3 class="text-5xl md:text-7xl lg:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.95]">
            Personalized for <br > <span class="text-slate-300">every student.</span>
          </h3>
        </div>
        <p class="text-slate-500 text-xl leading-relaxed font-medium max-w-md lg:mb-4">
          Whether you're navigating the new CBC system, excelling in IGCSE, or concluding the 8-4-4 cycle, our engine adapts.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <Motion v-for="(item, i) in curricula" :key="i"
          :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }" :in-view-options="{ once: true }"
          class="group relative p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500">
          <div :class="[item.color, 'w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl shadow-current/20 group-hover:scale-110 transition-transform duration-500']">
            <component :is="item.icon" class="w-6 h-6" />
          </div>

          <div class="space-y-4">
            <span class="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase block">{{ item.subtitle }}</span>
            <h4 class="text-4xl font-display font-black text-slate-900 tracking-tight">{{ item.title }}</h4>
            <p class="text-slate-500 leading-relaxed text-base font-medium">{{ item.desc }}</p>
          </div>

          <div class="mt-12 flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
            Learn More <ArrowRight :size="14" />
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
