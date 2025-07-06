"use client";

import { Item } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => <Item className={clsx("border-b", className)} ref={ref} {...props} />,
);
AccordionItem.displayName = "AccordionItem";
