import {app} from 'electron';
import {defineStore, resolveStoreFilepath, TNanoStore} from 'electron-nano-store';
import type {StoreData} from './type';

let store: TNanoStore<StoreData>;

defineStore<StoreData>(resolveStoreFilepath('store', app.getPath('userData'))).then(res => {
  store = res;
});

export {store};
