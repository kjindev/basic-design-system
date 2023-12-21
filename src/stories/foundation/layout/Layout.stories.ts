import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./Layout";

const meta = {
  title: "Foundation/Layout",
  component: Layout,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: "<Layout>Layout</Layout>",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Layout",
  },
};

export const Secondary: Story = {
  args: {
    label: "Layout",
  },
};

export const WithIcons: Story = {
  args: {
    size: "large",
    label: "Layout",
  },
};
