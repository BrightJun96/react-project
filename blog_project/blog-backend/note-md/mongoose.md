# mongoose

> mongoose는 Node.js환경에서 사용하는 MongoDB 기반 ODM(Object Data Modeling)라이브러리이다.  
> 이 라이브러리는 데이터베이스 문서들을 자바스크립트 객체처럼 사용할 수 있게 해준다.

`npm i mongoose`

## library

### dotenv

> dotenv는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구이다.  
> mongoose를 사용하여 MongoDB에 접속할 때, 서버에 주소나 계정 및 비밀번호가 필요한 경우도 있다.  
> 이렇게 민감하거나 환경별로 달라질 수 있는 값은 코드 안에 직접 작성하지 않고, 환경변수로 설정하는 것이 좋다.

**.env**

```
PORT = 4000
MONGO_URI = mongodb://localhost:27017/blog
```

```js
require('dotenv').config(); //.env값을 가져오게 해줌.
```

## API

### **mongoose.connect()**

- **mongodb와 서버를 연결해주는 메서드**

```js
mongoose.connect('mongodb://localhost:27017');
```

> **mongodb://localhost:27017**
>
> - mongodb default port
> - 몽고디비와 연결하기 위한 URI

 <br>

### **mongoose.Schema**

- Schema를 만들어주는 메서드

```js
const TestSchema = new mongoose.Schema({ name: String });
```

**Schema**

- 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체

<br>

### **mongoose.model**

- model을 만들어주는 메서드

```js
const TestSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model('Test', TestSchema);
```

- 첫번째 인자에는 모델이름을 할당한다.  
  (mongodb에는 복수형으로 model collection가 만들어진다. 위와 같은 경우에는 tests)

- 두번째 인자에는 스키마를 할당한다.

**model**

- 스키마를 사용하여 만드는 인스턴스로, 데이터베이스에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체

<br>

### **Document.prototype.save()**

- 모델을 mongodb에 저장해준다
- save()의 반환값은 promise이다.
- async/await 내에서 사용하도록 하자.
  save는 비동기적으로 작동하며 promise를 반환한다. 따라서 코드가 실행되는 순서가 정해져있지않고 빨리 실행될 수 있는 코드가
  먼저 실행된다. 그런데 만약 save()가 먼저 실행되야되는 상황인데 save()가 마지막에 실행된다면 이는 에러가 발생할 수 있기 때문에
  순차적으로 코드가 실행될 수 있도록 async/await구문을 사용하도록 하자.

```js
const TestSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model('Test', TestSchema);

const nameList = new Test({ name: 'jev' });
nameList.save();
```

```js
async function generate(ctx) {
  const { name, height, weight } = ctx.request.body;
  const creator = new Login({ name, height, weight });

  try {
    await creator.save();
    ctx.body = creator;
  } catch (e) {
    ctx.throw(500, e); //하이퍼텍스트 전송 프로토콜 (HTTP) 500 Internal Server Error 서버 에러 응답 코드는
    //요청을 처리하는 과정에서 서버가 예상하지 못한 상황에 놓였다는 것을 나타냅니다.
  }
```

**note!**

> 데이터베이스에 접근할 때 async/await문을 사용하는 것이 좋다.  
> await를 사용하면 코드가 실행되는 순서를 동기적으로 지정할 수 있기 때문에
> 순서가 엇갈려 에러가 나는 것을 방지할 수 있다.

<br>

### Model.find

- Model 인스턴스들을 모두 조회해준다.

```js
async function arrange(ctx) {
  try {
    const posts = await Login.find().exec();

    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
}

router.get('/posts', arrange);
```

### Model.findById()

- 모델 인스턴스의 id를 입력하여 해당 요소를 조회해준다.

```js
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

router.get('/posts/:id', holdOne);
```

### Model.findByIdAndRemove()

- 특정요소를 id로 조회하여 제거한다.

```js
async function remove(ctx) {
  const { id } = ctx.params;

  try {
    await Login.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
}

router.delete('/posts/:id', remove);
```

## note

## Refrence

- 리액트를 다루는 기술 22장

- [mongoose공식문서](https://mongoosejs.com/docs/index.html)
