import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PoweredBy from "../../components/atoms/powered-by";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/PoweredBy",
  component: PoweredBy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PoweredBy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PoweredBy> = (args) => (
  <PoweredBy {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {};
