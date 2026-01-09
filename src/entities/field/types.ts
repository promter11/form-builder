import type { KeyValueInputItem } from "@/shared/ui/key-value-input";

export type Field = CheckboxField | SelectField | SwitchField | TextField;

export type FieldPreset = {
  id: string;
  text: string;
  type: FieldType;
};

export type FieldType = "checkbox" | "number" | "select" | "switch" | "text";

export type BaseField = {
  id: string;
  type: FieldType;
};

export type CheckboxField = {
  checked: boolean;
  disabled: boolean;
  label: string;
  name: string;
  value: string;
} & BaseField;

export type SelectField = {
  disabled: boolean;
  items: KeyValueInputItem[];
  label: string;
  placeholder: string;
  value: string;
} & BaseField;

export type SwitchField = {
  checked: boolean;
  disabled: boolean;
  label: string;
  value: string;
} & BaseField;

export type TextField = {
  disabled: boolean;
  label: string;
  placeholder: string;
  value: string;
} & BaseField;

export type UnionField = {
  checkbox: CheckboxField;
  number: TextField;
  select: SelectField;
  switch: SwitchField;
  text: TextField;
};

export type Setting = {
  control: SettingControl;
  id: string;
  label: string;
};

export type SettingControl = "checkbox" | "keyValueInput" | "text";

export type SettingDefinition = Record<string, Setting>;
