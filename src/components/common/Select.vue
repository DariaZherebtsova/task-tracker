<template>
  <vue-select
    class="tt-select"
    :modelValue="selectedValue"
    @update:modelValue="selectUpdate"
    :options="options"
    :label-by="label"
    :multiple="multiple"
    close-on-select
    :min="1"
    placeholder="Не выбрано"
  ></vue-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';

const emit = defineEmits(['select']);

const props = defineProps<{
  options: string[];
  label: string;
  multiple: boolean;
}>();

const selectedValue = ref([]);

const selectUpdate = (val) => {
  console.log('--selectUpdate', val);
  emit('select', val);
};
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

.tt-select .vue-dropdown-item {
  padding-left: 8px;
  font-size: 13px;
  font-family: 'Inter';
}

.tt-select .vue-dropdown-item.highlighted {
  background-color: #7cabe3;
}

.tt-select .vue-dropdown-item.selected.highlighted {
  background-color: #d2dae4;
}

.tt-select .vue-input input {
  /* padding-left: 16px; */
  line-height: 24px;
  /* text-align: center; */
}

.tt-select .vue-select-header .icon.arrow-downward {
  margin-right: 8px;
}
</style>
