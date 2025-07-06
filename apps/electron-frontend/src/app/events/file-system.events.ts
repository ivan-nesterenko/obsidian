import { ipcMain } from "electron";
import { getDirectory } from "../api/controllers/file-system.controller";

export default class FileSystemEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

ipcMain.handle("get-directory", getDirectory);
