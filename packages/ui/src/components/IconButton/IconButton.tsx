import { forwardRef, Ref } from "react";

import { cva } from "class-variance-authority";
import { Button, ButtonProps } from "../Button";
import { Icon, IconProps } from "../Icon";

export const iconButtonStyles = cva([], {
  variants: {
    size: {
      xs: "p-1 rounded-6",
      sm: "p-2 rounded-8",
      md: "p-3",
      lg: "p-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Size = Required<Pick<ButtonProps, "size">>;
const iconSize: Record<Size["size"], number> = {
  xs: 14,
  sm: 14,
  md: 18,
  lg: 20,
};

export const IconButton = forwardRef(
  (
    {
      name,
      className,
      size = "md" as const,
      ...props
    }: ButtonProps & Pick<IconProps, "name"> & { size?: keyof typeof iconSize },
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      className={iconButtonStyles({ className, size })}
      {...props}
      ref={ref}
    >
      <Icon size={iconSize[size]} name={name} />
    </Button>
  )
);
