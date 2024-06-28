import { Section } from "@/components";

interface SectionGridProps {
  title: string;
  gridConfig: {
    headers: Array<string>;
    examples: Array<() => JSX.Element>;
  };
}

export const SectionGrid = ({ title, gridConfig }: SectionGridProps) => (
  <Section>
    <h2 className="text-2xl font-semibold">{title}</h2>
    <div
      className={`grid items-center space-y-2.5 lg:space-y-0 lg:grid-cols-${gridConfig.headers.length} lg:gap-4`}
    >
      {gridConfig.headers.map((header, index) => (
        <div
          key={index}
          className="hidden uppercase text-xs lg:block font-semibold bg-gray-200 text-center"
        >
          {header}
        </div>
      ))}
      {gridConfig.examples.map((Example, index) => (
        <div key={index} className="flex items-center justify-center">
          <Example />
        </div>
      ))}
    </div>
  </Section>
);
