import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResidentialUnit from "../../components/templates/residential-unit";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/ResidentialUnit",
  component: ResidentialUnit,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ResidentialUnit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ResidentialUnit> = (args) => (
  <ResidentialUnit {...args} />
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  children: "ResidentialUnit",
};
