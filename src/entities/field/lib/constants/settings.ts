import { nanoid } from "nanoid";

import type { UnionSetting } from "../../types";

export const definitions = {
  checked: {
    control: "checkbox",
    id: "checked",
    label: "Checked",
    value: false,
  },
  disabled: {
    control: "checkbox",
    id: "disabled",
    label: "Disabled",
    value: false,
  },
  items: {
    control: "keyValueInput",
    id: "items",
    items: [
      {
        id: nanoid(),
        key: "",
        value: "",
      },
    ],
    label: "Items",
    value: "",
  },
  label: {
    control: "text",
    id: "label",
    label: "Label",
    value: "",
  },
  placeholder: {
    control: "text",
    id: "placeholder",
    label: "Placeholder",
    value: "",
  },
  name: {
    control: "text",
    id: "name",
    label: "Name",
    value: "",
  },
  value: {
    control: "text",
    id: "value",
    label: "Value",
    value: "",
  },
} as const satisfies Record<string, UnionSetting>;
