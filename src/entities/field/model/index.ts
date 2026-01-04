import { nanoid } from "nanoid";

import type { AddButton, Field, FieldType } from "../types";

export const buttons = [
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
] as const satisfies AddButton[];

export const fields = {
  checkbox: {
    required: false,
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "checkbox",
    label: "Checkbox",
  },
  number: {
    required: false,
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "number",
    label: "Number input",
  },
  select: {
    required: false,
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "select",
    label: "Select",
  },
  switch: {
    required: false,
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "switch",
    label: "Switch",
  },
  text: {
    required: false,
    disabled: false,
    id: "",
    placeholder: "Placeholder",
    type: "text",
    label: "Text input",
  },
} as const satisfies Record<FieldType, Field>;
