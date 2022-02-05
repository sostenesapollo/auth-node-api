import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    table.uuid('id').primary().notNullable()
    table.string('username', 25).notNullable()
    table.string('password', 16).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user')
}
