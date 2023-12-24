import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Tooltip은 컴포넌트에 마우스를 올리면 정보가 나타나게 하는 효과를 정의합니다.",
  },
  argTypes: {
    label: {
      description: "Tooltip의 내용입니다.",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "The quick brown fox jumps over the lazy dog.",
  },
};

export const DarkMode: Story = {
  args: {
    label: "The quick brown fox jumps over the lazy dog.",
    type: "DarkMode",
  },
};
