import { ipcMain } from "electron";
import { close, minimize, toggleMaximize } from "../api/controllers/window.controller";

export default class WindowEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

ipcMain.handle("window-aside-close", close);
ipcMain.handle("window-aside-minimize", minimize);
ipcMain.handle("window-aside-toggle-maximize", toggleMaximize);
