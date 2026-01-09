<script setup lang="ts">
import type { Field, Setting } from "@/entities/field";
import { EditField } from "@/features/field";
import { Checkbox } from "@/shared/ui/checkbox";

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
      <Checkbox
        :is-checked="(field as any)[setting.id]"
        @change="(value) => onUpdate({ [setting.id]: value })"
      >
        {{ setting.label }}
      </Checkbox>
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
