<template>
  <div class="column">
    <div class="column__header">
      <div class="column__header-point"></div>
      <div class="column__header-text">{{ column.name }}</div>
      <div class="column__header-action">
        <button
          class="column__header-sort"
          @click="sortDown"
        >
          <IconArrowDown
            class="column__header-icon"
            :class="{ pressed: pressedDownSortBtn }"
          />
        </button>
        <button
          class="column__header-sort"
          @click="sortUp"
        >
          <IconArrowUp
            class="column__header-icon"
            :class="{ pressed: pressedUpSortBtn }"
          />
        </button>
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
      <button
        class="column-action__button"
        @click="showModal = true"
      >
        Добавить
      </button>
    </div>
    <AddCardModal
      v-if="showModal"
      @close="showModal = false"
      :data="modalData"
    >
    </AddCardModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/baseStore';
import Card from '../components/Card.vue';
import AddCardModal from '@/components/AddCardModal.vue';
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

const pressedUpSortBtn = ref(false);
const pressedDownSortBtn = ref(false);

const showModal = ref(false);

const modalData = computed(() => ({ subtitle: props.column.name }));

const log1 = (val) => {
  console.log(`drag ${props.column.code}`, val);

  if ('added' in val) {
    console.log('---card', val.added.element.id);
    baseStore.changeCardStage(props.column.code, val.added.element.id);
  }
};

const sortUp = () => {
  pressedUpSortBtn.value = !pressedUpSortBtn.value;
  if (pressedUpSortBtn.value) {
    pressedDownSortBtn.value = false;
    baseStore.sortCardsUp(props.column.code);
  }
};

const sortDown = () => {
  pressedDownSortBtn.value = !pressedDownSortBtn.value;
  if (pressedDownSortBtn.value) {
    pressedUpSortBtn.value = false;
    baseStore.sortCardsDown(props.column.code);
  }
};

const addCartToColumn = () => {};
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

.column__header-sort {
  border: none;
  background-color: var(--color-background-middle);
  padding: 0;
}

.column__header-icon.pressed path {
  fill: var(--grey-dark-4);
}

.column__header-icon path {
  fill: var(--grey-dark-3);
}

.column-action {
  display: flex;
  justify-content: center;
}

.column-action__button {
  height: 32px;
  width: 100%;
  color: var(--grey-dark-3);
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
