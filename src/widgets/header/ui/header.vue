<script setup lang="ts">
import { Typography } from "@/shared/ui";
</script>

<template>
  <header :class="$style.root">
    <Typography variant="title">Form Builder</Typography>
  </header>
</template>

<style module lang="postcss">
.root {
  padding: var(--padding-container);
}
</style>
