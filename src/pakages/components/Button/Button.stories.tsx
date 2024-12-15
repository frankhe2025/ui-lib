import Button from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const meta = {
  title: "Demo/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Primary: Story = {
  args: {
    title: "My Own Button",
  },
};
