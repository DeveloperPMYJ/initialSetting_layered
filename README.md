[Backend] 프로젝트 초기 세팅 체크리스트

<aside>
💡 초기세팅 완료 후, 아래 리스트 체크하면서 놓친 건 없는지 확인해주세요 🙌

</aside>

## :: root 폴더 | 초기세팅시 진행사항

---

- [ ]  pull_request_template.md 상세하게 작성
- [ ]  `.gitignore` 에 다음의 [자동생성 사이트](https://www.toptal.com/developers/gitignore)를 이용하여 `vim`, `macOS`, `node`, `linux`, `visualStudioCode`, `dotenv` 등 포함
- [ ]  `.gitignore` 에 dbmate(schema.sql) 파일과 추후 생성하고 관리할 csv 파일 확장자명/디렉토리 포함.

node_modules와 package.json, package-lock-json은 복붙하는게 아니라, 
아래 순서대로 설치를 해야 함. 
그리고 자동으로 폴더/파일이 생김. 


- [ ]  필요한 package 설치
    - 패키지 설치 시 항상 `package.json` 에 실제로 추가되었는지 확인해주세요. 제대로 추가되지 않았다면 팀원들이 clone 받았을 때 해당 패키지를 설치할 수 없습니다.
    - 만약 추가되지 않았다면 `npm install 패키지명 --save` 명령어로 다시 설치 후 `package.json`을 다시 확인해주세요.
    - 학습 측면에서 꼭 필요한 경우가 아니라면 라이브러리의 사용은 지양하고 있습니다. 프로젝트 간 라이브러리 설치 필요할 경우 담당멘토와 먼저 상의해주세요.
    - **프로젝트 패키지(package.json) 파일 확인**
        1. **dependency**
            - `express` (npm install express --save-dev)
            - `mysql1` / `mysql2` (양자택일)
            - `typeorm`
            - `cors`
            - `bcrypt`
            - `jwt`(npm install jsonwebtoken)
            - `dotenv`

        express 따로 먼저 설치하고, (npm install express --save-dev)
        mysql, typeorm, cor, bcrypt, dotenv 같이 한번에 설치 가능하고 (npm install mysql mysql2 typeorm cors bcrypt dotenv --save-dev) 
        jwt(jsonwebtoken)은 따로 설치해야 됨 (npm install jsonwebtoken)

        2. **devDependency**
            - `nodemon` (global 환경도 ok)
            - `morgan`
- [ ]  `package.json` ”script” 상 세부내역 수정
- [ ]  `.env` 실제 런서버 구동이 올바르게 이루어지는 환경변수 작성
    1. db_mate 관련
    2. TypeORM 관련
    3. Port 관련
- [ ]  상기 `.env` 파일에 기반한 `.env.sample` 파일 작성
- [ ]  `app.js` 파일 생성 및 내부에 필요 코드(패키지 require 문, Health Check 문 등) 작성

 

## :: db 폴더 | 초기 세팅 이후 dbmate 설정시 확인사항

---

- [ ]  ERD에 기반한 전체 table을 생성하는 migrations 파일 생성
- [ ]  `dbmate up` 명령어를 이용한 mysql database 내 파일 생성 확인
- [ ]  schema 파일이 Github 상에 공유가 되지 않았는지 확인

## :: Runserver 구동 Test

---

- [ ]  `**npm start` 했을 때, 콘솔 패널에 에러 메시지 없이 잘 실행 되는지 확인 (에러가 있다면 해결 할 것)**
- [ ]  `**health-check**` 시 Ping-Pong의 request → response를 반환해주는 기본적인 http 통신 성공 확인
- [ ]  프로젝트 `**Root Directory**`가 GitHub상에 반영되었는지 확인 → 최상위 경로가 depth 없이 노출되어야 성공