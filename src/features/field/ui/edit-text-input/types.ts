import type { TextSetting } from "@/entities/field";

export type EditTextInputEmits = {
  update: [payload: Partial<TextSetting>];
};
export type EditTextInputProps = {
  setting: TextSetting;
};
