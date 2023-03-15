<template lang="">
  <div class="board-header">
    <div class="board-header__title">Карточки</div>
    <div class="board-header__actions">
      <div class="board-header__label">Проект:</div>
      <!-- <vSelect
        class="test-select"
        :options="['Canada', 'United States']"
      /> -->
      <Select
        class="board-header__select"
        :options="filterOptions"
        :initValue="[]"
        label="name"
        @select="projectSelected"
      ></Select>
      <button
        class="board-header__button"
        @click="showModal = true"
      >
        <!-- Добавить карточку -->
        <RouterLink to="/add-card">Добавить карточку</RouterLink>
      </button>
      <Modal
        v-if="showModal"
        @close="showModal = false"
      >
      </Modal>
      <button
        class="board-header__button"
        @click="saveAll"
      >
        Сохранить изменения
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Select from '@/components/common/GoodSelect.vue';
import Modal from '@/components/common/Modal.vue';
import { RouterLink } from 'vue-router';
import { useBaseStore } from '@/stores/baseStore';
import api from '@/api/api';
import type { TProject } from '@/types/types';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const baseStore = useBaseStore();

const filterOptions = computed(() => baseStore.projectsList);

const showModal = ref(false);

const saveAll = () => {
  try {
    api.saveCards(baseStore.cardsByStage);
    toast.success('Данные сохранены');
  } catch (err) {
    console.log('err saveCards', err);
    toast.error('Ошибка сохранения данных');
  }
};

const projectSelected = (val: TProject) => {
  baseStore.setSelectedProject(val ? val.code : '');
};
</script>

<style>
.board-header {
  margin: 50px 20px 20px;
  display: flex;
  justify-content: space-between;
}

.board-header__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
}

.board-header__actions {
  display: flex;
  align-items: center;
}

.board-header__label {
  margin-right: 4px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.board-header__select {
  width: 150px;
}

.board-header__button {
  margin-left: 8px;
  width: 163px;
  height: 32px;

  background: var(--blue);
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.board-header__button,
.board-header__button a {
  color: var(--white);
  text-decoration: none;
}
</style>
