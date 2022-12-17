import {ipcMain, BrowserWindow} from 'electron';

ipcMain.addListener('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow();

  if (window?.isMaximized()) {
    window.unmaximize();
  } else {
    window?.maximize();
  }
});
