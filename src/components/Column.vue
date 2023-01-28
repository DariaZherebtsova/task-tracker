<template>
  <draggable
    class="draggable-list"
    :list="list"
    item-key="id"
    group="my-group"
    @change="log1"
  >
    <template #item="{ element }">
      <div class="list-item">{{ element.id }}</div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/baseStore';
import Card from '../components/Card.vue';
import draggable from 'vuedraggable';

const baseStore = useBaseStore();

const props = defineProps<{
  stage: string;
}>();

onMounted(() => {
  console.log('---onMounted', list);
});

const { cardsByStage } = storeToRefs(baseStore);

const list = ref(cardsByStage.value[props.stage]);

const log1 = (val) => {
  console.log('---log1', val);
};
</script>

<style lang=""></style>
