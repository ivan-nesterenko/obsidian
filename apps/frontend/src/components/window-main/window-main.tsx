import { FC } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuTrigger,
} from "../../../../../libs/ui-shared/src/components/context-menu";

const WindowMain: FC = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex flex-1">Right-click here.</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent className="min-w-[220px] overflow-hidden rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <ContextMenuItem className="text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
          Back{" "}
          <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
            ⌘+[
          </div>
        </ContextMenuItem>
        <ContextMenuItem
          className="text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
          disabled
        >
          Forward{" "}
          <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
            ⌘+]
          </div>
        </ContextMenuItem>
        <ContextMenuItem className="text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
          Reload{" "}
          <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
            ⌘+R
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenu>
);

export default WindowMain;
