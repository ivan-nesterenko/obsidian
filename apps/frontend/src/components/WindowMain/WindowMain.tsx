import SidebarPanel from "../SidebarPanel";
import { FC } from "react";

const WindowMain: FC = () => {
  return (
    <div>
      <SidebarPanel/>
      <main>Main Content</main>
    </div>
  );
};

export default WindowMain;
