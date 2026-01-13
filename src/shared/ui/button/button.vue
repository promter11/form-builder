<script setup lang="ts">
import { Typography } from "../typography";

import type { ButtonProps } from "./types";
import { useButton } from "./use-button";

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  isDisabled: false,
  variant: "solid",
});

const model = useButton(props);
</script>

<template>
  <button
    :ref="model.ripple.hostRef"
    :class="[$style.root, $style[`${variant}-${color}`]]"
    :disabled="isDisabled"
    type="button"
    @click="model.click"
  >
    <span
      v-if="variant !== 'plain'"
      :ref="model.ripple.rippleRef"
      :class="$style.ripple"
    />
    <Typography
      :class="$style.text"
      variant="subtitle"
    >
      <slot />
    </Typography>
  </button>
</template>

<style module lang="postcss">
.root {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--gap-control);
  height: var(--height);
  padding: var(--padding);
  border: var(--size-control-border) solid var(--border-color);
  border-radius: var(--radius-control);
  transition:
    border var(--transition-time),
    outline-color var(--transition-time),
    transform var(--transition-time),
    background-color var(--transition-time),
    color var(--transition-time);
  outline: transparent solid var(--size-control-outline);
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: var(--background);
  color: var(--color);

  &:active:not(:disabled) {
    transform: scale(var(--transform-scale-item-active));
  }

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:focus-visible:not(:disabled) {
    outline: var(--size-control-outline) solid var(--color-control-outline);
    outline-offset: var(--size-control-outline);
  }

  &:hover:not(:disabled) {
    background: var(--background-hover, var(--background));
    color: var(--color-hover);
  }
}

.ripple {
  position: absolute;
  border-radius: var(--radius-max);
  opacity: 0.25;
  transform: scale(0);
  pointer-events: none;
  animation: ripple calc(var(--transition-time) * 2) ease-out;
  will-change: transform, opacity;
  background: currentColor;
}

.text {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-control);
}

.bordered-neutral {
  --height: var(--size-control);
  --padding: var(--padding-control);
  --border-color: var(--color-neutral);
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-neutral-fg);
  --color-hover: var(--color-neutral-fg-hover);
}

.bordered-primary {
  --height: var(--size-control);
  --padding: var(--padding-control);
  --border-color: var(--color-primary);
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-primary);
  --color-hover: var(--color-primary-fg-hover);
}

.plain-neutral {
  --height: inherit;
  --padding: 0;
  --border-color: transparent;
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-neutral-fg);
  --color-hover: var(--color-neutral-fg-hover);
}

.plain-primary {
  --height: inherit;
  --padding: 0;
  --border-color: transparent;
  --background: transparent;
  --background-hover: transparent;
  --color: var(--color-primary);
  --color-hover: var(--color-primary-hover);
}

.solid-neutral {
  --height: var(--size-control);
  --padding: var(--padding-control);
  --border-color: transparent;
  --background: var(--color-neutral);
  --background-hover: var(--color-neutral-hover);
  --color: var(--color-neutral-fg);
  --color-hover: var(--color-neutral-fg);
}

.solid-primary {
  --height: var(--size-control);
  --padding: var(--padding-control);
  --border-color: transparent;
  --background: var(--color-primary);
  --background-hover: var(--color-primary-hover);
  --color: var(--color-primary-fg);
  --color-hover: var(--color-primary-fg);
}

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
