<script setup lang="ts">
import { DialogDescription } from 'reka-ui'
import { cn } from '~/lib/utils'

interface SheetDescriptionProps {
  class?: string
}

const props = defineProps<SheetDescriptionProps>()
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
