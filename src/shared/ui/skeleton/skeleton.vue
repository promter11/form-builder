<script setup lang="ts">
import type { SkeletonProps } from "./types";

withDefaults(defineProps<SkeletonProps>(), {
  isLoading: false,
});
</script>

<template>
  <div :class="[$style.root, isLoading && $style.loading]">
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
    border-radius: 12px;
    animation: 1.5s shine linear infinite;
    background: linear-gradient(
      90deg,
      rgba(138, 141, 148, 0.08) 8%,
      rgba(138, 141, 148, 0.14) 18%,
      rgba(138, 141, 148, 0.08) 32%
    );
    background-size: 200% 100%;
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
