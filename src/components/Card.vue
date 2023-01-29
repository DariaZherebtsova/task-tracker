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
          <span class="card__score">Балл:</span>
          {{ card.score }}
        </div>
      </div>
      <div class="card__tags">
        <div class="tt-tag">{{ card.project }}</div>
      </div>
    </div>
    <div class="card-menu">
      <IconMenu class="card-menu__icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCard } from '@/types/types';
import IconMenu from '@/assets/overflowMenuSecond.svg';
import IconNoteEdit from '@/assets/noteEdit.svg';
import IconGarbage from '@/assets/garbage.svg';

const props = defineProps<{
  card: TCard;
}>();
</script>

<style>
.card {
  margin-bottom: 12px;
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
}

.card__body {
  flex-grow: 1;
}

.card__score {
  color: var(--grey-dark-2);
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

.tt-tag {
  width: 68px;
  height: 23px;
  background: var(--grey-light);
  border: 1px solid var(--grey-middle);
  border-radius: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--grey-dark-3);
}
</style>
