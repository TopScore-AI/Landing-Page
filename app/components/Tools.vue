<script setup lang="ts">
import type { TranslationKey } from "~/composables/useLocale"
import styles from "./Tools.module.css"

const { t } = useLocale()

const toolMeta: { icon: string; idx: number }[] = [
  { icon: "📝", idx: 0 }, // Quiz
  { icon: "📈", idx: 1 }, // Graphs
  { icon: "🗺️", idx: 2 }, // Flow charts
  { icon: "🖼️", idx: 3 }, // Image search
  { icon: "📷", idx: 5 }, // Scanner
  { icon: "🃏", idx: 7 }, // Flashcards
  { icon: "⚗️", idx: 9 }, // Science Lab
  { icon: "🔍", idx: 10 }, // Search
  { icon: "📖", idx: 11 }, // PDF
]
</script>

<template>
  <section id="tools" :class="styles.wrapper">
    <div :class="styles.section">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.label">{{ t("tools.label") }}</div>
        <h2 :class="styles.title">{{ t("tools.title") }}<br >{{ t("tools.titleBr") }}</h2>
        <p :class="styles.sub">
          {{ t("tools.sub") }}
        </p>
      </AnimatedSection>

      <div :class="styles.strip">
        <div v-for="(tm, i) in toolMeta" :key="tm.idx" class="h-full">
          <AnimatedSection animation="fadeUp" :delay="`${i * 0.06}s`" class="h-full">
            <div :class="styles.item">
              <div :class="styles.icon">{{ tm.icon }}</div>
              <h3 :style="{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }">
                {{ t(`tools.${tm.idx}.name` as TranslationKey) }}
              </h3>
              <p>{{ t(`tools.${tm.idx}.desc` as TranslationKey) }}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
</template>
