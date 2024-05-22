import { twMerge } from "tailwind-merge";

import { ButtonProps, buttonStyles } from "../Button";

export type ButtonLinkProps<T extends React.ElementType> =
  React.PropsWithChildren<
    React.ComponentPropsWithoutRef<T> &
      Pick<
        ButtonProps,
        "active" | "colorScheme" | "size" | "variant" | "width"
      > & {
        as?: T;
      }
  >;

export function ButtonLink<T extends React.ElementType = "a">({
  active,
  as,
  className,
  colorScheme,
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
          active,
          className,
          colorScheme,
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
