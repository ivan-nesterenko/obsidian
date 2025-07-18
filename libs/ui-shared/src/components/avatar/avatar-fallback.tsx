"use client";

import { Fallback } from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      className={clsx(
        "flex h-full w-full items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
AvatarFallback.displayName = Fallback.displayName;
