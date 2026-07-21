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
