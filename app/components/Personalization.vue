<script setup lang="ts">
import { Calendar, Target, Activity, Brain } from "lucide-vue-next"
import styles from "./Personalization.module.css"

const { t } = useLocale()

const personalFeatures = [
  { icon: Calendar, idx: 0, color: "#3b82f6" },
  { icon: Target, idx: 1, color: "#10b981" },
  { icon: Activity, idx: 2, color: "#f59e0b" },
  { icon: Brain, idx: 3, color: "#8b5cf6" },
]
</script>

<template>
  <section :class="styles.wrapper" id="personalization">
    <div :class="styles.container">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="flex-1 text-center lg:text-left">
          <AnimatedSection animation="fadeUp">
            <div :class="styles.label">{{ t('personal.label') }}</div>
            <h2 :class="styles.title">{{ t('personal.title') }}</h2>
            <p :class="styles.sub">{{ t('personal.sub') }}</p>

            <div class="mt-16 space-y-12">
              <div v-for="f in personalFeatures" :key="f.idx" class="flex gap-6 items-start group">
                <div class="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <component :is="f.icon" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-900 mb-2">{{ t(`personal.${f.idx}.name`) }}</h3>
                  <p class="text-slate-500 font-medium leading-relaxed">{{ t(`personal.${f.idx}.desc`) }}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div class="flex-1 relative w-full max-w-xl">
          <AnimatedSection animation="fadeUp" delay="0.3s">
            <div class="relative aspect-square">
              <div class="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-indigo-50/50 to-brand-secondary/10 rounded-[4rem] blur-3xl -z-10" />
              <div class="absolute inset-0 border-2 border-slate-100 rounded-[4rem] bg-white/50 backdrop-blur-xl shadow-2xl shadow-slate-200/50 flex items-center justify-center p-12 overflow-hidden">
                <div class="relative w-full aspect-video bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden group">
                  <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
                  <div class="p-8 h-full flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                      <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <Brain class="w-6 h-6 text-brand-primary" />
                      </div>
                      <div class="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest">Live Analysis</div>
                    </div>
                    <div class="space-y-4">
                      <div class="h-2 w-3/4 bg-white/20 rounded-full" />
                      <div class="h-2 w-1/2 bg-white/10 rounded-full" />
                      <div class="h-2 w-2/3 bg-white/15 rounded-full" />
                    </div>
                  </div>
                </div>

                <Motion :animate="{ y: [0, -20, 0] }" :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
                  class="absolute top-10 right-10 w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-4">
                  <Target class="w-10 h-10 text-emerald-500" />
                </Motion>
                <Motion :animate="{ y: [0, 20, 0] }" :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }"
                  class="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-4">
                  <Activity class="w-10 h-10 text-brand-primary" />
                </Motion>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
</template>
