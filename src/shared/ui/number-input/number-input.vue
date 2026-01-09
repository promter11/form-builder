<script setup lang="ts">
import { computed } from "vue";

import { Input } from "../input";

import type { NumberInputProps, NumberInputEmits } from "./types";

const emit = defineEmits<NumberInputEmits>();

const props = defineProps<NumberInputProps>();

const formatter = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 });
const separator = (1.1).toLocaleString().substring(1, 2);

const formattedValue = computed(() => {
  if (!numericValue.value) {
    return "";
  }

  return formatter.format(numericValue.value);
});

const numericValue = computed(() => {
  if (!props.value || props.value === separator) {
    return 0;
  }

  return Number(props.value.replace(separator, ".").replace(/[^\d.]/g, ""));
});

const onBeforeInput = (event: InputEvent) => {
  const char = event.data;

  if (!char) {
    return;
  }

  if (/\d/.test(char) && numericValue.value < Number.MAX_SAFE_INTEGER) {
    return;
  }

  if ((char === "." || char === ",") && !props.value?.includes(separator)) {
    return;
  }

  event.preventDefault();
};

const onInput = (value: string) => emit("input", value);
</script>

<template>
  <Input
    inputmode="decimal"
    :label="label"
    :placeholder="placeholder"
    :value="formattedValue"
    @beforeinput="onBeforeInput"
    @input="onInput"
  />
</template>
