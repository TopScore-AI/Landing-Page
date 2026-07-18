<script setup lang="ts">
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

interface AccordionProps {
  class?: string
  modelValue?: string | string[]
  collapsible?: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
  collapsible: true
})

const emits = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()
</script>

<template>
  <AccordionRoot
    :class="props.class"
    :model-value="props.modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :collapsible="props.collapsible"
  >
    <slot />
  </AccordionRoot>
</template>
