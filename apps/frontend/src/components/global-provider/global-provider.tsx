import { createContext, FC, PropsWithChildren } from "react";
import { useGlobalKeyBindings } from "../../hooks/use-global-bindings";
import { useTabs } from "../../hooks/use-tabs";
import { GlobalContextType } from "./types";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { activeTab, closeTab, createTab, setActiveTab, tabs } = useTabs();

  useGlobalKeyBindings({ activeTab, closeTab, createTab, tabs });

  return (
    <GlobalContext.Provider value={{ activeTab, closeTab, createTab, setActiveTab, tabs }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
