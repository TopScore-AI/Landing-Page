<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { ChevronUp } from "lucide-vue-next"
import styles from "./BackToTop.module.css"

const isVisible = ref(false)

function toggleVisibility() {
  isVisible.value = window.scrollY > 500
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", toggleVisibility))
onBeforeUnmount(() => window.removeEventListener("scroll", toggleVisibility))
</script>

<template>
  <AnimatePresence>
    <Motion v-if="isVisible" as="button" :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.5 }" :class="styles.button" aria-label="Back to Top" @click="scrollToTop">
      <ChevronUp :size="24" />
    </Motion>
  </AnimatePresence>
</template>
