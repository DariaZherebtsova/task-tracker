<template>
  <div
    class="board"
    v-if="!isEmpty(baseStore.cardsByStage)"
  >
    <Column
      class="column"
      v-for="column in columns"
      :key="column.id"
      :column="column"
    />
  </div>
  <div v-else>---Loading---</div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';
import Column from '../components/Column.vue';
// import type { TCard } from '@/types/types';
import { useBaseStore } from '@/stores/baseStore';
import { saveLocal } from '@/services/saveLocal';
import { isEmpty } from '@/utils/index';

const baseStore = useBaseStore();

console.log('---cards', baseStore.cards.length);

onMounted(() => {
  watchEffect(() => {
    console.log('---watchEffect', Object.keys(baseStore.cardsByStage).length);
    if (Object.keys(baseStore.cardsByStage).length) {
      saveLocal({
        columns: baseStore.columns,
        project: baseStore.progects,
        cardsByStage: baseStore.cardsByStage,
      });
    }
  });
});

if (!baseStore.cards.length) {
  try {
    baseStore.getData();
  } catch (err) {
    console.log('err getData', err);
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
  {
    id: 5,
    sort: 30,
    name: 'Стадия 3',
    code: 'stage-3',
  },
  {
    id: 6,
    sort: 40,
    name: 'Стадия 4',
    code: 'stage-4',
  },
];
</script>

<style>
.board {
  margin: 0 20px;
  border: 2px solid gainsboro;
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: space-between; */
}
/* .column {
  padding: 5px;
  min-width: 100px;
  min-height: 300px;
  background-color: var(--color-background-middle);
} */
</style>
