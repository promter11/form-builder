<script setup lang="ts">
import { Button } from "@/shared/ui/button";

import type { AddFieldProps } from "./types";
import { useAddField } from "./use-add-field";

const props = defineProps<AddFieldProps>();

const model = useAddField(props);
</script>

<template>
  <Button
    color="neutral"
    variant="solid"
    @click="model.addField"
  >
    {{ preset.text }}
  </Button>
</template>
