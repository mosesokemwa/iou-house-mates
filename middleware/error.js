module.exports = async function (ctx, next) {
  let err;
  try {
    await next();
  } catch (error) {
    err = error;
    console.log(err);

    if (typeof error === 'function') {
      err = error();
    }

    let status = err.status || 500;

    let message = err.message && status < 500 ? err.message : 'Sorry, an error has occurred.';

    console.log(`${ctx.method} ${ctx.url} - ${status} - ${message}`);

    if (status >= 500) {
      err.headers = { ...err.headers, 'Retry-After': 30 };
    }

    ctx.status = status;

    // for validation errors
    if (err.errors) {
      return ctx.body = { errors: err.errors, error_message: err.detail };
    }

    ctx.body = {
      status,
      message
    };
  }
};