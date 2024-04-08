import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

import {
  Button,
  IconButton,
  TabGroup,
  TabHeader,
  TabStyled,
} from "@/components";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popup</Button>
      </PopoverTrigger>
      <PopoverContent>This is a basic content example</PopoverContent>
    </Popover>
  ),
};

const SettingsPopoverContent = () => (
  <div>
    <TabGroup
      onChange={(index: number) =>
        console.log("Changed selected tab to:", index)
      }
    >
      <TabHeader className="overflow-x-auto md:overflow-x-visible">
        <TabStyled>Auto</TabStyled>
        <TabStyled>0.1%</TabStyled>
        <TabStyled>0.5%</TabStyled>
        <TabStyled className="!ml-40">3 %</TabStyled>
      </TabHeader>
    </TabGroup>
    <p className="mt-4">Custom slippage: 3%</p>
    <div className="mt-4 font-bold text-text-danger-em bg-surface-danger-accent-2 p-5 rounded-8">
      The slippage you selected is greater than what is required to perform this
      transaction. We recommend selecting the Auto Slippage option for this
      transaction.
    </div>
  </div>
);
export const SlippageSettings: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <IconButton name="settings" />
      </PopoverTrigger>
      <PopoverContent className="border-none bg-outline-white max-w-md">
        <SettingsPopoverContent />
      </PopoverContent>
    </Popover>
  ),
};
