<template>
  <vue-select
    class="tt-select"
    v-model="selectedValue"
    :options="options"
    close-on-select
    :min="1"
    placeholder="Не выбрано"
  ></vue-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';

const props = defineProps<{
  options: string[];
}>();
const selectedValue = ref(null);

</script>

<style>
.tt-select.vue-select {
  height: 32px;
  width: 120px;
  background: #d5dce5;
  border-radius: 4px;
  border: none;
}

.tt-select .vue-dropdown {
  border: 1px solid #d2dae4;
}

.tt-select .vue-dropdown-item.highlighted {
  background-color: #7cabe3;
}

.tt-select .vue-dropdown-item.selected.highlighted {
  background-color: #d2dae4;
}

.tt-select .vue-input input {
  padding-left: 16px;
  line-height: 24px;
  /* text-align: center; */
}

.tt-select .vue-select-header .icon.arrow-downward {
  margin-right: 8px;
}
</style>
