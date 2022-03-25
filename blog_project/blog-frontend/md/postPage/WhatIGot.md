# What I Got

1. React에서 html을 그대로 렌더링하려하면 태그 종류별로 렌더링되지않고 텍스트로 렌더링된다.  
   따라서 props로 `dangerouslySetInnerHTML`을 설정해주어야한다.

2. 컴포넌트가 unmount됬을 때 어떠한 기능을 제거하거나 추가하거나 기능을 동작하고자 하면 useEffect()콜백함수의 return 에 뒷정리 함수를 사용하자.

3. qs라이브러리를 사용하면 퀴리 값을 더 편리하게 생성할 수 있다.

```js
export const listPosts = ({ username, tags, page }) => {
  const queryString = qs.stringfy({ username, tags, page });
  client.get(`/api/posts?${queryString}`);
};
```

위의 예제에서 username =jev이고 page=2 라는 값을 갖는다면 /api/posts?username=jev&page=2 이런식으로 요청하게 해준다.
