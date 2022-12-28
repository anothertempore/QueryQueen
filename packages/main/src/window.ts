import {ipcMain, BrowserWindow} from 'electron';

ipcMain.handle('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow();

  if (window?.isMaximized()) {
    window.unmaximize();
  } else {
    window?.maximize();
  }
});
