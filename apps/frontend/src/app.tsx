import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./app/main";
import GlobalProvider from "./components/global-provider";

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  </QueryClientProvider>
);

export default App;
