<script setup lang="ts">
import { nanoid } from "nanoid";

import type { FieldPreset } from "@/entities/field";
import { fields } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { Button } from "@/shared/ui/button";
import { useToast } from "@/shared/ui/toast";

type Props = {
  preset: FieldPreset;
};

const props = defineProps<Props>();

const formStore = useFormStore();

const toast = useToast();

const createField = () => {
  formStore.addField({
    ...fields[props.preset.type],
    id: nanoid(),
  });
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
    {{ preset.text }}
  </Button>
</template>
