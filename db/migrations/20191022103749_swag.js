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
  .createTable('ledger_user', table => {
      table.text('user_id').references('users');
      table.text('ledgers_id').references('ledgers');
      table.primary(['user_id', 'ledgers_id']);
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
  .dropTableIfExists('ledger_user')
  .raw(idGenRemoval);
