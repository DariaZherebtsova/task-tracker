<template>
  <component :is="dynamicSvg" />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, watch } from 'vue';

export default defineComponent({
  props: {
    icon: { type: String, required: true },
  },

  setup(props) {
    const dynamicSvg = ref(null);

    const importSvg = async (svgName: string) => {
      if (svgName) {
        return await import(`../../assets/icons/${svgName}.svg`);
      }
    };

    watch(
      () => props.icon,
      async (svg) => (dynamicSvg.value = await importSvg(svg))
    );

    onBeforeMount(async () => {
      dynamicSvg.value = await importSvg(props.icon);
    });
    return {
      dynamicSvg,
    };
  },
});
</script>

<style lang=""></style>
