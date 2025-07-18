import { HTMLAttributes, forwardRef } from "react";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p className={clsx("text-sm text-stone-500 dark:text-stone-400", className)} ref={ref} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";
