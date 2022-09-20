import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppMenu from "../../components/organisms/app-menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/AppMenu",
  component: AppMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppMenu> = (args) => (
  <div style={{ backgroundColor: "grey", height: "100vh", padding: 15 }}>
    <AppMenu {...args} />
  </div>
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  children: "AppMenu",
};
