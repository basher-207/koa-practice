const Koa = require('koa');
const app = new Koa();
const bookController = require('./controllers/book');
const genreController = require('./controllers/genre');
const authorController = require('./controllers/author');

const routes = {
  'book': bookController,
  'genre': genreController,
  'author': authorController,
  'badRoute': () => ({message: 'Route is not supported'})
}

const mwRouter = async (ctx, next) => {
  const [, path] = ctx.path.split('/');
  ctx.state.func = routes[path] || routes['badRoute'];
  next();
};

app.use(mwRouter);
app.use(ctx => {
  ctx.body = ctx.state.func(ctx.query);
});

module.exports = app;