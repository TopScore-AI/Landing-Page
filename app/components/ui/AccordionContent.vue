<script setup lang="ts">
import { AccordionContent } from 'reka-ui'
import { cn } from '~/lib/utils'

interface AccordionContentProps {
  class?: string
}

const props = defineProps<AccordionContentProps>()
</script>

<template>
  <AccordionContent
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
