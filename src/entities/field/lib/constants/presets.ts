import { nanoid } from "nanoid";

import type { FieldPreset } from "../../types";

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
