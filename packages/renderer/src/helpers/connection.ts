import type {ConnectionStoreData} from '#preload';

export function getActiveConnection(allConnections: ConnectionStoreData[]) {
  return allConnections.find(con => con.active);
}
