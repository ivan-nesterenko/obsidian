"use client";

import { Content } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, className, ...props }, ref) => (
    <Content
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      ref={ref}
      {...props}
    >
      <div className={clsx("pb-4 pt-0", className)}>{children}</div>
    </Content>
  ),
);
AccordionContent.displayName = Content.displayName;
