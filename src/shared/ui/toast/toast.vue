<script setup lang="ts">
import { Button } from "../button";
import { Icon } from "../icon";
import { Typography } from "../typography";

import type { ToastEmits, ToastProps } from "./types";
import { useToast } from "./use-toast";

const emit = defineEmits<ToastEmits>();
const props = withDefaults(defineProps<ToastProps>(), {
  duration: 2_000,
  title: "Toast title",
  variant: "success",
  value: false,
});

const onClose = () => emit("close");

const model = useToast(props, onClose);
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
          :name="model.iconByVariant.value"
          size="s"
        />
        <Typography variant="subtitle">{{ title }}</Typography>
      </div>
      <Button
        color="neutral"
        variant="plain"
        @click="onClose"
      >
        <Icon
          name="close"
          size="s"
        />
      </Button>
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
  width: calc(100% - var(--padding-toast) * 2);
  padding: var(--padding-surface);
  border: var(--size-surface-border) solid var(--color-surface-border);
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

.variant-danger {
  .icon {
    color: var(--color-danger);
  }
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
