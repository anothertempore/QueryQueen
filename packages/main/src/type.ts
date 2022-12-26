import type {Rectangle} from 'electron';

export interface StoreData {
  [key: string]: any;
  window: Rectangle;
}
