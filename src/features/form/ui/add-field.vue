<script setup lang="ts">
import type { Field } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { Button } from "@/shared/ui";

type Props = {
  field: Field;
};

defineProps<Props>();

const formStore = useFormStore();
</script>

<template>
  <Button
    color="neutral"
    variant="solid"
    @click="formStore.addField(field)"
  >
    {{ field.label }}
  </Button>
</template>
