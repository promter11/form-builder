<script setup lang="ts">
import { nanoid } from "nanoid";

import type { Field, Setting } from "@/entities/field";
import { FieldSetting } from "@/features/form";
import { KeyValueInput } from "@/shared/ui";

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
      <KeyValueInput
        :items="(field as any)[setting.id]"
        @add="
          onUpdate({
            items: [
              ...(field as any)[setting.id],
              {
                id: nanoid(),
                key: '',
                value: '',
              },
            ],
          })
        "
        @change="
          (index, payload) =>
            onUpdate({
              items: [
                ...(field as any)[setting.id].slice(0, index),
                { ...(field as any)[setting.id][index], ...payload },
                ...(field as any)[setting.id].slice(index + 1),
              ],
            })
        "
        @remove="
          (index) =>
            onUpdate({
              items: [...(field as any)[setting.id].slice(0, index), ...(field as any)[setting.id].slice(index + 1)],
            })
        "
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </FieldSetting>
</template>
