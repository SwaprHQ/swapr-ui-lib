import { SectionGrid } from "@/components";
import { BasicTooltip, SwaprTooltip } from "./examples";

interface TooltipSectionConfig {
  headers: Array<string>;
  examples: Array<() => JSX.Element>;
}

const tooltipSectionConfig: TooltipSectionConfig = {
  headers: ["Basic", "Swapr"],
  examples: [BasicTooltip, SwaprTooltip],
};

export const TooltipSection = () => (
  <SectionGrid title="Tooltips" gridConfig={tooltipSectionConfig} />
);
