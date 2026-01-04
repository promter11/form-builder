<script setup lang="ts">
import { FieldItem } from "@/features/form";
import { Card, Typography } from "@/shared/ui";
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Field list</Typography>
    <FieldItem />
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-card);
}
</style>
