import { nanoid } from "nanoid";

import type { FieldPreset, SettingDefinition, UnionField } from "../types";

export const fields = {
  checkbox: {
    checked: false,
    disabled: false,
    id: "",
    label: "Checkbox",
    name: "",
    type: "checkbox",
    value: "",
  },
  number: {
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "number",
    label: "Number input",
    value: "",
  },
  select: {
    disabled: false,
    id: "",
    items: [{ id: nanoid(), key: "", value: "" }],
    label: "Select",
    placeholder: "Placeholder",
    type: "select",
    value: "",
  },
  switch: {
    checked: false,
    disabled: false,
    label: "Switch",
    id: "",
    type: "switch",
    value: "",
  },
  text: {
    disabled: false,
    id: "",
    label: "Text input",
    placeholder: "Placeholder",
    type: "text",
    value: "",
  },
} as const satisfies UnionField;

export const presets = [
  {
    id: nanoid(),
    text: "Text input",
    type: "text",
  },
  {
    id: nanoid(),
    text: "Number input",
    type: "number",
  },
  {
    id: nanoid(),
    text: "Checkbox",
    type: "checkbox",
  },
  {
    id: nanoid(),
    text: "Select",
    type: "select",
  },
  {
    id: nanoid(),
    text: "Switch",
    type: "switch",
  },
] as const satisfies FieldPreset[];

const settingDefinitions = {
  checked: {
    control: "checkbox",
    id: "checked",
    label: "Checked",
  },
  disabled: {
    control: "checkbox",
    id: "disabled",
    label: "Disabled",
  },
  items: {
    control: "keyValueInput",
    id: "items",
    label: "Items",
  },
  label: {
    control: "text",
    id: "label",
    label: "Label",
  },
  placeholder: {
    control: "text",
    id: "placeholder",
    label: "Placeholder",
  },
  name: {
    control: "text",
    id: "name",
    label: "Name",
  },
  value: {
    control: "text",
    id: "value",
    label: "Value",
  },
} as const satisfies SettingDefinition;

export const settings = {
  checkbox: [
    settingDefinitions.label,
    settingDefinitions.name,
    settingDefinitions.value,
    settingDefinitions.checked,
    settingDefinitions.disabled,
  ],
  number: [
    settingDefinitions.label,
    settingDefinitions.placeholder,
    settingDefinitions.value,
    settingDefinitions.disabled,
  ],
  select: [
    settingDefinitions.label,
    settingDefinitions.placeholder,
    settingDefinitions.items,
    settingDefinitions.value,
    settingDefinitions.disabled,
  ],
  switch: [settingDefinitions.label, settingDefinitions.value, settingDefinitions.checked, settingDefinitions.disabled],
  text: [
    settingDefinitions.label,
    settingDefinitions.placeholder,
    settingDefinitions.value,
    settingDefinitions.disabled,
  ],
} as const;
