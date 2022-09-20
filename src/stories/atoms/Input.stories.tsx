import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../../components/atoms/input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ backgroundColor: "grey", height: "100vh", padding: 15 }}>
    <Input {...args} />
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
  placeholder: "test",
};
