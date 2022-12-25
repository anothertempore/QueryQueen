import {defineStore, TNanoStore} from 'electron-nano-store';
import type {StoreData} from './type';

let store: TNanoStore<StoreData>;

defineStore<StoreData>('store').then(res => {
  store = res;
});

export {store};
