<script setup lang="ts">
import { ChevronRight, Home } from 'lucide-vue-next'

interface BreadcrumbItem {
  label: string
  href?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="wrapper" aria-label="Breadcrumb">
    <ol class="list">
      <li class="item">
        <NuxtLink to="/" class="link">
          <Home :size="14" />
          <span class="sr-only">Home</span>
        </NuxtLink>
      </li>
      <li v-for="(item, index) in items" :key="item.label" class="item">
        <ChevronRight :size="14" class="separator" />
        <NuxtLink v-if="item.href" :to="item.href" class="link">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="current">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.wrapper {
  margin-bottom: 24px;
  padding: 12px 0;
}

.list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 8px;
}

.item {
  display: flex;
  align-items: center;
  color: var(--text-muted);
}

.link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-muted);
  transition: color 0.2s;
  text-decoration: none;
}

.link:hover {
  color: var(--primary);
}

.separator {
  color: var(--border);
  margin: 0 4px;
}

.current {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
