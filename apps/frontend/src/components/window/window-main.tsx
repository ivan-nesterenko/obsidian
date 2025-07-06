import { FC, useContext } from "react";
import { TabType } from "../../types/tab";
import EmptyTab from "../empty-tab";
import { GlobalContext } from "../global-provider/global-provider";
import NoteEditor from "../note-edtor";

export const WindowMain: FC = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    return <main className="h-40px w-full bg-blue-200" />;
  }

  const { activeTab } = globalContext;

  return (
    <main className="h-full w-full bg-blue-200">
      {activeTab.type === TabType.NOTE && <NoteEditor />}
      {activeTab.type === TabType.EMPTY_TAB && <EmptyTab />}
    </main>
  );
};

WindowMain.displayName = "WindowMain";
