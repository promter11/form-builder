<script setup lang="ts">
import { nanoid } from "nanoid";

import type { Field, Setting } from "@/entities/field";
import { EditField } from "@/features/field";
import { debounce } from "@/shared/lib";
import { KeyValueInput } from "@/shared/ui/key-value-input";

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

const updateValue = debounce(onUpdate, 250);
</script>

<template>
  <EditField>
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
            updateValue({
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
  </EditField>
</template>
