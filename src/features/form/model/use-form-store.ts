import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { Field } from "@/entities/field";

export const useFormStore = defineStore("form", () => {
  const activeFieldId = ref("");
  const fields = ref<Field[]>([]);

  const activeField = computed(() => fields.value.find((field) => field.id === activeFieldId.value));

  const addField = (field: Field) => {
    fields.value = [...fields.value, field];
  };

  const changeActiveFieldId = (id: string) => {
    activeFieldId.value = id;
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
    activeField,
    activeFieldId,
    changeActiveFieldId,
    fields,
    addField,
    editField,
    removeField,
  };
});
