<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { Brain, Headphones, GraduationCap, CloudOff, Target, Sparkles, FolderOpen } from "lucide-vue-next"
import { useTiltEffect } from "~/composables/useScrollAnimation"
import styles from "./BentoFeatures.module.css"

const { t } = useLocale()
const gridRef = ref<HTMLDivElement | null>(null)
const cardRefs = ref<(HTMLElement | null)[]>([])

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
            Learn Through <span class="grad-text">Visual Discovery</span>
          </h2>
          <p :class="styles.sub">
            Not a ChatGPT wrapper. Every answer is backed by real curriculum diagrams, verified educational resources, and the Socratic method that builds true understanding.
          </p>
        </div>
      </AnimatedSection>

      <div :class="styles.grid" ref="gridRef">
        <!-- Big Card: Socratic AI Tutor -->
        <div 
          :ref="(el) => { if (el) cardRefs[0] = el as HTMLElement }"
          :class="[styles.card, styles.colSpan2, styles.rowSpan2, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#4f46e5' }">
              <Headphones :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Socratic AI Tutor</h3>
            <p :class="styles.cardDesc">Our AI doesn't just give answers. It guides you to discover them through questions, building lasting understanding and critical thinking skills.</p>

            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                <div>
                  <div class="font-bold text-slate-900">Guided Discovery</div>
                  <div class="text-sm text-slate-500">AI asks questions to help you find answers yourself</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                <div>
                  <div class="font-bold text-slate-900">Real Curriculum Diagrams</div>
                  <div class="text-sm text-slate-500">Educational visuals, not AI-generated images</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                <div>
                  <div class="font-bold text-slate-900">24/7 Availability</div>
                  <div class="text-sm text-slate-500">Get help anytime, even late at night before exams</div>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group/inner">
              <div class="flex items-center gap-4 relative z-10">
                <div class="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Sparkles :size="18" />
                </div>
                <div>
                  <div class="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Socratic Method</div>
                  <div class="text-sm font-bold text-slate-900 italic">"What do you think happens when..."</div>
                </div>
              </div>
              <div class="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>

        <!-- Medium Card: Voice & Screen Sharing -->
        <div 
          :ref="(el) => { if (el) cardRefs[1] = el as HTMLElement }"
          :class="[styles.card, styles.colSpan2, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-8">
              <div :class="styles.iconWrapper" :style="{ '--color': '#10b981' }">
                <Sparkles :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">Voice & Screen Sharing</h3>
                <p :class="styles.cardDesc">
                  Real-time video calls where your AI tutor sees your screen and camera for truly personalized help with homework and exam preparation.
                </p>
                <div class="mt-4 space-y-2 text-sm text-slate-600">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Show your screen for step-by-step guidance</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Camera input for handwritten problems</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Low-latency voice conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Small Card: Real Educational Diagrams -->
        <div 
          :ref="(el) => { if (el) cardRefs[2] = el as HTMLElement }"
          :class="[styles.card, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#8b5cf6' }">
              <Target :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Real Diagrams</h3>
            <p :class="styles.cardDesc">Curriculum-backed visuals from official textbooks, not AI-generated images that may be incorrect.</p>
            <div class="mt-3 text-xs text-slate-500">
              <span class="font-bold">Includes:</span> Biology diagrams, Chemistry structures, Geography maps
            </div>
          </div>
        </div>

        <!-- Small Card: Long-term Memory -->
        <div 
          :ref="(el) => { if (el) cardRefs[3] = el as HTMLElement }"
          :class="[styles.card, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#ec4899' }">
              <GraduationCap :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Personalized Learning</h3>
            <p :class="styles.cardDesc">AI remembers your learning history, weak areas, and progress to provide truly personalized tutoring sessions.</p>
            <div class="mt-3 text-xs text-slate-500">
              <span class="font-bold">Tracks:</span> Progress, strengths, improvement areas
            </div>
          </div>
        </div>

        <!-- Wide Card: Smart PDF Viewer -->
        <div 
          :ref="(el) => { if (el) cardRefs[4] = el as HTMLElement }"
          :class="[styles.card, styles.colSpan2, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-6">
              <div :class="styles.iconWrapper" :style="{ '--color': '#f59e0b' }">
                <Brain :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">Smart PDF Viewer</h3>
                <p :class="styles.cardDesc">
                  Upload your textbooks and notes. AI analyzes content, creates summaries, generates flashcards, and answers questions about specific pages.
                </p>
                <div class="mt-3 text-xs text-slate-600">
                  <span class="font-bold">Features:</span> Auto-summarization, Q&A, flashcard generation, chapter breakdown
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Wide Card: Thousands of Resources -->
        <div 
          :ref="(el) => { if (el) cardRefs[5] = el as HTMLElement }"
          :class="[styles.card, styles.colSpan2, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div class="flex items-start gap-6">
              <div :class="styles.iconWrapper" :style="{ '--color': '#0ea5e9' }">
                <FolderOpen :size="24" />
              </div>
              <div>
                <h3 :class="styles.cardTitle">Verified Resources</h3>
                <p :class="styles.cardDesc">
                  Access thousands of curriculum-aligned past papers, notes, and study materials with real-time Google search for current information.
                </p>
                <div class="mt-3 text-xs text-slate-600">
                  <span class="font-bold">Includes:</span> KCSE past papers, CBC assessments, IGCSE materials, current events
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Small Card: Multiplayer Quizzes -->
        <div 
          :ref="(el) => { if (el) cardRefs[6] = el as HTMLElement }"
          :class="[styles.card, 'glass', 'hover-lift', 'cursor-pointer']">
          <div :class="styles.cardContent">
            <div :class="styles.iconWrapper" :style="{ '--color': '#94a3b8' }">
              <CloudOff :size="24" />
            </div>
            <h3 :class="styles.cardTitle">Competitive Learning</h3>
            <p :class="styles.cardDesc">
              Challenge friends in real-time multiplayer quizzes or practice solo with AI-generated flashcards using spaced repetition.
            </p>
            <div class="mt-3 text-xs text-slate-500">
              <span class="font-bold">Modes:</span> Solo practice, friend challenges, leaderboards
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
