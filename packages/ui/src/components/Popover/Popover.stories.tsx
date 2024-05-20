import { Root as Separator } from "@radix-ui/react-separator";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Popover,
  PopoverContent,
  PopoverContentHeader,
  PopoverTrigger,
} from "./Popover";

import {
  Button,
  ChipButton,
  Icon,
  IconButton,
  TabGroup,
  TabHeader,
  TabStyled,
} from "..";

const meta = {
  title: "Components/Popover Content",
  component: PopoverContent,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
      description:
        "Sets the popover content alignment relative to the popover trigger.",
    },
    sideOffset: {
      control: "number",
      defaultValue: 4,
      description:
        "Represents the distance in pixels between the popover content and the popover trigger",
    },
  },
} satisfies Meta<typeof PopoverContent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger className="ml-[400px] mt-4">
        <Button>Open Popup</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <p>This is a basic content example</p>
      </PopoverContent>
    </Popover>
  ),
};

const SettingsPopoverContent = () => (
  <div className="space-y-2">
    <div className="flex items-center mx-4 text-text-low-em">
      <p className="font-bold text-xs">MAX SLIPPAGE</p>
      <Icon className="ml-1 text-text-low-em" name="info-fill" size={14} />
    </div>
    <TabGroup
      as="div"
      onChange={(index: number) =>
        console.log("Changed selected tab to:", index)
      }
      className="mx-4"
    >
      <TabHeader className="overflow-x-auto md:overflow-x-visible last:right-0 flex justify-between">
        <div className="flex space-x-3">
          <TabStyled>Auto</TabStyled>
          <TabStyled>0.1%</TabStyled>
          <TabStyled>0.5%</TabStyled>
        </div>
        <ChipButton>3 %</ChipButton>
      </TabHeader>
    </TabGroup>
    <p className="font-semibold mt-4 mx-4 text-text-primary-main text-sm">
      Custom slippage: 3%
    </p>
    <div className="bg-surface-danger-accent-1 font-semibold mx-4 px-3 py-2 rounded-8 text-text-danger-em text-sm">
      The slippage you selected is greater than what is required to perform this
      transaction. We recommend selecting the Auto Slippage option for this
      transaction.
    </div>
    <Separator decorative className="h-[1px] bg-outline-base-em" />
    <div className="flex items-center mx-4 text-text-low-em">
      <p className="font-bold text-xs">TRANSACTION DEADLINE</p>
      <Icon className="ml-1 text-text-low-em" name="info-fill" size={14} />
    </div>
    <ChipButton className="mx-4">10 mins</ChipButton>
  </div>
);
export const SlippageSettings: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger className="ml-[400px] mt-4">
        <IconButton name="settings" />
      </PopoverTrigger>
      <PopoverContent {...args} className="max-w-md px-0">
        <SettingsPopoverContent />
      </PopoverContent>
    </Popover>
  ),
};

export const PopoverWithHeader: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger className="ml-[400px] mt-4">
        <Button>With header</Button>
      </PopoverTrigger>
      <PopoverContent {...args} className="max-w-md px-0">
        <PopoverContentHeader title="Settings" />
        <SettingsPopoverContent />
      </PopoverContent>
    </Popover>
  ),
};
