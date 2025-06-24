import { FC } from "react";
import SidebarPanel from "../../components/sidebar-panel";
import WindowHeader from "../../components/window-header";
import WindowMain from "../../components/window-main";

const Main: FC = () => (
  <div className="bg-black">
    <WindowHeader />
    <div className="flex flex-col">
      <SidebarPanel />
      <WindowMain />
    </div>
  </div>
);

export default Main;
