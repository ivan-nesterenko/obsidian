import { dialog } from "electron";

export const getDirectory = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (!canceled && filePaths.length) {
    return {
      success: true,
      filePaths: filePaths[0],
    };
  } else {
    return {
      success: false,
      error: "No directory selected",
    };
  }
};
