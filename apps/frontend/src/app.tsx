import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./app/main/Main";

const App: FC = () => {
  const { PUBLIC_URL } = process.env;

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
