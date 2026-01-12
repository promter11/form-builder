<script setup lang="ts">
import { nanoid } from "nanoid";

import type { KeyValueInputSetting } from "@/entities/field";
import { EditField } from "@/features/field";
import { debounce } from "@/shared/lib";
import type { KeyValueInputItem } from "@/shared/ui/key-value-input";
import { KeyValueInput } from "@/shared/ui/key-value-input";

type Emits = {
  update: [payload: Partial<KeyValueInputSetting>];
};

type Props = {
  setting: KeyValueInputSetting;
};

const emit = defineEmits<Emits>();

const props = defineProps<Props>();

const onUpdate = (payload: Partial<KeyValueInputSetting>) => emit("update", payload);

const addItem = () =>
  onUpdate({
    items: [
      ...props.setting.items,
      {
        id: nanoid(),
        key: "",
        value: "",
      },
    ],
  });

const changeItem = (index: number, payload: Partial<KeyValueInputItem>) => {
  if (!props.setting.items[index]) {
    return;
  }

  updateValue({
    items: [
      ...props.setting.items.slice(0, index),
      { ...props.setting.items[index], ...payload },
      ...props.setting.items.slice(index + 1),
    ],
  });
};

const removeItem = (index: number) =>
  onUpdate({
    items: [...props.setting.items.slice(0, index), ...props.setting.items.slice(index + 1)],
  });

const updateValue = debounce(onUpdate, 250);
</script>

<template>
  <EditField>
    <template #default>
      <KeyValueInput
        :items="setting.items"
        @add="addItem"
        @change="changeItem"
        @remove="removeItem"
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
