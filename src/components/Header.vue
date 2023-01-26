<template lang="">
  <div class="header">
    <div class="header__title">Header</div>
    <div class="header__actions">
      <RouterLink to="/add-card">Добавить карточку</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
