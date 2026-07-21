# 🌍 PLONKLE — 지오게서 트릭 훈련 배틀

단서(볼라드·번호판·언어·표지판…) **하나만 보고** 세계지도에 핀을 꽂는 게임.
Peakle과 같은 구조(GitHub Pages + Firebase)로 만들어졌습니다.

## 파일 구성 (전부 같은 폴더에)
| 파일 | 역할 |
|---|---|
| `index.html` | 화면 구조 |
| `style.css` | 디자인 |
| `config.js` | **Firebase 설정 붙여넣는 곳** |
| `data.js` | 트릭 데이터베이스 210개 (11개 카테고리) |
| `app.js` | 게임 로직 (지도·채점·배틀·데일리) |

## 1) GitHub 업로드
1. https://github.com/new 에서 새 저장소 **`plonkle`** 생성 (Public)
2. 저장소에서 **Add file → Upload files** 로 위 5개 파일 업로드 → Commit
3. **Settings → Pages** → Branch: `main` / `(root)` → Save
4. 1~2분 뒤 게임 주소: **https://leesu1026.github.io/plonkle**

- 저장소(파일 업로드): https://github.com/Leesu1026/plonkle
- 게임 링크: https://leesu1026.github.io/plonkle

## 2) Firebase 설정 (데일리 랭킹 · 1대1 배틀용)
> ⚠️ 설정 안 해도 **연습 모드와 트릭 도감은 그대로 작동**합니다.

1. Firebase 콘솔: https://console.firebase.google.com → 프로젝트 선택(또는 새로 만들기)
2. **⚙ 프로젝트 설정 → 내 앱 → 웹 앱(</>)** 의 `firebaseConfig` 값을 복사해서 `config.js`에 붙여넣기
3. **Authentication → Sign-in method → 익명(Anonymous)** 사용 설정
4. **Realtime Database → 데이터베이스 만들기** (테스트 모드) 후 **규칙** 탭에 아래 붙여넣기 → 게시

```json
{
  "rules": {
    "rooms": { ".read": true, ".write": true },
    "daily": { ".read": true, ".write": true }
  }
}
```

## 게임 모드
- 📅 **데일리 챌린지** — 매일 전 세계 공통 5문제, 온라인 랭킹
- 🎯 **연습 모드** — 무제한 랜덤 5라운드
- ⚔️ **1대1 배틀** — 방 코드 5자리로 친구와 실시간 대결 (라운드당 40초)
- 📖 **트릭 도감** — 210개 트릭 전체 열람 (카테고리 필터)

## 채점 방식 (지오게서와 동일한 감각)
- 미니맵(우측 하단, 호버/⤢로 확대)을 클릭해 핀 → **GUESS!**
- 정답 지점과의 거리로 최대 **5000점**, 5라운드 합계 25000점
- 국가급 트릭은 넉넉하게, **지역급 트릭(러시아 77=모스크바 등)은 좁게** 채점됩니다

## 트릭 카테고리 (Plonkit 가이드의 메타 체계 기반, 자체 제작 DB)
볼라드 · 번호판 · 번호판 지역코드 · 언어/문자 · 인터넷 도메인 · 전화 지역번호 · 표지판 · 전봇대 · 도로 차선 · 구글카 · 국기
