import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle: "Dropdown은 사용자에게 알림을 전달하는 컴포넌트입니다.",
  },
  // argTypes: {
  //   withButton: {
  //     description: "Dropdown의 버튼 유무 결정합니다.",
  //     table: {
  //       defaultValue: { summary: false },
  //     },
  //     defaultValue: false,
  //   },
  //   label: {
  //     description: "Dropdown의 내용입니다.",
  //   },
  // },
  // args: {
  //   withButton: false,
  // },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "This is information Dropdown.",
  },
};

export const Destructive: Story = {
  args: {
    label: "This is error Dropdown.",
    type: "Destructive",
  },
};
