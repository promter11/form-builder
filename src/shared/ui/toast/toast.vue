<script setup lang="ts">
import { Icon, Typography } from "../";

import type { ToastEmits, ToastProps } from "./types";

const emit = defineEmits<ToastEmits>();

withDefaults(defineProps<ToastProps>(), {
  title: "Toast title",
  variant: "success",
  value: false,
});

const onClose = () => emit("close");
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="value"
      :class="$style.root"
    >
      <div :class="$style.container">
        <Icon
          :class="$style.icon"
          name="success"
          size="s"
        />
        <Typography variant="subtitle">{{ title }}</Typography>
      </div>
      <button
        :class="$style.button"
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
  background: var(--color-surface);
}

.container {
  display: flex;
  align-items: center;
  gap: var(--gap-toast);
}

.icon {
  color: var(--color-success);
}

.button {
  display: inline-flex;
}
</style>
