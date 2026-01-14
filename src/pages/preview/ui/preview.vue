<script setup lang="ts">
import { usePreview } from "@/pages/preview/model";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { NumberInput } from "@/shared/ui/number-input";
import { Select } from "@/shared/ui/select";
import { Switch } from "@/shared/ui/switch";

const components = {
  checkbox: Checkbox,
  number: NumberInput,
  select: Select,
  switch: Switch,
  text: Input,
} as const;

const model = usePreview();
</script>

<template>
  <div :class="$style.root">
    <Card :class="$style.container">
      <component
        :is="components[field.control]"
        v-for="field of model.fields.value"
        :key="field.id"
        v-bind="field.props"
      >
        {{ field.props.label }}
      </component>
    </Card>
    <Button :class="$style.button">Submit</Button>
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-container);
  max-width: 420px;
  pointer-events: none;
}

.container {
  display: flex;
  flex-direction: column;
  gap: var(--gap-container);
}

.button {
  width: fit-content;
}
</style>
