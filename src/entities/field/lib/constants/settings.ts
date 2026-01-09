import type { SettingDefinition } from "../../types";

const definitions = {
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
  checkbox: [definitions.label, definitions.name, definitions.value, definitions.checked, definitions.disabled],
  number: [definitions.label, definitions.placeholder, definitions.value, definitions.disabled],
  select: [definitions.label, definitions.placeholder, definitions.items, definitions.value, definitions.disabled],
  switch: [definitions.label, definitions.value, definitions.checked, definitions.disabled],
  text: [definitions.label, definitions.placeholder, definitions.value, definitions.disabled],
} as const;
