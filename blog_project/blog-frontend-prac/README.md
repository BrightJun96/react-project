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
