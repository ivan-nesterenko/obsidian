import { useState, Dispatch, SetStateAction } from "react";
import { Tab } from "../types/Tab";
import { defaultEmptyTab } from "../constants/defaultTabs";

type UseTabsResult = [
  tabs: Tab[] | [],
  activeTab: number,
  setActiveTab?: Dispatch<SetStateAction<number>>,
  createTab: (newTab?: Tab) => void,
  closeTab: () => void,
];

export const useTabs = (): UseTabsResult => {
  const [tabs, setTabs] = useState<Tab[] | []>([]);
  const [activeTab, setActiveTab] = useState(0);

  const createTab = (newTab: Tab = defaultEmptyTab) => {
    setTabs((prevItems) => {
      setActiveTab(activeTab + 1);
      return [...prevItems.slice(0, activeTab + 1), newTab, ...prevItems.slice(activeTab + 1)];
    });
  };

  const closeTab = () => {
    setTabs((prevItems) => {
      if (prevItems.length === 1) {
        return [defaultEmptyTab];
      } else {
        return prevItems?.filter((_, index) => index !== activeTab);
      }
    });
  };

  return [tabs, activeTab, setActiveTab, createTab, closeTab];
};
