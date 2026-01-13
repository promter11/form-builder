<script setup lang="ts">
import type { DividerProps } from "./types";

withDefaults(defineProps<DividerProps>(), {
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
