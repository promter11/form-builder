<script setup lang="ts">
import type { Field } from "@/entities/field";
import { settings } from "@/entities/field";
import { EditCheckbox, EditKeyValueInput, EditTextInput } from "@/features/field";
import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

type Emits = {
  update: [payload: Partial<Field>];
};

type Props = {
  field: Field;
};

const emit = defineEmits<Emits>();

defineProps<Props>();

const components = {
  checkbox: EditCheckbox,
  keyValueInput: EditKeyValueInput,
  text: EditTextInput,
} as const;

const onUpdate = (payload: Partial<Field>) => emit("update", payload);
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">Field settings — {{ field.label }}</Typography>
    <component
      :is="components[setting.control]"
      v-for="setting of settings[field.type]"
      :key="setting.id"
      :field="field"
      :setting="setting"
      @update="onUpdate"
    />
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: var(--gap-card);
  height: max-content;
}
</style>
