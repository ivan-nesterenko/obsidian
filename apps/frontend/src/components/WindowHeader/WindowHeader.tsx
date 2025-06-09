import { FC } from "react";

const WindowHeader: FC = () => {
  const onClickMinimizeHandler = () => {
    window.electron.minimize();
  };

  const onClickSizeHandler = () => {
    window.electron.toggleMaximize();
  };

  const onClickCloseHandler = () => {
    window.electron.close();
  };

  return (
    <header className={"h-40px w-full bg-blue-200"}>
      <button onClick={onClickMinimizeHandler}>—</button>
      <button onClick={onClickSizeHandler}>☐</button>
      <button onClick={onClickCloseHandler}>×</button>
    </header>
  );
};

export default WindowHeader;
