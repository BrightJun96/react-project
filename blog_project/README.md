# [blog project](https://jevsblogproject.herokuapp.com/)

## **Watch project**

[https://jevsblogproject.herokuapp.com/](https://jevsblogproject.herokuapp.com/)

## **Concept**

- 로그인 및 회원가입 기능과 블로그 포스팅 기능을 구현하였다.
- 포스팅 작성/조회/수정/삭제를 할 수 있다.

## **Core Stack**

- **react**
- **node.js**
- **koa**
- **mongoDB**
- 프론트엔드 측에서는 **react**를 사용하였고 백엔드는 **node.js,koa**를 사용하였다.
- 데이터베이스는 **mongoDB**를 사용하였다.

### **Front-end Tech**

- react(CRA)
- react-router-dom(version6)
- axios
- React-quill(text-editor library)
- immer(for immutable)
- redux
- redux-actions
- redux-saga
- redux-thunk
- styeld-components(for styling)

### **Back-end Tech**

- koa
- koa-router
- koa-static (for taking static file from front-end build)
- koa-bodyparser
- mongoose
- jsonwebtoken
- bacrypt(for secure password)
- dotenv
- qs
- Joi(for validation)
- nodemon
- esm(for ES6 import/export)
- sanitize-html(for html filtering)

# Folder Structure

## **Front-end**

- **pages**  
  전체적으로 5개의 페이지가 있으며 페이지는 다음과 같다.

  - LoginPage  
    로그인을 할 수 있는 페이지
  - RegisterPage  
    회원가입을 할 수 있는 페이지
  - PostListPage  
    전체포스팅 및 유저별 포스팅을 볼 수 있는 페이지
  - PostPage  
    포스팅 상세 페이지
  - WritePage  
    포스팅을 작성할 수 있는 페이지

<br>

- **components/containers**  
  컴포넌트측 파일 구조는 components와 containers를 구분하였다.  
  components에는 사용자에게 보여줄 UI Component로 구성하였고 containers에는 redux state 및 기능 구현을 위한 함수 등을 작성하여 UI 컴포넌트에서 사용하기 편하도록 하였다.

- **lib**

  - 서버로 네트워크 요청을 하기 위한 API를 위한 API 폴더
  - 주요 색상을 위한 styles 폴더

- **modules**  
  페이지 및 기능별 구분하여 state를 관리한 폴더

## **Back-end**

- **api**  
  로그인 및 회원가입에 대한 api와 posting에 대한 api가 있는 폴더

- **lib**  
  로그인 상태를 검증하는 미들웨어와 token 조회 및 jwt 검증 등 기능을 하는 미들웨어가 있는 폴더

- **models**  
  mongoDB 데이터에 대한 스키마 설정과 스키마 메서드 설정을 한 폴더

# Description

- 여러 상태값이 필요하며 이를 각 페이지 및 컴포넌트별로 구분하기 위하여 **redux로 상태관리**를 하였다.

- 로그인 및 회원가입에 대한 **validation 및 Error Message**를 백엔드와 프론트에서 둘 다 구현하였다.

- 서버로 새로 요청(새로고침)을 하여도 로그인 상태를 유지하기 위해 로그인 상태값을 클라이언트측에서 **localStorage**에 담았다.

- 포스팅은 로그인을 하지않아도 볼 수 있지만 **포스팅 작성은 로그인을 한 유저만 작성**할 수 있다.

- **비동기 처리**를 위하여 주로 **redux-saga**를 사용하였다.

- Text-editor 기능을 사용하기 위해 **React-quill library**를 사용하였다.

- CORS 오류를 해결하기 위해 client측 package.json에서 **proxy(localhost:4000)를 설정**했다.  
  (client:localhost3000 \ server:localhost:4000)

- **koa-static**을 이용하여 **서버에서 프론트측 정적 파일을 사용**할 수 있도록 하였다.

# Deploy

- heroku

# Development

1. Clone the repository(or download through the top's Code Button)

```
git clone https://github.com/RaulB-masai/react-image-compressor.git
cd react-image-compressor
```

2. Install npm dependecies

```
npm install
```

3. Run the app locally  
   Client local server : http://localhost:3000  
   Server local server : http://localhost:4000

**client**

```
npm start
```

**server**

```
npm run start:dev
```
