<template lang="">
  <div class="board-header">
    <div class="board-header__title">Карточки</div>
    <div class="board-header__actions">
      <RouterLink to="/add-card">Добавить карточку</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
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
</style>
