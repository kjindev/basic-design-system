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
    size: {
      description: "Button의 크기를 결정합니다.",
      table: {
        defaultValue: { summary: "small" },
        // category: "Tabs.Trigger",
      },
      defaultValue: "small",
    },
    isDestructive: {
      description: "Button의 사용 가능 여부를 결정합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    // interactive: {
    //   description:
    //     "Button에 마우스를 올렸을 때의 효과를 결정합니다. isDestructive가 true일 때는 작동하지 않습니다.",
    //   table: {
    //     defaultValue: { summary: "none" },
    //   },
    //   control: {
    //     type: "radio",
    //   },
    //   defaultValue: "none",
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
