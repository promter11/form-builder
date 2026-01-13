<script setup lang="ts">
import type { CheckboxSetting } from "@/entities/field";
import { EditField } from "@/features/field";
import { Checkbox } from "@/shared/ui/checkbox";

import type { EditCheckboxEmits, EditCheckboxProps } from "./types";

const emit = defineEmits<EditCheckboxEmits>();
defineProps<EditCheckboxProps>();

const onUpdate = (payload: Partial<CheckboxSetting>) => emit("update", payload);
</script>

<template>
  <EditField>
    <template #default>
      <Checkbox
        :is-checked="setting.value"
        @change="(value) => onUpdate({ value })"
      >
        {{ setting.label }}
      </Checkbox>
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
