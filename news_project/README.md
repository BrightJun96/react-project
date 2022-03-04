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
