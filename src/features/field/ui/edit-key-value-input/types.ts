import type { KeyValueInputSetting } from "@/entities/field";

export type EditKeyValueInputEmits = {
  update: [payload: Partial<KeyValueInputSetting>];
};
export type EditKeyValueInputProps = {
  setting: KeyValueInputSetting;
};
