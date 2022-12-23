export interface ConnectionOptions {
  name: string;
  host: string;
  port: string;
  databaseName: string;
  ssl: boolean;
  username: string;
  password: string;
}

export interface StoreData {
  connections: ConnectionOptions[];
}
