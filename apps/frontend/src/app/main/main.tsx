import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMainSetting } from "../../api/controllers/electron-controllers";
import { WindowAside, WindowHeader, WindowMain, WindowVaultManager } from "../../components/window";

const Main: FC = () => {
  const { data, isPending } = useQuery({
    queryFn: () => getMainSetting("lastActiveVaultId"),
    queryKey: ["mainSettings", "lastActiveVaultId"],
  });

  return (
    <div className="flex flex-col bg-blue-200">
      {isPending && <div>Loading...</div>}
      {!data && <WindowVaultManager />}
      {!!data && (
        <>
          <WindowHeader />
          <div>
            <WindowAside />
            <WindowMain />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
