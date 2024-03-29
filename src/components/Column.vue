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
          <SvgIcon
            icon="arrowDown"
            :class="[
              'column__header-icon',
              { 'column__header-icon--pressed': pressedDownSortBtn },
            ]"
          />
        </button>
        <button
          class="column__header-sort"
          @click="sortUp"
        >
          <SvgIcon
            icon="arrowUp"
            :class="[
              'column__header-icon',
              { 'column__header-icon--pressed': pressedUpSortBtn },
            ]"
          />
        </button>
      </div>
    </div>
    <draggable
      class="draggable-list"
      :list="list"
      item-key="id"
      group="my-group"
      @change="onDrag"
    >
      <template #item="{ element }">
        <Card
          :card="element"
          :stage-name="column.name"
        />
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
    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <AddCard
        :data="modalData"
        :edit="false"
        :from-column="true"
        @close="showModal = false"
      ></AddCard>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBaseStore } from '@/stores/baseStore';
import Card from '../components/Card.vue';
import AddCard from '@/components/AddCard.vue';
import Modal from '@/components/common/Modal.vue';
import IconArrowDown from '@/assets/icons/arrowDown.svg';
import IconArrowUp from '@/assets/icons/arrowUp.svg';
import draggable from 'vuedraggable';
import type { TColumn } from '@/types/types';

const baseStore = useBaseStore();

const props = defineProps<{
  column: TColumn;
}>();

const list = computed(() => baseStore.filtredCards[props.column.code]);

const pressedUpSortBtn = ref(false);
const pressedDownSortBtn = ref(false);

const showModal = ref(false);

const modalData = computed(() => ({
  card: {
    id: '',
    title: '',
    stage: props.column.code,
    project: false,
    score: -1,
  },
  subtitle: props.column.name,
  stage: props.column.code,
}));

const onDrag = (val) => {
  if ('added' in val) {
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
</script>

<style>
.column {
  min-width: 320px;
  height: fit-content;
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

.column__header-icon path {
  fill: var(--grey-dark-3);
}

.column__header-icon--pressed path {
  fill: var(--grey-dark-4);
}
.column__header-icon:hover {
  cursor: pointer;
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
