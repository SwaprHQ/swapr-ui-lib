import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabBody, TabGroup, TabHeader, TabPanel, TabStyled } from "./Tabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Swapr-ui/Tabs",
  component: TabGroup,
} as ComponentMeta<typeof TabGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabGroup> = args => (
  <TabGroup
    onChange={(index: number) => console.log("Changed selected tab to:", index)}
  >
    <TabHeader className="overflow-x-auto md:overflow-x-visible">
      <TabStyled>
        All bets{" "}
        <div className="bg-surface-surface-0 text-2xs border border-outline-low-em rounded-6 p-1 px-1.5 ml-2">
          09
        </div>
      </TabStyled>
      <TabStyled>Active</TabStyled>
      <TabStyled>Unredeemed</TabStyled>
      <TabStyled>Complete</TabStyled>
    </TabHeader>

    <TabBody className="mt-8">
      <TabPanel className="space-y-4">oi</TabPanel>
      <TabPanel>
        <div className="bg-surface-primary-accent-1 p-5 rounded-4">
          in development..
        </div>
      </TabPanel>
      <TabPanel>
        <div className="bg-surface-danger-accent-1 p-5 rounded-4">
          in development..
        </div>
      </TabPanel>
      <TabPanel>
        <div className="bg-surface-warning-accent-1 p-5 rounded-4">
          Come back in a week!
        </div>
      </TabPanel>
    </TabBody>
  </TabGroup>
);

export const Tabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tabs.args = {};
