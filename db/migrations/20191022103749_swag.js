const { idGenerator, idGenRemoval } = require('../id_generator');

exports.up = knex => knex.schema
  .raw(idGenerator)
  .createTable('users', table => {
    table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
    table.text('username').unique().index();
    table.text('last_seen');
    table.jsonb('metadata');
    table.timestamps();
  })
  .createTable('ledgers', table => {
    table.text('id').primary().notNullable().defaultTo(knex.raw('next_id()'));
    table.text('lender');
    table.text('borrower');
    table.float('amount');
    table.timestamps();
  });

exports.down = knex => knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('ledgers')
  .raw(idGenRemoval);
