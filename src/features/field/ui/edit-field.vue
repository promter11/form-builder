<script setup lang="ts">
import { Typography } from "@/shared/ui/typography";
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

  @media screen and (max-width: 479px) {
    flex-wrap: wrap;
    gap: calc(var(--gap-container) / 2);
  }
}

.text {
  max-width: 25%;
  width: 100%;

  @media screen and (max-width: 479px) {
    max-width: 100%;
  }
}
</style>
