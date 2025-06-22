
import { ComponentProps, FC } from "react";

export const Pagination: FC<ComponentProps<"nav">> = ({ className, ...props }) => (
  <nav
    aria-label="pagination"
    className={clsx("mx-auto flex w-full justify-center", className)}
    role="navigation"
    {...props}
  />
);
