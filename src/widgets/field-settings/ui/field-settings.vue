<script setup lang="ts">
import type { UnionSetting } from "@/entities/field";
import { EditCheckbox, EditKeyValueInput, EditTextInput } from "@/features/field";
import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import { useFieldSettings } from "../model";
import type { FieldSettingsEmits, FieldSettingsProps } from "../types";

const emit = defineEmits<FieldSettingsEmits>();
const props = defineProps<FieldSettingsProps>();

const model = useFieldSettings(props);

const onUpdate = (index: number, payload: Partial<UnionSetting>) => emit("update", index, payload);
</script>

<template>
  <Card :class="$style.root">
    <Typography variant="subtitle">
      Field settings
      <span v-if="model.label.value">&#8212; {{ model.label.value.value }}</span>
    </Typography>
    <template
      v-for="(setting, index) of settings"
      :key="setting.id"
    >
      <EditCheckbox
        v-if="setting.control === 'checkbox'"
        :setting="setting"
        @update="(payload) => onUpdate(index, payload)"
      />
      <EditKeyValueInput
        v-else-if="setting.control === 'keyValueInput'"
        :setting="setting"
        @update="(payload) => onUpdate(index, payload)"
      />
      <EditTextInput
        v-else-if="setting.control === 'text'"
        :setting="setting"
        @update="(payload) => onUpdate(index, payload)"
      />
    </template>
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: var(--gap-surface);
  height: max-content;
}
</style>
