<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";
import { computed, onMounted, ref, shallowRef } from "vue";

import { Typography } from "../";

import type { TabsEmits, TabsProps } from "./types";

const emit = defineEmits<TabsEmits>();

const props = defineProps<TabsProps>();

const activeTabRect = ref<DOMRect>();
const tabRefs = shallowRef(new Map<string, HTMLElement>());
const rootRef = ref<HTMLDivElement>();

const styles = computed(() => {
  if (!activeTabRect.value || !rootRef.value) {
    return undefined;
  }

  const rootRect = rootRef.value.getBoundingClientRect();

  return {
    left: `${activeTabRect.value.left - rootRect.left}px`,
    top: `${activeTabRect.value.bottom - rootRect.top}px`,
    width: `${activeTabRect.value.width}px`,
  };
});

const onChange = (value: string) => emit("change", value);

const changeItem = (value: string) => {
  setActiveTabRect(value);
  onChange(value);
};

const setActiveTabRect = (value: string) => {
  const tabRef = tabRefs.value.get(value);
  if (!tabRef) {
    return;
  }
  activeTabRect.value = tabRef.getBoundingClientRect();
};

const setTabRef = (element: Element | ComponentPublicInstance | null, value: string) => {
  if (element instanceof HTMLElement) {
    tabRefs.value.set(value, element);
  } else {
    tabRefs.value.delete(value);
  }
};

onMounted(() => changeItem(props.value));
</script>

<template>
  <div
    ref="rootRef"
    :class="$style.root"
  >
    <button
      v-for="item of items"
      :key="item.id"
      :ref="(element) => setTabRef(element, item.value)"
      :class="$style.tab"
      :disabled="item.isDisabled"
      type="button"
      @click="changeItem(item.value)"
    >
      <Typography>{{ item.label }}</Typography>
    </button>
    <span
      :class="$style.underline"
      :style="styles"
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
  transition: background-color var(--transition-time);
  background: transparent;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:hover {
    background: var(--color-neutral-hover);
  }

  &:focus-visible {
    outline-color: var(--color-control-outline);
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
