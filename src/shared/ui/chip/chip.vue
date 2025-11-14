<script setup lang="ts">
import { Icon, Typography } from "@/shared/ui";

type Emits = {
  close: [];
};

type Props = {
  isClosable?: boolean;
};

const emit = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
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
