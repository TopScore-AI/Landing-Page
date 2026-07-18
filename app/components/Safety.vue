<script setup lang="ts">
import { Shield, Lock, BookOpen, Users } from "lucide-vue-next"
import styles from "./Safety.module.css"

const { t } = useLocale()

const safetyFeatures = [
  { icon: Shield, idx: 0 },
  { icon: Lock, idx: 1 },
  { icon: BookOpen, idx: 2 },
  { icon: Users, idx: 3 },
]
</script>

<template>
  <section :class="styles.wrapper" id="safety">
    <div :class="styles.section">
      <div class="flex flex-col lg:flex-row gap-20 items-center">
        <div class="lg:w-1/3">
          <AnimatedSection animation="fadeUp">
            <div :class="styles.label">{{ t('safety.label') }}</div>
            <h2 class="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.95] mb-8">{{ t('safety.title') }}</h2>
            <p class="text-slate-500 text-xl font-medium leading-relaxed">{{ t('safety.sub') }}</p>
          </AnimatedSection>
        </div>

        <div class="lg:w-2/3 grid sm:grid-cols-2 gap-6">
          <AnimatedSection v-for="(f, i) in safetyFeatures" :key="i" animation="fadeUp" :delay="`${i * 0.1}s`">
            <div class="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group">
              <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <component :is="f.icon" :size="24" />
              </div>
              <h3 class="text-2xl font-display font-black text-slate-900 tracking-tight mb-4">{{ t(`safety.${f.idx}.title`) }}</h3>
              <p class="text-slate-500 font-medium leading-relaxed">{{ t(`safety.${f.idx}.desc`) }}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
</template>
