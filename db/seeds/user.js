exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        username: 'Bob',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      }, {
        username: 'Chuck',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        username: 'Adam',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      },
      {
        username: 'Dan',
        last_seen: '2017-12-20 19:17:10',
        created_at: '2017-12-20 19:17:10',
        updated_at: '2017-12-20 19:17:10'
      }
    ]));
};
