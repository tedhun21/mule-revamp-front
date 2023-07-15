<p align="center">
  <img src="https://github.com/3kiein/mule-revamp-front/assets/129928230/63c7c0f4-92f9-4379-bca9-314bbda73c1f" />
</p>

# Mule Revamp Project

> codestates SEB FE 45 study - 참숯가마 team1
>> 23.06.23 - 23.07.15
>>> [figma Link](https://www.figma.com/file/tTpOObaNAwFGg0De6oOgHB/mule?type=design&node-id=0%3A1&mode=design&t=WWYi6Kaen17lvYM3-1)
>>>> [Server Repository](https://github.com/3kiein/mule-revamp-server)

## We are
| 송지훈 | 김세민 |
| --- | --- |
| http://github.com/tedhun21 | http://github.com/3kiein |
+ 회고 블로그 주소 추가 예정입니다. 

## About Project

### 우리만의 자유로운 99's Mule

#### 1999년, 밴드 '뮬'의 홈페이지로 시작된 뮤지션 커뮤니티인 Mule을 MZ만의 방식으로 개편해 보았습니다.

#### 조금 더 보기 편한 Mule

1. 최신 글을 홈에서 더욱 빠르게 볼 수 있습니다.
2. 뮬에서 가장 인기 많은 게시판, 중고장터만을 위한 캐러셀을 추가했습니다.
3. 더욱 직관적인 카테고리 분류로 원하는 글만 빠르게.

#### 그럼에도, 본질은 잊지 않아야 하니까

색상 코드 등 스타일적인 바탕 요소들은 레퍼런스 사이트를 차용했습니다.

## User Flow
![스크린샷 2023-07-15 오후 4 38 37](https://github.com/3kiein/mule-revamp-front/assets/129928230/ba82a644-2d35-442a-b896-082cb6c99562)

## STACK

### Environment
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">

### Development
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">   <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

### server
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white">  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">

### Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=styledcomponents&logoColor=white"/>  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>

### Tools
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

### Communication
<img src="https://img.shields.io/badge/Live Share-CCADF4?style=for-the-badge&logo=slideshare&logoColor=black">  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

## Pages

| Home | Notice | Market | News |
| --- | --- | --- | --- |
| ![image](https://github.com/3kiein/mule-revamp-front/assets/129928230/2be3d724-0a5a-487a-8e43-ed242a89bf47) | ![image](https://github.com/3kiein/mule-revamp-front/assets/129928230/af54f9d8-294a-4747-965d-3db02a755547) | ![image](https://github.com/3kiein/mule-revamp-front/assets/129928230/b4ab1d49-7562-4966-ac2e-5a57a6c291ed) | ![image](https://github.com/3kiein/mule-revamp-front/assets/129928230/815e1c72-4cc3-4a78-8e79-bd9e38c491f0) |
| 최신 게시글 요약 | 공지 게시판 | 중고 거래 게시판 | 설명 |
| 중고 장터 캐러셀 | 카테고리 필터링, 검색 | 카테고리 필터링, 검색 | 카테고리 필터링, 검색 |
| 로그인, 프로필 |  | 사진 중심 컴포넌트 |  |


### Components

| User Profile | Noti Modal | Login Modal | Search Modal |
| --- | --- | --- | --- |
| ![스크린샷 2023-07-15 오후 5 20 55](https://github.com/3kiein/mule-revamp-front/assets/129928230/9dd6acf6-01c7-4723-a486-c9c9bf748f30) | ![스크린샷 2023-07-15 오후 5 21 13](https://github.com/3kiein/mule-revamp-front/assets/129928230/28857f2e-0c8b-44b2-8a32-09763d24c5af) | ![스크린샷 2023-07-15 오후 5 21 27](https://github.com/3kiein/mule-revamp-front/assets/129928230/f0ed9942-f051-4e7c-bf3e-b7c80b8760cd) | ![스크린샷 2023-07-15 오후 7 15 15](https://github.com/3kiein/mule-revamp-front/assets/129928230/3fb88ee8-17ef-4d68-8e89-1ca212864378) |
| 활동 점수 및 포인트 변경을 동적 구현 | 댓글 등 누적된 알림 확인창 | 쿠키를 이용한 로그인 | 페이지별 카테고리 구성에 대응 가능한 검색 모달 |
| 드롭다운으로 간결함 증가 |  | 소셜 로그인 추후 구현 예정 | 중첩 검색 필터링 |

Market Carousel  
![Carousel](https://github.com/3kiein/mule-revamp-front/assets/129928230/043548c2-c489-4169-86bf-e838973226c7)

## Architecture
### front
![IMG_6588](https://github.com/3kiein/mule-revamp-front/assets/129928230/ee7450db-90ad-4bcc-aee0-6ceee9ab0f7e)

### server
![IMG_6589](https://github.com/3kiein/mule-revamp-front/assets/129928230/56845982-d017-4065-bfbb-774c2acc6a1c)

## Getting Started

### Frontend
```
$ git clone https://github.com/3kiein/mule-revamp-front.git
$ cd mule-revamp-front
$ npm install
$ npm run start
```

### Backend
```
$ $ git clone https://github.com/3kiein/mule-revamp-server.git
$ cd mule-revamp-server
$ npm install
$ npm run start
```
