## TODO

1. API 연동

내가 구현하고자하는 기능을 생각해보자.  
 제목,내용,태그들이 데이터베이스에 저장되게 해야한다.  
 하지만 그 기능들은 서버의 API가 해주기 때문에 클라이언트측에서는 API요청만 하면 되는 것이다.  
 때문에 서버측 post URI에 요청을 하면 된다.

- 우선 서버측 API를 살펴보자.  
  /api/posts 경로로 post요청으로 보내면 된다.  
  이 때 인자로 보내줘야하는 값은 {title(문자열),body(문자열),tags(배열)}이다.

- 서버로 요청하는 API는 api폴더에 write.js파일을 만들어 관리한다.

- 이 API는 포스트 등록이라는 버튼을 눌렀을 때 사용한다.(WriteActionButton에 onPublish 함수가 실행될 때)

- 만약 보내기만 하고 서버의 응답값(ctx.body by backend)을 받아올 필요가 없다면 onPublish에서 API 요청을 해도 된다.  
  하지만 응답값을 사용한다면 비동기적으로 받아와야한다. 비동기적으로 받아오는 과정에 필요한 미들웨어는 redux-thunk,redux-saga가 있으며 편한대로 사용하면 된다.  
  그렇다면 여기서 응답값을 받아와야하는가를 생각해봐야한다.  
  포스팅 리스트에서 포스팅 값들을 보여줘야하기 때문에 받아와야한다.

- 어떤 응답값을 받아와야할까?(title,body,tags,username을 받아와야한다.)  
  당장 보낸 포스팅값이 아니라 홈페이지로 갔을 때 전체포스팅이나 해당 유저에 대한 포스팅을 가져와야함. 즉, 보낸 포스팅에서 대한 응답값은 받아올 필요가 없다.  
  대신 전체포스팅이나 user가 있다면 특정 유저에 대한 포스팅을 조회할 수 있는 server API를 홈페이지로 갔을 때 조회하게 해줘야한다.  
  즉, 홈페이지로 갔을 때 처음 렌더링 됬을 때(useEffect) API요청이 되야함.
- 전체 포스팅을 받아오는 API(Get,/api/posts)

- 특정 유저에 대한 포스팅을 받아오는 API(GET,/api/posts/:id)

- onPublish 됬을 때 writePage에 모든 text값은 init이 되야하고 homePage로 가게 해야한다.

- onPublish됬을 때 /@username/:id로 이동하게 하기

- onPublish 됬을 때에 응답값으로 받아올게 무엇이 있을까?

  - error값(400 status) : 빈칸이 있었을 때 에러값을 받아와야함.
  - (user 값) : user 값은 받아올 필요가 없지 않을까? 이미 user.state로 인증했기 때문에 해당 user값을 가져오고 싶다면 localStorate user값으로 가져오면 되지 않을까?  
    username은 가져올 수 있다하여도 \_id 값을 가져와야하기 때문에 response값을 받아와야한다.
  - 그렇다면 일단 error값만 받아와보자.  
    에러 값을 받아와서 status 400이면 ERROR UI를 보여주는데  
     UI는 "모든 요소를 2글자이상 입력하세요"를 보여주면 된다.

- 1-0. thunk로 구현 clear
- 1-1. 취소 버튼시 기능 구현(기본 페이지로 이동) clear
  확인/취소 창 구현
- 1-2. 성공시 페이지 이동(
  /@username/:id) clear
- 1-3. saga로도 구현해보기 clear

2. writePage 코드 리팩토링

- redux 반복되는 코드를 통일화시킬 수 있는가?

- Memoizing을 구현해야하는가?

- styledComponent 분류

3. 로그인이 되어야지 write할 수 있게 해야함.

- 전체적인 프로젝트 코드(백엔드/프론트엔드코드)를 내가 혼자서 다 설계를 할 수 있는가?(전체적으로 내가 흡수를 할 수 있어야함.)  
   그러기 위해서는 내가 혼자서 생각하고 구현하는 작업이 필요하다.  
   일단 프로젝트가 마무리된 뒤에 내가 혼자서 다시 한번 구현해보는 것이 좋을 것 같다.

- 25장 코드를 리팩토링하며 생각해보자.  
   (다음장으로 넘어가는 것이 좋은것인가? 아니면 내 코드를 한번 더 들여다보는 것이 좋은 것인가? 후자가 옳다.)  
   React.memo/useCallback의 사용

## WHAT I GOT

1.  window.confirm(message)

- true or false를 반환
- 값에 따라 다른 기능을 구현할 수 있다.

## Prodecure

1. UI 디자인

2. 기능 구현(태그 등록 및 삭제)

3. state관리(redux)

4. API 연동