<script setup lang="ts">
interface Props {
  text: string
  delay?: number
  duration?: number
  stagger?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 50,
  stagger: 30,
})

const letters = computed(() => props.text.split(''))
const isVisible = ref(false)

const elementRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!elementRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )

  observer.observe(elementRef.value)
})
</script>

<template>
  <span ref="elementRef" class="inline-block">
    <span
      v-for="(letter, index) in letters"
      :key="index"
      class="inline-block transition-all duration-300"
      :class="[
        letter === ' ' ? 'w-2' : '',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
      :style="{
        transitionDelay: isVisible ? `${delay + index * stagger}ms` : '0ms'
      }"
    >
      {{ letter }}
    </span>
  </span>
</template>
