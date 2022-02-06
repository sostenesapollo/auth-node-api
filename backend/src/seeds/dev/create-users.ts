import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    
  await knex('user').del();
    
  await knex('user').insert([{ 
    'id': 1,
    'username': 'root',
    'password': '$2b$08$f4kt43a1cJOJyUCuyO.0n.RsLS8AXkqmIMKirYcVrms6IFusjRtiO'
  }]);

}
