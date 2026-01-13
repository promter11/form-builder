import type { CheckboxSetting } from "@/entities/field";

export type EditCheckboxEmits = {
  update: [payload: Partial<CheckboxSetting>];
};
export type EditCheckboxProps = {
  setting: CheckboxSetting;
};
