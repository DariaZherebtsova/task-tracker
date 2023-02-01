<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="card__header">
        <div class="card__header-title">{{ card.title }}</div>
        <IconNoteEdit class="card__header-icon" />
        <IconGarbage class="card__header-icon" />
      </div>
      <div class="card__body">
        <div>
          <span class="card__score-text">Балл: </span>
          <span class="card__score-value">{{ card.score }}</span>
        </div>
      </div>
      <div
        class="card__tags"
        v-if="card.project"
      >
        <div
          class="tt-tag"
          v-for="(projects, index) in card.projectName"
          :key="index"
        >
          {{ projects }}
        </div>
      </div>
    </div>
    <div class="card-menu">
      <IconMenu class="card-menu__icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from '@/stores/baseStore';
import type { TCard } from '@/types/types';
import IconMenu from '@/assets/overflowMenuSecond.svg';
import IconNoteEdit from '@/assets/noteEdit.svg';
import IconGarbage from '@/assets/garbage.svg';
import { projects } from '@/mock-data/data';

const baseStore = useBaseStore();

const props = defineProps<{
  card: TCard;
}>();

// const createProjectList = (cardProjects: boolean | [] | string) => {
//   if (!cardProjects) return false;
//   if (typeof cardProjects === 'string')
//     return [baseStore.progects[cardProjects].name];
//   if (Array.isArray(cardProjects)) {
//     return cardProjects.map((project) => baseStore.progects[project].name);
//   }
// };
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
  align-items: center;
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

/* .card__header-icon {
  width: 17px;
  height: 17px;
} */

.card__header-icon path {
  fill: var(--grey-dark-2);
}

.card-menu__icon path {
  fill: var(--grey-dark-1);
}

.card__tags {
  display: flex;
  gap: 5px;
}

.tt-tag {
  width: 68px;
  height: 23px;
  background: var(--grey-light-2);
  border: 1px solid var(--grey-middle);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--grey-dark-3);
}
</style>
