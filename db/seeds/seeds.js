exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(() => knex('ledgers').del()
    .then(() => knex('users').insert([
      {
        id: 'user1',
        username: 'Bob',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      }, {
        id: 'user2',
        username: 'Chuck',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'user3',
        username: 'Adam',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        id: 'user4',
        username: 'Dan',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      }
    ])
    .then(() => knex('ledgers').insert([
      {
        lender: 'user1',
        borrower: 'user3',
        amount: 12,
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
          lender: 'user2',
          borrower: 'user3',
          amount: 4.0,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        },
        {
          lender: 'user2',
          borrower: 'user3',
          amount: 9.5,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        },
        {
          lender: 'user3',
          borrower: 'user1',
          amount: 6.5,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        },
        {
          lender: 'user4',
          borrower: 'user1',
          amount: 2.75,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        }
    ]))));
};
