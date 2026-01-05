<script setup lang="ts">
import type { Field, Setting } from "@/entities/field";
import { FieldSetting } from "@/features/form";
import { Checkbox } from "@/shared/ui";

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
  <FieldSetting>
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
  </FieldSetting>
</template>
