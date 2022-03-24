- PostViewContainer에서 post state를 읽어올 수 없음.WHY?  
   API 요청을 했을 때 404status가 떠서 response값으로 undefined이.WHY status 404?
  404 status란 서버에 요청했을 때에 해당 페이지가 없으면 보내는 status error이다.  
  그렇다면 해당 postId가 없다는 것인데 postId가 문제가 되진 않는다.  
  그러면 뭐가 문제일까?
  서버쪽 API에서 status를 변경해도 404가 나온다.  
  일단 서버코드를 먼저 살펴보자.
  getfindById 미들웨어를 제외하고는 404 status제공하는 코드가 없다.

> API 요청이 아예 가지않는다.
