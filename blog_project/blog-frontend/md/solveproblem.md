saga의 동작원리

- 액션 생성함수가 실행되면 해당 액션 타입에 대한 사가 함수가 실행된다.

## put

dispatch

## call

fetch와 같은 네트워크 요청 promise를 반환

## takeEvery

들어오는 모든 액션 생성함수 실행

## takeLatetst

마지막 액션 생성함수만 실행

1. register

2. registerSaga

왜 새로고침하면 로그아웃이 될까?
user가 null이 된다는건데

server.state에는 해당 user가 담겨져있다.
