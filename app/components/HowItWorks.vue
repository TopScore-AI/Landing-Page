<script setup lang="ts">
import type { TranslationKey } from "~/composables/useLocale"
import styles from "./HowItWorks.module.css"

const { t } = useLocale()
const stepNums = ["1", "2", "3", "4"]
</script>

<template>
  <section :class="styles.section" id="how-it-works">
    <div :class="styles.container">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.header">
          <div :class="styles.label">{{ t("howItWorks.label") }}</div>
          <h2 :class="styles.title">{{ t("howItWorks.title") }}</h2>
          <p :class="styles.sub">
            {{ t("howItWorks.sub") }}
          </p>
        </div>
      </AnimatedSection>

      <div :class="styles.grid">
        <div v-for="(num, i) in stepNums" :key="num" :class="styles.step">
          <AnimatedSection animation="fadeUp" :delay="`${i * 0.12}s`">
            <div :class="styles.number">{{ num }}</div>
            <h3 :class="styles.stepTitle">{{ t(`howItWorks.${i}.title` as TranslationKey) }}</h3>
            <p :class="styles.stepDesc">{{ t(`howItWorks.${i}.desc` as TranslationKey) }}</p>
          </AnimatedSection>
        </div>
      </div>

      <!-- Web App Guide Section -->
      <div :class="styles.webappSection">
        <AnimatedSection animation="fadeUp">
          <div :class="styles.header" :style="{ marginTop: '5rem' }">
            <h2 :class="styles.title">{{ t("howItWorks.webapp.title") }}</h2>
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
