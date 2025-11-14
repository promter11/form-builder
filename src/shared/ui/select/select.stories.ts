import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Select } from "./";

const meta = {
  component: Select,
  render: (args) => ({
    components: {
      Select,
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
    template: `
      <Select
        v-bind="args"
        @change="change"
      />
    `,
  }),
  tags: ["autodocs"],
  title: "Components/Select",
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      {
        text: "Item 1",
        value: "item_1",
      },
      {
        text: "Item 2",
        value: "item_2",
      },
      {
        text: "Item 3",
        value: "item_3",
      },
      {
        text: "Item 4",
        value: "item_4",
      },
      {
        text: "Item 5",
        value: "item_5",
      },
      {
        text: "Item 6",
        value: "item_6",
      },
      {
        text: "Item 7",
        value: "item_7",
      },
    ],
    label: "Label",
    placeholder: "Placeholder",
    value: "",
  },
};
