<template>
  <div class="test-box">
    <GoodSelect
      multiple
      :options="['Canada', 'United States']"
    />
  </div>
</template>

<script setup lang="ts">
import GoodSelect from '@/components/common/GoodSelect.vue';
</script>

<style>
.test-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
