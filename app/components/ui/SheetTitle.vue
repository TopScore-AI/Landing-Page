<script setup lang="ts">
import { DialogTitle } from 'reka-ui'
import { cn } from '~/lib/utils'

interface SheetTitleProps {
  class?: string
}

const props = defineProps<SheetTitleProps>()
</script>

<template>
  <DialogTitle
    :class="cn('text-lg font-semibold text-foreground', props.class)"
  >
    <slot />
  </DialogTitle>
</template>
