import { nanoid } from "nanoid";

import type { UnionField } from "../../types";

import { settings } from "./settings";

export const fields = {
  checkbox: {
    control: "checkbox",
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Checkbox" },
      settings.name,
      settings.value,
      settings.checked,
      settings.disabled,
    ],
  },
  number: {
    control: "number",
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Number input" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.value,
      settings.disabled,
    ],
  },
  select: {
    control: "select",
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Select" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.items,
      settings.value,
      settings.disabled,
    ],
  },
  switch: {
    control: "switch",
    id: nanoid(),
    settings: [{ ...settings.label, value: "Switch" }, settings.value, settings.checked, settings.disabled],
  },
  text: {
    control: "text",
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Text input" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.value,
      settings.disabled,
    ],
  },
} as const satisfies UnionField;
