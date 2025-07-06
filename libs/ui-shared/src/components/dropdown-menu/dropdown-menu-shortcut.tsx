"use client";

import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

export const DropdownMenuShortcut: FC<HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => {
  return <span className={clsx("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
