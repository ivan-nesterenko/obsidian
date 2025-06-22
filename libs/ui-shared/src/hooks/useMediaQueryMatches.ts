import { Breakpoint, BREAKPOINTS } from 'constants/breakpoints';
import { up } from 'utils/up';
import { useMediaQuery } from './useMediaQuery';

export type MediaQueryMatches = Record<Breakpoint, boolean>;

export const useMediaQueryMatches = () =>
  BREAKPOINTS.keys.reduce(
    (acc, bp) => ({
      ...acc,
      // We guarantee that hooks are called in the same order each time always
      // eslint-disable-next-line react-hooks/rules-of-hooks
      [bp]: useMediaQuery(up(BREAKPOINTS, bp)),
    }),
    {} as MediaQueryMatches,
  );
