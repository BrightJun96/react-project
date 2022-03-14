# JWT (Json Web Token)

- 데이터가 JSON으로 이루어져있는 토큰

- 회원 인증 시스템을 구현하기 위한 기술

- 클라이언트와 서버가 안전하게 정보를 주고받을 수 있도록 웹 표준으로 정의된 기술  
   (두 개체가 정보를 주고 받을 때 안정성이 보장되어야한다.)
  (두개체는 토큰으로 정보를 주고 받는다.)

## 세션 기반 인증과 토큰 기반 인증의 차이

사용자의 로그인 상태를 서버에서 처리하는데 사용할 수 있는 대표적인 두가지 인증 방식이 있다.  
하나는 세션 기반 인증 방식이고 다른 하나는 토큰을 기반으로 인증하는 것이다.

**사용자의 로그인상태는 서버에서 처리한다.**

### 세션 기반 인증 시스템

- 서버가 사용자가 로그인 중임을 기억한다.

사용자가 로그인을 하면, 서버는 세션 저장소에 사용자의 정보를 조회하고 세션 id를 발급한다.

발급된 id는 주로 브라우저의 쿠키(클라이언트측)에 저장된다.

그 다음에 사용자가 다른 요청을 보낼때마다 서버는 세션 저장소에서 세션을 조회한 후 로그인 여부를 결정하여 작업을 처리하고 응답한다.

세션 저장소는 주로 메모리, 디스크, 데이터베이스 등을 사용한다.  
세션 기반 인증의 단점은 서버를 확장하기가 어렵다.

서버의 인스턴스가 여러개가 된다면, 모든 서버끼리 같은 세션을 공유해야 하므로 세션 전용 데이터 베이스를 만들어야할 뿐만 아니라 신경써야할 부분도 많다.

### 토큰 기반 인증 시스템

- 토큰은 로그인 이후 서버가 만들어주는 문자열

- 해당 문자열 안에는 사용자의 로그인 정보가 들어 있고, 해당 정보가 서버에서 발급되었음을 증명하는 서명이 들어있다.

- 서버에서 만들어준 토큰은 서명이 있기 때문에 무결성이 보장이 된다.  
  (무결성이란 정보가 변경되거나 위조되지 않았음을 의미하는 성질)

토큰 기반 인증 시스템의 장점은 서버에서 사용자 로그인 정보를 기억하기 위해 사용하는 리소스가 적다는 것이다.

사용자 쪽에서 로그인 상태를 지닌 토큰을 가지고 있으므로 서버의 확장성이 높다.

## User 스키마/모델 만들기

1. User 스키마와 모델을 작성하여 사용자의 정보를 MongoDB에 담고 조회  
   사용자 스키마에는 사용자 계정명과 비밀번호를 넣을 것이다.  
    비밀번호를 데이터베이스에 저장할 때 플레인(아무런 가공도 하지 않은 ) 텍스트로 저장하면 보안상 매우 위험하다.  
    따라서 단방향 해싱 함수를 지원해 주는 bcrypt라는 라이브러리르 사용하여 비밀번호를 안전하게 저장한다.

   **bcrypt**

- `npm i bcrypt`
- 비밀번호를 보안성이 있도록 해주는 기능
- 단방향 해싱함수 지원해주는 라이브러리

```js
import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({ username: String, hashedPassword: String });

const User = mongoose.model('User', UserSchema);
export default User;
```

2. 모델 메서드 만들기

- 모델 메서드는 모델에서 사용할 수 있는 함수를 의미하며 두 가지 종류가 있다.

- 첫 번째는 인스턴스 메서드로, 모델을 통해 만든 문서 인스턴스에서 사용할 수 있는 함수를 의미

- 메서드는 모델을 만들기전에 정의해야한다.

```js
const user = new User({ username: 'jev' });
user.setPassword('mypass123');
```

- 두 번째는 스태틱(static)메서드로, 모델에서 바로 사용할 수 있는 함수를 의미

```js
const user = User.findByUsername('velopert');
```

2-1. 인스턴스 메서드 만들기  
a. setPassword

- 이 메서드를 통해 비밀번호를 파라미터로 받아서 계정의 hashePassword 값으로 설정해준다.

b. checkPassword

- 이 메서드는 파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증해준다.

**src/models/user.js**

```js
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({ username: String, hashedPassword: String });

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

const User = mongoose.model('User', UserSchema);
export default User;
```

