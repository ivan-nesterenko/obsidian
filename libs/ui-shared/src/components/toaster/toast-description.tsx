"use client";


import { Description } from "@radix-ui/react-toast";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description className={clsx("text-sm opacity-90", className)} ref={ref} {...props} />
));
ToastDescription.displayName = Description.displayName;
