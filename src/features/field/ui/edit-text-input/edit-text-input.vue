<script setup lang="ts">
import { EditField } from "@/features/field";
import { Input } from "@/shared/ui/input";

import type { EditTextInputEmits, EditTextInputProps } from "./types";
import { useEditTextInput } from "./use-edit-text-input";

const emit = defineEmits<EditTextInputEmits>();
defineProps<EditTextInputProps>();

const model = useEditTextInput((payload) => emit("update", payload));
</script>

<template>
  <EditField>
    <template #default>
      <Input
        :value="setting.value"
        @input="(value) => model.update({ value })"
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
