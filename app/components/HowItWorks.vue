<script setup lang="ts">
import type { TranslationKey } from "~/composables/useLocale"
import styles from "./HowItWorks.module.css"

const { t } = useLocale()
const stepNums = ["1", "2", "3", "4"]

const steps = [
  {
    title: "Download & Sign Up",
    desc: "Get the app from Google Play Store or access via web browser. Create your account in under 2 minutes with your email or phone number. Select your curriculum (CBC, 8-4-4, or IGCSE) to personalize your learning experience.",
    details: ["Free 7-day premium trial", "No credit card required", "Works offline after download"]
  },
  {
    title: "Choose Your Subject",
    desc: "Browse thousands of KCSE past papers, CBC assessments, and IGCSE materials. Select from Mathematics, Sciences, Languages, Humanities, and more. Our AI tutor is trained on the exact curriculum you're studying.",
    details: ["All KCSE subjects covered", "CBC Grade 1-12 resources", "IGCSE Cambridge materials"]
  },
  {
    title: "Start Learning with AI Tutor",
    desc: "Ask questions using text, voice, or by showing your screen. Our Socratic AI tutor guides you to discover answers through questions, not just giving solutions. Get real educational diagrams and explanations from verified curriculum sources.",
    details: ["Voice & screen sharing available", "Real curriculum diagrams", "24/7 availability"]
  },
  {
    title: "Track & Improve",
    desc: "Monitor your progress with personalized analytics. The AI remembers your learning history and adapts to your weak areas. Practice with flashcards, take quizzes, and compete with friends. Watch your grades improve over time.",
    details: ["Personalized progress tracking", "Spaced repetition flashcards", "Multiplayer quizzes"]
  }
]
</script>

<template>
  <section :class="styles.section" id="how-it-works">
    <div :class="styles.container">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.header">
          <div :class="styles.label">How It Works</div>
          <h2 :class="styles.title">Start Learning in Minutes</h2>
          <p :class="styles.sub">
            Get started with TopScore AI in four simple steps. From download to improved grades, we make the journey seamless and effective.
          </p>
        </div>
      </AnimatedSection>

      <div :class="styles.grid">
        <div v-for="(step, i) in steps" :key="i" :class="styles.step">
          <AnimatedSection animation="fadeUp" :delay="`${i * 0.12}s`">
            <div :class="styles.number">{{ i + 1 }}</div>
            <h3 :class="styles.stepTitle">{{ step.title }}</h3>
            <p :class="styles.stepDesc">{{ step.desc }}</p>
            <div class="mt-4 space-y-2">
              <div v-for="detail in step.details" :key="detail" class="flex items-center gap-2 text-sm text-slate-600">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>{{ detail }}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <!-- Web App Guide Section -->
      <div :class="styles.webappSection">
        <AnimatedSection animation="fadeUp">
          <div :class="styles.header" :style="{ marginTop: '5rem' }">
            <div :class="styles.label">Web App Access</div>
            <h2 :class="styles.title">Use TopScore AI on Any Device</h2>
            <p :class="styles.sub">
              No smartphone? No problem. Access all features through your web browser with the same powerful AI tutoring experience.
            </p>
          </div>
        </AnimatedSection>

        <div :class="styles.grid">
          <div v-for="idx in [0, 1, 2, 3]" :key="idx" :class="styles.step">
            <AnimatedSection animation="fadeUp" :delay="`${idx * 0.12}s`">
              <div :class="styles.number" :style="{ fontSize: '1.2rem', opacity: 0.7 }">{{ idx + 1 }}</div>
              <h3 :class="styles.stepTitle">{{ t(`howItWorks.webapp.${idx}.title` as TranslationKey) }}</h3>
              <p :class="styles.stepDesc">{{ t(`howItWorks.webapp.${idx}.desc` as TranslationKey) }}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
