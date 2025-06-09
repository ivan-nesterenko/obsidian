import App from "../../app";

export const close = () => {
  if (App.mainWindow) {
    console.log(App.mainWindow)
    App.mainWindow.close();
  }
};

export const minimize = () => {
  if (App.mainWindow) {
    App.mainWindow.minimize();
  }
};

export const toggleMaximize = () => {
  if (App.mainWindow) {
    App.mainWindow.isMaximized() ? App.mainWindow.unmaximize() : App.mainWindow.maximize();
  }
};
