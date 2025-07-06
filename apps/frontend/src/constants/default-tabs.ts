import { v4 as uuid } from "uuid";
import { Tab, TabType } from "../types/tab";

export const createDefaultNote = (): Tab => ({
  id: uuid(),
  title: "New Note",
  type: TabType.NOTE,
});

export const createDefaultEmptyTab = (): Tab => ({
  id: uuid(),
  title: "New Tab",
  type: TabType.EMPTY_TAB,
});
