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
import { onMounted, watchEffect, computed } from 'vue';
import Column from '../components/Column.vue';
// import type { TCard } from '@/types/types';
import { useBaseStore } from '@/stores/baseStore';
import { saveLocal } from '@/services/saveLocal';
import { isEmpty } from '@/utils/index';

const baseStore = useBaseStore();

// console.log('---cards', baseStore.cards.length);

onMounted(() => {
  watchEffect(() => {
    console.log('---watchEffect', !isEmpty(baseStore.cardsByStage));
    if (!isEmpty(baseStore.cardsByStage)) {
      saveLocal({
        columns: baseStore.columns,
        projects: baseStore.projects,
        cardsByStage: baseStore.cardsByStage,
        // cardsNumber: baseStore.cardsNumber,
      });
    }
  });
});

if (isEmpty(baseStore.cardsByStage)) {
  try {
    baseStore.getData();
  } catch (err) {
    console.log('err getData', err);
  }
}

const columns = computed(() => baseStore.columns);
</script>

<style>
.board {
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
