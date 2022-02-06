import knex from 'knex';

export default knex({
  'client': 'mysql2',
  'connection': {
    'host' : 'db',
    'port' : 3306,
    'user' : 'root',
    'password' : '123',
    'database' : 'auth_sys'
  }
})
