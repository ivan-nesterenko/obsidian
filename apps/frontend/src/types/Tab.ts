export enum TabType {
  Note = "note",
  EmptyTab = "Empty Tab",
  Graph = "graph"
};

export type Tab = {
  title: string;
  type: TabType;
}
