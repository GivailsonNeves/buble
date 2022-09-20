import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BubleHeader from "../../components/atoms/buble-header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/BubleHeader",
  component: BubleHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BubleHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BubleHeader> = (args) => (
    <BubleHeader {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  children: "BubleHeader",
};
