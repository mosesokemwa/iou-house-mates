exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ledgers').del()
  .then(() => knex('ledger_user').del()
    .then(() => knex('ledgers').insert([
      {
        id: 'ledger1',
        lender: 'Bob',
        borrower: 'Adam',
        amount: 12,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'ledger2',
        lender: 'Chuck',
        borrower: 'Adam',
        amount: 4.0,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'ledger3',
        lender: 'Chuck',
        borrower: 'Adam',
        amount: 9.5,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'ledger4',
        lender: 'Adam',
        borrower: 'Bob',
        amount: 6.5,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'ledger5',
        lender: 'Dan',
        borrower: 'Bob',
        amount: 2.75,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      }
    ])
    .then(() => knex('ledger_user').insert([
      {
        user_id: 'user1',
        ledgers_id: 'ledger1'
      },
      {
        user_id: 'user2',
        ledgers_id: 'ledger2'
      },
      {
        user_id: 'user3',
        ledgers_id: 'ledger2'
      },
      {
        user_id: 'user3',
        ledgers_id: 'ledger4'
      },
      {
        user_id: 'user4',
        ledgers_id: 'ledger5'
      }
    ]))));
};
