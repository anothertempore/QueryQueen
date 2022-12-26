import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('WINDOW', {
  maximizeWindow: () => {
    ipcRenderer.invoke('maximize-window');
  },
});