- 인스턴스 메서드를 작성할 대는 화살표 함수가 아닌 function 키워드를 사용하여 구현해야 한다. 함수 내부에서 this에 접근해야하기 때문인데 여기서 this는 문서 인스턴스를 가리킨다.  
   화살표 함수를 사용하면 this는 문서 인스턴스를 가리키지 못하게 된다.  
   (
  화살표함수내에 this는 undefined이므로 상위 스코프의 this를 찾는다.
  )

2-2. 스태틱 메서드 만들기

- finByUsername  
  이 메서드는 username으로 데이터를 찾을 수 있게 해준다.
  **src/models/user.js**

```js
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({ username: String, hashedPassword: String });

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
```

- 스태틱 함수에서의 this는 모델(User)을 가르킨다.

- bcrypt 메서드는 promise를 반환하기 때문에 async함수와 함께 써줘야한다.

- findOne메서드는 프로미스를 반환하지 않기 때문에 일반 함수로 사용했다.

3. 회원 인증 API 만들기

**src/api/auth/auth/ctrl.js**

```js
export const register = async (ctx) => {
  // 회원가입
};

export const login = async (ctx) => {
  // 로그인
};

export const check = async (ctx) => {
  //로그인 상태 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
```

**src/api/auth/index.js**

```js
import Router from 'koa-router';
import { check, login, logout, register } from './auth.ctrl';

const auth = new Router();

auth.post('/register', register);
auth.post('/login', login);
auth.get('/check', check);
auth.post('/logout', logout);

export default auth;
```

3-1. 회원가입 구현하기

객체를 검증할 때 편리하게 하기 위해 joi 라이브러리를 활용한다.

