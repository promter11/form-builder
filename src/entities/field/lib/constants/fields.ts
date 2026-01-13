import { nanoid } from "nanoid";

import type { UnionField } from "../../types";

import { settings } from "./settings";

export const fields = {
  checkbox: {
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Checkbox" },
      settings.name,
      settings.value,
      settings.checked,
      settings.disabled,
    ],
    value: "",
  },
  number: {
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Number input" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.value,
      settings.disabled,
    ],
    value: "",
  },
  select: {
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Select" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.items,
      settings.value,
      settings.disabled,
    ],
    value: "",
  },
  switch: {
    id: nanoid(),
    settings: [{ ...settings.label, value: "Switch" }, settings.value, settings.checked, settings.disabled],
    value: "",
  },
  text: {
    id: nanoid(),
    settings: [
      { ...settings.label, value: "Text input" },
      { ...settings.placeholder, value: "Placeholder" },
      settings.value,
      settings.disabled,
    ],
    value: "",
  },
} as const satisfies UnionField;
