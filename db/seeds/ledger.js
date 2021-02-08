exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ledgers').del()
      .then(() => knex('ledgers').insert([
        {
          lender: 'Bob',
          borrower: 'Adam',
          amount: 12,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        },
        {
            lender: 'Chuck',
            borrower: 'Adam',
            amount: 4.0,
            created_at: '2017-12-20 19:17:10',
            updated_at: '2017-12-20 19:17:10'
          },
          {
            lender: 'Chuck',
            borrower: 'Adam',
            amount: 9.5,
            created_at: '2017-12-20 19:17:10',
            updated_at: '2017-12-20 19:17:10'
          },
          {
            lender: 'Adam',
            borrower: 'Bob',
            amount: 6.5,
            created_at: '2017-12-20 19:17:10',
            updated_at: '2017-12-20 19:17:10'
          },
          {
            lender: 'Dan',
            borrower: 'Bob',
            amount: 2.75,
            created_at: '2017-12-20 19:17:10',
            updated_at: '2017-12-20 19:17:10'
          }
      ]));
  };
