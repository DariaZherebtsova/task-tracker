<template>
  <draggable
    class="draggable-list tt-column"
    :list="list"
    item-key="id"
    group="my-group"
    @change="log1"
  >
    <template #item="{ element }">
      <Card :card="element" />
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/baseStore';
import Card from '../components/Card.vue';
import draggable from 'vuedraggable';

const baseStore = useBaseStore();

const props = defineProps<{
  stage: string;
}>();

// onMounted(() => {
//   console.log('---onMounted', list);
// });

const { cardsByStage } = storeToRefs(baseStore);

const list = ref(cardsByStage.value[props.stage]);

const log1 = (val) => {
  console.log(`drag ${props.stage}`, val);

  if ('added' in val) {
    console.log('---card', val.added.element.id);
    baseStore.changeCardStage(props.stage, val.added.element.id);
  }
};
</script>

<style>
.tt-column {
  min-width: 320px;
  background-color: var(--color-background-middle);
  padding: 12px;
}
</style>
