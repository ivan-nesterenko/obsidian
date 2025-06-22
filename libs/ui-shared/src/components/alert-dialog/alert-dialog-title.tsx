"use client";


import { Title } from "@radix-ui/react-alert-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title className={clsx("text-lg font-semibold", className)} ref={ref} {...props} />
));
AlertDialogTitle.displayName = Title.displayName;
