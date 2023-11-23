
> 💪태그 장치를 활용한 헬스장 기구 실시간 예약 IoT 서비스💪

헬스장에서 헬스 기구 이용에 눈치본적이 있나요?

퇴근 후 사람이 많은 헬스장에서 기구 이용에 불편함을 느낀 적이 있나요?

**WaitWeight**은 헬스장 이용 고객들에게는 **헬스 기구 예약** 기능을 제공하고 헬스장 관리자에게는 **헬스 기구 관리** 기능을 제공해줍니다.

더 이상 눈치보지 말고 운동하세요!!



## 💡 주요기능

| 구분 | 기능           | 설명                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| 1    | 운동 기구 예약                 | 제공 받은 웨어러블 이용하여 리더기에 태그 시 운동기구 예약 
| 2    | 실시간 대기 현황 제공 | Iot 기기와는 MQTT 프로토콜을 클라이언트와는 SSE(Server-Sent-Event)를 활용하여 예약 시 실시간으로 변경 된 예약 현황을 볼 수 있도록 제공 |예약                                                              |
| 3    | 운동 기록 제공      | 사용자의 운동 기록을 캘린더로 확인 가능, 월 별 운동 통계 제공                                        |
| 4    | 헬스장 관리         | 헬스장의 기구 및 회원에 대한 관리가 가능하도록 서비스 제공  |


## 💡 부가기능

| 구분 | 기능           | 설명                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| 1    | 현재 헬스장 이용객 수 제공  | 현재 헬스장을 이용 중인 고객의 수를 제공합니다.                        |
| 2    | 기구의 이전 혼잡도 정보 제공 | 선택한 기구의 1,2,3주전의 해당 시간대의 혼잡도 정보 제공  |
                  

## 🖥️ 서비스 화면

### 메인화면(반응형 페이지로 모바일은 이용자, 웹페이지는 관리자)

<p align="center">  

<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/6add2c84-6bf6-4bb6-a692-334ee23aa7c2">

</p>

---
<br>

### 회원관리 페이지(관리자)

<p align="center">  
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/d8126712-e597-4e9c-b32c-e220a66076e4"  >


</p>

---
<br>


### 기구관리 페이지(관리자)
<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/e67f0a26-d8bd-4c90-8a8e-2fe135de879a"  >
</p>

---
<br>


### 이용현황 페이지(관리자)
<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/ca510c62-1646-4e5a-87d7-e8dcfc8f2caf"  >
</p>

---
<br>

### 대기현황 페이지(공통)

<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/8cbb76cb-5baa-4228-acf6-b6fc487637c9">


</p>

---
<br>

## 기구 사용 태그


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/a3069d1e-787a-4690-981a-b889308ea8c7" width="1000" height="700"/>


</p>

## 기구 예약 태그


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/4478ace9-a5b5-42d8-be8b-457c92be064d" width="1000" height="700"/>


</p>

## 기구 예약 변경 태그


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/711011bc-058e-45cf-87cb-cbb25e1d8556" width="1000" height="700"/>


</p>

## 기구 종료 태그 및 다음 차례 알림


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/16c27b15-c072-4d90-92a3-cfc23704250a" width="1000" height="700"/>


</p>

## 다음 예약자 노쇼 


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/e21ea5da-43e4-43a3-a863-ebf5b91753d6" width="1000" height="700"/>


</p>

### 운동기록 조회 페이지(사용자)


<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/b208b04c-9111-4ab8-bc7c-fdc149213576" width="500" height="700">

</p>

---
<br>


### 운동기록 월별 통계 페이지(사용자)

<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/ceb270f4-a4da-4b23-a6e0-bde05432853a" width="500" height="700"/>


</p>

---
<br>

### 기구 검색 페이지(사용자)

<p align="center">
<img src="https://github.com/NAMWANHEE/WaitWeight/assets/76835981/e401deea-6a68-4979-b1a0-5b6a36c9203b" width="500" height="700"/>


</p>

## 태그 로직 Flow Chart

![image](https://github.com/NAMWANHEE/WaitWeight/assets/76835981/83ca32f8-bbae-4345-b2d5-713ccffbcb73)



## 🐳 아키텍처

![image](https://github.com/NAMWANHEE/WaitWeight/assets/76835981/621ae9b2-fbae-4e78-8c33-3b68e6d901dd)


## 🛠️ 기술스택

`Backend`

- IntelliJ IDE
- Java Open-JDK zulu `1.8.0_192`
- SpringBoot `2.7.13`
    - Maven `4.0.0`
    - jbcrypt  `0.4`
    - jjwt `0.9.1`
    - Swagger `1.6.11`
    - lombok
    - JPA

`Data`
- MYSQL


`Frontend`

- React `18.2.0`
- TypeScript `5.0.2`
- Vite `4.4.0`
- tailwindcss `3.3.3`

`IoT`
- Mosquitto `1.6.9`
- ESP32
    - `DM2285`
    - `WROOM-32`
- Arduino IDE `2.1.1`

`Infra`

- Mobaxterm
- AWS EC2
- Nginx
- Jenkins
- Docker


`etc`

- Gitlab
- Notion
- Jira
- Mattermost

## 📅 프로젝트 진행 기간

2023.07.10 - 2023.08.20 (7주간 진행)

## 👨‍💻 팀원 소개

![image](https://github.com/NAMWANHEE/WaitWeight/assets/76835981/972b2987-6e03-48f3-a37b-e7c289f3c130)



