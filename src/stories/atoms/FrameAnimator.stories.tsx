import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FrameAnimator from "../../components/atoms/frame-animator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/FrameAnimator",
  component: FrameAnimator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FrameAnimator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FrameAnimator> = (args) => (
  <FrameAnimator {...args} />
);

export const Sample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  width: 150,
  height: 150,
  playing: true,
  loops: 1,
  children: [
    <img src={require("../assets/frames/BubbleBursting_00077.png")} />,
    <img src={require("../assets/frames/BubbleBursting_00078.png")} />,
    <img src={require("../assets/frames/BubbleBursting_00079.png")} />,
    <img src={require("../assets/frames/BubbleBursting_00080.png")} />,
    <img src={require("../assets/frames/BubbleBursting_00081.png")} />,
    <img src={require("../assets/frames/BubbleBursting_00082.png")} />,
  ],
};
