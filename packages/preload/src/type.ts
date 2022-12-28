export interface ConnectionOptions {
  name: string;
  host: string;
  port: string;
  databaseName: string;
  ssl: boolean;
  username: string;
  password: string;
}

export interface ConnectionStoreData extends ConnectionOptions {
  active: boolean;
}

export interface StoreData {
  [key: string]: any;
  connections: ConnectionStoreData[];
}
