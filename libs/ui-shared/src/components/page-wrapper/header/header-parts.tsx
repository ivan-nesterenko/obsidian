import { ReactElement, ReactNode, memo } from "react";
import clsx from "clsx";

export type HeaderLeftProps = {
  headerLeft?: ReactNode;
};

export const HeaderLeft = memo(({ headerLeft }: HeaderLeftProps): ReactElement | null => {
  return <div className={clsx("mobile:w-1/3 flex items-center")}>{headerLeft}</div>;
});
HeaderLeft.displayName = "HeaderLeft";

export type HeaderCenterProps = {
  headerCenter?: ReactNode;
  headerCenterClassName?: string;
  isHeaderCenterShown?: boolean;
};

export const HeaderCenter = memo(
  ({ headerCenter, headerCenterClassName, isHeaderCenterShown }: HeaderCenterProps): ReactElement | null => {
    return isHeaderCenterShown ? (
      <div className={clsx("mobile:w-1/3 mobile:justify-center flex items-center", headerCenterClassName)}>
        {headerCenter}
      </div>
    ) : null;
  },
);
HeaderCenter.displayName = "HeaderCenter";

export type HeaderRightProps = {
  headerRight?: ReactNode;
  isHeaderRightShown?: boolean;
};

export const HeaderRight = memo(({ headerRight, isHeaderRightShown }: HeaderRightProps): ReactElement | null => {
  return isHeaderRightShown ? (
    <div className={clsx("mobile:w-1/3 flex items-center justify-end")}>{headerRight}</div>
  ) : null;
});
HeaderRight.displayName = "HeaderRight";
