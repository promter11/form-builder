<script setup lang="ts">
import { computed, ref, useId } from "vue";

import { Icon } from "@/shared/ui";

import type { SelectItem } from "./types";

type Emits = {
  change: [value: string];
};

type Props = {
  items: SelectItem[];
  label?: string;
  placeholder?: string;
  value: string;
};

const emit = defineEmits<Emits>();

const props = defineProps<Props>();

const id = useId();

const isExpanded = ref(false);

const currentItem = computed(() => props.items.find((item) => item.value === props.value));

const onChange = (value: string) => emit("change", value);

const changeExpanded = (value: boolean) => {
  isExpanded.value = value;
};

const handleChange = (value: string) => {
  changeExpanded(false);
  onChange(value);
};

const handleClickOutside = () => changeExpanded(false);
</script>

<template>
  <div :class="$style.root">
    <label
      v-if="label"
      :class="$style.label"
      :for="id"
      @click.stop
    >
      {{ label }}
    </label>
    <button
      :id="id"
      v-click-outside="handleClickOutside"
      :class="[$style.button]"
      type="button"
      @click="changeExpanded(!isExpanded)"
    >
      <span :class="$style.text">{{ currentItem?.text ?? placeholder }}</span>
      <Icon
        :class="[$style.chevron, isExpanded && $style.reversed]"
        name="chevron-down"
        size="s"
      />
    </button>
    <Transition name="slide-up">
      <div
        v-if="isExpanded"
        :class="$style.list"
      >
        <button
          v-for="item of items"
          :key="item.value"
          :class="$style.item"
          type="button"
          @click="handleChange(item.value)"
        >
          <span :class="$style.text">{{ item.text }}</span>
          <Icon
            v-if="currentItem?.value === item.value"
            :class="$style.mark"
            name="check"
            size="s"
          />
        </button>
      </div>
    </Transition>
  </div>
</template>

<style module lang="postcss">
.root {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  width: fit-content;
  user-select: none;

  @add-mixin text-regular;
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 6px 12px;
  text-align: left;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: outline-color var(--transition-time), background-color var(--transition-time);
  outline: transparent solid var(--size-border-focus);
  user-select: none;

  @add-mixin text-regular;

  &:disabled {
    opacity: var(--opacity-item-disabled);
  }

  &:focus-visible {
    outline: var(--size-border-focus) solid var(--color-border-focus);
    outline-offset: var(--size-border-focus);
  }

  &:hover {
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
  top: calc(100% + 8px);
  width: 100%;
  max-height: 210px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow-y: auto;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  text-align: left;
  user-select: none;

  @add-mixin text-regular;

  &:hover {
    background: var(--color-neutral-hover);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

.text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.mark {
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--color-primary);
  color: var(--color-primary-fg);
}
</style>
