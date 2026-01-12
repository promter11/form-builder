<script setup lang="ts">
import type { TextSetting } from "@/entities/field";
import { EditField } from "@/features/field";
import { debounce } from "@/shared/lib";
import { Input } from "@/shared/ui/input";

type Emits = {
  update: [payload: Partial<TextSetting>];
};

type Props = {
  setting: TextSetting;
};

const emit = defineEmits<Emits>();

defineProps<Props>();

const onUpdate = (payload: Partial<TextSetting>) => emit("update", payload);

const updateValue = debounce(onUpdate, 250);
</script>

<template>
  <EditField>
    <template #default>
      <Input
        :value="setting.value"
        @input="(value) => updateValue({ value })"
      />
    </template>
    <template #label>
      {{ setting.label }}
    </template>
  </EditField>
</template>
