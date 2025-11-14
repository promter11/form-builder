<script setup lang="ts">
import { useId } from "vue";

import { Typography } from "@/shared/ui";

type Emits = {
  input: [value: string];
};

type Props = {
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  value: string;
};

const emit = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
  isDisabled: false,
});

const id = useId();

const onInput = (event: InputEvent) => emit("input", (event.target as HTMLInputElement).value);
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
  gap: 4px;
}

.label {
  width: fit-content;
  user-select: none;
}

.wrapper {
  display: grid;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: outline-color var(--transition-time);
  outline: transparent solid var(--size-border-focus);

  &:focus-visible {
    outline: var(--size-border-focus) solid var(--color-border-focus);
    outline-offset: var(--size-border-focus);
  }
}

.input {
  width: 100%;
  padding: 6px 12px;
  border-radius: inherit;
  transition: background-color var(--transition-time);
  outline: none;

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
