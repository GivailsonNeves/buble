import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PicturesGallery from "../../components/organisms/pictures-gallery";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/PicturesGallery",
  component: PicturesGallery,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PicturesGallery>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PicturesGallery> = (args) => (
  <PicturesGallery {...args} />
);

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone8p",
  },
};
Mobile.args = {
  imgDestak: { title: "test", path: require("../assets/picture.png") },
  imgList: [
    { title: "test", path: require("../assets/picture.png") },
    { title: "test", path: require("../assets/picture.png") },
    { title: "test", path: require("../assets/picture.png") },
    { title: "test", path: require("../assets/picture.png") },
    { title: "test", path: require("../assets/picture.png") },
    { title: "test", path: require("../assets/picture.png") },
  ],
};
