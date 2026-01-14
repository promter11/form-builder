import { computed } from "vue";

import { useFormStore } from "@/features/form";

export const usePreview = () => {
  const formStore = useFormStore();

  const fields = computed(() =>
    formStore.fields.map(({ settings, ...field }) => {
      const props = Object.fromEntries(
        settings.map((setting) => {
          switch (setting.control) {
            case "keyValueInput":
              return [
                setting.id,
                setting.items.map((item) => ({
                  text: item.value,
                  value: item.key,
                })),
              ];

            default:
              return [setting.id, setting.value];
          }
        })
      );

      return {
        ...field,
        props: {
          ...props,
          ...(props.checked && { isChecked: props.checked }),
          ...(props.disabled && { isDisabled: props.disabled }),
        },
      };
    })
  );

  return {
    fields,
  };
};
