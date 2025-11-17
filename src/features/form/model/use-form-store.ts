import { defineStore } from "pinia";
import { ref } from "vue";

import type { Field } from "@/entities/field";

export const useFormStore = defineStore("form", () => {
  const fields = ref<Field[]>([]);

  const addField = (field: Field) => {
    fields.value = [...fields.value, field];
  };

  const editField = (id: string, payload: Partial<Field>) => {
    const index = fields.value.findIndex((field) => field.id === id);

    if (!fields.value[index]) {
      return;
    }

    fields.value = [
      ...fields.value.slice(0, index),
      { ...fields.value[index], ...payload },
      ...fields.value.slice(index + 1),
    ];
  };

  const removeField = (id: string) => {
    const index = fields.value.findIndex((field) => field.id === id);

    if (index === -1) {
      return;
    }

    fields.value = [...fields.value.slice(0, index), ...fields.value.slice(index + 1)];
  };

  return {
    fields,
    addField,
    editField,
    removeField,
  };
});
