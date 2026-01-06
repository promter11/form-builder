import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { NumberInput } from "./";

const meta = {
  component: NumberInput,
  render: (args) => ({
    components: {
      NumberInput,
    },
    setup() {
      const beforeInput = (event: Event) => {
        if (event.target instanceof HTMLInputElement) {
          Object.assign(args, { value: event.target.value });
        }
      };

      const input = (value: string) => {
        Object.assign(args, { value });
      };

      return {
        args,
        beforeInput,
        input,
      };
    },
    template: `
      <NumberInput
        v-bind="args"
        @beforeinput="beforeInput"
        @input="input"
      />
    `,
  }),
  tags: ["autodocs"],
  title: "Components/NumberInput",
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};
