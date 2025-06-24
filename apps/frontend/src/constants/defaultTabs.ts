import { Tab, TabType } from "../types/tab";

export const defaultNote: Tab = {
  title: "New Note",
  type: TabType.NOTE,
};

export const defaultEmptyTab: Tab = {
  title: "New Tab",
  type: TabType.EMPTY_TAB,
};
