<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '~/composables/useLocale'
import AnimatedSection from './AnimatedSection.vue'
import { Play } from 'lucide-vue-next'

// Replace this with the actual TopScore AI demo video ID when available
const YOUTUBE_VIDEO_ID = ''

const { t } = useLocale()
const playing = ref(false)

// Don't render the section at all if no video ID is set
if (!YOUTUBE_VIDEO_ID) {
  // Return early to prevent rendering
}
</script>

<template>
  <section v-if="YOUTUBE_VIDEO_ID" id="demo" class="wrapper">
    <div class="section">
      <AnimatedSection animation="fadeUp">
        <div class="label">{{ t('video.label') }}</div>
        <h2 class="title">{{ t('video.title') }}</h2>
        <p class="sub">{{ t('video.sub') }}</p>
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay="0.2s">
        <div class="videoWrap">
          <iframe
            v-if="playing"
            :src="`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1`"
            :title="t('video.title')"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            class="iframe"
          />
          <button
            v-else
            class="thumbnail"
            @click="playing = true"
            aria-label="Play video"
          >
            <img
              :src="`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`"
              :alt="t('video.title')"
              class="thumbImg"
            />
            <div class="playBtn">
              <Play class="playIcon" />
            </div>
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  padding: 100px 24px;
  background: var(--bg-subtle);
  border-top: 1px solid var(--border);
}

.section {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.label {
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--primary);
  background: rgba(30, 58, 138, 0.2);
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 900;
  margin-bottom: 18px;
  line-height: 1.15;
}

.sub {
  font-size: 17px;
  color: var(--text-muted);
  margin-bottom: 48px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.videoWrap {
  position: relative;
  padding-bottom: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--border);
}

.iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.thumbnail {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--bg);
}

.thumbImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.3s;
}

.thumbnail:hover .thumbImg {
  opacity: 0.7;
}

.playBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: var(--gradient-brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(30, 58, 138, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}

.thumbnail:hover .playBtn {
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 12px 40px rgba(30, 58, 138, 0.5);
}

.playIcon {
  width: 32px;
  height: 32px;
  color: #fff;
  margin-left: 4px;
}
</style>
