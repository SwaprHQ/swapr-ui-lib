import React, { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import { buttonStyles } from "./utils";

type WidthProp = "normal" | "fit" | "full";
export type ButtonColorSchemeProp = "primary" | "error" | "success";
export type ButtonSizeProp = "xs" | "sm" | "md" | "lg";
export type ButtonVariantProp = "solid" | "pastel" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  colorScheme?: ButtonColorSchemeProp;
  disabled?: boolean;
  size?: ButtonSizeProp;
  variant?: ButtonVariantProp;
  width?: WidthProp;
}

export const Button = ({
  active,
  children,
  className,
  colorScheme,
  size,
  variant,
  width,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        buttonStyles({
          active,
          className,
          colorScheme,
          size,
          variant,
          width,
        })
      )}
      {...props}
    >
      {children}
    </button>
  );
};
