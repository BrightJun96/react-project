# news_project

## Overview

News Api를 사용하여 각 category별로 관련 뉴스를 보여준다.

## Techs

- react
- react-router

## react hooks

- useState
- useEffect
- useContext (state 전달이 복잡해질 경우에 대비)

## Design squence

**1. state에 news api를 담는다.**

news api를 불러와 setState()의 인자로 data를 담는다.
비동기 함수안에서 state에 data를 설정한다.(async/await)

비동기 함수의 인자는 news api의 url이다.

**2. params의 따라 news api를 다르게 불러온다.**

각 카테고리별 뉴스를 불러오기 위하여 url params를 이용한다.

비동기 함수를 불러올 때에는 useEffect안에서 사용하도록 한다.
dependency는 유동적으로 바뀌는 url params의 값을 할당한다.

비동기 함수의 인자인 news api url에 params를 할당하여 유동적으로 동작하도록 하게 한다.

## Problem(twice rerendering)

각 카테고리 뉴스를 눌렀을 때 NewList컴포넌트가 두번씩 렌더링됨.

### cause

url params가 바뀔때마다 컴포넌트가 리렌더링된다.  
하지만 컴포넌트가 렌더링된 뒤에 useEffect에 담은 fetctData(뉴스 data를 불러오는 비동기 함수)함수가 실행되기 때문에 한번 더 리렌더링이 되는 것이다.

즉, url이 바뀜으로써 리렌더링 한번 , useEffect가 실행되면서 리렌더링 한번 총 2번이 리렌더링이 되는 것이다.

### catch

params를 사용하면 rerendering이 됨.
따라서 params 변경으로 rerendering되고 useEffect가 실행되면서 (state가 바뀌면서) 다시 리렌더링이 되서 두번 리렌더링이 된다.

첫번째 리렌더링 때 이전 value값이 console에 찍히는 이유는 다음 value값은 렌더링이 된 이후에 바뀌기때문이다.

### **insight**

1. 두 번 리렌더링해야할 수 밖에 없다.
   useEffect안에서 네트워크 요청을 불러오는데 useEffect가 실행되기 위해서는 렌더링이 되어야한다.
   (useEffect는 렌더링이 완료된 이후에 실행되기 때문)

따라서 카테고리마다 다른 주소에 네트워크 요청을 하기 위해서는 렌더링이 먼저 한번 필요하므로
총 2번 리렌더링되는 것은 필수적인 렌더링이다.

2. params와 location을 컴포넌트내에서 사용하면 컴포넌트가 리렌더링된다.
   `useParams(),useLocation()`

`const params = useParams()`
`const location = useLocation()`

params와 location을 컴포넌트내에서 사용하면 컴포넌트가 리렌더링된다.  
**params and location cause rerendering.**

### conclusion

**두번 리렌더링되는 것은 필수적인 렌더링이므로 더 이상 최적화할 필요가 없다.**
