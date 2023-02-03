<template>
  <div class="add-card-view">
    <h1 class="add-card-view__header">Добавление карточки</h1>
    <AddCard
      :data="modalData"
      :edit="false"
      :from-column="false"
    ></AddCard>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AddCard from '@/components/AddCard.vue';

const modalData = computed(() => ({
  card: {
    id: '',
    title: '',
    stage: '',
    project: false,
    score: -1,
  },
  subtitle: '',
  stage: '',
}));
</script>

<style>
.add-card-view {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-card-view__header {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: var(--grey-dark-4);
}
</style>
