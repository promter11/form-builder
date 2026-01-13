<script setup lang="ts">
import { useId } from "vue";

import { Icon } from "../icon";
import { Typography } from "../typography";

import type { SelectEmits, SelectProps } from "./types";
import { useSelect } from "./use-select";

const emit = defineEmits<SelectEmits>();
const props = withDefaults(defineProps<SelectProps>(), {
  isDisabled: false,
});

const id = useId();
const model = useSelect(props);

const onChange = (value: string) => emit("change", value);
</script>

<template>
  <div :class="$style.root">
    <label
      v-if="label"
      :class="$style.label"
      :for="id"
      @click.stop
    >
      <Typography>{{ label }}</Typography>
    </label>
    <button
      :id="id"
      v-click-outside="model.handleClickOutside"
      :class="$style.button"
      :disabled="isDisabled"
      type="button"
      @click="model.changeExpanded(!model.isExpanded.value)"
    >
      <Typography :class="$style.text">{{ model.currentItem.value?.text ?? placeholder }}</Typography>
      <Icon
        :class="[$style.chevron, model.isExpanded.value && $style.reversed]"
        name="chevron-down"
        size="xs"
      />
    </button>
    <Transition name="slide-up">
      <div
        v-if="model.isExpanded.value"
        :class="$style.list"
      >
        <div :class="$style.inner">
          <button
            v-for="item of items"
            :key="item.value"
            :class="$style.item"
            type="button"
            @click="onChange(model.handleChange(item.value))"
          >
            <Typography :class="$style.text">{{ item.text }}</Typography>
            <Icon
              v-if="model.currentItem.value?.value === item.value"
              :class="$style.mark"
              name="circle-check"
              size="s"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style module lang="postcss">
.root {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--gap-control);
}

.label {
  width: fit-content;
  user-select: none;
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-control);
  height: var(--size-control);
  padding: var(--padding-control);
  text-align: left;
  border: var(--size-control-border) solid var(--color-control-border);
  border-radius: var(--radius-control);
  transition:
    outline-color var(--transition-time),
    background-color var(--transition-time);
  outline: transparent solid var(--size-control-outline);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: var(--color-control-subtle);

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:focus-visible:not(:disabled) {
    outline: var(--size-control-outline) solid var(--color-control-outline);
    outline-offset: var(--size-control-outline);
  }

  &:hover:not(:disabled) {
    background: var(--color-neutral-hover);
  }
}

.chevron {
  flex-shrink: 0;
  transform: rotate(0deg);
  transition: transform var(--transition-time);

  &.reversed {
    transform: rotate(180deg);
  }
}

.list {
  position: absolute;
  top: calc(100% + var(--gap-control));
  width: 100%;
  border: var(--size-control-border) solid var(--color-control-border);
  border-radius: var(--radius-control);
  overflow: hidden;
}

.inner {
  max-height: var(--size-select-list);
  overflow-y: auto;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-control);
  width: 100%;
  height: var(--size-control);
  padding: var(--padding-control);
  text-align: left;
  transition: background-color var(--transition-time);
  user-select: none;

  &:not(:last-child) {
    border-bottom: var(--size-control-border) solid var(--color-control-border);
  }

  &:hover:not(:disabled) {
    background: var(--color-neutral-hover);
  }
}

.text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.mark {
  flex-shrink: 0;
  color: var(--color-primary);
}
</style>
