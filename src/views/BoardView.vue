<template>
  <main class="main-container">
    <Header />
    <Board :cards="baseStore.cards" />
  </main>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Board from '../components/Board.vue';
import { useBaseStore } from '@/stores/baseStore';
// import { storeToRefs } from 'pinia';

const baseStore = useBaseStore();
// const { cards } = storeToRefs(baseStore);

console.log('---cards', baseStore.cards.length);

if (!baseStore.cards.length) {
  try {
    baseStore.getCards();
  } catch (err) {
    console.log('err getCards', err);
  }
}


</script>

<style>
.main-container {
  max-width: 1000px;
  margin: 50px auto;
}
</style>
