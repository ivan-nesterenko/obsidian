import { Dispatch, SetStateAction } from "react";
import { Tab } from "../../types/tab";

export type GlobalContextType = {
  activeTab: number;
  closeTab: () => void;
  createTab: (newTab?: Tab) => void;
  setActiveTab?: Dispatch<SetStateAction<number>>;
  tabs: [] | Tab[];
};
