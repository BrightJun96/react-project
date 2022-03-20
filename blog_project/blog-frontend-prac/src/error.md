### Concept

> 표시할 errorText를 state에 담아주고 state를 보여주기

- useState로 관리한다면 RegisterForm과 LoginForm에서 같이 관리할 수 없음.(두개의 component에서 state를 같이 써야함.)
  그러므로 reduxstate로 관리해주는 것이 좋겠다.

어디 reducer에서 관리해주는 것이 좋을까?
어디서든 관리해줘도 딱히 상관없지만 text기 때문에 input에서 관리해줬음.

### 표시해야할 ERROR

에러는 서버 API에서 처리해주는 것이 좋은것인가?
프론트쪽에서 처리해주는 것이 좋은 것인가?

서버에서도 해주면 프론트에서 작성하기 편함.

#### login

1. 로그인을 했을 때 없는 계정이라면 없다고 에러표시 clear

- 400 status 활용

2. 비밀번호가 틀리다면 비밀번호가 틀리다고 표시해주기 clear

- 401 status 활용

3. 로그인되면 로그인이 성공되었다고 alert() clear

4. 둘 중에 하나라도 입력하지 않으면 에러표시 clear

- [username,password].includes(")

---

#### register

4. 계정이 중복된다면 계정이 중복됐다고 표시 clear
   방법1. AuthForm에서 AuthError를 가져와 Error를 선택적으로 렌더링해준다.
   방법2. RegisterForm에서 처리하는 방법은 뭐가 있을까?
   errortext를 state로 하여 설정(useState)하여 선택적으로 렌더링해준다.
   (redux로 관리해주면 되지 않을까?)

- 계정의 중복 여부를 캐치하는 법 error 상태로 가져온다.

5. 비밀번호와 비밀번호 확인이 다르면 비밀번호가 다르다고 표시
   clear

6. input이 하나라도 비어있다면 "모든 정보를 입력해주세요"라고 표시

- clear

## mainPage

- HEADER만들기

## TODO

1. ERROR 컴포넌트만들기

2. 로그인 상태 localStorage에 담기

3. mainPage 만들기

4. 로그아웃

## What i get knowledge

에러를 string이 아닌 객체 형태로 받고 싶다면
error.response를 하면 객체 형태로 받을 수 있다.
