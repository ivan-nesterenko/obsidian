"use client";

import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

export const DialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx("flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";
