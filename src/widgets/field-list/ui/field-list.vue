<script setup lang="ts">
import { ManageField } from "@/features/field";
import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Field list</Typography>
    <ManageField />
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-card);
}
</style>
