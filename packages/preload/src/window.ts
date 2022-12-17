import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('WINDOW', {
  maximizeWindow: () => {
    ipcRenderer.send('maximize-window');
  },
});
