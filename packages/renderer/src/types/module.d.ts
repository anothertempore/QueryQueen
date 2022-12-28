declare module '#common' {
  type Json =
    | string
    | number
    | boolean
    | null
    | Json[]
    | {
        [key: string]: Json;
      };
  export type TStoreBaseData = Record<string, Json>;
  export type TStore<TStoreData extends TStoreBaseData> = {
    /** Return value from store by key */
    get<TKey extends keyof TStoreData>(key: TKey): TStoreData[TKey];
    /**
     * Save `value` to store for `key`.
     * Synchronously stores data to local in-memory storage.
     * Asynchronously updates storage on the file system.
     * @param key
     * @param value
     * @return `undefined`
     */
    set<TKey extends keyof TStoreData>(key: TKey, value: TStoreData[TKey]): void;
  };

  export declare function defineStore<TStoreData extends TStoreBaseData>(
    storeName: string,
    userDataPath?: string,
  ): TStore<TStoreData>;
}
