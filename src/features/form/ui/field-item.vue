<script setup lang="ts">
import { toRef } from "vue";

import type { Field } from "@/entities/field";
import { useFormStore, useDragReorder } from "@/features/form";
import { Card, Icon } from "@/shared/ui";

const formStore = useFormStore();

const dragReorder = useDragReorder(toRef(() => formStore.fields));

const handleRemove = (field: Field) => {
  if (formStore.activeFieldId === field.id) {
    formStore.changeActiveFieldId("");
  }

  formStore.removeField(field.id);
};
</script>

<template>
  <Card
    v-for="(field, index) of formStore.fields"
    :key="field.id"
    :class="[
      $style.root,
      formStore.activeFieldId === field.id && $style.active,
      dragReorder.from.value === index && $style.dragging,
    ]"
    @dragover.prevent="dragReorder.over(index)"
    @drop="dragReorder.drop(index)"
  >
    <div :class="$style.container">
      <button
        :class="$style.dragButton"
        draggable="true"
        @dragend="dragReorder.reset"
        @dragstart="dragReorder.start(index)"
      >
        <Icon
          is-spaced
          name="dots-vertical"
          size="s"
        />
      </button>
      {{ field.type }} — {{ field.label }}
    </div>
    <div :class="$style.actions">
      <button
        :class="$style.editButton"
        @click="formStore.changeActiveFieldId(formStore.activeFieldId === field.id ? '' : field.id)"
      >
        <Icon
          is-spaced
          name="pencil"
          size="s"
        />
      </button>
      <button
        :class="$style.removeButton"
        @click="handleRemove(field)"
      >
        <Icon
          is-spaced
          name="trash"
          size="s"
        />
      </button>
    </div>
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  align-items: center;
  gap: var(--gap-list-item);
  user-select: none;
  transition:
    opacity var(--transition-time),
    background var(--transition-time);

  &.active {
    background: var(--color-control-subtle);
  }

  &.dragging {
    opacity: 0.25;
  }
}

.container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: var(--gap-list-item);
}

.actions {
  display: flex;
  gap: var(--gap-list-actions);
}

.dragButton,
.editButton,
.removeButton {
  display: inline-flex;
}

.dragButton {
  cursor: move;
  color: var(--color-neutral-fg);
}
</style>
