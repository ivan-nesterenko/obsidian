import { FC } from "react";
import Main from "./app/main/Main";
import GlobalProvider from "./components/GlobalProvider";

const App: FC = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

export default App;
