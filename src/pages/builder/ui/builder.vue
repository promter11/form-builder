<script setup lang="ts">
import { useFormStore } from "@/features/form";
import { AddFieldPanel, FieldList, FieldSettings } from "@/widgets/form";

const formStore = useFormStore();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <AddFieldPanel />
      <FieldList v-if="formStore.fields.length > 0" />
    </div>
    <FieldSettings
      v-if="formStore.activeField"
      :field="formStore.activeField"
      @update="(payload) => formStore.editField(formStore.activeFieldId, payload)"
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
