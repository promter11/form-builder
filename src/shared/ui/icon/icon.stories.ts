import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Icon } from "./";

const meta = {
  argTypes: {
    isSpaced: {
      control: {
        type: "boolean",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "s", "m"],
    },
  },
  component: Icon,
  title: "Components/Icon",
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: "pencil",
    size: "m",
  },
};
