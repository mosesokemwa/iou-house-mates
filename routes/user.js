const Router = require('koa-router');
const knex = require('../utils/knexUtil');
const User = require('../models/user');

const router = new Router({
  prefix: ''
});
router.get('/users', async ctx => {
  try {
    // Build query using knex pluck - http://knexjs.org/#Builder-pluck
    // let users = await knex.table('users').pluck('username');

    // in ObjectionJs pluck, pick, and omit is deprecated  https://github.com/Vincit/objection.js/issues/1588
    // Ordered by username
    const users = await User.query().where(ctx.query).select("username").orderBy('username').then(items => items.map(it => it.username))

    ctx.status = 200;
    ctx.body = { users: users };
  } catch (e) {
    ctx.throw(400, null, { errors: [e.message] });
  }
});

router.post('/add', async ctx => {
  ctx.assert(ctx.request.body.users, 400, 'No user data provided')
  try {
    const users = await User.query().insertAndFetch({ username: ctx.request.body.users })
    ctx.status = 200;
    ctx.body = { users: users };
  } catch (e) {
    if (e.constraint == 'users_username_unique') {
      ctx.throw(400, null, { errors: ['A user with that name already exists, try using a different name'] });
    }
    ctx.throw(400, null, { errors: [e.message] });
  }
});

module.exports = router.routes();
