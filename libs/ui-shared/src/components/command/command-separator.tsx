"use client";

import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    className={clsx("-mx-1 h-px bg-stone-200 dark:bg-stone-800", className)}
    ref={ref}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
