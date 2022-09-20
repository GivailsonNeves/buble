import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "../../components/atoms/icon-button";
import { PenIcon } from "../../components/atoms/icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  children: <PenIcon color="black" />,
};
