<script setup lang="ts">
import styles from "./CtaBanner.module.css"

const { t } = useLocale()
</script>

<template>
  <section id="download" :class="styles.wrapper">
    <div :class="styles.inner">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.card">
          <div :class="styles.cardGlow" />
          <div :class="styles.label">{{ t('cta.label') }}</div>
          <h2 :class="styles.title">
            {{ t('cta.title') }} <br >
            <span :class="styles.gradText">{{ t('cta.titleGrad') }}</span>
          </h2>
          <p :class="styles.sub">{{ t('cta.sub') }}</p>

          <div :class="styles.buttons">
            <a href="https://play.google.com/store/apps/details?id=com.topscoreapp.ai" target="_blank" rel="noopener noreferrer"
              :class="styles.storeBtn" aria-label="Get it on Google Play">
              <img src="/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" width="200" height="59" :class="styles.badge" >
            </a>
            <div class="relative group">
              <div class="absolute -inset-1 bg-brand-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <span class="relative px-4 py-2 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/20">
                iOS Coming Soon
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
