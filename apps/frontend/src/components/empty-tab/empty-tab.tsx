import { FC, useContext } from "react";
import { createDefaultNote } from "../../constants/default-tabs";
import { GlobalContext } from "../global-provider/global-provider";

const EmptyTab: FC = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    return <main className="h-40px w-full bg-blue-200">No file is open</main>;
  }

  const { closeTab, activeTab } = globalContext;

  const switchCurrentToTab = () => {
    const newNote = createDefaultNote();

    closeTab(activeTab, newNote);
  };

  return (
    <div className="h-full w-full bg-blue-200">
      <button onClick={switchCurrentToTab}>Create Note (Ctrl + N)</button>
    </div>
  );
};

export default EmptyTab;
