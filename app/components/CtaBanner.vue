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
            <a href="#" target="_blank" rel="noopener noreferrer" :class="styles.storeBtn" aria-label="Download on the App Store">
              <img src="/app-store-badge.svg" alt="Download on the App Store" width="200" height="59" :class="styles.badge" >
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
