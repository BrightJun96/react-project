## styled-component

## 코드 자동 완성 기능

## axios

### axios.create()

> - With Axios.create, we can generate a client for any API and reuse the configuration for any calls using the same client

- url의 default값은 나의 개발 서버(localhost:3000)이다.

- create a new instance of axios with a custom config.
- axios 인스턴스를 만들면 나중에 API 클라이언트에 공통된 설정을 쉽게 넣어줄 수 있다.
  사실 인스턴스를 만들지 않아도 이러한 작업을 할 수 있다.
  하지만 인스턴스를 만들지 않으면 애플리케이션에서 발생하는 모든 요청에 대해 설정하게 되므로, 또 다른 API서버를 사용하려 할 때 곤란해질 수 있다

- This is where Axios.create shines as compared to the usual “require” of Axios, even though both return an instance of Axios. With Axios.create, we can set up a config like baseUrl, and all of the calls made will simply require the URI for the HTTP calls, without the full URL.

## redux-saga

## cors

## Q

### proxy

> 나의 개발서버(localhost:3000)로 요청하면 백엔드 서버에 요청하게 되는 것

- 웹팩 개발 서버에서 지원하는 기능
- 개발 서버(localhost3000)로 요청하는 API들을 우리가 프록시로 정해 둔 서버로 그대로 전달해주고 그 응답을 웹앱에서 사용할 수 있게 해준다.
- 웹팩 개발서버의 프록시를 사용하게 되면, 브라우저 API 를 요청 할 때
  백엔드 서버에 직접적으로 요청을 하지 않고, 현재 개발서버의 주소로 요청을 하게 됩니다.

- 웹팩 개발서버의 proxy 설정은 원래 웹팩 설정을 통해서 적용을 하지만, CRA 를 통해 만든 리액트 프로젝트에서는 package.json 에서 "proxy" 값을 설정하여 쉽게 적용 할 수 있습니다.

## Reference

- (proxy)[https://react.vlpt.us/redux-middleware/09-cors-and-proxy.html]
