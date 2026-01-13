import { computed } from "vue";

import { useFormStore } from "@/features/form";
import { useClipboard } from "@/shared/composables";
import { useToast } from "@/shared/ui/toast";

export const useSchema = () => {
  const clipboard = useClipboard();
  const formStore = useFormStore();
  const toast = useToast();

  const schema = computed(() =>
    JSON.stringify(
      formStore.fields,
      (key, value) => {
        if (key === "id") {
          return undefined;
        }

        return value;
      },
      2
    )
  );

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
