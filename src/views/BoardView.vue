<template>
  <main class="main-container">
    <Header />
    <Board />
  </main>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Board from '../components/Board.vue';
</script>

<style>
.main-container {
  max-width: 1000px;
  margin: 50px auto;
}
</style>
