## Header 및 로그인 상태

### TODO

1. 로그인을 하거나 회원가입에 성공하게 되면

- 홈에 있는 로그인버튼 => 로그아웃버튼 > clear
- username이 로그인한 회원이름으로 바뀌기 > clear

2. 새로고침을 했을 때(새로고침을 하면 서버에게 해당 페이지를 다시 요청함.)

- 쿠키에 담긴걸 쓰면 되지않나? 쿠키에 담긴 것을 어떻게 가져오나?
  쿠키에 담긴 것을 check API를 통해 user state에 할당한다.
  때문에 로그인 및 회원가입을 했을 때 user의 값을 사용하면 된다.
  그러면 새로고침을 하면 왜 user state가 사라질까?
  user라는 state는 front내에서 설정한 state이기 때문에 서버에 새로 페이지를 요청하면 초기화가 된다.
  때문에 클라이언트측에서 데이터를 저장할 수 있는 localStorage를 활용해야함.

  그렇다면 uesrname을 localStorage에 담아야한다. 어디서 담아야할까? 로그인 혹은 회원가입시 버튼을 눌렀을 때?

  - a.saga에서 담는다. user를 조회하고 localStorage에서 담아야하기 때문에 saga에서 담으면 안됨.
  - b. useEffect에서 담는다.
    user state가 있다면 localStorage.setItem("username",username)을 한다.

3. 로그아웃은 어떻게?
   로그아웃 API를 실행하고 localStorage에서 user를 제거해준다.
   saga에서 해줘도되고 그냥 API사용해서 해도 됨.

### WHAT I GOT

- 구조분해를 할 객체의 프로퍼티가 null이거나 undefined면 해당 객체에서 구조분해해온 프로퍼티를 가져올 때 에러가 난다.  
  따라서 redux state를 useSelector로 가져오는 상황이라면 initialState를 빈문자열로 지정해놓는 것이 낫다.
