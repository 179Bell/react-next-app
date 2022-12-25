import Button from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      description: "ボタンバリアント",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    diabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabledフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      discription: "縦幅",
      table: {
        type: { summray: "number" },
      },
    },
    onclick: {
      description: "onClickイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: "primary", children: "Primary Button" };

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", children: "Secondary Button" };

export const Disabled = Template.bind({});
Disabled.args = { variant: "disabled", children: "Disabled Button" };
