<script setup lang="ts">
import { onBeforeUnmount, watch } from "vue";

import { Icon, Typography } from "../";

import type { ToastEmits, ToastProps, ToastVariant } from "./types";

const emit = defineEmits<ToastEmits>();

const props = withDefaults(defineProps<ToastProps>(), {
  duration: 2_000,
  title: "Toast title",
  variant: "success",
  value: false,
});

const iconsByVariant = {
  success: "success",
} as const satisfies Record<ToastVariant, string>;

let timeout: ReturnType<typeof setTimeout>;

const onClose = () => emit("close");

watch(
  () => props.value,
  (value) => {
    if (value) {
      timeout = setTimeout(onClose, props.duration);
    } else {
      clearTimeout(timeout);
    }
  }
);

onBeforeUnmount(() => clearTimeout(timeout));
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="value"
      :key="id"
      :class="[$style.root, $style[`variant-${variant}`]]"
    >
      <div :class="$style.progress" />
      <div :class="$style.container">
        <Icon
          :class="$style.icon"
          :name="iconsByVariant[variant]"
          size="s"
        />
        <Typography variant="subtitle">{{ title }}</Typography>
      </div>
      <button
        :class="$style.button"
        type="button"
        @click="onClose"
      >
        <Icon
          name="close"
          size="s"
        />
      </button>
    </div>
  </Transition>
</template>

<style module lang="postcss">
.root {
  position: fixed;
  right: var(--padding-toast);
  bottom: var(--padding-toast);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-toast);
  max-width: var(--size-toast);
  width: 100%;
  padding: var(--padding-surface);
  border-radius: var(--radius-surface);
  box-shadow: var(--shadow-surface);
  user-select: none;
  background: var(--color-surface);
}

.progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -10;
  animation-duration: v-bind(duration + "ms");
  animation-fill-mode: forwards;
  animation-name: progress;
  animation-timing-function: linear;
  border-radius: inherit;
  background: var(--color-control-subtle);
}

.container {
  display: flex;
  align-items: center;
  gap: var(--gap-toast);
}

.button {
  display: inline-flex;
}

.variant-success {
  .icon {
    color: var(--color-success);
  }
}

@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
