import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    controls: { exclude: ["type"] },
    layout: "centered",
    componentSubtitle:
      "Label은 다른 요소에 부여된 설명이나 이름을 제공하는 컴포넌트입니다.",
  },
  argTypes: {
    children: {
      description: "Label의 내용입니다.",
    },
  },
  //   args: {
  //     size: "small",
  //   },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "category",
  },
};

export const WithIcon: Story = {
  args: {
    children: "category",
    type: "WithIcon",
  },
};
