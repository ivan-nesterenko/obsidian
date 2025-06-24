export enum TabType {
  EMPTY_TAB = "Empty Tab",
  NOTE = "note",
}

export type Tab = {
  title: string;
  type: TabType;
};
