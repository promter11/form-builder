<script setup lang="ts">
import { ref } from "vue";

import { Typography } from "../";

import type { ButtonProps } from "./types";

withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  isDisabled: false,
  variant: "solid",
});

const buttonRef = ref<HTMLElement>();
const rippleRef = ref<HTMLElement>();

const handleClick = (event: MouseEvent) => {
  const ripple = rippleRef.value;
  const button = buttonRef.value;

  if (!ripple || !button) {
    return;
  }

  const buttonRect = button.getBoundingClientRect();
  const buttonSize = Math.max(buttonRect.width, buttonRect.height);

  ripple.style.width = `${buttonSize}px`;
  ripple.style.height = `${buttonSize}px`;
  ripple.style.left = `${event.clientX - buttonRect.left - buttonSize / 2}px`;
  ripple.style.top = `${event.clientY - buttonRect.top - buttonSize / 2}px`;

  ripple.style.animation = "none";
  requestAnimationFrame(() => {
    ripple.style.animation = "";
  });
};
</script>

<template>
  <button
    ref="buttonRef"
    :class="[$style.root, $style[`${variant}-${color}`]]"
    :disabled="isDisabled"
    type="button"
    @click="handleClick"
  >
    <span
      ref="rippleRef"
      :class="$style.ripple"
    />
    <Typography variant="subtitle">
      <slot />
    </Typography>
  </button>
</template>

<style module lang="postcss">
.root {
  position: relative;
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

.ripple {
  position: absolute;
  border-radius: 50%;
  opacity: 0.25;
  transform: scale(0);
  pointer-events: none;
  animation: ripple 0.5s ease-out;
  will-change: transform, opacity;
  background: currentColor;
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

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
