# [card_project](https://juns-card-app.netlify.app/)

## Watch project

[https://juns-card-app.netlify.app/](https://juns-card-app.netlify.app/)

## Concept

우리나라의 핫플레이스를 카드처럼 나열한 카드 프로젝트이다.

총 16개의 핫플레이스로 구분지어놓고 4지역(서울,강릉,부산,제주)을 카테고리로 구분하였다.

각 핫플레이스 카드를 누르면 관련 핫플레이스에 대한 정보로 라우팅된다.

## Description

- react-router를 이용하여 여러 개의 컴포넌트를 라우팅하여 mapping
- Collection 컴포넌트는 모든 핫플레이스 카드 리스트를 나열한 컴포넌트
- Card 컴포넌트는 각 핫플레이스에 대한 개별 컴포넌트
- Detail 컴포넌트는 Card 컴포넌트를 클릭했을 때 라우팅되어 자세한 contents를 볼 수 있는 컴포넌트
- 각 컴포넌트는 styled-components로 스타일링하였다.
- utilities 폴더는 각 컴포넌트의 내용이 담긴 파일이다.

# stack

- react
- react-router-dom
- styled-components

# Deploy

- netlify

# Development

1. Clone the repository(or download through the top's Code Button)

```
git clone https://github.com/RaulB-masai/react-image-compressor.git
cd react-image-compressor
```

2. Install npm dependecies

```
npm install
```

3. Run the app locally

```
npm start
```
