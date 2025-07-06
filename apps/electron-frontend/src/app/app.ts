import { BrowserWindow, screen, dialog, session } from "electron";
import { rendererAppName, rendererAppPort } from "./constants";
import { environment } from "../environments/environment";
import { join } from "path";
import { format } from "url";
import { ElectronStoreManager } from "../config/store";
import { mainSettingsSchema } from "@/shared/types/electron-settings";

export const mainSettings = new ElectronStoreManager<typeof mainSettingsSchema>("main_settings", mainSettingsSchema);

export default class App {
  // Keep a global reference of the window-aside object, if you don't, the window-aside will
  // be closed automatically when the JavaScript object is garbage collected.

  static mainWindow: Electron.BrowserWindow | null;
  static application: Electron.App;
  static BrowserWindow: typeof BrowserWindow | null;

  public static isDevelopmentMode() {
    const isEnvironmentSet: boolean = "ELECTRON_IS_DEV" in process.env;
    const isDev: string = process.env.ELECTRON_IS_DEV ?? "0";
    const getFromEnvironment: boolean = parseInt(isDev, 10) === 1;

    return isEnvironmentSet ? getFromEnvironment : !environment.production;
  }

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      App.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window-aside object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.

    App.mainWindow = null;
  }

  // private static onRedirect(event: any, url: string) {
  //   if (url !== window-aside-main.mainWindow.webContents.getURL()) {
  //     // this is a normal external redirect, open it in a new browser window-aside
  //     event.preventDefault();
  //     shell.openExternal(url);
  //   }
  // }

  private static onReady() {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.

    if (rendererAppName) {
      App.initMainWindow();
      App.loadMainWindow();
    }
  }

  private static onActivate() {
    // On macOS it's common to re-create a window-aside in the app when the
    // dock icon is clicked and there are no other windows open.

    if (App.mainWindow === null) {
      App.onReady();
    }
  }

  private static getPrimaryDisplay() {
    const lastActiveVaultId = mainSettings.get("lastActiveVaultId");
    const {
      width: preferencedWidth,
      height: prefencedHeight,
    } = mainSettings.get("window") ?? { width: 0, height: 0 };
    const { width: fullWidth, height: fullHeight } = screen.getPrimaryDisplay().workAreaSize;

    const modalWidth = Math.floor(fullWidth / 2);
    const modalHeight = Math.floor(fullHeight / 2);

    return {
      width: lastActiveVaultId ? preferencedWidth : modalWidth,
      height: lastActiveVaultId ? prefencedHeight : modalHeight,
    };
  }

  private static initMainWindow() {
    const { width, height} = this.getPrimaryDisplay();

    // Create the browser window-aside.
    App.mainWindow = new BrowserWindow({
      width: width,
      height: height,
      show: false,
      frame: false,
      titleBarStyle: "hidden",
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        backgroundThrottling: false,
        preload: join(__dirname, "/main.preload.js"),
      },
    });

    session.defaultSession.on("file-system-access-restricted", async (e, details, callback) => {
      const { origin, path } = details;
      const { response } = await dialog.showMessageBox({
        message: `Are you sure you want ${origin} to open restricted path ${path}?`,
        title: "File System Access Restricted",
        buttons: ["Choose a different folder", "Allow", "Cancel"],
        cancelId: 2,
      });

      if (response === 0) {
        callback("tryAgain");
      } else if (response === 1) {
        callback("allow");
      } else {
        callback("deny");
      }
    });

    App.mainWindow.setMenu(null);
    App.mainWindow.center();
    App.mainWindow.webContents.openDevTools();

    // if main window-aside is ready to show, close the splash window-aside and show the main window-aside

    App.mainWindow.once("ready-to-show", () => {
      App.mainWindow?.show();
    });

    // handle all external redirects in a new browser window-aside
    // window-aside-main.mainWindow.webContents.on('will-navigate', window-aside-main.onRedirect);
    // window-aside-main.mainWindow.webContents.on('new-window-aside', (event, url, frameName, disposition, options) => {
    //     window-aside-main.onRedirect(event, url);
    // });

    // Emitted when the window-aside is closed.
    App.mainWindow.on("closed", () => {
      // Dereference the window-aside object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      App.mainWindow = null;
    });
  }

  // load the index.html of the app.
  private static loadMainWindow() {
    if (!App.application.isPackaged) {
      App.mainWindow?.loadURL(`http://localhost:${rendererAppPort}`);
    } else {
      App.mainWindow?.loadURL(
        format({
          pathname: join(__dirname, "..", rendererAppName, "index.html"),
          protocol: "file:",
          slashes: true,
        }),
      );
    }
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.window-aside-main object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for

    App.BrowserWindow = browserWindow;
    App.application = app;

    App.application.on("window-all-closed", App.onWindowAllClosed); // Quit when all windows are closed.
    App.application.on("ready", App.onReady); // window-aside-main is ready to load data
    App.application.on("activate", App.onActivate); // window-aside-main is activated
  }
}
