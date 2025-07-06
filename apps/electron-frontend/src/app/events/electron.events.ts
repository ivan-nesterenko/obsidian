import { app, ipcMain } from "electron";
import FileSystemEvents from "./file-system.events";
import SettingsEvents from "./settings.events";
import WindowEvents from "./window.events";

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    FileSystemEvents.bootstrapElectronEvents();
    SettingsEvents.bootstrapElectronEvents();
    WindowEvents.bootstrapElectronEvents();

    return ipcMain;
  }
}

ipcMain.on("quit", (event, code) => {
  app.exit(code);
});
