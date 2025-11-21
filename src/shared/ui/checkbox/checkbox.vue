<script setup lang="ts">
import { Icon, Typography } from "../";

import type { CheckboxEmits, CheckboxProps } from "./types.ts";

const emit = defineEmits<CheckboxEmits>();

const props = withDefaults(defineProps<CheckboxProps>(), {
  isChecked: false,
});

const onChange = () => emit("change", !props.isChecked);
</script>

<template>
  <label :class="$style.root">
    <span
      :class="[$style.box, isChecked && $style.checked]"
      tabindex="0"
    >
      <Icon
        v-if="isChecked"
        :class="$style.icon"
        name="check"
        size="s"
      />
    </span>
    <Typography>
      <slot />
    </Typography>
    <input
      :class="$style.input"
      tabindex="-1"
      type="checkbox"
      :value="isChecked"
      @change="onChange"
    />
  </label>
</template>

<style module lang="postcss">
.root {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-checkbox);
  cursor: pointer;
  user-select: none;

  &:hover {
    .box:not(.checked) {
      background: var(--color-neutral-hover);
    }
  }
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size-checkbox);
  height: var(--size-checkbox);
  border: var(--size-control-border) solid var(--color-control-border);
  border-radius: var(--radius-checkbox);
  outline: transparent solid var(--size-control-outline);
  transition:
    border-color var(--transition-time),
    outline-color var(--transition-time),
    background-color var(--transition-time);
  background: transparent;

  &:focus-visible {
    outline: var(--size-control-outline) solid var(--color-control-outline);
    outline-offset: var(--size-control-outline);
  }

  &.checked {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: var(--color-primary-fg);
  }
}

.icon {
  animation: calc(var(--transition-time) * 2) draw ease forwards;
}

.input {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}

@keyframes draw {
  from {
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
  }
  to {
    stroke-dasharray: 20;
    stroke-dashoffset: 0;
  }
}
</style>
