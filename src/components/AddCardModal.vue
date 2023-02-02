<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal__header">
              <div class="modal__title">Добавление</div>
              <button
                class="modal__close-button"
                @click="emit('close')"
              >
                <IconCloseBig class="modal__close-icon" />
              </button>
            </div>
            <div class="modal__subtitle">{{ data.subtitle }}</div>

            <div class="modal__label">Заголовок *:</div>
            <input
              class="modal__input"
              type="text"
              @blur="setTitle"
            />
            <div 
              class="modal__error-message"
              :class="{ visible: showError.title }"
            >
              обязательное поле
            </div>

            <div class="modal__label modal__label-optional">Проект:</div>
            <Select
              class="modal__select"
              :options="data.options"
              label="name"
              :multiple="true"
              @select="projectSelected"
            ></Select>
            <div 
              class="modal__error-message"
            >
              обязательное поле
            </div>

            <div class="modal__label">Балл *:</div>
            <input
              class="modal__input modal__input_small"
              type="number"
              @blur="setScore"
            />
            <div 
              class="modal__error-message"
              :class="{ visible: showError.score }"
            >
              обязательное поле
            </div>

            <div class="modal__action">
              <button
                class="modal__submit-button"
                @click="submit"
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
import { reactive } from 'vue';
import {v4 as uuidv4} from 'uuid';
import Select from '@/components/common/Select.vue';
import IconCloseBig from '@/assets/closeBig.svg';
import type { TCard, TProject } from '@/types/types';

const props = defineProps<{
  data: {
    subtitle: string;
    options: TProject[];
    // cardId: number;
    stage: string;
    saveCard: (card: TCard) => void;
  };
}>();

const emit = defineEmits(['close']);

let newCard: TCard = {
  id: uuidv4(),
  title: '',
  stage: props.data.stage,
  project: false,
  score: -1,
};

const showError = reactive({
  title: false,
  score: false
});

const setTitle = (payload: FocusEvent) => {
  console.log('--setTitle', (<HTMLInputElement>payload.target).value);
  newCard.title = (<HTMLInputElement>payload.target).value;
};

const setScore = (payload: FocusEvent) => {
  console.log('--setScore', (<HTMLInputElement>payload.target).value);
  newCard.score = Number((<HTMLInputElement>payload.target).value);
};

const projectSelected = (projects: TProject[]) => {
  console.log('modal projectSelected', projects.length);
  if (projects.length === 1) {
    if (projects[0].name === 'Не выбрано') {
      newCard.project = false;
    } else {
      newCard.project = projects[0].code;
      newCard.projectName = [projects[0].name];
    }
  } else {
    newCard.project = projects.map(item => item.code);
    newCard.projectName = projects.map(item => item.name);
  }
};

const submit = () => {
  if (newCard.title === '') {
    showError.title = true;
  } else showError.title = false;

  if (newCard.score === -1) {
    showError.score = true;
  } else showError.score = false;

  console.log('--submit', newCard);
  props.data.saveCard(newCard);
  emit('close');
}
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

.modal__close-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal__close-button:hover .modal__close-icon path {
  fill: var(--grey-dark-4);
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
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.modal__error-message {
  font-size: 12px;
  color: var(--white);
}

.modal__error-message.visible{
  color: var(--red);
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

.modal__select .vue-input input {
  padding-left: 12px;
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
