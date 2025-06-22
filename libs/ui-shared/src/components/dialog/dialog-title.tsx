"use client";

import { Title } from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    className={clsx(
      "text-lg font-semibold leading-none tracking-tight text-stone-500 dark:text-stone-400",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;
