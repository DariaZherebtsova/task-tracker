<template>
  <div
    class="board"
    v-if="baseStore.cards.length"
  >
    <Column
      class="column"
      v-for="column in columns"
      :key="column.id"
      :stage="column.code"
    />
  </div>
  <div v-else>Loading</div>
  <draggable
    v-model="columns"
    item-key="id"
  >
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import Column from '../components/Column.vue';
// import type { TCard } from '@/types/types';
import { useBaseStore } from '@/stores/baseStore';
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable';

const baseStore = useBaseStore();

console.log('---cards', baseStore.cards.length);

// const { getCardByStage } = storeToRefs(baseStore);

// const cardsByStage = (stage: string) => baseStore.getCardByStage(stage);

if (!baseStore.cards.length) {
  try {
    baseStore.getCards().then(() => {
      console.log('---cards stage-3', baseStore.getCardByStage('stage-3'));
    });
  } catch (err) {
    console.log('err getCards', err);
  }
}

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
