import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "./index";

export default {
  title: "Atoms/TextArea",
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "プレースホルダー",
      table: {
        type: { summary: "string" },
      },
    },
    rows: {
      control: { type: "number" },
      description: "行数",
      defaultValue: 5,
      table: {
        type: { summary: "number" },
      },
    },
    minRows: {
      control: { type: "number" },
      description: "最小行数",
      defaultValue: 5,
      table: {
        type: { summary: "number" },
      },
    },
    maxRows: {
      control: { type: "number" },
      description: "最大行数",
      defaultValue: 10,
      table: {
        type: { summary: "number" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      description: "バリデーションエラーフラグ",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description: "onChangeイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Normal = Template.bind({});

export const Error = Template.bind({});
Error.args = { hasError: true };
