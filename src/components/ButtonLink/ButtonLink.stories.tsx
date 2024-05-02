import React from "react";

import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "../Button/Button";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;
export default meta;

export const AsAnchor: StoryFn<ButtonLinkProps<"a">> = (args) => (
  <ButtonLink href="/" {...args}>
    As button
  </ButtonLink>
);

export const AsButton: StoryFn<ButtonLinkProps<"button">> = (args) => (
  <ButtonLink as={Button} {...args}>
    As button
  </ButtonLink>
);
