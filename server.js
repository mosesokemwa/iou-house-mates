const Koa = require('koa');
const path = require('path');
const koaQs = require('koa-qs');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./middleware/error');
const logger = require('./middleware/logger');
const cors = require('@koa/cors');
const app = new Koa();

const router = new Router({
  prefix: ''
});

koaQs(app);

app.use(cors({
  origin: '*',
  maxAge: 5,
  credentials: true,
  allowMethods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],
  allowHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'mojaHeader',
    'achievements'
  ]
}));

app.use(errorHandler);

app.use(logger);

app.use(bodyParser());

app.use(require('koa-static')(path.resolve(__dirname, './public')));

router.use(require('./routes/routes'));

router.get('/hello', async ctx => {
  log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
  ctx.body = { user: 'You have access to view this route' };
});

app.use(router.routes());

module.exports = app;
