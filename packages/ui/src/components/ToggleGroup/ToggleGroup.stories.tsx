import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupOption } from ".";
import { useState } from "react";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ToggleGroupComponent: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState("business");

    return (
      <ToggleGroup onChange={setSelectedValue} value={selectedValue} {...args}>
        {["all", "business", "international", "politics"].map((category) => (
          <ToggleGroupOption
            key={category}
            value={category}
            className="capitalize font-bold"
          >
            {category}
          </ToggleGroupOption>
        ))}
      </ToggleGroup>
    );
  },
};
