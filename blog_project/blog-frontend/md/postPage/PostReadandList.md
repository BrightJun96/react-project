# PostPage/PostListPage

포스팅을 조회하는 페이지를 구현해보자

구현해야할 페이지는 다음과 같다.

- 전체 포스팅을 보여줄 POSTLISTPAGE
- PostListPage는 username별로 보여줄 수 있다.
- 특정 유저의 포스팅 \_id경로에는 PostPage

포스팅을 작성하면 특정 유저의 포스팅으로 간다.
그러면 PostPage는 포스팅 하나만을 보여주는 것이고
PostListPage path = '/@:username' 은 해당 유저가 쓴 포스팅을 다 보여주는 것이고
PostListPage path = '/'은 모든 포스팅을 보여주는 것이다.

1. PostPage

- Posting UI를 만들고
- Posting UI 상태관리
- Posting 데이터 불러오기

2. PostListPage @username

- Posting UI를 만들고
- Posting UI 상태관리
- Posting 데이터 불러오기

3. PostListPage @entire user

- Posting UI를 만들고
- Posting UI 상태관리
- Posting 데이터 불러오기
