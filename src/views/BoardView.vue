<template>
  <div v-if="!isEmpty(baseStore.cardsByStage)">
    <Transition>
      <div class="board-view">
        <BoardHeader />
        <div class="board">
          <Column
            class="column"
            v-for="column in columns"
            :key="column.id"
            :column="column"
          />
        </div>
      </div>
    </Transition>
  </div>
  <div v-else>
    <Loding />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect, computed } from 'vue';
import BoardHeader from '../components/BoardHeader.vue';
import Column from '@/components/Column.vue';
import Loding from '@/components/Loading.vue';
import { useBaseStore } from '@/stores/baseStore';
import { saveLocal } from '@/services/saveLocal';
import { isEmpty } from '@/utils/index';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const baseStore = useBaseStore();

onMounted(() => {
  watchEffect(() => {
    if (!isEmpty(baseStore.cardsByStage)) {
      saveLocal({
        columns: baseStore.columns,
        projects: baseStore.projects,
        cardsByStage: baseStore.cardsByStage,
      });
    }
  });
});

if (isEmpty(baseStore.cardsByStage)) {
  try {
    baseStore.getData();
  } catch (err) {
    console.log('err getData', err);
    toast.error('Ошибка загрузки данных');
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

.v-enter-active {
  transition: opacity 1s ease;
}
</style>
