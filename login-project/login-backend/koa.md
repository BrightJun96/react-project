# KOA

## feature

- KOA는 routing기능이 없어 라이브러리(koa-router)를 설치하여 사용해야한다.

## Back-end

데이터를 공유하기 위해서는 서버를 만들어 데이터를 담고 통신해야한다.

데이터 담을 때의 규칙

- 특정 데이터를 등록할 때 사용자 인증 정보
- 등록할 데이터를 검증하는 과정
- 다양한 데이터 종류 구분

### Tech

Usage : node.js , koa

node.js는 자바스크립트로 서버를 구현할 수 있다.

## Todo

- npm init -y  
  `package.json 초기화`

- koa install  
  `npm i koa`

- 서버를 실행할 때  
  `node directory/file name`

- 변경사항들을 즉시 업데이트해주고 싶을 때
  `npm i nodemon --save-dev`

- routing  
  `npm i koa-router`

## To study

```js
const Koa = require("koa");
const app = new Koa();

app.use((ctx, next) => {});
```

<hr/>

## koa-router

> koa에서 라우팅을 도와주는 라이브러리

### Basic usage

```js
var Koa = require("koa");
var Router = require("koa-router");

var app = new Koa();
var router = new Router();

router.get("/", (ctx, next) => {
  // ctx.router available
});

app.use(router.routes()).use(router.allowedMethods());
```

### [koa-router API](https://github.com/ZijianHe/koa-router)

#### **router.routes()**

router.routes ⇒ function

> Returns router middleware which dispatches a route matching the request.

설정한 라우터에 맞게 라우트를 보내준다.

<br>

#### **router.use([path],middleware)**

router.use() => Router

> Middleware run in the order they are defined by .use().  
>  They are invoked sequentially, requests start at the first middleware and work their way "down" the middleware stack.

```js
// session middleware will run before authorize
router.use(session()).use(authorize());

// use middleware only with given path
router.use("/users", userAuth());

// or with an array of paths
router.use(["/users", "/admin"], userAuth());

app.use(router.routes());
```

**router.allowedMethods([options])**  
`router.allowedMethods([options]) => function`

> Returns separate middleware for responding to OPTIONS requests with an Allow header containing the allowed methods, as well as responding with 405 Method Not Allowed and 501 Not Implemented as appropriate.

지정되있는 요청 메서드가 아닌 다른 요청메서드가 들어왔을 때 throw error를 해주는 것

<hr>

## API

<br/>

### new Koa()

`const app = new Koa()`

app이라는 객체는 여러가지 미들웨어 함수를 포함하고 있는 객체이다.  
app은 서버를 다룰 수 있는 여러가지 기능을 가지고 있는 객체이다.

**The app object has methods for:**

- routing HTTP requests
- configuring middleware
- rendering HTML views
- registering template engine

<br/>

### app.use()

```js
const app = new Koa();
app.use((ctx, next) => {});
```

app.use는 미들웨어 함수를 서버에 등록한다.

**middleware function**  
서버와 내가 다루고자하는 기능을 중간에서 연결하게 해주는 함수

> - middleware are functions that execute during the lifecycle of a request to the server.
> - Each middleware has access to the HTTP request and response for each route (or path).

**ctx**  
ctx는 웹 요청과 응답에 관한 정보를 지니고 있다.

**next**  
현재 처리중인 미들웨어의 다음 미들웨어를 호출하는 함수

next()는 promise를 반환한다.
<br>

### app.listen()

```js
app.listen(4000);
```

> - The app.listen() method binds itself with the specified host and port to bind and listen for any connections.

app.listen은 서버의 특정포트에 연결하게 해준다.

<br/>

### ctx.params

```js
router.get("about/:test", (ctx) => {
  const { test } = ctx.params;
  ctx.body = test;
});
```

<br/>

### ctx.query

```js
router.get("about", (ctx) => {
  const { item } = ctx.query;
  ctx.body = item;
});
```

## library

### koa-bodyparser

`npm i koa-bodyparser`

> Post/Put/Patch와 같은 메소드의 REQUEST Body에 JSON형식으로 데이터를 넣어주면 , 이를 파싱하여 서버에서 사용할 수 있게 해준다.
