import {app} from 'electron';
import {defineStore} from '#common';
import type {StoreData} from './type';

const store = defineStore<StoreData>('store', app.getPath('userData'));

export {store};
