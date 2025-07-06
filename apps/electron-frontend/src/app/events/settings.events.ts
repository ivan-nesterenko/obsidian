import { ipcMain } from "electron";
import { getMainSetting, editMainSetting } from "../api/controllers/settings.controller";

export default class SettingsEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

ipcMain.handle("get-main-setting-value", getMainSetting);
ipcMain.handle("edit-main-setting-value", editMainSetting);
