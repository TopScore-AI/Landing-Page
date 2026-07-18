<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { Brain, Headphones, GraduationCap, CloudOff, Target, Sparkles, FolderOpen } from "lucide-vue-next"
import styles from "./BentoFeatures.module.css"

const { t } = useLocale()
const gridRef = ref<HTMLDivElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!gridRef.value) return
  const cards = gridRef.value.getElementsByClassName(styles.card)
  for (const card of Array.from(cards) as HTMLElement[]) {
    const rect = card.getBoundingClientRect()
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }
}

onMounted(() => window.addEventListener("mousemove", handleMouseMove))
onBeforeUnmount(() => window.removeEventListener("mousemove", handleMouseMove))
</script>

<template>
  <section :class="styles.section" id="features">
    <div :class="styles.container">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.header">
          <h2 :class="styles.title">
            Built for <span class="grad-text">Digital-First</span> Learning
          </h2>
          <p :class="styles.sub">
            TopScore AI combines localized curriculum knowledge with state-of-the-art Generative AI to provide a premium, personal tutor for every student.
          </p>
        </div>
      </AnimatedSection>

      <div :class="styles.grid" ref="gridRef">
        <!-- Big Card: AI Tutor -->
        <div :class="[styles.card, styles.colSpan2, styles.rowSpan2, 'glass']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#4f46e5' }">
              <Headphones :size="24" />
            </div>
            <h3 :class="styles.cardTitle">{{ t('features.0.title') }}</h3>
            <p :class="styles.cardDesc">{{ t('features.0.desc') }}</p>

            <div class="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group/inner">
              <div class="flex items-center gap-4 relative z-10">
                <div class="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Sparkles :size="18" />
                </div>
                <div>
                  <div class="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Live Mode</div>
                  <div class="text-sm font-bold text-slate-900 italic">"Explain the nitrogen cycle like I'm five..."</div>
                </div>
              </div>
              <div class="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>

        <!-- Medium Card: AI Voice Tutor -->
        <div :class="[styles.card, styles.colSpan2, 'glass']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-8">
              <div :class="styles.iconWrapper" :style="{ '--color': '#10b981' }">
                <Sparkles :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">Live Voice Tutor</h3>
                <p :class="styles.cardDesc">
                  Practice pronunciation and conversational skills with our low-latency AI voice engine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Small Card: Real-time Feedback -->
        <div :class="[styles.card, 'glass']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#8b5cf6' }">
              <Target :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Instant Feedback</h3>
            <p :class="styles.cardDesc">Immediate corrections for every answer.</p>
          </div>
        </div>

        <!-- Small Card: Exam Readiness -->
        <div :class="[styles.card, 'glass']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#ec4899' }">
              <GraduationCap :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Exam Ready</h3>
            <p :class="styles.cardDesc">Full KCSE & CBC alignment.</p>
          </div>
        </div>

        <!-- Wide Card: Smart Study Tools -->
        <div :class="[styles.card, styles.colSpan2, 'glass']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-6">
              <div :class="styles.iconWrapper" :style="{ '--color': '#f59e0b' }">
                <Brain :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">{{ t('features.smartTools.title') }}</h3>
                <p :class="styles.cardDesc">
                  Instantly transform PDFs and photos into interactive flashcards and summaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Wide Card: Cloud Study -->
        <div :class="[styles.card, styles.colSpan2, 'glass']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-6">
              <div :class="styles.iconWrapper" :style="{ '--color': '#0ea5e9' }">
                <FolderOpen :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">Study Vault</h3>
                <p :class="styles.cardDesc">
                  Your entire curriculum library synced across all your devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Small Card: Offline -->
        <div :class="[styles.card, 'glass']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#94a3b8' }">
              <CloudOff :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Offline Mode</h3>
            <p :class="styles.cardDesc">
              Download resources once and study anywhere without data costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
