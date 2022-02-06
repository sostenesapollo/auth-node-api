import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  'development': {
    'client': 'mysql2',
    'connection': {
      'host' : '0.0.0.0',
      'port' : 3306,
      'user' : 'root',
      'password' : '123',
      'database' : 'auth_sys'
    },
    'migrations':{
      'directory': './src/migrations'
    },
    'seeds': {
      'directory': './src/seeds/dev'
    }
  },

};

module.exports = config;
