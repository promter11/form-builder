<script setup lang="ts">
import { fields } from "@/entities/field";
import { AddField } from "@/features/form";
import { Card, Typography } from "@/shared/ui";
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Add field</Typography>
    <div :class="$style.container">
      <AddField
        v-for="field of fields"
        :key="field.id"
        :field="field"
      />
    </div>
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
