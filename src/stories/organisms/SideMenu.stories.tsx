import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SideMenu from "../../components/organisms/side-menu";
import LogoDemo from "../assets/nativo_miami.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/SideMenu",
  component: SideMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SideMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  imgPath: LogoDemo,
};
