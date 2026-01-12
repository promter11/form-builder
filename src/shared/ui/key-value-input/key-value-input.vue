<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

import type { KeyValueInputEmits, KeyValueInputItem, KeyValueInputProps } from "./types";

const emit = defineEmits<KeyValueInputEmits>();

defineProps<KeyValueInputProps>();

const onAdd = () => emit("add");
const onChange = (index: number, payload: Partial<KeyValueInputItem>) => emit("change", index, payload);
const onRemove = (index: number) => emit("remove", index);
</script>

<template>
  <div :class="$style.root">
    <div
      v-for="(item, index) of items"
      :key="item.id"
      :class="$style.container"
    >
      <Input
        placeholder="Key"
        :value="item.key"
        @input="(key) => onChange(index, { key })"
      />
      —
      <Input
        placeholder="Value"
        :value="item.value"
        @input="(value) => onChange(index, { value })"
      />
      <Button
        v-if="items.length > 1"
        :class="$style.removeButton"
        color="neutral"
        variant="plain"
        @click="onRemove(index)"
      >
        <Icon
          name="trash"
          size="xs"
        />
      </Button>
    </div>
    <Button
      :class="$style.addButton"
      @click="onAdd"
    >
      <Icon
        name="plus"
        size="s"
      />
      Add pair
    </Button>
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: var(--gap-control);
}

.container {
  display: flex;
  align-items: center;
  gap: var(--gap-control);
}

.removeButton {
  flex-shrink: 0;
}

.addButton {
  display: inline-flex;
  width: fit-content;
}
</style>
