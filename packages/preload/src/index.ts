/**
 * @module preload
 */

import './window';

export {versions} from './versions';
export {
  testConnection,
  saveConnection,
  checkConnection,
  getAllConnections,
  getActiveConnection,
} from './connection';
export type {ConnectionStoreData, ConnectionOptions} from './type';
