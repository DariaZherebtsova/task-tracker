<template>
  <div class="column">
    <div class="column__header">
      <div class="column__header-point"></div>
      <div class="column__header-text">{{ column.name }}</div>
      <div class="column__header-action">
        <IconArrowDown class="column__header-icon" />
        <IconArrowUp class="column__header-icon" />
      </div>
    </div>
    <draggable
      class="draggable-list"
      :list="list"
      item-key="id"
      group="my-group"
      @change="log1"
    >
      <template #item="{ element }">
        <Card :card="element" />
      </template>
    </draggable>
    <div class="column-action">
      Добавить
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/baseStore';
import Card from '../components/Card.vue';
import IconArrowDown from '@/assets/arrowDown.svg';
import IconArrowUp from '@/assets/arrowUp.svg';
import draggable from 'vuedraggable';
import type { TColumn } from '@/types/types';

const baseStore = useBaseStore();

const props = defineProps<{
  column: TColumn;
}>();

// onMounted(() => {
//   console.log('---onMounted', list);
// });

const { cardsByStage } = storeToRefs(baseStore);

const list = ref(cardsByStage.value[props.column.code]);

const log1 = (val) => {
  console.log(`drag ${props.column.code}`, val);

  if ('added' in val) {
    console.log('---card', val.added.element.id);
    baseStore.changeCardStage(props.column.code, val.added.element.id);
  }
};
</script>

<style>
.column {
  min-width: 320px;
  background-color: var(--color-background-middle);
  padding: 12px;
}

.column__header {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.column__header-point {
  margin-right: 8px;
  width: 4px;
  height: 4px;
  background-color: var(--grey-dark-3);
  border-radius: 50%;
}

.column__header-text {
  flex-grow: 1;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
}

.column__header-icon path {
  fill: var(--grey-dark-3);
}
</style>
