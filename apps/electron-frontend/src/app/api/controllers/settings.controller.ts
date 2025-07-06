import { mainSettings } from "../../app";
import {
  EditMainSettingValueProps,
  EditMainSettingValueResponse, GetMainSettingValueProps,
} from "@/shared/types/electron";
import { MainSettingsType } from "@/shared/types/electron-settings";

export const getMainSetting = <K extends keyof MainSettingsType> (event: Electron.IpcMainInvokeEvent, args: GetMainSettingValueProps<K>) => {
  return mainSettings.get(args.key);
};

export const editMainSetting = <K extends keyof MainSettingsType> (
  event: Electron.IpcMainInvokeEvent,
  args: EditMainSettingValueProps<K>,
): EditMainSettingValueResponse => {
  mainSettings.set(args.key, args.value);

  return {
    success: true,
  };
};
