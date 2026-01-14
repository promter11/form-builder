import { computed } from "vue";

import { useFormStore } from "@/features/form";
import { useClipboard } from "@/shared/composables";
import { useToast } from "@/shared/ui/toast";

export const useSchema = () => {
  const clipboard = useClipboard();
  const formStore = useFormStore();
  const toast = useToast();

  const fields = computed(() =>
    formStore.fields.map((field) =>
      Object.fromEntries(
        field.settings.map((setting) => {
          switch (setting.control) {
            case "keyValueInput":
              return [setting.id, setting.items.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {})];

            default:
              return [setting.id, setting.value];
          }
        })
      )
    )
  );
  const schema = computed(() => fields.value.map((item) => JSON.stringify(item, null, 2)).join(",\n"));

  const copy = async (text: string) => {
    try {
      await clipboard.copy(text);
      toast?.actions?.create({
        title: "Copied successfully",
        variant: "success",
      });
    } catch {
      toast?.actions?.create({
        title: "Copy failed",
        variant: "danger",
      });
    }
  };

  return {
    schema,
    copy,
  };
};
