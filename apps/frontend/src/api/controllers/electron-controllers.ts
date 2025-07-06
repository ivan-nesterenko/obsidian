import { MainSettingsType } from "@/shared/types/electron-settings";

export const getMainSetting = async <K extends keyof MainSettingsType>(key: K) =>
  await window.electron.getMainSetting({ key });
