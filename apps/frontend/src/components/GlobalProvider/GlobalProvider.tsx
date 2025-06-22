import { createContext, FC, PropsWithChildren } from "react";
import { GlobalContextType } from "./types";
import { useGlobalKeyBindings } from "@/hooks/useGlobalBindings";
import { useTabs } from "@/hooks/useTabs";

const GlobalContext = createContext<GlobalContextType>({});

const GlobalProvider: FC<PropsWithChildren> = ({children}) => {
  const [tabs, activeTab, setActiveTab, createTab, closeTab] = useTabs();

  useGlobalKeyBindings(tabs, activeTab, createTab, closeTab);

  return <GlobalContext.Provider value={{tabs, activeTab, setActiveTab, createTab, closeTab}}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
