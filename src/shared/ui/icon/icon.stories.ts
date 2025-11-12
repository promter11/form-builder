import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Icon } from "./";

const meta = {
  component: Icon,
  tag: ["autodocs"],
  title: "Components/Icon",
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: "pencil",
  },
};
