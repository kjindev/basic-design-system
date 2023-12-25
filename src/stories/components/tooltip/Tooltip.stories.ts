import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Tooltip은 마우스 호버 또는 다른 상호 작용에 응답하여 추가 정보나 설명을 사용자에게 제공하는 역할을 하는 컴포넌트입니다.",
  },
  argTypes: {
    children: {
      description: "Tooltip의 내용입니다.",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const DarkMode: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    type: "DarkMode",
  },
};
