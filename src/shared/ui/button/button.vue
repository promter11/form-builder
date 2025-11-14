<script setup lang="ts">
import { Typography } from "@/shared/ui";

import type { ButtonColor, ButtonVariant } from "./types";

type Props = {
  color?: ButtonColor;
  isDisabled?: boolean;
  variant?: ButtonVariant;
};

withDefaults(defineProps<Props>(), {
  color: "primary",
  isDisabled: false,
  variant: "solid",
});
</script>

<template>
  <button
    :class="[$style.root, $style[`${variant}-${color}`]]"
    :disabled="isDisabled"
    type="button"
  >
    <Typography variant="subtitle">
      <slot />
    </Typography>
  </button>
</template>

<style module lang="postcss">
.root {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border var(--transition-time), outline-color var(--transition-time), transform var(--transition-time),
    background-color var(--transition-time), color var(--transition-time);
  outline: transparent solid var(--size-border-focus);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: var(--background);
  color: var(--color);

  &:active:not(:disabled) {
    transform: scale(var(--opacity-item-active));
  }

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:hover:not(:disabled) {
    background: var(--background-hover, var(--background));
    color: var(--color-hover);
  }

  &:focus-visible {
    outline: var(--size-border-focus) solid var(--color-border-focus);
    outline-offset: var(--size-border-focus);
  }
}

.bordered-neutral {
  --border-color: var(--color-neutral);
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-neutral-fg);
  --color-hover: var(--color-neutral-fg-hover);
}

.bordered-primary {
  --border-color: var(--color-primary);
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-primary);
  --color-hover: var(--color-primary-fg-hover);
}

.solid-neutral {
  --border-color: transparent;
  --background: var(--color-neutral);
  --background-hover: var(--color-neutral-hover);
  --color: var(--color-neutral-fg);
  --color-hover: var(--color-neutral-fg);
}

.solid-primary {
  --border-color: transparent;
  --background: var(--color-primary);
  --background-hover: var(--color-primary-hover);
  --color: var(--color-primary-fg);
  --color-hover: var(--color-primary-fg);
}
</style>
