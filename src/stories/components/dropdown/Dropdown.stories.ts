import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Dropdown은 사용자에게 선택 옵션을 나열하고, 그 중 하나를 선택할 수 있도록 돕는 컴포넌트입니다.",
  },
  argTypes: {
    withIcon: {
      description: "Dropdown의 아이콘 유무 결정합니다.",
      table: {
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
  },
  args: {
    withIcon: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    withIcon: true,
  },
};

export const Destructive: Story = {
  args: {
    withIcon: true,
    type: "Destructive",
  },
};
