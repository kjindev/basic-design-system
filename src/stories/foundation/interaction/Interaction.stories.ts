import type { Meta, StoryObj } from "@storybook/react";

import Interaction from "./Interaction";

const meta = {
  title: "Foundation/Interaction",
  component: Interaction,
  parameters: {
    Interaction: "centered",
    docs: {
      source: {
        code: "<Interaction>Interaction</Interaction>",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Interaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Interaction",
  },
};

export const Secondary: Story = {
  args: {
    label: "Interaction",
  },
};

export const WithIcons: Story = {
  args: {
    size: "large",
    label: "Interaction",
  },
};
