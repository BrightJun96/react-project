# [blog project](https://fancy-jevblog.herokuapp.com/)

## **Watch project**

- https://fancy-jevblog.herokuapp.com/

## **Concept**

- 로그인 및 회원가입 기능과 블로그 포스팅 기능(CRUD)을 구현

## Tech

- react(CRA)
- react-router-dom(version6)
- axios
- React-quill(text-editor library)
- immer
- redux
- redux-actions
- redux-saga
- redux-thunk
- styeld-components

## Folder Structure

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

- 스타일링을 Styled-Components로 하였는데 이는 presentational 컴포넌트에서 스타일 컴포넌트를 사용하지않고  
  따로 styles라는 디렉터리를 생성하여 스타일링 파일을 구분하였다.

- 포스팅 작성은 회원가입을 한뒤 **로그인을 해야 작성**할 수 있다.

- 로그인과 회원가입은 비슷한 구조를 가지고 있어 **같은 컴포넌트를 사용하고 차이가 있는 부분은 props를 사용**해 변화를 주었다.

- 여러 개의 input state를 관리하기 위해 **객체 프로퍼티를 대괄호 접근법**으로 접근하였다.

- redux reducer안에서 불변성을 간편하게 유지하기 위하여 **immer** 라이브러리를 사용하였다.

- 여러 상태값이 필요하며 이를 각 페이지 및 컴포넌트별로 구분하기 위하여 **redux로 상태관리**를 하였다.

- 로그인 및 회원가입에 대한 **validation 및 Error Message**를 백엔드와 프론트에서 둘 다 구현하였다.

- 서버로 새로 요청(새로고침)을 하여도 로그인 상태를 유지하기 위해 로그인 상태값을 클라이언트측에서 **localStorage**에 담았다.

- 포스팅은 로그인을 하지않아도 볼 수 있지만 **포스팅 작성은 로그인을 한 유저만 작성**할 수 있다.

- **비동기 처리**를 위하여 **redux-thunk**를 사용하였다.

- Text-editor 기능을 사용하기 위해 **React-quill library**를 사용하였다.

- **CORS 오류를 해결**하기 위해 client측 package.json에서 **proxy(localhost:4000)를 설정**했다.  
  (client:localhost3000 \ server:localhost:4000)

- **koa-static**을 이용하여 **서버에서 프론트측 정적 파일을 사용**할 수 있도록 하였다.

- 프론트에서 로그인 버튼을 누르면 서버측에서 아이디와 비밀번호를 데이터베이스에서 확인한 뒤 검증하고 토큰을 만들어준다.  
  그 뒤 서버측에서는 해당 토큰을 가지고 있는 유저가 맞는지 확인한다.

# Exprience

### 간단한 비동기 처리는 saga보단 thunk

리덕스 미들웨어를 사용할 시 간단한 비동기 처리시에는 redux-thunk를 사용하는 것이 더 낫다.  
 saga는 초기 설계 코드가 복잡할 뿐만 아니라 길어진다.
때문에 간단한 비동기 처리를 할 시에는 코드 설계가 비교적 간편한 thunk를 사용하는 것이 낫다는 것을 경험했다.

### 디자인 패턴

components디렉터리에 모든 로직을 구성하는 것보다 각 역할에 맞게 디렉터리를 구성하여 개발하는 것이 유지보수측면과 효율성이 더 좋다는 것을 경험했다.  
 컴포넌트를 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트로 구분하여 비즈니스 로직을 구현(Controller 역할)하는 컴포넌트는 컨테이너 컴포넌트로  
 View의 역할은 프레젠테이셔널 컴포넌트로 구분하여서 역할을 구분하였다.  
 state와 관련된 로직은 modules라는 디렉터리로 구분하고 api를 불러오는 로직은 api 디렉터리로 구분하였다.

### 백엔드 프레임워크 express or koa?

koa는 async/await문법을 지원해서 비동기처리할 때 좀 더 편리하게 할 수 있다.  
koa는 기본으로 설계된 내장 미들웨어가 적지만 커스터마이징이 express보다 자유롭다.

express 기본적으로 내장되어있는 미들웨어가 많다.  
koa의 경우에는 라우터,템플릿 등과 같은 기능을 별도로 라이브러리를 설치하여 사용하여야한다.  
때문에 필요한 부분만 부분적으로 설치해서 가볍게 사용하고 싶다면 koa를 사용하고 편하게 전체적인 미들웨어를 골라서 사용하려면 express를 사용하면 되겠다.

express가 사용자가 더 많으며 관련 정보량이 더 많아 구글링하여 정보를 찾기가 더 쉽다는 장점도 있다.
하지만 크게 다르지않고 둘 다 비슷한 특성이기 때문에 취향대로 사용하면 될 것 같다.  
둘 다 비슷하여 뭐가 더 좋다라고 할 것이 없었다.

### 회원인증 로직 JWT와 COOKIE

로그인 혹은 회원가입한 유저가 서버로부터 검증받은 유저인지 확인하기 위해서  
로그인이나 회원가입을 하게 되면 서버에서 토큰을 생성하여 쿠키에 저장해주는데  
이 때 서버에서는 jwt 미들웨어 로직을 통해 토큰값을 조회하고 토큰에 담긴 유저 정보를 서버 state에 저장한다.

서버 state에는 토큰으로 조회한 해당 유저의 정보가 담겨져있고  
프론트단의 check API는 이를 서버로부터 조회하여 해당 유저에 대한 정보를 응닶값으로 보내준다.

### 전체적인 개발 흐름

프론트엔드, 백엔드, 데이터베이스을 설계해봄으로써 전체적인 개발 흐름을 알게 되었고 프론트엔드와 백엔드의 cors를 해결하기 위해서  
proxy나 백엔드에서 access-control-allow-origin에 프론트엔드 url을 허용해주어여하는 등 해결방법을 알게 되었다.

또한 프론트단에서 여러 서버와 통신하기위해서는 호출할 각 API서버마다 axios.client를 생성하는 것이 체계적으로 역할을 분류하기 적절하다고 생각하였다.

### 포스팅 필터링(from backend to frontend)

포스팅 리스트들을 필터링해줄 때 username,tag별로 필터링해주는데 기존에는 백엔드단에서 query를 이용하여 서버로 요청을 보냈다.

프론트단에서 username과 location객체의 search라는 것을 파싱하여 tagname에 대한 쿼리를 서버단으로 보내주어 필터링된 데이터를 응답받았다.

하지만 굳이 서버에 요청하는 것보다 프론트단에서 데이터를 필터링하는 것이 데이터를 보여주는 것이 인터렉션이 더 빠를 것이라고 생각되어 프론트단에서 포스팅 리스트를 필터링해주었다.

결과적으로 포스팅리스트를 필터링할 때마다 서버로 요청을 보내지않아도 되어 백엔드단의 부담을 줄일 수 있었고 프론트단에서 처리하니 더 빠른 인터렉션을 구현할 수 있었다.
