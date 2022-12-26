export interface WindowStoreData {
  height: number;
  width: number;
}

export interface StoreData {
  [key: string]: any;
  window: WindowStoreData[];
}
