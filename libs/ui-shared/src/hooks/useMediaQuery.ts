import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState<boolean | null>(null);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener); // updated from .addListener
    return () => mediaQueryList.removeEventListener("change", listener); // updated from .removeListener
  }, [mediaQueryString]);

  return matches;
};
