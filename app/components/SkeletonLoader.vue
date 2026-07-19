<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  class?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '1rem',
  class: '',
  variant: 'rectangular',
  count: 1,
})

const variantClasses = {
  text: 'h-4 rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-sm',
  rounded: 'rounded-lg',
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      v-for="i in count"
      :key="i"
      class="skeleton"
      :class="[variantClasses[variant], props.class]"
      :style="{ width, height }"
    />
  </div>
</template>
