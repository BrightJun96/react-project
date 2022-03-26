# [squid_mbti_project](https://mbti-squid-jun.netlify.app/)

## Watch project

[https://mbti-squid-jun.netlify.app/](https://mbti-squid-jun.netlify.app/)

## Concept

오징어게임을 테마로 한 MBTI 테스트이다.

12개의 질문에 대한 답변을 통하여 오징어게임 극중 인물 및 MBTI 성향을 알 수 있다.

시작 버튼을 누르고 12개의 질문에 대해 답하면 그에 관한 결과를 볼 수 있다.

## Description

- 리액트 기초적인 선택적 렌더링에 따라 컴포넌트를 보여준다.

- state값에 따라 다른 컴포넌트를 보여준다.

- 처음 시작할 때 state값에 따라 Home or Game 컴포넌트를 보여준다.

- 질문의 갯수를 state로 관리하여 12개의 질문에 답하면 Question컴포넌트에서 Result컴포넌트를 보여줄 수 있도록 하였다.

- mbti의 각 성향(e,s,t,j)을 state로 관리하여 질문에 따라 조합하여 Result에 반영하였다.

- styling은 sass,styled-components로 구현하였다.

# Stack

- react,sass,styled-component

# Problem

1. Question Component에서 Question이 넘어갈 때마다 사진로딩속도가 느림
2. Result Component에서 Result Image의 로딩속도 또한 느림

## cause

1. 이미지 파일 자체 용량이 크다.
2. 이미지의 크기가 크다.

## solution

따라서 이미지 파일을 엎기전에 css에서 이미지의 크기를 먼저 줄여봤다.
다음으로는 파일 포멧이 제각각이기 때문에 파일 용량이 낮은 jpg로 포멧을 전환해봤다.
포멧 전환이후에는 파일자체의 이미지 크기를 줄였다.

## Result

전체적으로 이미지 로딩 시간이 빨라졌다.

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
