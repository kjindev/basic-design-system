import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "Button은 사용자에게 입력을 받을 수 있도록 돕는 컴포넌트입니다.",
    docs: {
      // source: {
      //   code: "<Button>Button</Button>",
      // },
      description: {
        component: `- example`,
      },
    },
  },
  argTypes: {
    // children: {
    //   description: "Button 속의 내용을 결정합니다.",
    // },
    // size: {
    //   description: "Button의 크기를 결정합니다.",
    //   table: {
    //     // type: { summary: "boolean" },
    //     defaultValue: { summary: "medium" },
    //     // category: "Tabs.Trigger",
    //   },
    //   defaultValue: "medium",
    // },
    // fullWidth: {
    //   description: "Button의 넓이를 결정합니다.",
    //   table: {
    //     type: { summary: "boolean" },
    //     defaultValue: { summary: false },
    //     // category: "Tabs.Trigger",
    //   },
    //   defaultValue: false,
    // },
    // size: {
    //   control: { type: "radio" },
    //   defaultValue: "medium",
    //   options: ["small", "medium", "large"],
    // },
  },
  args: {
    size: "small",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    isDestructive: false,
  },
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: "red", value: "#f00" },
  //       { name: "green", value: "#0f0" },
  //       { name: "blue", value: "#00f" },
  //     ],
  //   },
  // },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: "WithIcon",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    type: "IconOnly",
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    type: "Subtle",
  },
};
