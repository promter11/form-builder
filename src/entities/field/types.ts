import type { KeyValueInputItem } from "@/shared/ui/key-value-input";

export type Field = {
  control: FieldControl;
  id: string;
  settings: UnionSetting[];
};

export type FieldControl = "checkbox" | "number" | "select" | "switch" | "text";

export type FieldPreset = {
  control: FieldControl;
  id: string;
  text: string;
};

export type UnionField = Record<FieldControl, Field>;

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
