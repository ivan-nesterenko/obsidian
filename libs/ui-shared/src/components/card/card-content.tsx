
import { HTMLAttributes, forwardRef } from "react";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={clsx("p-6 pt-0", className)} ref={ref} {...props} />
  ),
);
CardContent.displayName = "CardContent";
