import { Dispatch, SetStateAction } from "react";

export enum TabType {
  EMPTY_TAB = "Empty Tab",
  NOTE = "note",
}

export type Tab = {
  id: string;
  title: string;
  type: TabType;
};

export type UseTabsOutput = {
  activeTab: Tab;
  closeTab: (tabToRemove?: Tab, tabToAdd?: Tab) => void;
  createTab: (newTab?: Tab) => void;
  setActiveTab?: Dispatch<SetStateAction<Tab>>;
  tabs: [] | Tab[];
};
