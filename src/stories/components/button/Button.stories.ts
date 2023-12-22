import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: "<Button>Button</Button>",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      defaultValue: "Primary",
      options: ["Primary", "With Icons", "Disabled"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    type: "Primary",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Button",
    type: "WithIcons",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Button",
    type: "FullWidth",
  },
};

export const Subtle: Story = {
  args: {
    children: "Button",
    type: "FullWidth",
  },
};

export const Circled: Story = {
  args: {
    children: "Button",
    type: "FullWidth",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    type: "Disabled",
  },
};
