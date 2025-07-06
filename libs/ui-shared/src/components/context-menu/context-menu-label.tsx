"use client";

import { Label } from "@radix-ui/react-context-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { clsx } from "clsx";

export const ContextMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    className={clsx("px-2 py-1.5 text-sm font-semibold text-stone-950 dark:text-stone-50", inset && "pl-8", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = Label.displayName;
