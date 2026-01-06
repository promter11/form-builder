<script setup lang="ts">
import { Typography } from "../";

import type { SwitchEmits, SwitchProps } from "./types";

const emit = defineEmits<SwitchEmits>();

const props = withDefaults(defineProps<SwitchProps>(), {
  isChecked: false,
  isDisabled: false,
});

const onChange = () => emit("change", !props.isChecked);
</script>

<template>
  <label :class="[$style.root, isDisabled && $style.disabled]">
    <span
      :class="[$style.box, isChecked && $style.checked]"
      tabindex="0"
    >
      <span :class="[$style.circle, isChecked && $style.active]" />
    </span>
    <Typography>
      <slot />
    </Typography>
    <input
      :checked="isChecked"
      :class="$style.input"
      :disabled="isDisabled"
      tabindex="-1"
      type="checkbox"
      :value="value"
      @change="onChange"
    />
  </label>
</template>

<style module lang="postcss">
.root {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-control);
  cursor: pointer;
  user-select: none;

  &:active {
    .circle {
      width: calc(var(--size-switch-circle) + 2px);
      margin-left: calc(var(--padding-switch) * 2);

      &.active {
        margin-left: calc(100% - var(--size-switch-circle) - var(--padding-switch) * 2);
      }
    }
  }

  &.disabled {
    opacity: var(--opacity-item-disabled);
    pointer-events: none;
  }
}

.box {
  display: flex;
  align-items: center;
  width: var(--size-control);
  height: var(--size-switch);
  padding: var(--padding-switch);
  border: var(--size-control-border) solid var(--color-control-border);
  border-radius: var(--radius-switch);
  outline: transparent solid var(--size-control-outline);
  overflow: hidden;
  transition:
    border-color var(--transition-time),
    outline-color var(--transition-time),
    background-color var(--transition-time);
  background: var(--color-neutral);

  &:focus-visible {
    outline: var(--size-control-outline) solid var(--color-control-outline);
    outline-offset: var(--size-control-outline);
  }

  &.checked {
    border-color: var(--color-primary);
    background: var(--color-primary);
  }
}

.circle {
  display: inline-flex;
  flex-shrink: 0;
  width: var(--size-switch-circle);
  height: var(--size-switch-circle);
  margin-left: 0;
  border-radius: var(--radius-max);
  transition:
    width var(--transition-time),
    margin-left var(--transition-time);
  box-shadow: var(--shadow-switch);
  background: var(--color-primary-fg);

  &.active {
    margin-left: calc(100% - var(--size-switch-circle));
  }
}

.input {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}
</style>
