import { nanoid } from "nanoid";

import type { UnionField } from "../../types";

import { definitions } from "./settings";

export const fields = {
  checkbox: {
    id: nanoid(),
    settings: [
      { ...definitions.label, value: "Checkbox" },
      definitions.name,
      definitions.value,
      definitions.checked,
      definitions.disabled,
    ],
    value: "",
  },
  number: {
    id: nanoid(),
    settings: [
      { ...definitions.label, value: "Number input" },
      { ...definitions.placeholder, value: "Placeholder" },
      definitions.value,
      definitions.disabled,
    ],
    value: "",
  },
  select: {
    id: nanoid(),
    settings: [
      { ...definitions.label, value: "Select" },
      { ...definitions.placeholder, value: "Placeholder" },
      definitions.items,
      definitions.value,
      definitions.disabled,
    ],
    value: "",
  },
  switch: {
    id: nanoid(),
    settings: [{ ...definitions.label, value: "Switch" }, definitions.value, definitions.checked, definitions.disabled],
    value: "",
  },
  text: {
    id: nanoid(),
    settings: [
      { ...definitions.label, value: "Text input" },
      { ...definitions.placeholder, value: "Placeholder" },
      definitions.value,
      definitions.disabled,
    ],
    value: "",
  },
} as const satisfies UnionField;
