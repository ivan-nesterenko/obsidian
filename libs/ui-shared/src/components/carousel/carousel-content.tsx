"use client";

import { HTMLAttributes, forwardRef } from "react";

import { useCarousel } from "./use-carousel";

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className={clsx("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";
