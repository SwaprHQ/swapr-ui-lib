import { Section } from "@/components";
import {
  PopoverBasic,
  PopoverSlippageSettings,
  PopoverWithHeader,
} from "./examples";

interface PopoverList {
  headers: Array<string>;
  examples: Array<() => JSX.Element>;
}

const popoverList: PopoverList = {
  headers: ["Basic", "With Header", "Settings example"],
  examples: [PopoverBasic, PopoverWithHeader, PopoverSlippageSettings],
};

export const PopoverSection = () => (
  <Section>
    <h2 className="text-2xl font-semibold">Popovers</h2>
    <div className="grid items-center space-y-2.5 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
      {popoverList.headers.map((header, index) => (
        <div
          key={index}
          className="hidden uppercase text-xs lg:block font-semibold bg-gray-200 text-center"
        >
          {header}
        </div>
      ))}
      {popoverList.examples.map((Example, index) => (
        <div key={index} className="flex items-center justify-center">
          <Example />
        </div>
      ))}
    </div>
  </Section>
);
