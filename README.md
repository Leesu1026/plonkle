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
- 정답 공개 후에도 **지도를 자유롭게 확대·이동**하며 정답 위치를 확인할 수 있어요 (결과 패널은 왼쪽에 떠 있음)

## 지도
- 빠른 CDN 타일(CARTO Voyager, 구글맵풍 디자인 + 국가명 표시) 사용 — 확대·축소 시 즉시 로딩
- WorldGuessr처럼 적도(빨강)·회귀선·날짜변경선 점선 표시
- 최대 20단계 확대 가능

## 문제 사진 시스템 (우선순위)
1. **`img/트릭id.jpg`** — 저장소에 `img` 폴더를 만들고 사진을 올리면 그 사진이 최우선 사용됩니다.
2. **Mapillary 실제 거리 사진 (권장!)** — 무료 토큰만 넣으면 **정답 좌표 주변에서 실제로 촬영된 거리 사진**이 문제로 나옵니다. 정답 위치의 사진만 가져오므로 **사진과 정답이 어긋나는 오류가 원천적으로 불가능**합니다. 매번 다른 사진이 랜덤으로 나와 문제 체감 다양성도 크게 늘어요. 도메인·전화·번호판·언어 문제는 사진 위에 `🔎 단서 칩`이 함께 표시됩니다.
3. **위키백과 대표 사진** — 번호판 등 (`data.js`의 `WIKI`)
4. **일러스트 폴백** — 위 모두 실패한 경우에만.
- 다음 라운드 사진을 미리 로드해서 라운드 시작 즉시 표시되게 했고, 사진 로드 중에는 스피너가 뜹니다.
- 문제 이미지는 **마우스 휠로 확대/드래그로 이동** 가능 (우상단 ＋/－/⟳ 버튼).

### Mapillary 무료 토큰 발급 (2분)
1. https://www.mapillary.com 가입 (무료)
2. https://www.mapillary.com/dashboard/developers → **Register application**
   - 이름/설명: 아무거나 (예: plonkle) · Callback URL: `https://leesu1026.github.io/plonkle`
3. 생성된 앱의 **Client Token** (`MLY|` 로 시작하는 긴 문자열) 복사
4. `config.js` 맨 아래 `MAPILLARY_TOKEN = "붙여넣기"` 부분에 붙여넣기 → Commit
> 기존 config.js를 이미 수정했다면, 파일 맨 아래에 `const MAPILLARY_TOKEN = "MLY|...";` 한 줄만 추가하면 됩니다.

## 트릭 카테고리 (Plonkit 가이드의 메타 체계 기반, 자체 제작 DB)
볼라드 · 번호판 · 번호판 지역코드 · 언어/문자 · 인터넷 도메인 · 전화 지역번호 · 표지판 · 전봇대 · 도로 차선 · 구글카 · 국기
