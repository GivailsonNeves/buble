import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pictures from "../../components/templates/pictures";
import HomeBackground from "../assets/home_bg.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Pictures",
  component: Pictures,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Pictures>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pictures> = (args) => (
  <Pictures {...args} />
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  backgronImgPath: HomeBackground,
};
