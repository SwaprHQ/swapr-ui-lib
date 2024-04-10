import * as React from "react";
import {
  Close,
  Content,
  PopoverContentProps,
  PopoverProps,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";
import { IconButton } from "../IconButton";

const Popover = Root;

const PopoverTrigger = Trigger;

interface PopoverHeaderProps {
  className?: string;
  title: string;
}
const PopoverHeader = ({ className, title }: PopoverHeaderProps) => {
  return (
    <div
      className={twMerge("flex justify-between items-center pb-4", className)}
    >
      <p className="text-lg text-text-high-em font-bold">{title}</p>
      <Close asChild>
        <IconButton name="cross" size="md" variant="ghost" />
      </Close>
    </div>
  );
};

export interface PopoverContentWithTitleProps extends PopoverContentProps {
  title?: string;
  titleClassName?: string;
}
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  PopoverContentWithTitleProps
>(
  (
    {
      align = "center",
      children,
      className,
      sideOffset = 4,
      title,
      titleClassName,
      ...props
    },
    ref
  ) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          "z-50 min-w-32 rounded-16 border !border-solid border-outline-base-em p-4",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        {title && <PopoverHeader className={titleClassName} title={title} />}
        {children}
      </Content>
    </Portal>
  )
);
PopoverContent.displayName = Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
