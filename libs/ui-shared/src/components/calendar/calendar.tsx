"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ComponentProps, FC } from "react";
import { DayPicker } from "react-day-picker";
import clsx from "clsx";

import { buttonVariants } from "../button/button";

export type CalendarProps = ComponentProps<typeof DayPicker>;

export const Calendar: FC<CalendarProps> = ({ className, classNames, showOutsideDays = true, ...props }) => {
  return (
    <DayPicker
      className={clsx("p-3", className)}
      classNames={{
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        cell: clsx(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-stone-100 dark:[&:has([aria-selected])]:bg-stone-800 [&:has([aria-selected].day-outside)]:bg-stone-100/50 dark:[&:has([aria-selected].day-outside)]:bg-stone-800/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: clsx(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
        day_disabled: "text-stone-500 opacity-50 dark:text-stone-400",
        day_hidden: "invisible",
        day_outside:
          "day-outside text-stone-500 opacity-50  aria-selected:bg-stone-100/50 aria-selected:text-stone-500 aria-selected:opacity-30 dark:text-stone-400 dark:aria-selected:bg-stone-800/50 dark:aria-selected:text-stone-400",
        day_range_end: "day-range-end",
        day_range_middle:
          "aria-selected:bg-stone-100 aria-selected:text-stone-900 dark:aria-selected:bg-stone-800 dark:aria-selected:text-stone-50",
        day_range_start: "day-range-start",
        day_selected:
          "bg-stone-900 text-stone-50 hover:bg-stone-900 hover:text-stone-50 focus:bg-stone-900 focus:text-stone-50 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50 dark:hover:text-stone-900 dark:focus:bg-stone-50 dark:focus:text-stone-900",
        day_today: "bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-50",
        head_cell: "text-stone-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-stone-400",
        head_row: "flex",
        month: "space-y-4",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        nav: "space-x-1 flex items-center",
        nav_button: clsx(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_next: "absolute right-1",
        nav_button_previous: "absolute left-1",
        row: "flex w-full mt-2",
        table: "w-full border-collapse space-y-1",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";
