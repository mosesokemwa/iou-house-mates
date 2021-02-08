const Router = require('koa-router');
const knex = require('../utils/knexUtil');
const User = require('../models/user');
const Ledger = require('../models/ledger');

const router = new Router({
  prefix: ''
});


/**
 * @api {get} /users GET users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiParam (Request body) {String} users[] Username - Unique.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *      "users": ["Adam", "Bob"]
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "users": []
 *     }
 */
router.get('/users', async ctx => {
  try {
    // Build query using knex pluck - http://knexjs.org/#Builder-pluck
    // let users = await knex.table('users').pluck('username');

    // in ObjectionJs pluck, pick, and omit is deprecated  https://github.com/Vincit/objection.js/issues/1588
    // Ordered by username
    console.log(ctx.request.body.users);
    const users = await User.query().whereIn('username', ctx.request.body.users).orderBy('username');

    ctx.status = 200;
    ctx.body = { users: users };
  } catch (e) {
    ctx.throw(404, null, { errors: [e.message] });
  }
});

/**
 * @api {post} /add POST a new user
 * @apiName PostUsers
 * @apiGroup User
 *
 * @apiParam (Request body) {String} user Username - Unique.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "users": {
 *            "username": "me",
 *            "createdAt": "2021-02-07T22:30:20.492Z",
 *            "updatedAt": "2021-02-07T22:30:20.492Z",
 *            "id": "IsB_9W4AABY",
 *             "lastSeen": null,
 *             "metadata": null
 *          }
 *      }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "errors": "A user with that name already exists, try using a different name"
 *      }
 *
 * @apiErrorExample {json} NotFoundError:
 *    Error 404: Not Found
 *    {
 *       "status": 404,
 *        "message": "No user data provided"
 *    }
 */

router.post('/add', async ctx => {
  let username = ctx.request.body.user
  ctx.assert(username, 404, 'No user data provided')
  try {
    const users = await User.query().insertAndFetch({ username: username })
    ctx.status = 200;
    ctx.body = { users: users };
  } catch (e) {
    if (e.constraint == 'users_username_unique') {
      ctx.throw(404, null, { errors: ['A user with that name already exists, try using a different name'] });
    }
    ctx.throw(404, null, { errors: [e.message] });
  }
});

/**
 * @api {post} /iou POST a new iou entry
 * @apiName PostIOU
 * @apiGroup IOU
 *
 * @apiParam (Request body) {String} lender Username - Unique.
 * @apiParam (Request body) {String} borrower Username - Unique.
 * @apiParam (Request body) {String} amount Amount float
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "name": "Adam",
 *       "owes": {
 *         "Bob": 12.0,
 *         "Chuck": 4.0,
 *         "Dan": 9.5
 *       },
 *       "owed_by": {
 *          "Bob": 6.5,
 *          "Dan": 2.75,
 *       },
 *       "balance": "<(total owed by other users) - (total owed to other users)>"
 *    }
 */


router.post('/iou', async ctx => {
  let ledgerData = ctx.request.body;
  ctx.assert(ledgerData, 400, 'No user data provided');
  let lender = ledgerData.lender;

  try {
    await Ledger.query().insertAndFetch(ledgerData);
    let ledger = await knex.raw("SELECT COALESCE(json_object_agg(borrower,amount) FILTER (WHERE borrower != 'Adam'), '{}') AS owed_by, COALESCE(json_object_agg(lender,amount) FILTER (WHERE lender != 'Adam'), '{}') AS owes, SUM(CASE WHEN lender = 'Adam' THEN amount ELSE 0 END) - SUM(CASE WHEN borrower = 'Adam' THEN amount ELSE 0 END) as balance FROM ledgers where borrower = 'Adam' or lender = 'Adam';")
    ledger=ledger.rows[0]
    ledger['owed_by']=ledger.owed_by
    ledger['owes']=ledger.owes
    ledger['balance']=ledger.balance
    ledger['name'] = lender

    ctx.status = 200;
    ctx.body = ledger;
  } catch (e) {
    ctx.throw(400, null, { errors: [e.message] });
  }
});
module.exports = router.routes();
