import * as React from "react";

import { twMerge } from "tailwind-merge";

import { ButtonProps, buttonStyles, iconSizeMap } from "../Button";
import { Icon, IconName } from "../Icon";

export interface ButtonLinkProps<T extends React.ElementType>
  extends ButtonProps {
  as?: T;
  children?: React.ReactNode;
  href: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  target?: string;
}

export function ButtonLink<T extends React.ElementType = "a">({
  as,
  children,
  className,
  href,
  iconLeft,
  iconRight,
  id,
  size,
  target,
  variant,
  width,
  ...props
}: ButtonLinkProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonLinkProps<T>>) {
  const Component = as || "a";
  const iconSize = size ? iconSizeMap[size] : 14;

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
      href={href}
      id={id}
      tabIndex={0}
      target={target}
      {...props}
    >
      {iconLeft && <Icon size={iconSize} name={iconLeft} />}
      {children && <div>{children}</div>}
      {iconRight && <Icon size={iconSize} name={iconRight} />}
    </Component>
  );
}
