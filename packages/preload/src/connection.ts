import {knex, Knex} from 'knex';
import type {ConnectionOptions} from './type';

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

export async function saveConnection(options: ConnectionOptions) {
  try {
    await testConnection(options);
  } catch (e) {
    throw new Error(`${(e as Error).message}`);
  }
}
