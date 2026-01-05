<script setup lang="ts">
import { presets } from "@/entities/field";
import { AddField } from "@/features/form";
import { Card, Typography } from "@/shared/ui";
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Add field</Typography>
    <div :class="$style.container">
      <AddField
        v-for="preset of presets"
        :key="preset.id"
        :preset="preset"
      />
    </div>
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-card);
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-card);
}
</style>
