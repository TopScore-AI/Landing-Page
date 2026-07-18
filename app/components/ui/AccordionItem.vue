<script setup lang="ts">
import { AccordionItem } from 'reka-ui'
import { cn } from '~/lib/utils'

interface AccordionItemProps {
  class?: string
  value: string
}

const props = defineProps<AccordionItemProps>()
</script>

<template>
  <AccordionItem
    :value="props.value"
    :class="cn('border-b', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
