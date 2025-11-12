import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Card } from "./";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    default: "Example",
  },
};
