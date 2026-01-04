<script setup lang="ts">
import { useFormStore } from "@/features/form";
import { AddFieldPanel, FieldList } from "@/widgets/form";

const formStore = useFormStore();
</script>

<template>
  <div :class="$style.root">
    <AddFieldPanel />
    <FieldList v-if="formStore.fields.length > 0" />
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-container);
}
</style>
