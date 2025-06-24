import { FC, useContext } from "react";
import { GlobalContext } from "../global-provider/global-provider";

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

  const { closeTab, createTab, tabs } = globalContenxt;

  return (
    <header className="h-40px w-full bg-blue-200">
      <div>
        {tabs?.map((tab, index) => (
          <div key={index}>
            <span>{tab.title}</span>
            <button onClick={() => closeTab()}>X</button>
          </div>
        ))}
        <button onClick={() => createTab()}>+</button>
      </div>
      <div>
        <button onClick={onClickMinimizeHandler}>—</button>
        <button onClick={onClickSizeHandler}>☐</button>
        <button onClick={onClickCloseHandler}>×</button>
      </div>
    </header>
  );
};

export default WindowHeader;
