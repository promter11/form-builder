import type { UnionSetting } from "@/entities/field";
import { useFormStore } from "@/features/form";

export const useBuilder = () => {
  const formStore = useFormStore();

  const updateSetting = <T extends UnionSetting>(index: number, payload: Partial<T>) => {
    const field = formStore.activeField;
    if (!field) {
      return;
    }

    const current = field.settings[index] as T;

    formStore.editField(formStore.activeFieldId, {
      settings: [
        ...field.settings.slice(0, index),
        {
          ...current,
          ...payload,
        },
        ...field.settings.slice(index + 1),
      ],
    });
  };

  return {
    formStore,
    updateSetting,
  };
};
