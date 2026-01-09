<script setup lang="ts">
import { presets } from "@/entities/field";
import { AddField } from "@/features/field";
import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Field presets</Typography>
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
