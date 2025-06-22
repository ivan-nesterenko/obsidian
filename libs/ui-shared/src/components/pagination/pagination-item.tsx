
import { ComponentProps, forwardRef } from "react";

export const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li className={clsx("", className)} ref={ref} {...props} />,
);
PaginationItem.displayName = "PaginationItem";
