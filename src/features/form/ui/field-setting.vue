<script setup lang="ts">
import { Typography } from "@/shared/ui";
</script>

<template>
  <div :class="$style.root">
    <Typography :class="$style.text">
      <slot name="label" />
    </Typography>
    <slot />
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  align-items: center;
  gap: var(--gap-container);
}

.text {
  max-width: 25%;
  width: 100%;
}
</style>
