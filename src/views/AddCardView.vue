<template>
  <div class="mt-5 container">
    <div class="box">
      <h4 class="mb-3">Draggable 1</h4>
      <draggable
        class="draggable-list"
        :list="list1"
        item-key="id"
        group="my-group"
        @change="log1"
      >
        <template #item="{ element }">
          <div class="list-item">{{ element.id }}</div>
        </template>
      </draggable>
    </div>

    <div class="box">
      <h4 class="mb-3">Draggable 2</h4>
      <draggable
        class="draggable-list"
        :list="list2"
        item-key="id"
        group="my-group"
        @change="log2"
      >
        <template #item="{ element }">
          <div class="list-item">{{ element.id }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { computed } from 'vue';
import { useBaseStore } from '@/stores/baseStore';

const baseStore = useBaseStore();

// const list1 = [{ id: 1, name: 'Drag Me!' }];
// const list2 = [{ id: 2, name: 'Drag Me Too!' }];

const list1 = computed({
  get() {
    return baseStore.getCardByStage('stage-1');
  },
  set(value) {
    console.log('set1 value', value);
  },
});

const list2 = computed({
  get() {
    return baseStore.getCardByStage('stage-2');
  },
  set(value) {
    console.log('set2 value', value);
  },
});

const log1 = (val) => {
  console.log('---log1', val);
};

const log2 = (val) => {
  console.log('---log2', val);
};
</script>
<style scoped>
.container {
  display: flex;
}
.box {
  width: 300px;
  height: 400px;
  border: 2px solid forestgreen;
}
.draggable-list {
  width: 300px;
  height: 300px;
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>
