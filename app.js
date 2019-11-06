const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');

const port = 3100;
const app = new Koa();
const router = new KoaRouter();

app.use(json());

router.get('/home', ctx => (ctx.body={Text: "Welcome to koa"}));
app.use(router.routes()).use(router.allowedMethods());
//app.use(async ctx => (ctx.body={Text: "Welcome to koa"}));

app.listen(port, () => console.log('Server running...')) ;