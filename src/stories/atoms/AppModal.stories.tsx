import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppModal from "../../components/atoms/app-modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/AppModal",
  component: AppModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppModal> = (args) => (
    <AppModal {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  children: "AppModal",
};
