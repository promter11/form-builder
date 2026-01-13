<script setup lang="ts">
import { Typography } from "../typography";

import type { TabsEmits, TabsProps } from "./types";
import { useTabs } from "./use-tabs";

const emit = defineEmits<TabsEmits>();
const props = defineProps<TabsProps>();

const model = useTabs(props);

const onChange = (value: string) => emit("change", value);
</script>

<template>
  <div
    :ref="model.rootRef"
    :class="$style.root"
  >
    <button
      v-for="item of items"
      :key="item.id"
      :ref="(element) => model.setTabRef(element, item.value)"
      :class="$style.tab"
      :disabled="item.isDisabled"
      type="button"
      @click="onChange(model.changeItem(item.value))"
    >
      <Typography>{{ item.label }}</Typography>
    </button>
    <span
      :class="$style.underline"
      :style="model.styles.value"
    />
  </div>
</template>

<style module lang="postcss">
.root {
  position: relative;
  display: flex;
}

.tab {
  display: inline-flex;
  align-items: center;
  height: var(--size-tab);
  padding: var(--padding-tab);
  white-space: nowrap;
  border-bottom: var(--size-tabs-underline) solid transparent;
  border-top-left-radius: var(--radius-tab);
  border-top-right-radius: var(--radius-tab);
  outline-color: var(--color-control-outline);
  transition:
    outline-color var(--transition-time),
    background-color var(--transition-time);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: transparent;
  color: var(--color-neutral-fg);

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:hover:not(:disabled) {
    background: var(--color-neutral-hover);
    color: var(--color-neutral-fg-hover);
  }
}

.underline {
  position: absolute;
  display: inline-flex;
  height: var(--size-tabs-underline);
  transition:
    left var(--transition-time),
    top var(--transition-time),
    width var(--transition-time);
  pointer-events: none;
  background: var(--color-primary);
}
</style>
