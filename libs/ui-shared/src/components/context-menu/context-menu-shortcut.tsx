"use client";

import { FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

export const ContextMenuShortcut: FC<HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => {
  return (
    <span
      className={clsx("ml-auto text-xs tracking-widest text-stone-500 dark:text-stone-400", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
