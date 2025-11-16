import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Card } from "./";

const meta = {
  component: Card,
  render: (args) => ({
    components: {
      Card,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<Card v-bind="args">Card</Card>`,
  }),
  title: "Components/Card",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
