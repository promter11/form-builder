<script setup lang="ts">
type Props = {
  direction?: "horizontal" | "vertical";
};

withDefaults(defineProps<Props>(), {
  direction: "horizontal",
});
</script>

<template>
  <div :class="[$style.root, direction === 'vertical' && $style.vertical]" />
</template>

<style module lang="postcss">
.root {
  width: 100%;
  height: 1px;
  background: var(--color-control-border);

  &.vertical {
    width: 1px;
    height: 100%;
  }
}
</style>
