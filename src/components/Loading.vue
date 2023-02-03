<template>
  <div class="loading">
    <div class="loading__header">
      <div class="loading__header-title">Карточки</div>
      <div class="loading__header-actions">
        <div class="loading__header-button">Добавить карточку</div>
        <div class="loading__header-button">Добавить карточку</div>
      </div>
    </div>
    <div class="loading__board">
      <div class="loading__column"></div>
      <div class="loading__column"></div>
      <div class="loading__column"></div>
      <div class="loading__column"></div>
    </div>
  </div>
</template>

<style>
.loading__column {
  min-width: 320px;
  height: 600px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton {
  animation: skeleton-loading 2s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--color-background-middle);
  }
  100% {
    background-color: var(--grey-light-2);
  }
}

.loading__board {
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.loading__header {
  margin: 50px 20px 20px;
  display: flex;
  justify-content: space-between;
}

.loading__header-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: var(--grey-dark-3);
}

.loading__header-actions {
  display: flex;
  align-items: center;
}

.loading__header-button {
  margin-left: 8px;
  width: 163px;
  height: 32px;
  text-align: center;
  background: var(--grey-blue);
  border-radius: 4px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 32px;
  color: var(--grey-middle);
}
</style>
