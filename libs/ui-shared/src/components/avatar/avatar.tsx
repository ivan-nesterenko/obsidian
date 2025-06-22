"use client";


import { Root } from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Avatar = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      className={clsx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      ref={ref}
      {...props}
    />
  ),
);
Avatar.displayName = Root.displayName;
