import { Breakpoint, BREAKPOINTS } from "constants/breakpoints";
import { useMediaQueryMatches } from "hooks/useMediaQueryMatches";

export type ResponsiveValues<ValueT> = Partial<Record<Breakpoint, ValueT>>;

export const useResponsive = () => {
  const matches = useMediaQueryMatches();

  return <P, DefaultT = undefined>(responsiveValues: ResponsiveValues<P>, defaultValue?: DefaultT) => {
    const match = [...BREAKPOINTS.keys].reverse().find((bp) => matches[`${bp}`] && responsiveValues[`${bp}`] != null);
    return match ? responsiveValues[match] : defaultValue;
  };
};
