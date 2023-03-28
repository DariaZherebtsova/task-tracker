<template>
  <div class="test-box">
    <!-- <GoodSelect
      :options="['Canada', 'United States']"
      :initValue="['Canada']"
    /> -->
    <DoubleSelect :items="items" />
  </div>
</template>

<script setup lang="ts">
import DoubleSelect from '@/components/common/DoubleSelect.vue';
import GoodSelect from '@/components/common/Select.vue';

const items = [
  {
    number: 1,
    episodes: [
      { number: 1, source: 's01_e01.mp4', description: '' },
      { number: 2, source: 's01_e02.mp4', description: '' },
      { number: 3, source: 's01_e03.mp4', description: '' },
    ],
  },
];
</script>

<style>
.test-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
