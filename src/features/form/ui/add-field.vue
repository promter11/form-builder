<script setup lang="ts">
import type { Field } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { Button, useToast } from "@/shared/ui";

type Props = {
  field: Field;
};

const props = defineProps<Props>();

const formStore = useFormStore();

const toast = useToast();

const createField = () => {
  formStore.addField(props.field);
  toast?.actions?.create({
    title: "Successfully added",
    variant: "success",
  });
};
</script>

<template>
  <Button
    color="neutral"
    variant="solid"
    @click="createField"
  >
    {{ field.label }}
  </Button>
</template>
