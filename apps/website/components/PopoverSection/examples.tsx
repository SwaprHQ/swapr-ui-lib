import { PropsWithChildren, useRef } from "react";

import {
  ChipButton,
  Icon,
  Popover,
  PopoverContent,
  PopoverContentHeader,
  PopoverTrigger,
  TabGroup,
  TabHeader,
  TabStyled,
} from "swapr-ui";
import { Root as Separator } from "@radix-ui/react-separator";

const TriggerElement = ({ children }: PropsWithChildren) => (
  <div
    className={`
    bg-surface-primary-main text-text-white
    hover:bg-surface-primary-accent-3
    focus-visible:bg-surface-primary-accent-3 focus-visible:ring-outline-primary-low-em
    active:bg-surface-primary-accent-3 active:ring-outline-primary-low-em
    px-3 py-2 space-x-2 rounded-12 text-base font-bold
  `}
  >
    {children}
  </div>
);

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

export const PopoverBasic = () => {
  const basicRef = useRef(null);

  return (
    <Popover>
      <PopoverTrigger>
        <TriggerElement>Open Popup</TriggerElement>
      </PopoverTrigger>
      <PopoverContent ref={basicRef}>
        <p>This is a basic content example</p>
      </PopoverContent>
    </Popover>
  );
};

export const PopoverWithHeader = () => {
  const withHeaderRef = useRef(null);

  return (
    <Popover>
      <PopoverTrigger>
        <TriggerElement>With header</TriggerElement>
      </PopoverTrigger>
      <PopoverContent className="max-w-md px-0" ref={withHeaderRef}>
        <PopoverContentHeader title="Settings" />
        <SettingsPopoverContent />
      </PopoverContent>
    </Popover>
  );
};

export const PopoverSlippageSettings = () => {
  const settingsRef = useRef(null);

  return (
    <Popover>
      <PopoverTrigger>
        <TriggerElement>
          <Icon name="settings" />
        </TriggerElement>
      </PopoverTrigger>
      <PopoverContent className="max-w-md px-0" ref={settingsRef}>
        <SettingsPopoverContent />
      </PopoverContent>
    </Popover>
  );
};
