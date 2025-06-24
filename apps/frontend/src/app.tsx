import { FC } from "react";
import Main from "./app/main";
import GlobalProvider from "./components/global-provider";

const App: FC = () => (
  <GlobalProvider>
    <Main />
  </GlobalProvider>
);

export default App;
