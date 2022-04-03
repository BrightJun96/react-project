- text editor에서 내용작성하는 부분 폰트를 더 키워야 함.

- 개별 포스팅부분에서 전체목록으로 돌아갈수 있는 버튼 UI만들기

# Routing

App 컴포넌트는 Routing을 담당하는 컴포넌트이며 각 페이지별 메인 컴포넌트를 담당하고 있다.
이 때 전체 포스팅과 유저별 포스팅은 PostListPage에서 해결하고
유저의 개별 포스팅은 PostPage에서 해결한다.

이를 분리하지 않고 포스팅을 보여주는 포스트페이지(포스트를 작성하는 페이지는 제외)  
 한 컴포넌트에 작성해준다면 어떨까?

# postId

유저의 개별 포스팅은 mongodb의 objectId로 조회하고 있는데 URI가 길어보인다는 단점이 있다 생각이 된다.  
이를 다른 id를 할당하여 지정하는 것은 어떨까?

- css: border outline

# RTK 적용

기존에 있던 redux logic을 RTK를 사용하여 적용해보자.

## useEffect 사용의 단순화

LoginForm이나 RegisterForm에서 useEffect를 여러개 사용하는 경우가 생기는데  
이 때 하나의 로직에 여러개의 useEffect를 담을 방법이 없을까?

1. useEffect 하나에 여러개의 useEffect를 담는다.
   하나의 useEffect에 담아도 되지만 너무 복잡해보임.

2. 함수를 만들어 useEffect를 반환하게 한다.
   useEffect는 컴포넌트가 아닌 일반함수에서 사용될 수 없다. 컴포넌트 내부 상단에 위치해야함.

3. conclusion
   각 useEffect가 각각 다른 로직을 처리하고 있기 때문에 분리해주는 것이 좋아보인다.
   (공식문서나 여러 아티클에서도 권장하고 있음.)

## 단축평가에서 옵셔널 체이닝 연산자로 변경

Note : 프로퍼티가 null인 경우 참조할 수 없는 에러가 발생함.

프로퍼티가 null or undefined인 경우를 위해 && 단축평가를 사용하였는데  
코드 가독성을 위해 옵셔널 체이닝 연산자로 변경하였다.
(옵셔널 체이닝 연산자는 좌항의 프로퍼티가 null or undefined이면 undefined를 반환하고
아니라면 우항의 값을 반환한다.
)
