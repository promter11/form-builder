<script setup lang="ts">
import { EditField } from "@/features/field";
import { KeyValueInput } from "@/shared/ui/key-value-input";

import type { EditKeyValueInputEmits, EditKeyValueInputProps } from "./types";
import { useEditKeyValueInput } from "./use-edit-key-value-input";

const emit = defineEmits<EditKeyValueInputEmits>();
const props = defineProps<EditKeyValueInputProps>();

const model = useEditKeyValueInput(props, (payload) => emit("update", payload));
</script>

<template>
  <EditField>
    <template #default>
      <KeyValueInput
        :items="setting.items"
        @add="model.addItem"
        @change="model.changeItem"
        @remove="model.removeItem"
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
