import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Start from "../../components/templates/start";
import LogoDemo from "../assets/nativo_miami.png";
import Typography from "../../components/atoms/typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Start",
  component: Start,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Start>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Start> = (args) => <Start {...args} />;

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  children: (
    <Typography color="white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt
      aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione
      dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,
    </Typography>
  ),
  imgPath: LogoDemo,
  backgronImgPath: "",
};
