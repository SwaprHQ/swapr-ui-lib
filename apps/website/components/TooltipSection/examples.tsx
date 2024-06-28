import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@swapr/ui";

export const SwaprTooltip = () => (
  <TooltipProvider delayDuration={500}>
    <Tooltip>
      <TooltipTrigger>Hover here</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        sideOffset={8}
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
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const BasicTooltip = () => (
  <TooltipProvider delayDuration={500}>
    <Tooltip>
      <TooltipTrigger>Hover here</TooltipTrigger>
      <TooltipContent side="right">This is a sample</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
