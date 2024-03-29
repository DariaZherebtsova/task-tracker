<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="card__header">
        <div class="card__header-title">{{ card.title }}</div>
        <button
          class="card__icon-button"
          @click="showModal = true"
        >
          <SvgIcon
            icon="noteEdit"
            class="card__header-icon"
          />
        </button>
        <button
          class="card__icon-button"
          @click="deleteCard"
        >
          <SvgIcon
            icon="garbage"
            class="card__header-icon"
          />
        </button>
      </div>
      <div class="card__body">
        <div>
          <span class="card__score-text">Балл: </span>
          <span class="card__score-value">{{ card.score }}</span>
        </div>
      </div>
      <div
        class="card__tags-wrapper"
        v-if="card.project"
      >
        <div
          class="card__tag"
          v-for="(projects, index) in card.projectName"
          :key="index"
        >
          {{ projects }}
        </div>
      </div>
    </div>
    <div class="card-menu">
      <SvgIcon
        icon="overflowMenuSecond"
        class="card__header-icon"
      />
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <AddCard
        :data="modalData"
        :edit="true"
        :from-column="true"
        @close="showModal = false"
      ></AddCard>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBaseStore } from '@/stores/baseStore';
import AddCard from '@/components/AddCard.vue';
import Modal from '@/components/common/Modal.vue';
import type { TCard } from '@/types/types';

const baseStore = useBaseStore();

const props = defineProps<{
  card: TCard;
  stageName: string;
}>();

const showModal = ref(false);

const modalData = computed(() => ({
  card: props.card,
  subtitle: props.stageName,
  options: baseStore.projectsList,
  stage: props.card.stage,
  saveCard: baseStore.editCard,
}));

const deleteCard = () => {
  baseStore.deleteCard(props.card);
};
</script>

<style>
.card {
  margin-bottom: 8px;
  padding: 12px 8px 12px 12px;
  min-width: 100px;
  height: 120px;
  display: flex;
  border-radius: 4px;
  background-color: var(--color-background-top);
}

.card-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card__header {
  display: flex;
}

.card__header-title {
  margin-right: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.card__body {
  flex-grow: 1;
}

.card__score-text {
  color: var(--grey-dark-2);
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

.card__score-value {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}

.card-menu {
  width: 24px;
}

.card__header-icon path {
  fill: var(--grey-dark-2);
}

.card-menu__icon path {
  fill: var(--grey-dark-1);
}

.card__tags-wrapper {
  display: flex;
  gap: 5px;
}

.card__tag {
  width: 68px;
  height: 23px;
  border: 1px solid var(--grey-middle);
  border-radius: 4px;
  background: var(--grey-light-2);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--grey-dark-3);
}

.card__icon-button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
