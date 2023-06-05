import React from "react";
import { Story, Meta } from "@storybook/react";

import CustomProgressBar, { ProgressBarProps } from "./CustomProgressBar";

export default {
  title: "soulhn/CustomProgressBar",
  component: CustomProgressBar,
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    marginBottom: {
      control: "text",
    },
    feat: {
      control: { type: "select", options: ["simple", "default"] },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <CustomProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  feat: "default",
};

export const Simple = Template.bind({});
Simple.args = {
  progress: 50,
  feat: "simple",
};

export const CustomMargin = Template.bind({});
CustomMargin.args = {
  progress: 50,
  marginBottom: "100px",
};
