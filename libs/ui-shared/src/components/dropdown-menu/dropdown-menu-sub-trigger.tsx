"use client";

import { SubTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...props }, ref) => (
  <SubTrigger
    className={clsx(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-stone-100 data-[state=open]:bg-stone-100 dark:focus:bg-stone-800 dark:data-[state=open]:bg-stone-800",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </SubTrigger>
));
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;
