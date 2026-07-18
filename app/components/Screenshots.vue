<script setup lang="ts">
import { Smartphone, BookOpen, LayoutDashboard, LogIn, Sparkles } from "lucide-vue-next"

const screenshots = [
  { id: 1, title: "Secure Login", desc: "Access your personalized portal", color: "bg-blue-600", icon: LogIn, y: 0 },
  { id: 2, title: "AI Tutor Chat", desc: "Real-time 1-on-1 tutoring", color: "bg-indigo-500", icon: Smartphone, y: 40 },
  { id: 3, title: "Smart Library", desc: "100,000+ revision resources", color: "bg-emerald-500", icon: BookOpen, y: -20 },
  { id: 4, title: "Student Dashboard", desc: "Track your progress & study streaks", color: "bg-amber-500", icon: LayoutDashboard, y: 20 },
]
</script>

<template>
  <section class="py-32 bg-slate-50 rounded-[4rem] mx-4 sm:mx-10 overflow-hidden relative">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -z-10" />

    <div class="max-w-7xl mx-auto px-4 sm:px-10">
      <div class="text-center max-w-4xl mx-auto mb-24">
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :while-in-view="{ opacity: 1, scale: 1 }" :in-view-options="{ once: true }"
          class="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
          <Sparkles :size="12" />
          Visual Showcase
        </Motion>
        <h3 class="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
          A premium interface <br class="hidden md:block" > for elite scholars.
        </h3>
        <p class="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto text-balance">
          Every screen is meticulously designed to minimize distraction and maximize cognitive focus for the best learning experience.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <Motion v-for="(s, i) in screenshots" :key="s.id"
          :initial="{ opacity: 0, y: 60 }" :while-in-view="{ opacity: 1, y: s.y }"
          :transition="{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }"
          :in-view-options="{ once: true, margin: '-100px' }" class="group">
          <Motion :while-hover="{ y: -20 }" :transition="{ type: 'spring', stiffness: 200 }"
            class="relative aspect-[9/19] bg-slate-950 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 mb-10 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-slate-950/40 z-10 pointer-events-none" />
            <div class="bg-slate-900 rounded-[2.5rem] h-full w-full overflow-hidden relative border border-white/5">
              <img :src="`/screenshots/screen-${i}.png`" :alt="s.title"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                :loading="i < 2 ? 'eager' : 'lazy'" >
            </div>
          </Motion>
          <div class="space-y-4 px-4">
            <div class="flex items-center gap-4">
              <div :class="[s.color, 'w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-current/30 group-hover:scale-110 transition-transform duration-500']">
                <component :is="s.icon" class="w-6 h-6" />
              </div>
              <h4 class="text-xl font-display font-black text-slate-900 tracking-tight">{{ s.title }}</h4>
            </div>
            <p class="text-base text-slate-500 font-medium leading-relaxed">{{ s.desc }}</p>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
