<script setup lang="ts">
import type { Field, Setting } from "@/entities/field";
import { EditField } from "@/features/field";
import { Input } from "@/shared/ui/input";

type Emits = {
  update: [payload: Partial<Field>];
};

type Props = {
  field: Field;
  setting: Setting;
};

const emit = defineEmits<Emits>();

defineProps<Props>();

const onUpdate = (payload: Partial<Field>) => emit("update", payload);
</script>

<template>
  <EditField>
    <template #default>
      <Input
        :value="(field as any)[setting.id]"
        @input="(value) => onUpdate({ [setting.id]: value })"
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
