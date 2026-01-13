import { computed } from "vue";

import type { FieldSettingsProps } from "../types";

export const useFieldSettings = (props: FieldSettingsProps) => {
  const label = computed(() => props.settings.find((setting) => setting.id === "label"));
  return {
    label,
  };
};
