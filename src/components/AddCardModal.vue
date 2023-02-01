<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal__header">
              <div class="modal__title">Добавление</div>
              <IconCloseBig class="modal__close-icon" />
            </div>
            <div class="modal__subtitle">{{ data.subtitle }}</div>

            <div class="modal__label">Заголовок *:</div>
            <input
              class="modal__input"
              type="text"
            />

            <div class="modal__label">Проект:</div>
            <Select
              class="modal__select"
              :options="options"
            ></Select>

            <div class="modal__label">Балл *:</div>
            <input
              class="modal__input modal__input_small"
              type="number"
            />

            <div class="modal__action">
              <button
                class="modal__submit-button"
                @click="saveAll"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Select from '@/components/common/Select.vue';
import IconCloseBig from '@/assets/closeBig.svg';

const props = defineProps<{
  data: {
    subtitle: string;
  };
}>();

const options = ['Batman', 'Robin', 'Joker'];
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 380px;
  margin: 0px auto;
  padding: 20px 30px 30px;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
}

.modal__close-icon path {
  fill: var(--grey-dark-2);
}

.modal__title {
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--grey-dark-4);
}

.modal__subtitle {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.modal__label {
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.modal__input {
  padding-left: 16px;
  width: 100%;
  height: 32px;
  border: none;
  background-color: var(--grey-light-1);
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}

.modal__input_small {
  width: 80px;
}

.modal__input:focus {
  outline: 1px solid var(--grey-middle);
}

.modal__select.tt-select.vue-select {
  background-color: var(--grey-light-1);
  width: 100%;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal__action {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.modal__submit-button {
  padding: 8px 20px;
  color: var(--white);
  background: var(--blue);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
