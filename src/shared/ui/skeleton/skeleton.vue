<script setup lang="ts">
import type { SkeletonProps } from "./types";

withDefaults(defineProps<SkeletonProps>(), {
  isLoading: false,
});
</script>

<template>
  <div :class="[$style.root, isLoading && $style.loading, height && $style.withHeight]">
    <slot />
  </div>
</template>

<style module lang="postcss">
.root {
  display: inherit;
}

.loading {
  position: relative;
  width: inherit;
  height: inherit;
  pointer-events: none;

  & > * {
    visibility: hidden;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius-surface);
    animation: calc(var(--transition-time) * 6) shine linear infinite;
    background: var(--color-skeleton);
    background-size: 200% 100%;
  }

  &.withHeight {
    height: v-bind(height + "px");
  }
}

@keyframes shine {
  0% {
    background-position-x: 100%;
  }
  50% {
    background-position-x: -100%;
  }
  100% {
    background-position-x: -100%;
  }
}
</style>
