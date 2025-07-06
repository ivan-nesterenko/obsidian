import { FC } from "react";
import clsx from "clsx";

export type FormErrorType = false | null | string;

export type FormErrorProps = {
  className?: string;
  errorText?: FormErrorType;
};

export const FormError: FC<FormErrorProps> = ({ className, errorText }) => (
  <p className={clsx("text-white-1000 text-regular-caption", className)}>{errorText || " "}</p>
);
