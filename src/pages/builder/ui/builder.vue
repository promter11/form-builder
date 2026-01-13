<script setup lang="ts">
import { FieldList } from "@/widgets/field-list";
import { FieldPresets } from "@/widgets/field-presets";
import { FieldSettings } from "@/widgets/field-settings";

import { useBuilder } from "../model";

const model = useBuilder();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <FieldPresets />
      <FieldList v-if="model.formStore.fields.length > 0" />
    </div>
    <FieldSettings
      v-if="model.formStore.activeField"
      :settings="model.formStore.activeField.settings"
      @update="(index, payload) => model.updateSetting(index, payload)"
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
