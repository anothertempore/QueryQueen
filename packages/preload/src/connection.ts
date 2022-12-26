import {knex, Knex} from 'knex';
import {store} from './store';
import type {ConnectionOptions, ConnectionStoreData} from './type';

export function buildConnection(options: ConnectionOptions) {
  const config: Knex.Config = {
    client: 'mysql',
    connection: {
      host: options.host,
      port: +options.port,
      user: options.username,
      password: options.password,
      database: options.databaseName,
      multipleStatements: true,
      ssl: options.ssl,
    },
  };
  return knex(config);
}

export async function testConnection(options: ConnectionOptions) {
  const knexInstance = buildConnection(options);

  try {
    await knexInstance.raw('select @@version');
    return {
      status: 'ok',
    };
  } catch (e) {
    throw new Error(`${(e as Error).message}`);
  }
}

export function checkConnection(name: string) {
  const allConnections = getAllConnections();
  if (allConnections) {
    if (allConnections.map(con => con.name).includes(name)) {
      return 'There is already has the same connection name, please use another one.';
    }
    return true;
  }
  return true;
}

export async function saveConnection(options: ConnectionOptions) {
  try {
    await testConnection(options);
    const allConnections = getAllConnections();
    const currentConnection = {...options, active: true};

    store.set(
      'connections',
      allConnections
        ? [...allConnections.map(con => ({...con, active: false})), currentConnection]
        : [currentConnection],
    );
  } catch (e) {
    throw new Error(`${(e as Error).message}`);
  }
}

export function getAllConnections(): ConnectionStoreData[] {
  return store.get('connections');
}

export function getActiveConnection() {
  const allConnections = getAllConnections();
  return allConnections?.find(con => con.active);
}
