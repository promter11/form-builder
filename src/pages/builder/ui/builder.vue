<script setup lang="ts">
import type { UnionSetting } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { FieldList } from "@/widgets/field-list";
import { FieldPresets } from "@/widgets/field-presets";
import { FieldSettings } from "@/widgets/field-settings";

const formStore = useFormStore();

const updateSetting = <T extends UnionSetting>(index: number, payload: Partial<T>) => {
  const field = formStore.activeField;
  if (!field) {
    return;
  }

  const current = field.settings[index] as T;

  formStore.editField(formStore.activeFieldId, {
    settings: [
      ...field.settings.slice(0, index),
      {
        ...current,
        ...payload,
      },
      ...field.settings.slice(index + 1),
    ],
  });
};
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <FieldPresets />
      <FieldList v-if="formStore.fields.length > 0" />
    </div>
    <FieldSettings
      v-if="formStore.activeField"
      :settings="formStore.activeField.settings"
      @update="(index, payload) => updateSetting(index, payload)"
    />
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  gap: var(--gap-container);

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.container {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: var(--gap-container);
}
</style>
