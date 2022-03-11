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

**[Joi](https://joi.dev/api/?v=17.6.0)**  
`npm i joi`

> joi lets you describe your data using a simple, intuitive, and readable language.

- 객체를 검증할 때 편리하게 해주는 라이브러리

**src/api/auth/auth.ctrl.js**

```js
import Joi from 'joi';
import User from '../../models/user';
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

```

```
