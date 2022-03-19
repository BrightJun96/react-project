# Design

1. 홈페이지 / 로그인 페이지 / 회원가입 페이지

2. LoginPage와 Regist에 들어갈 form을 컴포넌트하나로 통일

3. css는? styled-component

4. AuthForm desgin

5. open-color라이브러리 스타일 컴포넌트에 적용하기

- npm i open-color

- import oc from 'open-color'

- usage
  `background-color : ${oc.gray[2]}`

6. input outline
   input focus가 되면 outline이 나오므로 제거하고 싶다면 outline:none을 해주면 된다.

---

- 화면에 margin 없애기

- rem?

---

### input

- password input에 password 달기

### page

(각 페이지에서 props를 설정하여 AuthForm Component에 전달)

- login page면 맨 아래 링크를 회원가입 링크로 바꿔주고
  h3을 login
  버튼 로그인

- register page면 맨 아래 링크를 로그인 링크로 바꿔주고
  h3을 register
  버튼 회원가입
  password confirm 달아주기

  ### 다음 단계

- 서버로 값을 보내주기
- 상태값들을 서버로 보내준다.

- reducer사용 여러 개의 input값을 관리해주기 위하여

### redux usage

#### 사용이유

- 여러가지 상태값을 체계적으로 관리하기 위해
- 상태값을 전역적으로 사용하기 위해
- input같은 경우에는 (여기서는 3개밖에 없어서 굳이 Redux를 사용하지 않아도 될것 같지만 연습삼아 사용해보자.)

#### 필요한 것들

1. 액션

2. 액션 생성 함수 with payload(액션과 그와 함께 필요한 데이터를 만들어준다.)

3. initialState(상태)

4. reducer(액션값에 따라 state를 바꿔준다)

5. rootReducer (여러가지 reducer를 모아준다.)

- inputReducer  
  (사실상 useState를 3번쓰거나 useReducer를 쓰는 것이 더 편리함. redux를 연습하고자 사용함.)  
  (input state를 관리하기 위하여)

6. containerComponent (Component에 redux state값을 전달하기 위해)  
   여기서 dispatch와 state를 가져와준다.  
   dispatch(액션생성함수)

7. 설치해야할 라이브러리

- redux

- createStore (store를 만들어준다. 인자에는 reducer를 넣을 것)

- combineReducer (reducer 합쳐주는 것)

- react-redux
  - Provider (index에서 App을 감싸준다. 그리고 props로 store를 전달해준다.)
  -
- redux-action

8. innput에 name을 달아주는 이유는?

- 각 input을 조회하려할 때 name을 사용해야한다.

9. 제출이 되면 모든 input init

10. 회원가입/로그인에서 해당 버튼을 누르면 서버로 form state들이 전송되게 하라.

11. autoComplete

12. proxy 설정(client와 server를 연결해주기 위하여)  
    cra를 사용하지 않을 때 client와 server를 어떻게 요청해줄까?

    어떠한 API를 요청할 때는 해당 API에 대한 서버 주소가 있다.  
    해당 서버 주소에서는 다른 주소에서 API를 요청할 때에 응답할 수 있도록 서버에서 설정을 해줘야한다.

    하지만 proxy를 사용하여 설정하면 내 클라이언트 서버로 요청해도 proxy로 설정한 API 서버에게 요청을 하게 해준다.  
    그렇다면 proxy로 같은 호스트가 아닌 다른 호스트에 있는 API server를 설정해도 요청이 되나?(다른 호스트 서버에서 설정을 안해줬다는 가정하에)

13. axios  
    axios 인스턴스 생성하기(axios.create())  
    인스턴스 : API 주소를 다른 곳으로 설정해줄 수 있는 인스턴스
    fetch는 axios처럼 인스턴스를 생성하지 못할까?

14. register은 네트워크 요청인데 비동기처리를 안해도 실행이 된다.

15. 왜 redux-saga를 써야하나?

16. 서버에 대한 에러 처리를 프론트 단에서도 나타내줘야함.

## 생각해보기

