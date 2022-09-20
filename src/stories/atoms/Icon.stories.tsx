import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as IconsElements from "../../components/atoms/icon";

const iconLabels = Object.keys(IconsElements);

const Icons = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Icon",
  component: Icons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Icons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icons> = (args) => (
  <div style={{ backgroundColor: "grey", padding: 15 }}>
    <ul>
      {iconLabels.sort().map((label) => {
        //@ts-ignore
        const IconElement = IconsElements[label];
        return (
          <li
            style={{ display: "flex", alignItems: "center", padding: "10px 0" }}
          >
            <span style={{ display: "block", width: "120px", color: "white" }}>
              {label}
            </span>{" "}
            <IconElement />
          </li>
        );
      })}
    </ul>
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
