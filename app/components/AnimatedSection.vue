<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import styles from "./AnimatedSection.module.css"

type Animation = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight"
type HtmlTag = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "li" | "span"

const props = withDefaults(
  defineProps<{
    animation?: Animation
    delay?: string
    class?: string
    tag?: HtmlTag
  }>(),
  { animation: "fadeUp", delay: "0s", class: "", tag: "div" },
)

const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && el.value) {
        el.value.classList.add(styles.visible)
        observer?.unobserve(el.value)
      }
    },
    { threshold: 0.12 },
  )
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())

const cls = [styles.animated, styles[props.animation], props.class].filter(Boolean).join(" ")
</script>

<template>
  <component :is="tag" ref="el" :class="cls" :style="{ transitionDelay: delay }">
    <slot />
  </component>
</template>
