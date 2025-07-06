import { useState } from "react";
import { createDefaultEmptyTab, createDefaultNote } from "../constants/default-tabs";
import { Tab, UseTabsOutput } from "../types/tab";

// TODO: Refactor this hook to use Zustand.

export const useTabs = (): UseTabsOutput => {
  const defaultTab = createDefaultNote();

  const [tabs, setTabs] = useState<[] | Tab[]>(() => [defaultTab]);
  const [activeTab, setActiveTab] = useState<Tab>(() => defaultTab);

  const createTab = (newTab?: Tab) => {
    if (!newTab) {
      newTab = createDefaultEmptyTab();
    } else if (newTab) {
      setActiveTab(newTab);
    }

    setTabs((previousItems) => {
      const previousTabIndex = previousItems.findIndex((tab) => tab.id === activeTab.id);
      return [...previousItems.slice(0, previousTabIndex + 1), newTab, ...previousItems.slice(previousTabIndex + 1)];
    });
  };

  const closeTab = (tabToRemove?: Tab, tabToAdd?: Tab) => {
    setTabs((previousItems) => {
      let finalITabs;
      let newActiveTab;
      const currentActiveTab = previousItems.find((tab) => tab.id === activeTab.id) || previousItems[0];
      const tabIdToRemove = tabToRemove?.id || currentActiveTab.id;

      if (previousItems.length === 1) {
        const newTab = tabToAdd ?? createDefaultEmptyTab();
        setActiveTab(newTab);
        return [newTab];
      }

      const previousTabIndex = previousItems.findIndex((tab) => tab.id === tabIdToRemove);
      if (tabToAdd) {
        previousItems[previousTabIndex] = tabToAdd;
        finalITabs = previousItems;
        newActiveTab = tabToAdd;
      } else {
        finalITabs = previousItems.filter((tab) => tab.id !== tabIdToRemove);
        newActiveTab = finalITabs.includes(currentActiveTab)
          ? currentActiveTab
          : previousTabIndex > 0
            ? finalITabs[previousTabIndex - 1]
            : finalITabs[0];
      }

      setActiveTab(newActiveTab);
      return finalITabs;
    });
  };

  return { activeTab, closeTab, createTab, setActiveTab, tabs };
};
