<script setup lang="ts">
import { useScrollAnimation } from "~/composables/useScrollAnimation"

interface Props {
  threshold?: number
  rootMargin?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'
  delay?: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.1,
  rootMargin: '0px',
  animation: 'fade-up',
  delay: 0,
  duration: 600,
})

const { isVisible, elementRef } = useScrollAnimation(props.threshold, props.rootMargin)

const animationClass = computed(() => {
  const animations = {
    'fade-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'scale': 'animate-scale-in',
  }
  return animations[props.animation]
})

const style = computed(() => ({
  opacity: isVisible.value ? '1' : '0',
  animationDelay: `${props.delay}ms`,
  animationDuration: `${props.duration}ms`,
}))
</script>

<template>
  <div
    ref="elementRef"
    :class="[animationClass, { 'opacity-0': !isVisible }]"
    :style="style"
  >
    <slot />
  </div>
</template>
