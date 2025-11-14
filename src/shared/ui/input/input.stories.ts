import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Input } from "./";

const meta = {
  component: Input,
  tags: ["autodocs"],
  title: "Components/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    value: "",
  },
};
