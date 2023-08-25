<template>
  <vSelect
    class="tt-select"
    :modelValue="selectedValue"
    @update:modelValue="selectUpdate"
    placeholder="Не выбрано"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

const emit = defineEmits(['select']);

const props = defineProps<{
  initValue: Array<any>;
}>();

const selectedValue = ref(props.initValue);

const selectUpdate = (val) => {
  selectedValue.value = val;
  emit('select', val);
};
</script>

<style scoped lang="scss">
.tt-select {
  &::v-deep(.child) {
    --vs-controls-size: 0.7;
    --vs-border-style: none;
    --vs-font-size: 13px;
    --vs-search-input-color: var(--grey-dark-2);
  }
  &.v-select {
    background-color: #d5dce5;
    border-radius: 4px;
  }
}
</style>
