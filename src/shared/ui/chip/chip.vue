<script setup lang="ts">
import { Icon, Typography } from "../";

import type { ChipEmits, ChipProps } from "./types";

const emit = defineEmits<ChipEmits>();

withDefaults(defineProps<ChipProps>(), {
  isClosable: false,
});

const onClose = () => emit("close");
</script>

<template>
  <div :class="$style.root">
    <Typography>
      <slot />
    </Typography>
    <button
      v-if="isClosable"
      type="button"
      @click="onClose"
    >
      <Icon
        :is-spaced="false"
        name="trash"
        size="xs"
      />
    </button>
  </div>
</template>

<style module lang="postcss">
.root {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 20px;
  background: var(--color-neutral);
  color: var(--color-neutral-fg);
}
</style>