1. post 네트워크 요청을 보낼 때에는 왜 async/await안 써도 되는지?
   일단 post 요청도 비동기적으로 동작한다.  
    하지만 post는 서버로 데이터를 보내는 것이지 데이터를 받아오지 않는다  
    즉, 모든 코드가 실행되고 나서 서버로 보낸다해도 지장이 없다는 것이다.
   즉, 데이터를 받아오려한다면 async/await를 써야하지만 데이터를 받아올 필요가 없다면 사용할 필요가 없다.

내가 어떠한 API에서 data를 가져오려고 한다고 생각해보자.  
해당 API에서 get 요청을 보낸다. 그리고 응답값을 받아온다.  
서버에서 응답을 받기 위해서 비동기적으로 받아야 한다.(왜?)

클라이언트측에서 서버로 어떠한 데이터를 보낸다고 해보자.  
이 때 비동기적으로 보내야할 이유가 있을까?

HTTP 요청은 비동기 처리 방식으로 작동한다.

2. 그렇다면 책에서는 왜 redux-saga를 사용한 것일까?
   post 요청을 보냈을 때에도 서버에서 주는 response가 있는데 이 response값(ctx.body)을 사용하기 위해서이다.(서버에서 ctx.body에 응답값을 설정해주었다.)
   책에서는 redux를 사용하였기때문에 성공과 실패에 따라 응닶값과 응답에 대한 에러값 처리를 redux-saga로 하였는데 간단하게 하고 싶다면 API에서 promise나 async/await를 사용하면 된다.

   (응답값을 다른 곳에서 사용하기 위해서? 응답값은 saga가 아니어도 사용할 수 있지 않나? 다른 곳에서 사용하기 위해서는 사용하려할 때마다 요청을 하고 응답을 받아와야하는데 어디선가 불러온 응답값을 전역적으로 사용하기 위해서 state에 담아야한다.

   만약 어떠한 버튼을 눌렀을 때 요청이되고 해당응답값을 반환 받아야하고 그 응답값을 다른 곳에서 써야한다면 state로 관리해주는 것이 편한다.
   )

   우선 이해도를 위해 async/await를 적용해보자.

- redux-saga없이 redux로 응답값과 에러값 관리  
  register가 되면 state값으로 응답값과 응답에 대한 에러값을 담겨야한다.

성공 :
register의 응답값을 dispatch 액션 인자로 할당했다.
check의 응답값을 dispatch 액션 인자로 할당했다.

결론 : saga없이도 구현 가능

과정 : input/register/user state를 구분해주었다.

- redux-thunk를 사용하는 것은 어떤지 사용해보기

- redux-saga 사용해보기

3. loading state를 굳이 번거롭게 왜 관리해줄까?즉, 로딩 처리를 왜 해줘야할까?

4. middleware
   dispatch한뒤에 state값을 가공하여 reducer에게 전달한다.

## TODO

1. redux saga를 이용해서 비동기 처리를 해보자.
   **blog-project는 redux saga를 쓰기 적절한가?**

### First : Learn Redux-saga

- middleware란 무엇인가?  
  dispatch => 이 사이에서 action 상태를 조작해 줄 수 있다. => reducer

(https://redux-saga.js.org/)[https://redux-saga.js.org/]

### redux-saga를 사용하는 이유는 뭘까?

- 기존 요청을 취소 처리해야할 때(불필요한 중복 요청 방지)
- 특정 액션이 발생했을 때 다른 액션을 발생시키거나 , API 요청등 리덕스와 관계없는 코드를 실행할 때
- 웹소켓을 사용할 때
- API 요청 실패시 재요청해야할 때

  > middleware를 쓰지 않으면 Container에서 API를 호출하여 그 안에서 dispatch(actionGenerateFun(param)) 이런식으로 state값을 변경하여 관리를 할 수 있다.

saga 작동원리

ㄱ. register이라는 액션 생성 함수가 실행된다.
ㄴ. registerSaga가 실행이 된다.
정리. 액션 생성 함수가 실행되면 액션 타입이 같은 saga함수가 실행이된다.

2. redux thunk로는 어떻게 할수 있을까 생각해보기
