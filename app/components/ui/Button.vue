<script setup lang="ts">
import { Primitive } from "reka-ui"
import { cn } from "~/lib/utils"
import { buttonVariants, type ButtonVariants } from "./button.utils"

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
    as?: string
    asChild?: boolean
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    class?: string
  }>(),
  { as: "button", type: "button" },
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
