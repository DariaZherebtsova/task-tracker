<template>
  <div>
    <button
      class="counter__button"
      @click="increment"
    >
      Clicks: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let count = ref(0);
const increment = () => {
  count.value += 1;
};
</script>

<style>
.counter__button {
  font-family: inherit;
  font-size: inherit;
  padding: 1em 2em;
  color: #ff3e00;
  background-color: rgba(255, 62, 0, 0.1);
  border-radius: 2em;
  border: 2px solid rgba(255, 62, 0, 0);
  outline: none;
  width: 200px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}

.counter__button:focus {
  border: 2px solid #ff3e00;
}

.counter__button:active {
  background-color: rgba(255, 62, 0, 0.2);
}
</style>
