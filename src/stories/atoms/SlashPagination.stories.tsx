import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SlashPagination from "../../components/atoms/slash-pagination";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/SlashPagination",
  component: SlashPagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SlashPagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SlashPagination> = (args) => (
  <SlashPagination {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  totalPages: 3,
};
