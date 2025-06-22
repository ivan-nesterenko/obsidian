import WindowHeader from "../../components/WindowHeader";
import WindowMain from "../../components/WindowMain";
import { FC } from "react";
import SidebarPanel from "../../components/SidebarPanel";

const Main: FC = () => {
  return (
    <div className="bg-black">
      <WindowHeader />
      <div className="flex flex-col">
        <SidebarPanel/>
        <WindowMain />
      </div>
    </div>
  )
}

export default Main;
