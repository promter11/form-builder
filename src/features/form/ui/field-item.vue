<script setup lang="ts">
import { toRef } from "vue";

import type { Field } from "@/entities/field";
import { useFormStore, useDragReorder } from "@/features/form";
import { Button, Card, Divider, Icon, Typography } from "@/shared/ui";

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
    :class="[$style.root, dragReorder.from.value === index && $style.dragging]"
    @dragover.prevent="dragReorder.over(index)"
    @drop="dragReorder.drop(index)"
  >
    <div :class="$style.container">
      <Button
        :class="$style.dragButton"
        color="neutral"
        draggable="true"
        variant="plain"
        @dragend="dragReorder.reset"
        @dragstart="dragReorder.start(index)"
      >
        <Icon
          name="dots-vertical"
          size="xs"
        />
      </Button>
      <Typography :class="$style.label">{{ field.label }}</Typography>
    </div>
    <div :class="$style.actions">
      <div
        v-if="formStore.activeFieldId === field.id"
        :class="$style.mark"
      >
        <Icon
          :class="$style.markIcon"
          name="circle-check"
          size="xs"
        />
        <Divider direction="vertical" />
      </div>
      <Button
        color="neutral"
        variant="plain"
        @click="formStore.changeActiveFieldId(formStore.activeFieldId === field.id ? '' : field.id)"
      >
        <Icon
          name="edit"
          size="xs"
        />
      </Button>
      <Button
        color="neutral"
        variant="plain"
        @click="handleRemove(field)"
      >
        <Icon
          name="trash"
          size="xs"
        />
      </Button>
    </div>
  </Card>
</template>

<style module lang="postcss">
.root {
  display: flex;
  align-items: center;
  gap: var(--gap-list-item);
  height: var(--size-control);
  user-select: none;
  transition:
    opacity var(--transition-time),
    background-color var(--transition-time);
  background: var(--color-neutral);

  &.dragging {
    opacity: 0.25;
  }
}

.container {
  display: flex;
  align-items: center;
  gap: var(--gap-list-item);
  overflow: hidden;
}

.label {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mark {
  display: flex;
  align-items: center;
  gap: var(--gap-list-actions);
  height: 100%;
}

.markIcon {
  color: var(--color-primary);
}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--gap-list-actions);
  flex-grow: 1;
  height: 100%;
}

.dragButton {
  cursor: move;
}
</style>
