import type { Meta, StoryObj } from "@storybook/react";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Button } from "../Button";
import { forwardRef } from "react";

const meta = {
  title: "Components/Tooltip Content",
  component: TooltipContent,
  tags: ["autodocs"],
  //   argTypes: {
  //     align: {
  //       control: "select",
  //       options: ["start", "center", "end"],
  //       defaultValue: "center",
  //       description:
  //         "Sets the popover content alignment relative to the popover trigger.",
  //     },
  //     sideOffset: {
  //       control: "number",
  //       defaultValue: 4,
  //       description:
  //         "Represents the distance in pixels between the popover content and the popover trigger",
  //     },
  //   },
} satisfies Meta<typeof TooltipContent>;
export default meta;

type Story = StoryObj<typeof meta>;

// const Arrow = forwardRef((props, ref: any) => (
//   <svg
//     {...props}
//     ref={ref}
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="7"
//     viewBox="0 0 20 7"
//     fill="none"
//   >
//     <path
//       d="M5.7021 4.56168C7.41751 5.93401 8.27522 6.62017 9.24878 6.80633C9.7451 6.90123 10.2549 6.90123 10.7512 6.80633C11.7248 6.62017 12.5825 5.93401 14.2979 4.56168L20 0H0L5.7021 4.56168Z"
//       fill="white"
//     />
//   </svg>
// ));

export const Basic: Story = {
  render: (args) => (
    <div className="w-full h-[40vh] flex items-center justify-center">
      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger>Hover here</TooltipTrigger>
          <TooltipContent
            {...args}
            className="p-3 w-60 text-sm bg-text-white rounded-12 shadow-3 border-outline-base-em"
          >
            <p>
              Currently, gas prices are high. It is preferable to perform the
              transaction after some time.
            </p>
            <div className="flex mt-4 justify-between">
              <Button variant="pastel">Learn more</Button>
              <Button>Got it</Button>
            </div>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};
