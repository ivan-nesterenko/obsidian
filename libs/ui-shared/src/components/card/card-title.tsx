import { HTMLAttributes, forwardRef } from "react";

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 className={clsx("font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";
