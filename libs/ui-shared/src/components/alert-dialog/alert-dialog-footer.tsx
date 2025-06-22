"use client";


import { FC, HTMLAttributes } from "react";

export const AlertDialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={clsx("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";
