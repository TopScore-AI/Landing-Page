<script setup lang="ts">
interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="['animate-pulse bg-slate-200 rounded', props.class]" />
</template>
