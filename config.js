/* ─────────────────────────────────────────────────────────────
   Firebase 설정 붙여넣는 곳
   1) https://console.firebase.google.com → 프로젝트 → ⚙ 프로젝트 설정
   2) "내 앱" → 웹 앱의 firebaseConfig 값을 아래에 그대로 붙여넣기
   3) Authentication → Sign-in method → "익명" 사용 설정
   4) Realtime Database 생성 → 규칙 탭에 README의 규칙 붙여넣기
   ※ 값을 안 넣어도 싱글플레이(연습/도감)는 정상 동작합니다.
      데일리 리더보드와 1대1 배틀만 Firebase가 필요합니다.
──────────────────────────────────────────────────────────────*/
const FIREBASE_CONFIG = {
  apiKey: "붙여넣기",
  authDomain: "붙여넣기",
  databaseURL: "붙여넣기",
  projectId: "붙여넣기",
  storageBucket: "붙여넣기",
  messagingSenderId: "붙여넣기",
  appId: "붙여넣기"
};

/* ─────────────────────────────────────────────────────────────
   Mapillary 토큰 붙여넣는 곳 (실제 거리 사진 자동 로드용, 무료)
   1) https://www.mapillary.com 가입 (무료)
   2) https://www.mapillary.com/dashboard/developers → "Register application"
      (이름/설명 아무거나, 콜백 URL: https://leesu1026.github.io/plonkle)
   3) 생성된 앱의 "Client Token" (MLY| 로 시작) 을 아래에 붙여넣기
   ※ 안 넣으면 위키백과 사진/일러스트로 대체됩니다.
──────────────────────────────────────────────────────────────*/
const MAPILLARY_TOKEN = "붙여넣기";
