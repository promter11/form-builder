import { nanoid } from "nanoid";

import type { FieldPreset } from "../../types";

export const presets = [
  {
    control: "text",
    id: nanoid(),
    text: "Text input",
  },
  {
    control: "number",
    id: nanoid(),
    text: "Number input",
  },
  {
    control: "checkbox",
    id: nanoid(),
    text: "Checkbox",
  },
  {
    control: "select",
    id: nanoid(),
    text: "Select",
  },
  {
    control: "switch",
    id: nanoid(),
    text: "Switch",
  },
] as const satisfies FieldPreset[];
