import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { nanoid } from "nanoid";

import { Tabs } from "./";

const meta = {
  component: Tabs,
  render: (args) => ({
    components: {
      Tabs,
    },
    setup() {
      const change = (value: string) => {
        Object.assign(args, { value });
      };

      return {
        args,
        change,
      };
    },
    template: `<Tabs v-bind="args" @change="change" />`,
  }),
  title: "Components/Tabs",
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      { id: nanoid(), label: "All", value: "all" },
      { id: nanoid(), label: "Components", value: "components" },
      { id: nanoid(), label: "Groups", value: "groups" },
    ],
    value: "all",
  },
};
