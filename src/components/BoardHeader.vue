<template lang="">
  <div class="board-header">
    <div class="board-header__title">Карточки</div>
    <div class="board-header__actions">
      <div class="board-header__label">Проект:</div>
      <vue-select
        class="board-header__select"
        v-model="selectedProject"
        :options="options"
        close-on-select
        :min="1"
        placeholder="Не выбрано"
      ></vue-select>
      <!-- <Multiselect
        class="board-header__select"
        v-model="selectedProject"
        :options="options"
      /> -->
      <button class="board-header__button">
        <RouterLink to="/add-card">Добавить карточку</RouterLink>
      </button>
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
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
import VueSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';

import { RouterLink } from 'vue-router';
import { useBaseStore } from '@/stores/baseStore';
import api from '@/api/api';

const baseStore = useBaseStore();

const selectedProject = null;
const options = ['Batman', 'Robin', 'Joker'];

const saveAll = () => {
  console.log('--saveAll');
  api.saveCards(baseStore.cardsByStage);
};
</script>

<style lang="css">
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

.board-header__select.vue-select {
  height: 32px;
  width: 120px;
  background: #D5DCE5;
  border-radius: 4px;
  border: none;
}

.board-header__select .vue-dropdown {
  border: 1px solid #D2DAE4;
}

.board-header__select .vue-dropdown-item.highlighted {
  background-color: #7CABE3;
}

.board-header__select .vue-dropdown-item.selected.highlighted {
  background-color: #D2DAE4;
}

.board-header__select input {
  line-height: 24px;
  text-align: center;
}

.board-header__select .vue-select-header .icon.arrow-downward {
  margin-right: 8px;
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
