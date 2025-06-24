import { Dispatch, SetStateAction, useState } from "react";
import { defaultEmptyTab } from "@/frontend/constants/defaultTabs";
import { Tab } from "@/frontend/types/tab";

type UseTabsResult = {
  activeTab: number;
  closeTab: () => void;
  createTab: (newTab?: Tab) => void;
  setActiveTab?: Dispatch<SetStateAction<number>>;
  tabs: [] | Tab[];
};

export const useTabs = (): UseTabsResult => {
  const [tabs, setTabs] = useState<[] | Tab[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const createTab = (newTab: Tab = defaultEmptyTab) => {
    setTabs((previousItems) => {
      setActiveTab(activeTab + 1);
      return [...previousItems.slice(0, activeTab + 1), newTab, ...previousItems.slice(activeTab + 1)];
    });
  };

  const closeTab = () => {
    setTabs((previousItems) =>
      // eslint-disable-next-line @typescript-eslint/naming-convention
      previousItems.length === 1 ? [defaultEmptyTab] : previousItems?.filter((_, index) => index !== activeTab),
    );
  };

  return { activeTab, closeTab, createTab, setActiveTab, tabs };
};
