import type { Field } from "../types";

export const fields = [
  {
    required: false,
    disabled: false,
    id: Date.now().toString(),
    placeholder: "Placeholder",
    type: "text",
    label: "Text input",
  },
] as const satisfies Field[];
