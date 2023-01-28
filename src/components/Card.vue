<template>
  <div class="card">card {{ card.id }}</div>
</template>

<script setup lang="ts">
import type { TCard } from '@/types/types';

const props = defineProps<{
  card: TCard;
}>();
</script>

<style>
.card {
  margin-bottom: 5px;
  min-width: 100px;
  min-height: 50px;
  background-color: var(--color-background-top);
}
</style>
