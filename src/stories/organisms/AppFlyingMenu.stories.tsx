import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppFlyingMenu from "../../components/organisms/app-flying-menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/AppFlyingMenu",
  component: AppFlyingMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppFlyingMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppFlyingMenu> = (args) => (
  <div style={{ backgroundColor: "grey", padding: 15 }}>
    <AppFlyingMenu {...args} />
  </div>
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {};
