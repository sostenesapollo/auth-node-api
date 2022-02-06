import knex from 'knex';

export default knex({
  'client': 'mysql2',
  'connection': {
    'host' : '172.25.0.3',
    'port' : 3306,
    'user' : 'root',
    'password' : '123',
    'database' : 'auth_sys'
  }
})
