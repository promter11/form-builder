import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { nanoid } from "nanoid";

import { KeyValueInput } from "./";

const meta = {
  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },
  },
  component: KeyValueInput,
  render: (args) => ({
    components: {
      KeyValueInput,
    },
    setup() {
      const add = () => {
        Object.assign(args, {
          items: [
            ...args.items,
            {
              id: nanoid(),
              key: "",
              value: "",
            },
          ],
        });
      };

      const change = (index: number, payload: object) => {
        Object.assign(args, {
          items: [...args.items.slice(0, index), { ...args.items[index], ...payload }, ...args.items.slice(index + 1)],
        });
      };

      const remove = (index: number) => {
        Object.assign(args, {
          items: [...args.items.slice(0, index), ...args.items.slice(index + 1)],
        });
      };

      return {
        args,
        add,
        change,
        remove,
      };
    },
    template: `
      <KeyValueInput
        v-bind="args"
        @add="add"
        @change="change"
        @remove="remove"
      />
    `,
  }),
  title: "Components/KeyValueInput",
} satisfies Meta<typeof KeyValueInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      {
        id: nanoid(),
        key: "",
        value: "",
      },
    ],
  },
};
