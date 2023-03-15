<template>
  <div class="add-card-container">
    <div 
      v-if="fromColumn"
      class="add-card__header"
    >
      <div class="add-card__title">
        {{ edit ? 'Обновление' : 'Добавление' }}
      </div>
      <div class="add-card__subtitle">{{ data.subtitle }}</div>
    </div>  
    <div 
      v-else
      class="add-card__header"
    >
      <div class="add-card__title">Основные данные</div>
      <div class="add-card__subtitle">Чтобы добавить карточку, нужно заполнить данные</div>
    </div>

    <div class="add-card__label">Заголовок *:</div>
    <input
      class="add-card__input"
      type="text"
      :value="edit ? data.card?.title : ''"
      @blur="setTitle"
    />
    <div
      class="add-card__error-message"
      :class="{ visible: showError.title }"
    >
      обязательное поле
    </div>

    <div class="add-card__label add-card__label-optional">Проект:</div>
    <Select
      class="add-card__select"
      :options="baseStore.projectsList"
      :initValue="edit ? currentProjects : []"
      label="name"
      :multiple="true"
      @select="projectSelected"
    ></Select>
    <div class="add-card__error-message">обязательное поле</div>

    <div v-if="!fromColumn">
      <div class="add-card__label">Стадия *:</div>
      <Select
        class="add-card__select"
        :options="baseStore.columns"
        :initValue="[]"
        label="name"
        :multiple="false"
        :clearable="false"
        @select="stageSelected"
      ></Select>
      <div
        class="add-card__error-message"
        :class="{ visible: showError.stage }"
      >
        обязательное поле
      </div>
    </div>
    

    <div class="add-card__label">Балл *:</div>
    <input
      class="add-card__input add-card__input_small"
      type="number"
      :value="edit ? data.card?.score : ''"
      @blur="setScore"
    />
    <div
      class="add-card__error-message"
      :class="{ visible: showError.score }"
    >
      обязательное поле
    </div>

    <div class="add-card__action">
      <button
        class="add-card__submit-button"
        @click="submit"
      >
        {{ edit ? 'Обновить' : 'Добавить' }}
      </button>
      <button
        class="add-card__back-button"
      >
        <RouterLink to="/">Назад</RouterLink>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useBaseStore } from '@/stores/baseStore';
import Select from '@/components/common/GoodSelect.vue';
import type { TCard, TProject, TColumn } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from '@/utils/index';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const baseStore = useBaseStore();

const props = defineProps<{
  edit: boolean;
  fromColumn: boolean;
  data: {
    card: TCard;
    subtitle: string;
    stage: string;
  };
}>();

const emit = defineEmits(['close']);

let newCard: TCard = { ...props.data.card};

const showError = reactive({
  title: false,
  score: false,
  stage: false,
});

if (isEmpty(baseStore.projects)) {
  try {
    baseStore.getData();
  } catch (err) {
    console.log('err getData', err);
    toast.error('Ошибка загрузки данных');
  }
}

const currentProjects = computed(() => {
  const card = props.data.card;
  if (!card) return [];
  if (!card.project) return [];
  if (typeof card.project === 'string') {
    return [baseStore.projects[card.project]]
  }
  if (Array.isArray(card.project)) {
    return card.project.map((item => baseStore.projects[item]))
  }
  return [];
});

const setTitle = (payload: FocusEvent) => {
  newCard.title = (<HTMLInputElement>payload.target).value;
};

const setScore = (payload: FocusEvent) => {
  newCard.score = Number((<HTMLInputElement>payload.target).value);
};

const projectSelected = (projects: TProject[]) => {
  console.log('projectSelected', projects);
  if (projects.length === 0) {
    newCard.project = false;
  } else {
    newCard.project = projects.map(item => item.code);
    newCard.projectName = projects.map(item => item.name);
  }
};

const stageSelected = (stage: TColumn) => {
  newCard.stage = stage.code;
};

const submit = () => {
  // имитация валидации
  // лучше взять библиотеку для валидации
  if (newCard.title === '') {
    showError.title = true;
  } else showError.title = false;

  if (newCard.score === -1 || newCard.score === 0) {
    showError.score = true;
  } else showError.score = false;

  if (newCard.stage === '') {
    showError.stage = true;
  } else showError.stage = false;

  if (showError.title || showError.score || showError.stage) return;

  if (props.edit) {
    baseStore.editCard(newCard)
  } else {
    newCard.id = uuidv4();
    baseStore.addCard(newCard)
  }
  
  if (!props.fromColumn) {
    toast.success('Карточка добавлена');
  } else {
    emit('close');
  }
}
</script>

<style lang="scss">
.add-card-container {
  padding: 30px;
  width: 380px;
  background-color: var(--white);
  border-radius: 4px;
}

.add-card__close-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.add-card__close-button:hover .add-card__close-icon path {
  fill: var(--grey-dark-4);
}

.add-card__close-icon path {
  fill: var(--grey-dark-2);
}

.add-card__title {
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--grey-dark-4);
}

.add-card__subtitle {
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.add-card__label {
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.add-card__error-message {
  font-size: 12px;
  color: var(--white);
}

.add-card__error-message.visible{
  color: var(--red);
}

.add-card__input {
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

.add-card__input_small {
  width: 80px;
}

.add-card__input:focus {
  outline: 1px solid var(--grey-middle);
}

.add-card__select.tt-select.v-select {
  background-color: var(--grey-light-1);
  padding-left: 8px;
}

.add-card-default-button {
  float: right;
}

.add-card__action {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 4px;
}

.add-card__submit-button {
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

.add-card__back-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.add-card__back-button a {
  color: var(--grey-dark-3);
  text-decoration: none;
}
</style>