**[Joi](https://joi.dev/api/?v=17.6.0)**  
`npm i joi`

> joi lets you describe your data using a simple, intuitive, and readable language.

- 객체를 검증할 때 편리하게 해주는 라이브러리

### register API 만들기

**src/api/auth/auth.ctrl.js**

```js
import Joi from 'joi';
import User from '../../models/user';

export const register = async (ctx) => {
  //Request body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({ username });
    await user.setPassword(password); // setPassword는 promise를 반환
    await user.save(); //save도 promise이기 때문에 register함수는 비동기함수

    ctx.body = user.serialize();
  } catch (e) {
    throw (500, e);
  }
};
```

- object.key([schema])

  schema설정한뒤에 추가적인 프로퍼티를 설정하게 해준다.

```js
const base = Joi.object().keys({
  a: Joi.number(),
  b: Joi.string(),
});
// Validate keys a, b and c.
const extended = base.keys({
  c: Joi.boolean(),
});
```

- string.alphanum()  
  Requires the string value to only contain a-z, A-Z, and 0-9.

```js
const schema = Joi.string().alphanum();
```

### login API 만들기

**src/api/auth/login**

```js
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  //username, password가 없으면 에러 처리

  if (!username || !password) {
    ctx.status = 401; // unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 없다면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    //  잘못된 비밀번호면 에러 처리
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};
```

4. 토큰 발급 및 검증하기

- 클라이언트에서 사용자 로그인 정보를 지니고 있을 수 있도록 서버에서 토큰을 발급해주어야함.

- JWT 토큰을 만들기 위해서는 jsonwebtoken이라는 모듈을 설치해줘야함.

`npm i jsonwebtoken`

### 4-1. 비밀키 설정하기

- .env파일을 열어서 JWT 토큰을 만들 때 사용할 비밀키를 만든다.  
  이 비밀키는 문자열로 아무거나 입력해도 된다.

**.env**

```
JWT_SECRET = jev123
```

- 해당 비밀키는 나중에 JWT 토큰의 서명을 만드는 과정에서 사용된다.  
  비밀키가 외부로 공개되는 경우 누구든 마음대로 JWT 토큰을 발급받을 수 있다.

### 4-2. 토큰 발급하기

토큰을 발급하는 API를 만들어보자.

#### [**jwt.sign(payload, secretOrPrivateKey, [options, callback])** ](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

> In JSON Web Tokens, the payload is a set of fields that you want to include in the token being generated; Things your API will need to, say, get the right data for a particular user.

- (Asynchronous) If a callback is supplied, the callback is called with the err or the JWT.

- (Synchronous) Returns the JsonWebToken as string

- payload could be an object literal, buffer or string representing valid JSON.

- payload는 사용자별 발급되는 토큰을 구분하기 위해서 할당하는 객체이다.

```js
UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 집어넣고 싶은 데이터를 넣는다.
    {
      _id: this.id,
      username: this.username,
    },
    // 두 번째 파라미터에는 JWT 암호를 넣는다.
    process.env.JWT_SECRET,
    {
      expiresIn: '7d', // 7일동안 유효함.
    },
  );
  return token;
};
```

- 회원가입과 로그인했을 때 토큰을 사용자에게 전달

- 사용자가 브라우저에게 토큰을 사용할 때는 두 가지 방법을 사용한다.  
  a. 브라우저의 localStorage or sessionStorage  
  b. 브라우저의 쿠키

> 브라우저의 localStorage 혹은 sessionStorage에 토큰을 담으면 사용하기 매우 편리하고 구현하기 쉽다.  
>  하지만 **누군가가 페이지에 악성 스크립트를 삽입한다면** 쉽게 토큰을 탈취할 수 있다.(이러한 공격을 XSS(cross Site Scripting)이라 한다.)

> 쿠키에 담아도 같은 문제가 발생할 수 있지만, httpOnly라는 속성을 활성화한다면 자바스크립트를 통해 쿠키를 조회할 수 없으므로 악성 스크립트로부터 안전한다.

> 그 대신 CSRF(Cross Site Request Forgery)라는 공격에 취약할 수 있다.  
> 이 공격은 토큰을 쿠키에 담으면 사용자가 서버로 요청할 때마다 무조건 토큰이 함께 전달되는 점을 이용해서 사용자가 모르게 원하지 않는 API 요청을 하게 만든다.  
> 예를 들어, 사용자가 자신도 모르는 상황에서 어떠한 글을 작성하거나 삭제하거나, 혹은 탈퇴하게 만들수도 있다.

> 단, CSRF는 CSRF 토큰 사용 및 Referer 검증 등의 방식으로 제대로 막을 수 있는 반면, XSS는 보안장치를 적용해놓아도 개발자가 놓칠 수 있는 다양한 취약점을 통해 공격을 받을 수 있다.

### 4-3. 토큰 등록하기

auth.ctrl.js에서 register와 login함수에 토큰을 등록하자.

**src/api/auth/auth.ctrl.js**

```js
export const register = async (ctx) => {
  //Request body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({ username });
    await user.setPassword(password); // setPassword는 promise를 반환
    await user.save(); //save도 promise이기 때문에 register함수는 비동기함수

    ctx.body = user.serialize();

    //회원가입 토큰 발급하여 cookie에 등록
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    throw (500, e);
  }
};

export const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  //username, password가 없으면 에러 처리

  if (!username || !password) {
    ctx.status = 401; // unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 없다면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    //  잘못된 비밀번호면 에러 처리
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};
```

### API

`import jwt from "jsonwebtoken"`

#### [jwt.verify((token, secretOrPublicKey, [options, callback]))](https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback)

- (Asynchronous) If a callback is supplied, function acts asynchronously. The callback is called with the decoded payload if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will be called with the error.

- (Synchronous) If a callback is not supplied, function acts synchronously. Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will throw the error.

> - token is the JsonWebToken string

- secretOrPublicKey is a string or buffer containing either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA. If jwt.verify is called asynchronous, secretOrPublicKey can be a function that should fetch the secret or public key. See below for a detailed example

#### **ctx.cookies.set**

- cookie 설정을 해주는 메서드

#### **ctx.cookies.get**

- cookie를 가져오는 메서드

## Quest

1. Token이란 뭘까?

- 어떠한 개체들이 정보를 교환하기 위해 쓰이는 문자열
  **토큰은 로그인 이후 서버가 만들어주는 문자열**

2. 해싱 알고리즘(hashing)

3. brcypt.hash()

4. 인스턴스 메서드를 비동기로 작성하는 이유는?
   async/await
   async 함수를 사용하면 promise를 반환한다.
   bcrypt.hash/compare이 promise를 반환하기 때문에??
   그러면 findOne메서드는 promise를 반환하지 않나?? yes
   그렇기 때문에 findbyusername 메서드는 async 함수로 써줄 필요가 없다.

5. 쿠키가 설정이 안되는 이유?

안되는 것이 아니라 postman에서 안 나타났던 것일뿐

```

```
