<script setup lang="ts">
import { Input } from "../input";

import type { NumberInputProps, NumberInputEmits } from "./types";
import { useNumberInput } from "./use-number-input";

const emit = defineEmits<NumberInputEmits>();
const props = defineProps<NumberInputProps>();

const model = useNumberInput(props);

const onInput = (value: string) => emit("input", value);
</script>

<template>
  <Input
    inputmode="decimal"
    :label="label"
    :placeholder="placeholder"
    :value="model.formattedValue.value"
    @beforeinput="model.handleBeforeInput"
    @input="onInput"
  />
</template>
