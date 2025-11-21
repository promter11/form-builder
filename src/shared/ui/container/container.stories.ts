import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Container } from "./";

const meta = {
  component: Container,
  render: (args) => ({
    components: {
      Container,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Container v-bind="args">
        <div
          style="
            border-radius: 12px;
            padding: 12px 16px;
            background-color: #f8f8f8
          "
        >
          Container
        </div>
      </Container>
    `,
  }),
  title: "Components/Container",
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
