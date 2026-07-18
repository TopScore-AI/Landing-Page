<script setup lang="ts">
import Skeleton from './Skeleton.vue'
</script>

<template>
  <div class="p-8 rounded-[2.5rem] border border-slate-100 bg-white space-y-6">
    <Skeleton class="w-14 h-14 rounded-2xl" />
    <div class="space-y-3">
      <Skeleton class="h-6 w-3/4 rounded-lg" />
      <Skeleton class="h-4 w-full rounded-lg" />
      <Skeleton class="h-4 w-1/2 rounded-lg" />
    </div>
  </div>
</template>
