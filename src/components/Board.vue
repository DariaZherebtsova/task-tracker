<template>
  <div class="board">
    <div
      class="column"
      v-for="item in columns"
      :key="item.id"
    >
      <Card
        class="card-list"
        v-for="item in cards"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue';
import type { TCard } from '@/types/types';

const props = defineProps<{
  cards: TCard[];
}>();

const columns = [
  {
    id: 1,
    sort: 10,
    name: 'Стадия 1',
    code: 'stage-1',
  },
  {
    id: 2,
    sort: 20,
    name: 'Стадия 2',
    code: 'stage-2',
  },
  {
    id: 3,
    sort: 30,
    name: 'Стадия 3',
    code: 'stage-3',
  },
  {
    id: 4,
    sort: 40,
    name: 'Стадия 4',
    code: 'stage-4',
  },
];
</script>

<style>
.board {
  border: 2px solid gainsboro;
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: space-between; */
}
.column {
  padding: 5px;
  min-width: 100px;
  min-height: 300px;
  background-color: var(--color-background-middle);
}
</style>
