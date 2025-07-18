import { ReactNode, memo } from "react";
import clsx from "clsx";

export type FooterProps = {
  footer?: ReactNode;
  footerClassName?: string;
  isFooterShown?: boolean;
};

export const Footer = memo(({ footer, footerClassName, isFooterShown }: FooterProps) => {
  return isFooterShown ? (
    <footer className={clsx("bg-white-1000 desktop:hidden z-50 flex w-full p-5", footerClassName)}>{footer}</footer>
  ) : null;
});
Footer.displayName = "Footer";
