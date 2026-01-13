import { toRef } from "vue";

import type { Field } from "@/entities/field";
import { useDragReorder } from "@/features/field";
import { useFormStore } from "@/features/form";

export function useManageField() {
  const formStore = useFormStore();
  const dragReorder = useDragReorder(toRef(() => formStore.fields));

  const getLabel = (field: Field) => {
    const setting = field.settings.find((setting) => setting.id === "label");
    return setting?.value ?? "Field";
  };

  const removeField = (field: Field) => {
    if (formStore.activeFieldId === field.id) {
      formStore.changeActiveFieldId("");
    }

    formStore.removeField(field.id);
  };

  const toggleField = (field: Field) =>
    formStore.changeActiveFieldId(formStore.activeFieldId === field.id ? "" : field.id);

  return {
    formStore,
    dragReorder,
    getLabel,
    removeField,
    toggleField,
  };
}
