# squid_mbti_project

Title : 오징어게임 MBTI
OverView

Second Commit Content :

Problem :

1. Question Component에서 Question이 넘어갈 때마다 사진로딩속도가 느림
2. Result Component에서 Result Image의 로딩속도 또한 느림

Solution :
내가 생각하는 원인
=>

1. 이미지 파일 자체 용량이 크다.
2. 이미지의 크기가 크다.

따라서 이미지 파일을 엎기전에 css에서 이미지의 크기를 먼저 줄여봤다.
다음으로는 파일 포멧이 제각각이기 때문에 파일 용량이 낮은 jpg로 포멧을 전환해봤다.
포멧 전환이후에는 파일자체의 이미지 크기를 줄였다.

Result : 전체적으로 이미지 로딩 시간이 빨라졌다.

Benefit : 이미지 로딩이 느리다면 파일포멧을 jpg로 변경하고 파일 사이즈를 줄이고 css로 이미지 크기도 줄여보자
