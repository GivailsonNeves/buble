import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Splash from "../../components/templates/splash";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Splash",
  component: Splash,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Splash>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Splash> = (args) => <Splash {...args} />;

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {};
