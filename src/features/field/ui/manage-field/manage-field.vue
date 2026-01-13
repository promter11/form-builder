<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Divider } from "@/shared/ui/divider";
import { Icon } from "@/shared/ui/icon";
import { Typography } from "@/shared/ui/typography";

import { useManageField } from "./use-manage-field";

const model = useManageField();
</script>

<template>
  <Card
    v-for="(field, index) of model.formStore.fields"
    :key="field.id"
    :class="[$style.root, model.dragReorder.from.value === index && $style.dragging]"
    @dragover.prevent="model.dragReorder.over(index)"
    @drop="model.dragReorder.drop(index)"
  >
    <div :class="$style.container">
      <Button
        :class="$style.dragButton"
        color="neutral"
        draggable="true"
        variant="plain"
        @dragend="model.dragReorder.reset"
        @dragstart="model.dragReorder.start(index)"
      >
        <Icon
          name="dots-vertical"
          size="xs"
        />
      </Button>
      <Typography :class="$style.label">{{ model.getLabel(field) }}</Typography>
    </div>
    <div :class="$style.actions">
      <div
        v-if="model.formStore.activeFieldId === field.id"
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
        @click="model.toggleField(field)"
      >
        <Icon
          name="edit"
          size="xs"
        />
      </Button>
      <Button
        color="neutral"
        variant="plain"
        @click="model.removeField(field)"
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
