import { computed } from "vue";

import type { UnionSetting } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { useClipboard } from "@/shared/composables";
import { useToast } from "@/shared/ui/toast";

export const useSchema = () => {
  const clipboard = useClipboard();
  const formStore = useFormStore();
  const toast = useToast();

  const schema = computed(() =>
    JSON.stringify(
      formStore.fields.map((field) => Object.fromEntries(field.settings.map(normalize))),
      null,
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

  const normalize = (setting: UnionSetting) => {
    switch (setting.control) {
      case "keyValueInput":
        return [setting.id, setting.items.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {})];

      default:
        return [setting.id, setting.value];
    }
  };

  return {
    schema,
    copy,
  };
};
