import { Meta, Story } from "@storybook/react";
import CustomButton, { ButtonProps } from "./CustomButton";

export default {
  title: "soulhn/Button",
  component: CustomButton,
  argTypes: { clickHandler: { action: "clicked" } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
  color: "white",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue",
  backgroundColor: "blue",
  size: "md",
  color: "white",
};

export const SmButton = Template.bind({});
SmButton.args = {
  label: "Small Button",
  backgroundColor: "gray",
  size: "sm",
  color: "black",
};

export const LgButton = Template.bind({});
LgButton.args = {
  label: "Large Button",
  backgroundColor: "gray",
  size: "lg",
  color: "black",
};

export const MainButton = Template.bind({});
MainButton.args = {
  label: "Main Button",
  backgroundColor: "brown",
  size: "lg",
  color: "black",
};
