import { nanoid } from "nanoid";

import type { UnionField } from "../../types";

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
