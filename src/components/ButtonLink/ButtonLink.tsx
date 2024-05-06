import * as React from "react";

import { twMerge } from "tailwind-merge";

import { buttonStyles } from "../Button";

export type ButtonLinkProps<T extends React.ElementType> =
  React.PropsWithChildren<
    React.ComponentPropsWithoutRef<T> & {
      as?: T;
    }
  >;

export function ButtonLink<T extends React.ElementType = "a">({
  as,
  className,
  size,
  variant,
  width,
  ...props
}: ButtonLinkProps<T>) {
  const Component = as || "a";

  return (
    <Component
      className={twMerge(
        buttonStyles({
          className,
          size,
          variant,
          width,
        }),
        className
      )}
      tabIndex={0}
      {...props}
    />
  );
}
