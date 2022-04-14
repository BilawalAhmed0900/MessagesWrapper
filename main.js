const electron = require("electron");
const { app, BrowserWindow } = electron;

function createWindow() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: width,
    height: height,
    maximizable: true,
    autoHideMenuBar: true,
  });

  win.setMenu(null);
  win.loadFile("main.html");
  win.maximize();
}

app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
