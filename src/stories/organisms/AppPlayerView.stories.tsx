import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppPlayerView from "../../components/organisms/app-player-view";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/AppPlayerView",
  component: AppPlayerView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppPlayerView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppPlayerView> = (args) => (
  <AppPlayerView {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {};
