import * as React from "react";

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { ButtonProps, buttonStyles, iconSizeMap } from "../Button";
import { Icon, IconName } from "../Icon";

type SimplifiedButtonProps = Omit<
  ButtonProps,
  "variant" | "colorScheme" | "width"
>;
export type ButtonLinkColorSchemeProp = "neutral" | "swapr";
export interface ButtonLinkProps extends SimplifiedButtonProps {
  colorScheme?: ButtonLinkColorSchemeProp;
  href: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  target?: string;
}

const buttonLinkStyles = cva(
  [
    "cursor-pointer !p-0 rounded-0",
    "active:!ring-0",
    "hover:!bg-transparent hover:border-b-2",
  ],
  {
    variants: {
      colorScheme: {
        neutral: "text-text-high-em",
        swapr: "text-text-primary-main",
      },
      disabled: {
        true: "pointer-events-none text-text-disabled",
      },
    },
    defaultVariants: {
      colorScheme: "swapr",
      disabled: false,
    },
  }
);

export const ButtonLink = ({
  children,
  className,
  colorScheme,
  disabled,
  href,
  iconLeft,
  iconRight,
  id,
  size,
  target,
}: ButtonLinkProps) => {
  const iconSize = size ? iconSizeMap[size] : 14;

  return (
    <a
      className={twMerge(
        buttonStyles({
          className,
          size,
          variant: "ghost",
          width: "fit",
        }),
        buttonLinkStyles({
          colorScheme,
          disabled,
        })
      )}
      href={href}
      id={id}
      tabIndex={0}
      target={target}
    >
      {iconLeft && <Icon size={iconSize} name={iconLeft} />}
      {children && <div>{children}</div>}
      {iconRight && <Icon size={iconSize} name={iconRight} />}
    </a>
  );
};
