<script setup lang="ts">
import { Mic, Eye, Zap, Scan, Radio } from "lucide-vue-next"
import styles from "./ActiveVoiceShowcase.module.css"

const { t } = useLocale()

const features = [
  { icon: Eye, key: "multimodalShowcase.features.0" as const, color: "#3b82f6" },
  { icon: Zap, key: "multimodalShowcase.features.1" as const, color: "#f59e0b" },
  { icon: Mic, key: "multimodalShowcase.features.2" as const, color: "#10b981" },
]
</script>

<template>
  <section :class="styles.section" id="multimodal">
    <div :class="styles.container">
      <AnimatedSection animation="fadeUp">
        <div :class="styles.header">
          <div :class="styles.label">
            <Radio :size="14" :class="styles.liveIcon" />
            {{ t("multimodalShowcase.label") }}
          </div>
          <h2 :class="styles.title">{{ t("multimodalShowcase.title") }}</h2>
          <p :class="styles.sub">{{ t("multimodalShowcase.sub") }}</p>
        </div>
      </AnimatedSection>

      <div :class="styles.grid">
        <div :class="styles.visualSide">
          <AnimatedSection animation="fadeUp" delay="0.2s">
            <div :class="styles.visualContainer">
              <div :class="styles.glow" />

              <!-- Visual Intelligence Sphere -->
              <div :class="styles.sightSphere">
                <div :class="styles.scannerLine" />
                <Scan :class="styles.innerScanIcon" :size="48" />
                <div :class="styles.particle" :style="{ '--top': '20%', '--left': '30%', '--delay': '0s' }" />
                <div :class="styles.particle" :style="{ '--top': '60%', '--left': '75%', '--delay': '1.5s' }" />
                <div :class="styles.particle" :style="{ '--top': '80%', '--left': '20%', '--delay': '0.8s' }" />
              </div>

              <!-- Audio Waveforms -->
              <div :class="styles.waveWrapper">
                <div
                  v-for="i in 24"
                  :key="i"
                  :class="styles.waveBar"
                  :style="{
                    '--delay': `${(i - 1) * 0.05}s`,
                    '--height': `${15 + Math.sin((i - 1) * 0.5) * 40 + ((i - 1) % 3) * 10}%`,
                  }"
                />
              </div>

              <div :class="styles.status">
                <div :class="styles.pulse" />
                <span>TopScore Real-Time™ Active</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div :class="styles.textSide">
          <AnimatedSection
            v-for="(f, i) in features"
            :key="f.key"
            animation="fadeUp"
            :delay="`${0.3 + i * 0.1}s`"
          >
            <div :class="styles.item">
              <div :class="styles.iconWrapper" :style="{ '--color': f.color }">
                <component :is="f.icon" />
              </div>
              <div :class="styles.itemContent">
                <h3 :class="styles.itemName">{{ t(`${f.key}.name` as any) }}</h3>
                <p :class="styles.itemDesc">{{ t(`${f.key}.desc` as any) }}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
</template>
