import React from "react";

import type { Meta, StoryFn } from "@storybook/react";

import { ButtonLink, ButtonLinkProps } from "./ButtonLink";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Link",
      description: "Represents content to be displayed in the link.",
    },
    disabled: {
      control: "boolean",
      defaultValue: "false",
      description:
        "If disabled, the user won't be able to interact with the link.",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
      description: "Sets the link text and icon sizes.",
    },
    target: {
      control: "radio",
      options: ["_self", "_blank", "_parent", "_top"],
      defaultValue: "_self",
      description:
        "Controls how the link should open when the user interacts with it.",
    },
  },
} satisfies Meta<typeof ButtonLink>;
export default meta;

export const WithIconLeft: StoryFn<ButtonLinkProps> = (args) => (
  <ButtonLink iconLeft="plus" {...args}>
    Link
  </ButtonLink>
);

export const WithIconRight: StoryFn<ButtonLinkProps> = (args) => (
  <ButtonLink iconRight="arrow-top-right" {...args}>
    Link
  </ButtonLink>
);

export const WithBothIcons: StoryFn<ButtonLinkProps> = (args) => (
  <ButtonLink iconLeft="plus" iconRight="arrow-top-right" {...args}>
    Link
  </ButtonLink>
);

export const Disabled: StoryFn<ButtonLinkProps> = (args) => (
  <ButtonLink iconLeft="plus" iconRight="arrow-top-right" disabled {...args}>
    Link
  </ButtonLink>
);
