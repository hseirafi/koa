/**
 * Created by hass on 1/21/2017.
 */

const koa = require('koa');
const routes = require('koa-route');
var app = koa();

const userRoutes = require('./userRoutes.js');
app.use(routes.post("/user/:id",userRoutes.add));
app.use(routes.get("/user/:id",userRoutes.get));
app.use(routes.put("/user/:id",userRoutes.update));
app.use(routes.del("/user/:id",userRoutes.remove));

app.listen(1337);




