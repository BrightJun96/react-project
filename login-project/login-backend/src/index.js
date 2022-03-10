const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/login")
  .then(() => console.log("Connected to MongoDB, WELCOME!"));

const LoginSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
});
const Login = mongoose.model("Login", LoginSchema);

async function generate(ctx) {
  const { name, height, weight } = ctx.request.body;
  const creator = new Login({ name, height, weight });

  try {
    await creator.save();
    ctx.body = creator;
  } catch (e) {
    ctx.throw(500, e);
  }
}

async function arrange(ctx) {
  try {
    const lists = await Login.find().exec();

    ctx.body = lists;
  } catch (e) {
    ctx.throw(500, e);
  }
}

async function holdOne(ctx) {
  const { id } = ctx.params;
  try {
    const list = await Login.findById(id).exec();
    if (!list) {
      ctx.status = 404;
      return; // 계속 되지 않도록 종료해줌.
    }
    ctx.body = list;
  } catch (e) {
    ctx.throw(500, e);
  }
}

async function remove(ctx) {
  const { id } = ctx.params;

  try {
    await Login.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
}

const app = new Koa();
const router = new Router();

app.use(bodyParser());
router.get("/", (ctx) => {
  ctx.body = "home";
});

router.post("/posts", generate);
router.get("/posts", arrange);
router.get("/posts/:id", holdOne);
router.delete("/posts/:id", remove);

const port = 1115;

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
