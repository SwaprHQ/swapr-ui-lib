import * as React from "react";

import {
  Content,
  PopoverContentProps,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

const Popover = Root;

const PopoverTrigger = Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  PopoverContentProps
>(
  (
    { align = "center", children, className, sideOffset = 4, ...props },
    ref
  ) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          "bg-outline-white border !border-solid border-outline-base-em min-w-32 p-4 rounded-16 z-50",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        {children}
      </Content>
    </Portal>
  )
);
PopoverContent.displayName = Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
