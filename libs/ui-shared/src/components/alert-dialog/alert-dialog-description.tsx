"use client";

import { Description } from "@radix-ui/react-alert-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description className={clsx("text-sm text-stone-500 dark:text-stone-400", className)} ref={ref} {...props} />
));
AlertDialogDescription.displayName = Description.displayName;
