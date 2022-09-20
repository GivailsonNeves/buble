import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "../../components/atoms/typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography type="title">Title</Typography>
    <Typography type="sub-title">Sub-Title</Typography>
    <Typography type="section-title">Section Sub Title</Typography>
    <Typography type="section-sub-title">Section Sub Title</Typography>
    <Typography>Section Sub Title</Typography>
  </>
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  children: "sample",
};
