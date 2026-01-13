import type { KeyValueInputItem } from "@/shared/ui/key-value-input";

export type Field = {
  id: string;
  settings: UnionSetting[];
};

export type FieldPreset = {
  id: string;
  text: string;
  type: FieldType;
};

export type FieldType = "checkbox" | "number" | "select" | "switch" | "text";

export type UnionField = Record<FieldType, Field>;

export type BaseSetting = {
  id: string;
  label: string;
};

export type CheckboxSetting = {
  control: "checkbox";
  value: boolean;
} & BaseSetting;

export type KeyValueInputSetting = {
  control: "keyValueInput";
  items: KeyValueInputItem[];
  value: string;
} & BaseSetting;

export type TextSetting = {
  control: "text";
  value: string;
} & BaseSetting;

export type UnionSetting = CheckboxSetting | KeyValueInputSetting | TextSetting;
