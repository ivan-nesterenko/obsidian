"use client";

import { Item } from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    className={clsx(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-stone-100 focus:text-stone-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-800 dark:focus:text-stone-50",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;
