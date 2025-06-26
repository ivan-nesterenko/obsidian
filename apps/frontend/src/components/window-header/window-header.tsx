import { FC, useContext } from "react";
import { GlobalContext } from "../global-provider/global-provider";
import { clsx } from "clsx";

const onClickMinimizeHandler = () => {
  window.electron.minimize();
};

const onClickSizeHandler = () => {
  window.electron.toggleMaximize();
};

const onClickCloseHandler = () => {
  window.electron.close();
};

const WindowHeader: FC = () => {
  const globalContenxt = useContext(GlobalContext);

  if (!globalContenxt) {
    return (
      <header className="h-40px w-full bg-blue-200">
        <div>
          <button onClick={onClickMinimizeHandler}>—</button>
          <button onClick={onClickSizeHandler}>☐</button>
          <button onClick={onClickCloseHandler}>×</button>
        </div>
      </header>
    );
  }

  const { closeTab, createTab, setActiveTab, activeTab, tabs } = globalContenxt;

  return (
    <header className="flex h-[40px] w-full items-center justify-end gap-8 bg-blue-200 pr-6">
      <div className="flex gap-4">
        {tabs?.map((tab, index) => (
          <button
            className={clsx("flex p-2", index === activeTab ? "bg-amber-200" : "")}
            key={index}
            onClick={() => setActiveTab!(index)}
          >
            {index}
            <span>{tab.title}</span>
            <button onClick={() => closeTab(index)}>X</button>
          </button>
        ))}
        <button onClick={() => createTab()}>+</button>
      </div>
      <div className="flex gap-4">
        <button onClick={onClickMinimizeHandler}>—</button>
        <button onClick={onClickSizeHandler}>☐</button>
        <button onClick={onClickCloseHandler}>×</button>
      </div>
    </header>
  );
};

export default WindowHeader;
