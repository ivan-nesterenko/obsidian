"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator className={clsx("-mx-1 my-1 h-px bg-stone-100 dark:bg-stone-800", className)} ref={ref} {...props} />
));
DropdownMenuSeparator.displayName = Separator.displayName;
