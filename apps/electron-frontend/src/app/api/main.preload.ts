import { contextBridge, ipcRenderer } from "electron";
import {
  EditMainSettingValueProps,
  EditMainSettingValueResponse,
  GetMainSettingValueProps,
} from "@/shared/types/electron";
import { MainSettingsType } from "@/shared/types/electron-settings";

contextBridge.exposeInMainWorld("electron", {
  minimize: () => ipcRenderer.invoke("window-aside-minimize"),
  toggleMaximize: () => ipcRenderer.invoke("window-aside-toggle-maximize"),
  close: () => ipcRenderer.invoke("window-aside-close"),
  getDirectory: () => ipcRenderer.invoke("get-directory"),
  getMainSetting: <K extends keyof MainSettingsType> (args: { key: K }): Promise< MainSettingsType[K] > =>
    ipcRenderer.invoke("get-main-setting-value", args),
  editMainSetting:  <K extends keyof MainSettingsType> (args: { key: K; value: MainSettingsType[K] }): Promise<EditMainSettingValueResponse> =>
    ipcRenderer.invoke("edit-main-setting-value", args),
});
