import { HTMLAttributes, forwardRef } from "react";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={clsx("flex flex-col p-6", className)} ref={ref} {...props} />
));
CardHeader.displayName = "CardHeader";
