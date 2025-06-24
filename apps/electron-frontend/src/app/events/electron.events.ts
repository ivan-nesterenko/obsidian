import { app, ipcMain } from "electron";
import { close, minimize, toggleMaximize } from "../api/controllers/windowControllers";

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

ipcMain.handle("window-close", close);
ipcMain.handle("window-minimize", minimize);
ipcMain.handle("window-toggle-maximize", toggleMaximize);

// Handle window-main termination
ipcMain.on("quit", (event, code) => {
  app.exit(code);
});
