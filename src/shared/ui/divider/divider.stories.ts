import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Divider } from "./";

const meta = {
  component: Divider,
  tags: ["autodocs"],
  title: "Components/Divider",
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
