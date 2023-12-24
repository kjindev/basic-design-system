import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "Label은 부가적인 설명을 추가할 때 사용하는 컴포넌트입니다.",
  },
  argTypes: {
    // size: {
    //   description: "Label의 크기를 결정합니다.",
    //   table: {
    //     defaultValue: { summary: "small" },
    //     // category: "Tabs.Trigger",
    //   },
    //   defaultValue: "small",
    // },
    // isDestructive: {
    //   description: "Label의 사용 가능 여부를 결정합니다.",
    //   table: {
    //     type: { summary: "boolean" },
    //     defaultValue: { summary: false },
    //   },
    //   defaultValue: false,
    // },
    // interactive: {
    //   description:
    //     "Label에 마우스를 올렸을 때의 효과를 결정합니다. isDestructive가 true일 때는 작동하지 않습니다.",
    //   table: {
    //     defaultValue: { summary: "none" },
    //   },
    //   control: {
    //     type: "radio",
    //   },
    //   defaultValue: "none",
    // },
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
    label: "category",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: "WithIcon",
  },
};
