import { Tab, TabType } from "../types/Tab";

export const defaultNote: Tab = {
  title: "New Note",
  type: TabType.Note,
};

export const defaultEmptyTab: Tab = {
  title: "New Tab",
  type: TabType.EmptyTab,
};
