import { createContext, FC, PropsWithChildren } from "react";
import { GlobalContextType } from "./types";
import { useGlobalKeyBindings } from "../../hooks/useGlobalBindings";

const GlobalContext = createContext<GlobalContextType>({});

export const GlobalProvider: FC<PropsWithChildren> = ({children}) => {
  const [] = useGlobalKeyBindings();

  return <GlobalContext.Provider value={}>{children}</GlobalContext.Provider>;
}
