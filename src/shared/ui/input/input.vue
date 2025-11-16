<script setup lang="ts">
import { useId } from "vue";

import { Typography } from "../";

import type { InputEmits, InputProps } from "./types";

const emit = defineEmits<InputEmits>();

withDefaults(defineProps<InputProps>(), {
  isDisabled: false,
});

const id = useId();

const onInput = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emit("input", event.target.value);
  }
};
</script>

<template>
  <div :class="$style.root">
    <label
      v-if="label"
      :class="$style.label"
      :for="id"
    >
      <Typography>{{ label }}</Typography>
    </label>
    <Typography
      :class="$style.wrapper"
      tabindex="0"
    >
      <input
        :id="id"
        :class="$style.input"
        :disabled="isDisabled"
        :placeholder="placeholder"
        type="text"
        :value="value"
        @input="onInput"
      />
    </Typography>
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-control);
}

.label {
  width: fit-content;
  user-select: none;
}

.wrapper {
  display: flex;
  height: var(--size-control);
  border-radius: var(--radius-control);
  transition: outline-color var(--transition-time);
  outline: transparent solid var(--size-control-outline);

  &:focus-visible {
    outline: var(--size-control-outline) solid var(--color-control-outline);
    outline-offset: var(--size-control-outline);
  }
}

.input {
  width: 100%;
  padding: var(--padding-control);
  border: var(--size-control-border) solid var(--color-control-border);
  border-radius: inherit;
  transition: background-color var(--transition-time);
  outline: none;
  background: var(--color-control-subtle);

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:hover {
    background: var(--color-neutral-hover);
  }

  &::placeholder {
    color: var(--color-neutral-fg);
  }
}
</style>
