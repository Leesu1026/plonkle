/* ═══════════════ i18n ═══════════════ */
const I18N = {
  ko:{tagline:"단서 하나로 세계를 맞혀라 · 지오게서 트릭 훈련",daily:"데일리 챌린지",practice:"연습 모드",practiceSub:"무제한 랜덤 5라운드",
    battle:"1대1 배틀",battleSub:"친구와 실시간 대결",study:"트릭 도감",studySub:"모든 단서 훑어보기",
    battleDesc:"같은 5개의 단서로 동시에 대결! 라운드당 40초.",createRoom:"방 만들기",joinRoom:"참가",
    waiting:"상대 기다리는 중…",shareCode:"친구에게 이 코드를 알려주세요",cancel:"취소",
    round:"라운드",score:"점수",exhibitHint:"이 단서만 보고 지도에 핀을 꽂으세요",
    guess:"지도를 클릭해 핀을 꽂으세요",guessGo:"GUESS!",pts:"점",next:"다음 라운드",seeResult:"결과 보기",
    finalTitle:"게임 종료!",again:"한 번 더",home:"홈으로",
    needFirebase:"Firebase 설정이 필요한 기능이에요 (config.js)",online:"온라인",offline:"오프라인 (싱글 전용)",
    nickPrompt:"닉네임을 입력하세요 (1~10자)",nickTitle:"닉네임 정하기",nickRule:"1글자부터 10글자까지 쓸 수 있어요",nickEmpty:"닉네임을 1글자 이상 입력하세요",save:"저장",preparing:"문제를 준비하는 중…",waitOpp:"상대 기다리는 중",readyNext:"다음 라운드 준비",readyFinal:"최종 결과 보기",readyWait:"상대 준비 기다리는 중",startsIn:"곧 시작합니다",photoFail:"사진을 불러오지 못했어요. 지도에서 추측해 주세요.",oppPin:"상대",photoBy:"사진",dailyDone:"오늘의 챌린지 완료! 내일 다시 도전하세요.",
    win:"승리! 🏆",lose:"패배…",draw:"무승부!",oppLeft:"상대가 나갔어요",noRoom:"방을 찾을 수 없어요",roomFull:"방이 가득 찼어요",
    timeout:"시간 초과!",all:"전체 카테고리",distKm:"km 차이",leaderboard:"오늘의 랭킹"},
  en:{tagline:"One clue. Pin the world. GeoGuessr meta trainer",daily:"Daily Challenge",practice:"Practice",practiceSub:"Random 5 rounds",
    battle:"1v1 Battle",battleSub:"Realtime duel",study:"Trick Codex",studySub:"Browse every clue",
    battleDesc:"Same 5 clues, head to head! 40s per round.",createRoom:"Create room",joinRoom:"Join",
    waiting:"Waiting for opponent…",shareCode:"Share this code with a friend",cancel:"Cancel",
    round:"Round",score:"Score",exhibitHint:"Pin the map using only this clue",
    guess:"Click the map to drop a pin",guessGo:"GUESS!",pts:"pts",next:"Next round",seeResult:"See results",
    finalTitle:"Game over!",again:"Play again",home:"Home",
    needFirebase:"This feature needs Firebase (config.js)",online:"Online",offline:"Offline (solo only)",
    nickPrompt:"Enter a nickname (1–10 characters)",nickTitle:"Choose a nickname",nickRule:"Use 1 to 10 characters",nickEmpty:"Enter at least 1 character",save:"Save",preparing:"Preparing the clues…",waitOpp:"Waiting for opponent",readyNext:"Ready for next round",readyFinal:"See final result",readyWait:"Waiting for opponent to be ready",startsIn:"Starting soon",photoFail:"Could not load the photo. Make your best guess.",oppPin:"Opponent",photoBy:"Photo",dailyDone:"Daily done! Come back tomorrow.",
    win:"Victory! 🏆",lose:"Defeat…",draw:"Draw!",oppLeft:"Opponent left",noRoom:"Room not found",roomFull:"Room is full",
    timeout:"Time's up!",all:"All categories",distKm:"km away",leaderboard:"Today's ranking"}
};
const CATS = {
  bollard:{ko:"볼라드",en:"BOLLARD"}, plate:{ko:"번호판",en:"PLATE"}, platecode:{ko:"번호판 지역코드",en:"PLATE CODE"},
  lang:{ko:"언어 · 문자",en:"LANGUAGE"}, tld:{ko:"인터넷 도메인",en:"DOMAIN"}, phone:{ko:"전화 지역번호",en:"AREA CODE"},
  sign:{ko:"표지판",en:"SIGN"}, pole:{ko:"전봇대",en:"POLE"}, road:{ko:"도로 차선",en:"ROAD LINE"},
  car:{ko:"구글카",en:"GOOGLE CAR"}, flag:{ko:"국기",en:"FLAG"},
  busstop:{ko:"버스 정류장",en:"BUS STOP"}, hydrant:{ko:"소화전",en:"HYDRANT"}, postbox:{ko:"우체통",en:"POST BOX"},
  signal:{ko:"신호등",en:"TRAFFIC LIGHT"}, crossing:{ko:"횡단보도",en:"CROSSWALK"}, streetlight:{ko:"가로등",en:"STREET LIGHT"},
  taxi:{ko:"택시",en:"TAXI"}, guardrail:{ko:"가드레일",en:"GUARDRAIL"}
};

/* ═══════════════ 트릭 DB ═══════════════
   T(id, cat, lat, lng, r0완벽반경km, s감쇠km, 비주얼스펙, 정답ko, 정답en, 해설) */
const TRICKS=[];
function T(id,cat,lat,lng,r0,s,v,ako,aen,e){TRICKS.push({id,cat,tgt:[lat,lng],r0,s,v,a:{ko:ako,en:aen},e});}

/* ── 볼라드 ── */
T("bo-fr","bollard",46.6,2.4,350,1200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#d62828",shape:"rect"}},"🇫🇷 프랑스","🇫🇷 France","프랑스의 도로 볼라드(J6)는 대체로 흰 몸통에 빨간·흰 반사판을 씁니다. 이웃 나라(독일·이탈리아)와 형태가 조금씩 다르니 반사판 색과 머리 모양을 비교하세요.");
T("bo-de","bollard",51.1,10.4,350,1200,{t:"bollard",shape:"round",body:"#f2f2f2",band:{color:"#222",y:40,h:34},refl:{color:"#333",shape:"inband"}},"🇩🇪 독일","🇩🇪 Germany","독일의 볼라드(Leitpfosten)는 보통 회백색 몸통에 검은 띠가 들어갑니다. 오스트리아·스위스와 닮았지만 독일에서 가장 흔합니다.");
T("bo-at","bollard",47.6,14.1,250,1000,{t:"bollard",shape:"flat",body:"#fff",cap:"#d62828",capShape:"hat"},"🇦🇹 오스트리아","🇦🇹 Austria","오스트리아 볼라드는 흔히 빨간 머리(꺾인 모자 모양)가 특징입니다. 독일식과 비교해 머리 부분을 보세요.");
T("bo-cz","bollard",49.8,15.4,220,900,{t:"bollard",shape:"round",body:"#fff",cap:"#111",band:{color:"#ff7b00",y:52,h:22}},"🇨🇿 체코","🇨🇿 Czechia","체코의 볼라드는 흰 몸통에 검은 머리, 주황 반사 요소가 자주 보입니다(슬로바키아도 유사).");
T("bo-it","bollard",42.8,12.5,380,1200,{t:"bollard",shape:"flat",body:"#fff",cap:"#111",refl:{color:"#d62828",shape:"rect"}},"🇮🇹 이탈리아","🇮🇹 Italy","이탈리아 볼라드는 검은 머리에 빨강/흰 반사판 조합이 흔합니다. 도로 표지의 언어도 함께 확인하세요.");
T("bo-es","bollard",40.2,-3.5,380,1200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#ffb703",shape:"rect"}},"🇪🇸 스페인","🇪🇸 Spain","스페인의 볼라드(hito)는 흔히 노란·주황 계열 반사 요소가 있는 흰 사각 기둥입니다. 포르투갈과 헷갈리면 도로명 언어로 구분하세요.");
T("bo-pt","bollard",39.6,-8.0,220,900,{t:"bollard",shape:"slim",body:"#fff",cap:"#111",refl:{color:"#ff7b00",shape:"rect"}},"🇵🇹 포르투갈","🇵🇹 Portugal","포르투갈 볼라드는 스페인식과 비슷하지만 몸통이 더 가는 편입니다. 언어(포르투갈어)와 함께 판단하세요.");
T("bo-nl","bollard",52.2,5.3,180,800,{t:"bollard",shape:"slim",body:"#fff",band:{color:"#d62828",y:30,h:26}},"🇳🇱 네덜란드","🇳🇱 Netherlands","네덜란드 볼라드는 가늘고 유연한 기둥에 빨간 상단 표시가 흔합니다.");
T("bo-pl","bollard",52.1,19.4,320,1100,{t:"bollard",shape:"flat",body:"#fff",band:{color:"#d62828",y:34,h:40}},"🇵🇱 폴란드","🇵🇱 Poland","폴란드 볼라드는 흰 몸통 상단에 빨간 요소가 자주 보입니다. 도로명(ulica)과 함께 보면 확실합니다.");
T("bo-hu","bollard",47.2,19.4,220,900,{t:"bollard",shape:"flat",body:"#fff",band:{color:"#d62828",y:30,h:26},refl:{color:"#fff",shape:"inband"}},"🇭🇺 헝가리","🇭🇺 Hungary","헝가리 볼라드는 납작한 판형 몸통이 흔합니다. 도로명(utca) 등 헝가리어 단서와 조합하세요.");
T("bo-ro","bollard",45.9,24.9,320,1100,{t:"bollard",shape:"chunky",body:"#f4f4f4",cap:"#111",refl:{color:"#d62828",shape:"rect"}},"🇷🇴 루마니아","🇷🇴 Romania","루마니아 볼라드는 콘크리트 느낌의 두툼한 기둥이 많습니다. 전봇대·도로명과 함께 판단하세요.");
T("bo-tr","bollard",39.0,35.2,500,1400,{t:"bollard",shape:"stripes",colors:["#111","#fff"]},"🇹🇷 튀르키예","🇹🇷 Türkiye","튀르키예 도로변 유도봉은 흑백 계열 줄무늬 기둥이 흔합니다. 튀르키예어 표지와 함께 확인하세요.");
T("bo-ru","bollard",55.5,45.0,900,2000,{t:"bollard",shape:"stripesThin",colors:["#111","#fff"]},"🇷🇺 러시아","🇷🇺 Russia","러시아·구소련권 도로의 시선유도봉은 가늘고 긴 흑백 줄무늬가 흔합니다. 키릴 문자 표지와 함께 보세요.");
T("bo-ee","bollard",58.7,25.5,160,700,{t:"bollard",shape:"slim",body:"#fff",band:{color:"#ff7b00",y:36,h:22},capShape:"roundtop"},"🇪🇪 에스토니아","🇪🇪 Estonia","에스토니아 등 발트권 볼라드는 가는 플라스틱 기둥에 주황 반사 요소가 자주 보입니다. 언어(에스토니아어)로 재확인하세요.");
T("bo-au","bollard",-25.5,134.5,900,2200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#d62828",shape:"strip"}},"🇦🇺 호주","🇦🇺 Australia","호주 가이드포스트는 납작한 흰 판형에 빨간 반사띠가 흔합니다. 좌측통행 여부도 함께 확인하세요.");
T("bo-is","bollard",64.9,-18.6,200,900,{t:"bollard",shape:"round",body:"#ffd60a",cap:"#111"},"🇮🇸 아이슬란드","🇮🇸 Iceland","아이슬란드 도로변 유도봉은 노란 몸통이 상징적입니다. 화산 지형·영어+아이슬란드어 표지와 함께 보세요.");

/* ── 번호판(국가) ── */
T("pl-nl","plate",52.2,5.3,180,800,{t:"plate",bg:"#F9C50B",fg:"#111",left:{bg:"#003399",txt:"NL"},text:"XL-889-P"},"🇳🇱 네덜란드","🇳🇱 Netherlands","네덜란드 번호판은 노란 바탕이 대표적입니다(차종·연식에 따라 예외가 있으니 왼쪽 EU 띠의 NL 표기도 함께 확인).");
T("pl-uk","plate",52.6,-1.5,420,1300,{t:"plate",bg:"#F9C50B",fg:"#111",left:{bg:"#003399",txt:"UK"},text:"AB12 CDE"},"🇬🇧 영국","🇬🇧 UK","영국 번호판은 앞이 흰색, 뒤가 노란색이며 좌측통행과 함께 판단하면 확실합니다(구형·특수판은 예외).");
T("pl-fr","plate",46.6,2.4,350,1200,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"F"},right:{bg:"#003399",txt:"69"},text:"AA-123-BB"},"🇫🇷 프랑스","🇫🇷 France","프랑스 번호판은 현재 표준형이 왼쪽 EU(F) 띠 + 오른쪽 지역·데파르트망 번호입니다. 구형·특수판은 형태가 다르니 오른쪽 번호나 F 표기로 확인하세요.");
T("pl-it","plate",42.8,12.5,380,1200,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"I"},right:{bg:"#003399",txt:"MI"},text:"AB 123 CD"},"🇮🇹 이탈리아","🇮🇹 Italy","이탈리아 번호판은 현재 표준형이 흰 바탕에 양옆 파란 띠(오른쪽에 도 코드)입니다. 다만 구형·이륜차판 등 형태가 다양하니, 도 코드(예: RM·MI) 같은 이탈리아 특유 요소로 확인하세요.");
T("pl-ch","plate",46.8,8.2,180,800,{t:"plate",bg:"#fff",fg:"#111",text:"ZH 123456",noStrip:true,shield:true},"🇨🇭 스위스","🇨🇭 Switzerland","스위스 번호판은 EU 띠가 없고 주(칸톤) 문장과 스위스 국장이 붙는 것이 특징입니다.");
T("pl-ua","plate",49.4,31.2,450,1400,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#0057b7",txt:"UA",flag:"#ffd700"},text:"AA 1234 BK"},"🇺🇦 우크라이나","🇺🇦 Ukraine","우크라이나 번호판은 왼쪽 띠에 파랑+노랑 국기색과 UA 표기가 들어갑니다.");
T("pl-co","plate",4.6,-73.1,450,1400,{t:"plate",bg:"#F9C50B",fg:"#111",text:"ABC 123",noStrip:true},"🇨🇴 콜롬비아","🇨🇴 Colombia","콜롬비아 번호판에는 대개 아래쪽에 'COLOMBIA' 국명이 적혀 있습니다. 승용차는 노란 바탕, 오토바이는 파란 바탕 등 차종에 따라 색이 다르니 국명 표기로 확인하세요.");
T("pl-ar","plate",-34.6,-64.0,600,1600,{t:"plate",bg:"#fff",fg:"#111",top:{bg:"#0a3d91",txt:"■ ARGENTINA ■"},text:"AB 123 CD"},"🇦🇷 아르헨티나","🇦🇷 Argentina","아르헨티나 번호판은 메르코수르 형식(상단 파란 띠에 ARGENTINA 표기)이 현재 표준입니다. 구형은 흰 바탕에 검은 글씨입니다.");
T("pl-br","plate",-10.8,-52.9,900,2200,{t:"plate",bg:"#fff",fg:"#111",top:{bg:"#003399",txt:"BRASIL"},text:"ABC1D23"},"🇧🇷 브라질","🇧🇷 Brazil","브라질 번호판은 상단에 BRASIL 표기가 있는 메르코수르 형식이 현재 표준이며, 구형은 회색 바탕에 도시명이 적혀 있습니다.");
T("pl-cl","plate",-35.7,-71.5,400,1300,{t:"plate",bg:"#fff",fg:"#111",text:"BB·BB·12",noStrip:true},"🇨🇱 칠레","🇨🇱 Chile","칠레 번호판은 아래쪽에 CHILE 표기가 있는 경우가 많습니다. 차종에 따라 형식이 다르니 국명 표기로 확인하세요.");
T("pl-kr","plate",36.5,127.8,300,900,{t:"plate",bg:"#fff",fg:"#111",text:"12가 3456",noStrip:true,long:true},"🇰🇷 대한민국","🇰🇷 South Korea","한국 번호판은 한글이 들어가는 것이 결정적 단서입니다(형식·색은 차종과 연식에 따라 다양).");
T("pl-my","plate",3.9,102.0,350,1000,{t:"plate",bg:"#111",fg:"#fff",text:"WVX 1234",noStrip:true},"🇲🇾 말레이시아","🇲🇾 Malaysia","말레이시아 번호판은 검은 바탕에 흰 글자가 대표적이며, 지역 접두 문자(W=쿠알라룸푸르 등)로 세부 지역을 구분합니다.");
T("pl-nz","plate",-41.5,172.8,400,1300,{t:"plate",bg:"#fff",fg:"#111",text:"ABC123",noStrip:true},"🇳🇿 뉴질랜드","🇳🇿 New Zealand","뉴질랜드 번호판은 띠 없는 흰 판이 흔하고 좌측통행과 함께 판단합니다(차종에 따라 예외 있음).");

/* ── 번호판 지역코드 ── */
const RU={bg:"#fff",fg:"#111",text:"А123ВС",rusBox:true};
T("pc-ru77","platecode",55.75,37.62,80,700,{t:"plate",...RU,region:"77"},"🇷🇺 러시아 · 모스크바","🇷🇺 Russia · Moscow","러시아 번호판 오른쪽 박스의 지역번호 77(97·99·177도)은 모스크바입니다.");
T("pc-ru78","platecode",59.94,30.31,80,700,{t:"plate",...RU,region:"78"},"🇷🇺 러시아 · 상트페테르부르크","🇷🇺 Russia · St. Petersburg","지역번호 78(98·178)은 상트페테르부르크입니다.");
T("pc-ru23","platecode",45.0,39.0,120,800,{t:"plate",...RU,region:"23"},"🇷🇺 러시아 · 크라스노다르","🇷🇺 Russia · Krasnodar","지역번호 23(93·123)은 남부 크라스노다르 지방입니다.");
T("pc-ru66","platecode",56.8,60.6,120,800,{t:"plate",...RU,region:"66"},"🇷🇺 러시아 · 예카테린부르크","🇷🇺 Russia · Yekaterinburg","지역번호 66(96·196)은 우랄의 스베르들롭스크주(예카테린부르크)입니다.");
T("pc-ru54","platecode",55.0,82.9,120,800,{t:"plate",...RU,region:"54"},"🇷🇺 러시아 · 노보시비르스크","🇷🇺 Russia · Novosibirsk","지역번호 54는 시베리아의 노보시비르스크주입니다.");
T("pc-ru25","platecode",43.6,132.0,150,900,{t:"plate",...RU,region:"25"},"🇷🇺 러시아 · 블라디보스토크","🇷🇺 Russia · Vladivostok","지역번호 25(125)는 극동 프리모르스키 지방(블라디보스토크)입니다.");
const TR2={bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"TR"}};
T("pc-tr34","platecode",41.0,29.0,80,700,{t:"plate",...TR2,text:"34 ABC 123",hl:"34"},"🇹🇷 튀르키예 · 이스탄불","🇹🇷 Türkiye · Istanbul","튀르키예 번호판은 도 번호로 시작합니다. 34 = 이스탄불.");
T("pc-tr06","platecode",39.93,32.86,80,700,{t:"plate",...TR2,text:"06 ABC 123",hl:"06"},"🇹🇷 튀르키예 · 앙카라","🇹🇷 Türkiye · Ankara","06 = 수도 앙카라입니다.");
T("pc-tr35","platecode",38.42,27.14,80,700,{t:"plate",...TR2,text:"35 ABC 123",hl:"35"},"🇹🇷 튀르키예 · 이즈미르","🇹🇷 Türkiye · Izmir","35 = 에게해 연안의 이즈미르입니다.");
T("pc-tr07","platecode",36.9,30.7,80,700,{t:"plate",...TR2,text:"07 ABC 123",hl:"07"},"🇹🇷 튀르키예 · 안탈리아","🇹🇷 Türkiye · Antalya","07 = 지중해 휴양도시 안탈리아입니다.");
T("pc-de-b","platecode",52.52,13.4,70,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"D"},text:"B · AB 1234",hl:"B"},"🇩🇪 독일 · 베를린","🇩🇪 Germany · Berlin","독일 번호판 맨 앞 도시코드 B = 베를린.");
T("pc-de-m","platecode",48.14,11.58,70,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"D"},text:"M · AB 1234",hl:"M"},"🇩🇪 독일 · 뮌헨","🇩🇪 Germany · Munich","M = 뮌헨. 짧은 코드일수록 대도시입니다.");
T("pc-de-hh","platecode",53.55,10.0,70,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"D"},text:"HH · AB 123",hl:"HH"},"🇩🇪 독일 · 함부르크","🇩🇪 Germany · Hamburg","HH(Hansestadt Hamburg) = 함부르크.");
T("pc-fr75","platecode",48.86,2.35,70,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"F"},right:{bg:"#003399",txt:"75"},text:"AA-123-BB",hlRight:true},"🇫🇷 프랑스 · 파리","🇫🇷 France · Paris","오른쪽 파란 띠의 데파르트망 번호 75 = 파리.");
T("pc-fr13","platecode",43.4,5.4,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"F"},right:{bg:"#003399",txt:"13"},text:"AA-123-BB",hlRight:true},"🇫🇷 프랑스 · 마르세유","🇫🇷 France · Marseille","13(부슈뒤론) = 마르세유 일대입니다.");
T("pc-fr69","platecode",45.76,4.84,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"F"},right:{bg:"#003399",txt:"69"},text:"AA-123-BB",hlRight:true},"🇫🇷 프랑스 · 리옹","🇫🇷 France · Lyon","69(론) = 리옹 일대입니다.");
T("pc-it-rm","platecode",41.9,12.5,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"I"},right:{bg:"#003399",txt:"RM"},text:"AB 123 CD",hlRight:true},"🇮🇹 이탈리아 · 로마","🇮🇹 Italy · Rome","오른쪽 띠의 작은 도 코드 RM = 로마.");
T("pc-it-mi","platecode",45.46,9.19,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"I"},right:{bg:"#003399",txt:"MI"},text:"AB 123 CD",hlRight:true},"🇮🇹 이탈리아 · 밀라노","🇮🇹 Italy · Milan","MI = 밀라노.");
T("pc-it-na","platecode",40.85,14.27,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"I"},right:{bg:"#003399",txt:"NA"},text:"AB 123 CD",hlRight:true},"🇮🇹 이탈리아 · 나폴리","🇮🇹 Italy · Naples","NA = 나폴리.");
T("pc-ro-b","platecode",44.43,26.1,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"RO"},text:"B 123 ABC",hl:"B"},"🇷🇴 루마니아 · 부쿠레슈티","🇷🇴 Romania · Bucharest","루마니아 번호판 첫 글자 카운티 코드. B = 부쿠레슈티.");
T("pc-ro-cj","platecode",46.77,23.6,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"RO"},text:"CJ 12 ABC",hl:"CJ"},"🇷🇴 루마니아 · 클루지","🇷🇴 Romania · Cluj","CJ = 트란실바니아의 클루지나포카.");
T("pc-ro-ct","platecode",44.17,28.65,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"RO"},text:"CT 12 ABC",hl:"CT"},"🇷🇴 루마니아 · 콘스탄차","🇷🇴 Romania · Constanța","CT = 흑해 연안 콘스탄차.");
T("pc-pl-w","platecode",52.23,21.0,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"PL"},text:"WA 1234A",hl:"WA"},"🇵🇱 폴란드 · 바르샤바","🇵🇱 Poland · Warsaw","폴란드 번호판 W로 시작 = 바르샤바.");
T("pc-pl-kr","platecode",50.06,19.94,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"PL"},text:"KR 1234A",hl:"KR"},"🇵🇱 폴란드 · 크라쿠프","🇵🇱 Poland · Kraków","KR = 크라쿠프.");
T("pc-pl-gd","platecode",54.35,18.65,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"PL"},text:"GD 1234A",hl:"GD"},"🇵🇱 폴란드 · 그단스크","🇵🇱 Poland · Gdańsk","GD = 발트해 연안 그단스크.");
T("pc-ua-aa","platecode",50.45,30.52,80,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#0057b7",txt:"UA",flag:"#ffd700"},text:"AA 1234 AB",hl:"AA"},"🇺🇦 우크라이나 · 키이우","🇺🇦 Ukraine · Kyiv","우크라이나 번호판 앞 두 글자 АА = 키이우.");
T("pc-ua-bc","platecode",49.84,24.03,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#0057b7",txt:"UA",flag:"#ffd700"},text:"BC 1234 AB",hl:"BC"},"🇺🇦 우크라이나 · 리비우","🇺🇦 Ukraine · Lviv","ВС = 서부 리비우.");
T("pc-ua-ax","platecode",49.99,36.23,90,700,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#0057b7",txt:"UA",flag:"#ffd700"},text:"AX 1234 AB",hl:"AX"},"🇺🇦 우크라이나 · 하르키우","🇺🇦 Ukraine · Kharkiv","АХ = 동부 하르키우.");
T("pc-id-b","platecode",-6.2,106.8,80,700,{t:"plate",bg:"#111",fg:"#fff",text:"B 1234 XYZ",hl:"B"},"🇮🇩 인도네시아 · 자카르타","🇮🇩 Indonesia · Jakarta","인도네시아 검은 번호판 첫 글자 B = 자카르타 수도권.");
T("pc-id-d","platecode",-6.91,107.6,80,700,{t:"plate",bg:"#111",fg:"#fff",text:"D 1234 XYZ",hl:"D"},"🇮🇩 인도네시아 · 반둥","🇮🇩 Indonesia · Bandung","D = 반둥.");
T("pc-id-l","platecode",-7.25,112.75,80,700,{t:"plate",bg:"#111",fg:"#fff",text:"L 1234 XYZ",hl:"L"},"🇮🇩 인도네시아 · 수라바야","🇮🇩 Indonesia · Surabaya","L = 수라바야.");
T("pc-id-ab","platecode",-7.8,110.37,80,700,{t:"plate",bg:"#111",fg:"#fff",text:"AB 1234 XY",hl:"AB"},"🇮🇩 인도네시아 · 족자카르타","🇮🇩 Indonesia · Yogyakarta","AB = 족자카르타.");
T("pc-jp-sap","platecode",43.06,141.35,110,800,{t:"plate",bg:"#fff",fg:"#0a7a2f",text:"札幌 330 · 12-34"},"🇯🇵 일본 · 삿포로","🇯🇵 Japan · Sapporo","일본 번호판의 지명 한자. 札幌 = 홋카이도 삿포로.");
T("pc-jp-osk","platecode",34.69,135.5,90,700,{t:"plate",bg:"#fff",fg:"#0a7a2f",text:"大阪 550 · 56-78"},"🇯🇵 일본 · 오사카","🇯🇵 Japan · Osaka","大阪 = 오사카.");
T("pc-jp-oki","platecode",26.33,127.8,110,800,{t:"plate",bg:"#fff",fg:"#0a7a2f",text:"沖縄 500 · 90-12"},"🇯🇵 일본 · 오키나와","🇯🇵 Japan · Okinawa","沖縄 = 오키나와.");
T("pc-jp-tk","platecode",35.68,139.7,90,700,{t:"plate",bg:"#fff",fg:"#0a7a2f",text:"品川 300 · 34-56"},"🇯🇵 일본 · 도쿄","🇯🇵 Japan · Tokyo","品川(시나가와)·練馬 등은 도쿄의 지역명입니다.");
T("pc-th-bkk","platecode",13.75,100.5,90,700,{t:"plate",bg:"#fff",fg:"#111",text:"1กก 1234",sub:"กรุงเทพมหานคร"},"🇹🇭 태국 · 방콕","🇹🇭 Thailand · Bangkok","태국 번호판 아래 작은 글씨는 주 이름. กรุงเทพมหานคร = 방콕.");
T("pc-th-cm","platecode",18.79,98.98,100,700,{t:"plate",bg:"#fff",fg:"#111",text:"กข 1234",sub:"เชียงใหม่"},"🇹🇭 태국 · 치앙마이","🇹🇭 Thailand · Chiang Mai","เชียงใหม่ = 북부 치앙마이.");
T("pc-th-pk","platecode",7.95,98.33,90,700,{t:"plate",bg:"#fff",fg:"#111",text:"กข 5678",sub:"ภูเก็ต"},"🇹🇭 태국 · 푸껫","🇹🇭 Thailand · Phuket","ภูเก็ต = 남부 섬 푸껫.");
T("pc-in-dl","platecode",28.6,77.2,90,700,{t:"plate",bg:"#fff",fg:"#111",text:"DL 8C AB 1234",hl:"DL"},"🇮🇳 인도 · 델리","🇮🇳 India · Delhi","인도 번호판 앞 두 글자는 주 코드. DL = 델리.");
T("pc-in-mh","platecode",19.6,75.5,250,1000,{t:"plate",bg:"#fff",fg:"#111",text:"MH 12 AB 1234",hl:"MH"},"🇮🇳 인도 · 마하라슈트라","🇮🇳 India · Maharashtra","MH = 뭄바이가 있는 마하라슈트라주.");
T("pc-in-ka","platecode",14.8,75.9,220,1000,{t:"plate",bg:"#fff",fg:"#111",text:"KA 05 AB 1234",hl:"KA"},"🇮🇳 인도 · 카르나타카","🇮🇳 India · Karnataka","KA = 벵갈루루가 있는 카르나타카주.");
T("pc-in-tn","platecode",11.0,78.5,220,1000,{t:"plate",bg:"#fff",fg:"#111",text:"TN 09 AB 1234",hl:"TN"},"🇮🇳 인도 · 타밀나두","🇮🇳 India · Tamil Nadu","TN = 남부 타밀나두주.");
T("pc-au-nsw","platecode",-32.5,147,350,1200,{t:"plate",bg:"#111",fg:"#F9C50B",text:"ABC·12D",sub:"NEW SOUTH WALES"},"🇦🇺 호주 · 뉴사우스웨일스","🇦🇺 Australia · NSW","검정 바탕에 노란 글자(또는 그 반대) + NSW 문구 = 시드니가 있는 뉴사우스웨일스.");
T("pc-au-vic","platecode",-36.9,144.5,300,1100,{t:"plate",bg:"#fff",fg:"#0a3d91",text:"1AB·2CD",sub:"VICTORIA"},"🇦🇺 호주 · 빅토리아","🇦🇺 Australia · Victoria","파란 글자 + VICTORIA = 멜버른이 있는 빅토리아주.");
T("pc-au-qld","platecode",-21.5,145.5,400,1300,{t:"plate",bg:"#fff",fg:"#7a1f3d",text:"123·ABC",sub:"QUEENSLAND"},"🇦🇺 호주 · 퀸즐랜드","🇦🇺 Australia · Queensland","적갈색(마룬) 글자 + QUEENSLAND = 퀸즐랜드주.");
T("pc-us-ca","platecode",36.5,-119.5,350,1200,{t:"plate",bg:"#fff",fg:"#1a3d8f",top:{bg:"#fff",txt:"California",script:true},text:"7ABC123"},"🇺🇸 미국 · 캘리포니아","🇺🇸 USA · California","흰 바탕에 빨간 필기체 California = 캘리포니아 번호판.");
T("pc-us-tx","platecode",31.3,-99.2,400,1300,{t:"plate",bg:"#fff",fg:"#111",top:{bg:"#fff",txt:"TEXAS"},text:"ABC·1234"},"🇺🇸 미국 · 텍사스","🇺🇸 USA · Texas","TEXAS 문구와 별 그래픽이 있는 흑백 번호판 = 텍사스.");
T("pc-us-ny","platecode",42.9,-75.5,300,1100,{t:"plate",bg:"#F9C50B",fg:"#1a3d8f",top:{bg:"#F9C50B",txt:"NEW YORK"},text:"ABC·1234"},"🇺🇸 미국 · 뉴욕","🇺🇸 USA · New York","노란빛 바탕 + NEW YORK = 뉴욕주(구형 골드 플레이트).");
T("pc-us-fl","platecode",28.6,-81.7,300,1100,{t:"plate",bg:"#fff",fg:"#1a5c2a",top:{bg:"#fff",txt:"FLORIDA"},text:"ABC·D12"},"🇺🇸 미국 · 플로리다","🇺🇸 USA · Florida","가운데 오렌지 그림 + FLORIDA = 플로리다.");
T("pc-ca-on","platecode",44.5,-79.5,350,1200,{t:"plate",bg:"#fff",fg:"#1a3d8f",top:{bg:"#fff",txt:"ONTARIO"},text:"ABCD·123"},"🇨🇦 캐나다 · 온타리오","🇨🇦 Canada · Ontario","파란 글자 + ONTARIO + 왕관 = 토론토가 있는 온타리오주.");
T("pc-ca-qc","platecode",47.5,-72.0,400,1300,{t:"plate",bg:"#fff",fg:"#1a3d8f",top:{bg:"#fff",txt:"Québec"},text:"A12 BCD",sub:"Je me souviens"},"🇨🇦 캐나다 · 퀘벡","🇨🇦 Canada · Québec","'Je me souviens' 문구 = 프랑스어권 퀘벡주.");
T("pc-br-sp","platecode",-23.55,-46.63,200,900,{t:"plate",bg:"#c9c9c9",fg:"#111",top:{bg:"#c9c9c9",txt:"SÃO PAULO · SP"},text:"ABC·1234"},"🇧🇷 브라질 · 상파울루","🇧🇷 Brazil · São Paulo","구형 회색 번호판 상단의 도시명. SÃO PAULO = 상파울루.");
T("pc-br-rj","platecode",-22.9,-43.2,200,900,{t:"plate",bg:"#c9c9c9",fg:"#111",top:{bg:"#c9c9c9",txt:"RIO DE JANEIRO · RJ"},text:"ABC·1234"},"🇧🇷 브라질 · 리우","🇧🇷 Brazil · Rio","RIO DE JANEIRO = 리우데자네이루.");
T("pc-za-gp","platecode",-26.1,28.2,150,800,{t:"plate",bg:"#fff",fg:"#111",text:"BB 12 CD GP",hl:"GP"},"🇿🇦 남아공 · 하우텡","🇿🇦 South Africa · Gauteng","남아공 번호판 끝 주 코드. GP = 요하네스버그·프리토리아의 하우텡.");
T("pc-za-wc","platecode",-33.5,19.5,180,900,{t:"plate",bg:"#fff",fg:"#111",text:"CA 123-456",hl:"CA"},"🇿🇦 남아공 · 웨스턴케이프","🇿🇦 South Africa · W. Cape","CA(케이프타운) 등 C로 시작 = 웨스턴케이프.");
T("pc-za-zn","platecode",-29.2,30.5,180,900,{t:"plate",bg:"#fff",fg:"#111",text:"ND 123-456",hl:"ND"},"🇿🇦 남아공 · 콰줄루나탈","🇿🇦 South Africa · KZN","N으로 시작(ND=더반) = 콰줄루나탈주.");

/* ── 언어 · 문자 ── */
T("lg-ua","lang",49.4,31.2,450,1400,{t:"lang",style:"blue",big:"вулиця Шевченка"},"🇺🇦 우크라이나","🇺🇦 Ukraine","키릴 문자 중 ї, є, и가 보이고 '거리'가 вулиця면 우크라이나입니다.");
T("lg-by","lang",53.7,27.9,350,1200,{t:"lang",style:"blue",big:"вуліца Леніна"},"🇧🇾 벨라루스","🇧🇾 Belarus","ў(우 위에 반달)가 있으면 벨라루스어. вуліца 표기도 특징입니다.");
T("lg-bg","lang",42.7,25.3,300,1100,{t:"lang",style:"blue",big:"улица Шипка · български"},"🇧🇬 불가리아","🇧🇬 Bulgaria","ъ가 자주 등장하는 키릴 문자는 불가리아어입니다(улица는 러시아와 동일하니 주의).");
T("lg-rs","lang",44.2,20.9,280,1000,{t:"lang",style:"blue",big:"Улица Његошева"},"🇷🇸 세르비아","🇷🇸 Serbia","ђ, ћ, љ, њ, џ가 보이면 세르비아 키릴입니다(라틴 문자와 혼용).");
T("lg-mk","lang",41.6,21.7,200,900,{t:"lang",style:"blue",big:"улица Македонија · ѓ ќ ѕ"},"🇲🇰 북마케도니아","🇲🇰 N. Macedonia","ѓ, ќ, ѕ, ј가 보이면 북마케도니아 키릴입니다.");
T("lg-mn","lang",47.9,106.9,600,1600,{t:"lang",style:"card",big:"Энх тайвны өргөн чөлөө",sub:"гудамж"},"🇲🇳 몽골","🇲🇳 Mongolia","키릴에 ө, ү가 많이 섞이면 몽골어입니다.");
T("lg-kz","lang",48.0,66.9,700,1800,{t:"lang",style:"card",big:"Абай көшесі",sub:"ә қ ң ұ ү"},"🇰🇿 카자흐스탄","🇰🇿 Kazakhstan","ә, қ, ң, ұ 같은 확장 키릴 + көшесі(거리)면 카자흐스탄입니다.");
T("lg-kg","lang",41.4,74.6,300,1100,{t:"lang",style:"card",big:"Чүй көчөсү",sub:"ң ө ү"},"🇰🇬 키르기스스탄","🇰🇬 Kyrgyzstan","ң, ө, ү + көчөсү(거리)면 키르기스스탄입니다.");
T("lg-gr","lang",39.1,22.9,350,1200,{t:"lang",style:"blue",big:"Οδός Ερμού"},"🇬🇷 그리스","🇬🇷 Greece","그리스 문자 + Οδός(거리)는 그리스(키프로스도 가능).");
T("lg-ge","lang",42.0,43.5,250,1000,{t:"lang",style:"card",big:"რუსთაველის ქუჩა"},"🇬🇪 조지아","🇬🇪 Georgia","동글동글한 독자 문자는 조지아 문자입니다.");
T("lg-am","lang",40.3,44.9,200,900,{t:"lang",style:"card",big:"Աբովյան փողոց"},"🇦🇲 아르메니아","🇦🇲 Armenia","라틴도 키릴도 아닌 각진 독자 문자는 아르메니아 문자입니다.");
T("lg-il","lang",31.5,34.9,180,800,{t:"lang",style:"card",big:"רחוב הרצל"},"🇮🇱 이스라엘","🇮🇱 Israel","오른쪽→왼쪽 히브리 문자는 이스라엘입니다.");
T("lg-th","lang",15.5,101.0,450,1400,{t:"lang",style:"card",big:"ถนนสุขุมวิท"},"🇹🇭 태국","🇹🇭 Thailand","글자 위 작은 동그라미가 '머리'처럼 달린 문자는 태국어입니다.");
T("lg-la","lang",18.2,104.9,350,1200,{t:"lang",style:"card",big:"ຖະໜົນລ້ານຊ້າງ"},"🇱🇦 라오스","🇱🇦 Laos","태국어와 비슷하지만 더 둥글둥글하면 라오어입니다.");
T("lg-kh","lang",12.6,104.9,300,1100,{t:"lang",style:"card",big:"ផ្លូវព្រះមុនីវង្ស"},"🇰🇭 캄보디아","🇰🇭 Cambodia","아래위로 겹겹이 쌓이는 화려한 문자는 크메르어(캄보디아)입니다.");
T("lg-lk","lang",7.5,80.7,200,900,{t:"lang",style:"card",big:"ගාලු පාර"},"🇱🇰 스리랑카","🇱🇰 Sri Lanka","동글동글 말린 문자는 싱할라어(스리랑카)입니다.");
T("lg-bd","lang",23.8,90.3,250,1000,{t:"lang",style:"card",big:"ঢাকা সড়ক"},"🇧🇩 방글라데시","🇧🇩 Bangladesh","위쪽 가로선에 매달린 벵골 문자 + 인도 서벵골도 가능하지만 방글라데시가 우선입니다.");
T("lg-in","lang",26.5,80.5,500,1500,{t:"lang",style:"card",big:"मुख्य मार्ग"},"🇮🇳 인도","🇮🇳 India","가로 막대에 글자가 매달린 데바나가리 문자는 힌디어(북인도)입니다.");
T("lg-vn","lang",16.0,107.8,400,1300,{t:"lang",style:"blue",big:"Đường Lê Lợi"},"🇻🇳 베트남","🇻🇳 Vietnam","성조 기호가 잔뜩 붙은 라틴 문자(Đ, ườ)는 베트남어입니다.");
T("lg-jp","lang",36.2,138.3,450,1400,{t:"lang",style:"card",big:"さくら通り"},"🇯🇵 일본","🇯🇵 Japan","히라가나·가타카나가 섞여 있으면 일본입니다.");
T("lg-kr","lang",36.5,127.8,300,900,{t:"lang",style:"blue",big:"세종대로"},"🇰🇷 대한민국","🇰🇷 South Korea","한글이 보이면 대한민국입니다.");
T("lg-tw","lang",23.8,121.0,200,900,{t:"lang",style:"blue",big:"中山路 Zhongshan Rd."},"🇹🇼 대만","🇹🇼 Taiwan","번체 한자 + 병음 로마자 병기의 도로명은 대만입니다(홍콩은 영국식 표기).");
T("lg-hk","lang",22.32,114.17,60,500,{t:"lang",style:"blue",big:"彌敦道 NATHAN ROAD"},"🇭🇰 홍콩","🇭🇰 Hong Kong","번체 한자 + 대문자 영어 도로명 병기는 홍콩입니다.");
T("lg-pt","lang",39.6,-8.0,300,1100,{t:"lang",style:"tile",big:"R. de Santa Catarina"},"🇵🇹 포르투갈","🇵🇹 Portugal","타일 느낌 표지판의 Rua(R.) 표기는 포르투갈. 브라질과 같은 언어이니 통행 방향·번호판으로 재확인하세요.");
T("lg-br","lang",-14,-52,900,2200,{t:"lang",style:"blue",big:"Rua XV de Novembro"},"🇧🇷 브라질","🇧🇷 Brazil","파란 표지판의 포르투갈어 도로명(Rua/Avenida)은 브라질에서 흔합니다.");
T("lg-es","lang",40.2,-3.5,380,1200,{t:"lang",style:"card",big:"Calle Mayor"},"🇪🇸 스페인","🇪🇸 Spain","Calle(까예)는 스페인. 중남미도 같은 표기이므로 주변 단서와 조합하세요.");
T("lg-fr","lang",46.6,2.4,350,1200,{t:"lang",style:"blue",big:"Rue de la République"},"🇫🇷 프랑스","🇫🇷 France","Rue = 프랑스(벨기에 왈롱·퀘벡도 가능).");
T("lg-it","lang",42.8,12.5,380,1200,{t:"lang",style:"card",big:"Via Roma"},"🇮🇹 이탈리아","🇮🇹 Italy","Via = 이탈리아입니다.");
T("lg-de","lang",51.1,10.4,350,1200,{t:"lang",style:"blue",big:"Hauptstraße"},"🇩🇪 독일","🇩🇪 Germany","straße(ß!)는 독일입니다. 스위스는 ß 대신 ss(strasse)를 씁니다.");
T("lg-nl","lang",52.2,5.3,180,800,{t:"lang",style:"blue",big:"Kerkstraat"},"🇳🇱 네덜란드","🇳🇱 Netherlands","-straat, ij, 겹모음(aa·ee)은 네덜란드어입니다.");
T("lg-dk","lang",55.9,9.8,180,800,{t:"lang",style:"blue",big:"Søndergade"},"🇩🇰 덴마크","🇩🇰 Denmark","æ·ø + -gade/-vej는 덴마크입니다(노르웨이도 æø를 쓰니 -gade가 힌트).");
T("lg-no","lang",61.5,9.0,400,1300,{t:"lang",style:"blue",big:"Storgata · Kirkeveien"},"🇳🇴 노르웨이","🇳🇴 Norway","æ·ø + -gata/-veien은 노르웨이입니다.");
T("lg-se","lang",62.0,15.0,450,1400,{t:"lang",style:"blue",big:"Storgatan · vägen"},"🇸🇪 스웨덴","🇸🇪 Sweden","ä·ö(점 두 개) + -gatan/-vägen은 스웨덴입니다.");
T("lg-fi","lang",64.0,26.0,450,1400,{t:"lang",style:"blue",big:"Rantatie · katu"},"🇫🇮 핀란드","🇫🇮 Finland","겹모음(aa·ii) + -katu/-tie는 핀란드어입니다(스웨덴어 병기도 흔함).");
T("lg-is","lang",64.9,-18.6,250,1000,{t:"lang",style:"card",big:"Þjóðvegur 1"},"🇮🇸 아이슬란드","🇮🇸 Iceland","þ와 ð가 보이면 아이슬란드입니다.");
T("lg-ee","lang",58.7,25.5,160,700,{t:"lang",style:"blue",big:"Pärnu maantee"},"🇪🇪 에스토니아","🇪🇪 Estonia","õ + maantee/tänav는 에스토니아입니다(핀란드어와 닮았지만 õ가 결정타).");
T("lg-lv","lang",56.9,24.6,160,700,{t:"lang",style:"blue",big:"Brīvības iela"},"🇱🇻 라트비아","🇱🇻 Latvia","장음 기호(ā ē ī ū) + iela(거리)는 라트비아입니다.");
T("lg-lt","lang",55.3,23.9,180,800,{t:"lang",style:"blue",big:"Vilniaus gatvė"},"🇱🇹 리투아니아","🇱🇹 Lithuania","ė·ų + gatvė(거리)는 리투아니아입니다.");
T("lg-pl","lang",52.1,19.4,320,1100,{t:"lang",style:"blue",big:"ulica Polna"},"🇵🇱 폴란드","🇵🇱 Poland","ł·ż·ą·ę + ulica는 폴란드입니다.");
T("lg-cz","lang",49.8,15.4,220,900,{t:"lang",style:"card",big:"Nádražní · Dlouhá"},"🇨🇿 체코","🇨🇿 Czechia","ř·ě·ů는 체코어에만 있는 글자입니다.");
T("lg-sk","lang",48.7,19.7,200,900,{t:"lang",style:"card",big:"Hlavná ulica · ô ĺ"},"🇸🇰 슬로바키아","🇸🇰 Slovakia","ô·ĺ·ŕ가 보이면 체코가 아니라 슬로바키아입니다.");
T("lg-hu","lang",47.2,19.4,220,900,{t:"lang",style:"blue",big:"Fő utca"},"🇭🇺 헝가리","🇭🇺 Hungary","ő·ű(긴 움라우트) + utca(거리)는 헝가리 고유입니다.");
T("lg-ro","lang",45.9,24.9,320,1100,{t:"lang",style:"blue",big:"Strada Mihai Viteazul"},"🇷🇴 루마니아","🇷🇴 Romania","ă·â·ș·ț + Strada는 루마니아입니다.");
T("lg-si","lang",46.1,14.8,140,700,{t:"lang",style:"card",big:"Slovenska cesta"},"🇸🇮 슬로베니아","🇸🇮 Slovenia","cesta(도로)가 흔하면 슬로베니아입니다(크로아티아는 ulica가 우세).");
T("lg-al","lang",41.1,20.1,200,900,{t:"lang",style:"blue",big:"Rruga e Dibrës"},"🇦🇱 알바니아","🇦🇱 Albania","ë가 잔뜩 + Rruga(거리)는 알바니아입니다.");
T("lg-tr","lang",39.0,35.2,500,1400,{t:"lang",style:"blue",big:"Atatürk Caddesi"},"🇹🇷 튀르키예","🇹🇷 Türkiye","점 없는 ı, ğ, ş + Caddesi/Sokak은 튀르키예입니다.");
T("lg-wal","lang",52.2,-3.7,120,600,{t:"lang",style:"card",big:"Heol y Bont · Araf"},"🇬🇧 영국 · 웨일스","🇬🇧 UK · Wales","영어와 함께 Heol·Stryd·Araf(웨일스어)가 병기되면 영국 중에서도 웨일스입니다.");
T("lg-eus","lang",43.1,-2.6,100,600,{t:"lang",style:"card",big:"Kale Nagusia"},"🇪🇸 스페인 · 바스크","🇪🇸 Spain · Basque","kalea(거리), tx·k가 많은 낯선 언어는 스페인 북부 바스크 지방입니다.");
T("lg-cat","lang",41.7,1.8,150,700,{t:"lang",style:"card",big:"Carrer de Mallorca"},"🇪🇸 스페인 · 카탈루냐","🇪🇸 Spain · Catalonia","Calle 대신 Carrer면 바르셀로나가 있는 카탈루냐입니다.");

/* ── 도메인 ── */
function TD(id,lat,lng,r0,s,url,ako,aen,e){T(id,"tld",lat,lng,r0,s,{t:"tld",url},ako,aen,e);}
TD("td-ch",46.8,8.2,180,800,"www.bäckerei-alpen.ch","🇨🇭 스위스","🇨🇭 Switzerland","간판·차량의 .ch 도메인은 스위스입니다.");
TD("td-at",47.6,14.1,250,1000,"www.gasthaus-tirol.at","🇦🇹 오스트리아","🇦🇹 Austria",".at = 오스트리아. 독일어권이지만 .de와 구분하세요.");
TD("td-ie",53.3,-7.7,200,900,"www.dublinbakery.ie","🇮🇪 아일랜드","🇮🇪 Ireland",".ie = 아일랜드. 영어 간판 + 좌측통행과 조합됩니다.");
TD("td-co",4.6,-73.1,450,1400,"www.panaderia.com.co","🇨🇴 콜롬비아","🇨🇴 Colombia",".co는 회사가 아니라 콜롬비아 국가 도메인입니다.");
TD("td-si",46.1,14.8,140,700,"www.trgovina.si","🇸🇮 슬로베니아","🇸🇮 Slovenia",".si = 슬로베니아.");
TD("td-hr",45.4,16.3,250,1000,"www.pekara.hr","🇭🇷 크로아티아","🇭🇷 Croatia",".hr(Hrvatska) = 크로아티아.");
TD("td-rs",44.2,20.9,280,1000,"www.prodavnica.rs","🇷🇸 세르비아","🇷🇸 Serbia",".rs = 세르비아.");
TD("td-ba",44.2,17.8,200,900,"www.trgovina.ba","🇧🇦 보스니아","🇧🇦 Bosnia",".ba = 보스니아 헤르체고비나.");
TD("td-me",42.8,19.3,120,700,"www.prodavnica.me","🇲🇪 몬테네그로","🇲🇪 Montenegro",".me = 몬테네그로.");
TD("td-lu",49.8,6.1,60,500,"www.buttek.lu","🇱🇺 룩셈부르크","🇱🇺 Luxembourg",".lu = 룩셈부르크.");
TD("td-pe",-9.2,-75.0,500,1500,"www.panaderia.com.pe","🇵🇪 페루","🇵🇪 Peru",".pe = 페루.");
TD("td-ec",-1.8,-78.2,300,1100,"www.tienda.com.ec","🇪🇨 에콰도르","🇪🇨 Ecuador",".ec = 에콰도르.");
TD("td-uy",-32.6,-55.9,300,1100,"www.almacen.com.uy","🇺🇾 우루과이","🇺🇾 Uruguay",".uy = 우루과이.");
TD("td-bo",-16.7,-64.7,400,1300,"www.tienda.com.bo","🇧🇴 볼리비아","🇧🇴 Bolivia",".bo = 볼리비아.");
TD("td-gt",15.6,-90.3,200,900,"www.tienda.com.gt","🇬🇹 과테말라","🇬🇹 Guatemala",".gt = 과테말라.");
TD("td-kh",12.6,104.9,300,1100,"www.hotel.com.kh","🇰🇭 캄보디아","🇰🇭 Cambodia",".kh = 캄보디아.");
TD("td-lk",7.5,80.7,200,900,"www.hotel.lk","🇱🇰 스리랑카","🇱🇰 Sri Lanka",".lk = 스리랑카.");
TD("td-bd",23.8,90.3,250,1000,"www.shop.com.bd","🇧🇩 방글라데시","🇧🇩 Bangladesh",".bd = 방글라데시.");
TD("td-gh",7.9,-1.2,300,1100,"www.shop.com.gh","🇬🇭 가나","🇬🇭 Ghana",".gh = 가나.");
TD("td-tn",34.1,9.6,300,1100,"www.boutique.tn","🇹🇳 튀니지","🇹🇳 Tunisia",".tn = 튀니지(프랑스어+아랍어 병용 지역).");
TD("td-sn",14.5,-14.5,300,1100,"www.boutique.sn","🇸🇳 세네갈","🇸🇳 Senegal",".sn = 세네갈.");
TD("td-my",3.9,102.0,350,1000,"www.kedai.com.my","🇲🇾 말레이시아","🇲🇾 Malaysia",".my = 말레이시아(.mx 멕시코와 헷갈리지 마세요).");

/* ── 전화 지역번호 ── */
function TP(id,lat,lng,r0,s,num,sub,ako,aen,e){T(id,"phone",lat,lng,r0,s,{t:"phone",num,sub},ako,aen,e);}
TP("ph-212",40.75,-73.99,60,500,"(212) 555-0134","PIZZA · OPEN 24H","🇺🇸 미국 · 뉴욕시","🇺🇸 USA · NYC","지역번호 212(646·917)는 뉴욕 맨해튼입니다.");
TP("ph-020",51.5,-0.12,60,500,"020 7946 0523","MINICAB SERVICE","🇬🇧 영국 · 런던","🇬🇧 UK · London","020으로 시작하는 번호는 런던입니다.");
TP("ph-07",-21.5,145.5,500,1400,"(07) 4555 0192","PLUMBING","🇦🇺 호주 · 퀸즐랜드","🇦🇺 Australia · QLD","호주 지역번호 07 = 퀸즐랜드입니다(02 NSW, 03 VIC/TAS, 08 WA/SA).");
TP("ph-08",-26,122,900,2000,"(08) 9555 0147","OUTBACK TOURS","🇦🇺 호주 · 서호주/남호주","🇦🇺 Australia · WA/SA","08 = 서호주·남호주·노던테리토리입니다.");
TP("ph-fr04",44.5,5.5,300,1100,"04 92 55 01 88","BOULANGERIE","🇫🇷 프랑스 · 남동부","🇫🇷 France · Southeast","프랑스 번호 04 = 남동부(리옹·마르세유·니스 방면)입니다.");
TP("ph-fr02",47.6,-1.5,300,1100,"02 40 55 01 63","GARAGE AUTO","🇫🇷 프랑스 · 북서부","🇫🇷 France · Northwest","02 = 북서부(브르타뉴·루아르 방면)입니다.");
TP("ph-es93",41.6,1.9,120,700,"93 555 01 77","FARMACIA","🇪🇸 스페인 · 바르셀로나","🇪🇸 Spain · Barcelona","스페인 93 = 바르셀로나 권역(91은 마드리드).");

/* ── 표지판 ── */
T("sg-pare","sign",-15,-55,1200,2600,{t:"sign",kind:"stop",text:"PARE"},"🌎 남미 (브라질 등)","🌎 South America","'PARE' 정지 표지는 브라질·칠레·페루 등 포르투갈어·스페인어권 남미에서 씁니다(스페인·포르투갈 본토는 STOP).");
T("sg-alto","sign",23.6,-102.5,900,1800,{t:"sign",kind:"stop",text:"ALTO"},"🇲🇽 멕시코·중미","🇲🇽 Mexico · C. America","'ALTO' 정지 표지는 멕시코·중앙아메리카에서 씁니다.");
T("sg-arret","sign",47.5,-72.0,400,1200,{t:"sign",kind:"stop",text:"ARRÊT"},"🇨🇦 캐나다 · 퀘벡","🇨🇦 Canada · Québec","'ARRÊT' 정지 표지는 캐나다 퀘벡의 상징입니다(프랑스 본토는 STOP).");
T("sg-qif","sign",31.3,36.4,700,2200,{t:"sign",kind:"stop",text:"قف",sub:"STOP"},"🇯🇴 중동·북아프리카","🇯🇴 Middle East","아랍어 قف 병기 정지판은 요르단·UAE·튀니지 등 아랍권입니다.");
T("sg-us55","sign",39.8,-98.6,1200,2400,{t:"sign",kind:"speedus",text:"SPEED\nLIMIT\n55"},"🇺🇸 미국","🇺🇸 USA","미국 속도 표지는 흰 세로판에 'SPEED LIMIT'이라고 씁니다.");
T("sg-max50","sign",54,-100,1500,2800,{t:"sign",kind:"speedus",text:"MAXIMUM\n50"},"🇨🇦 캐나다","🇨🇦 Canada","캐나다 속도 표지는 'MAXIMUM'이라고 쓰는 점이 미국과 다릅니다.");
T("sg-warnY","sign",62,15,900,2400,{t:"sign",kind:"warn",bg:"#ffcf00"},"🇸🇪 스웨덴 등 노랑 표지 국가","🇸🇪 Sweden etc.","경고 삼각형 속이 노란색이면 스웨덴·핀란드·아이슬란드·폴란드·그리스·발칸 일부입니다. 목표는 스웨덴.");
T("sg-mwy-it","sign",44.5,11.3,350,1200,{t:"sign",kind:"motorway",bg:"#0a7a2f",lines:["ROMA","FIRENZE"],badge:"A1"},"🇮🇹 이탈리아","🇮🇹 Italy","이탈리아 고속도로 안내표지는 초록색 계열이고 이탈리아어 지명이 함께 나옵니다.");
T("sg-mwy-fr",  "sign",46.6,2.4,350,1200,{t:"sign",kind:"motorway",bg:"#0a3d91",lines:["PARIS","LYON"],badge:"A6"},"🇫🇷 프랑스","🇫🇷 France","프랑스 고속도로 안내표지는 파란색 계열이며 A로 시작하는 도로 번호가 흔합니다.");
T("sg-borne","sign",46.6,2.4,350,1200,{t:"sign",kind:"borne",text:"N7"},"🇫🇷 프랑스","🇫🇷 France","프랑스 국도의 빨간 머리 흰 돌 이정표(borne)는 프랑스 특유의 요소입니다.");
T("sg-kanga","sign",-25,134,900,2200,{t:"sign",kind:"kanga"},"🇦🇺 호주","🇦🇺 Australia","노란 마름모 바탕의 캥거루 경고 표지는 호주에서 흔합니다.");

/* ── 전봇대 ── */
T("po-ro","pole",45.9,24.9,320,1100,{t:"pole",kind:"holes"},"🇷🇴 루마니아","🇷🇴 Romania","루마니아 전봇대는 둥근 구멍이 사다리처럼 세로로 뚫린 콘크리트 기둥이 결정적 단서입니다. 상단에 짧은 금속 크로스암이 달리고, 헝가리 등 인접국에도 유사 형태가 있으니 루마니아어 표기와 함께 확인하세요.");
T("po-br","pole",-14,-52,900,2200,{t:"pole",kind:"concrete"},"🇧🇷 브라질","🇧🇷 Brazil","브라질 전봇대는 회색 콘크리트 기둥에 통신선까지 뒤엉킨 지저분한 전선 다발이 특징입니다. 원통형 변압기가 중간에 매달리고 기둥 아래에 광고 스티커가 흔합니다.");
T("po-jp","pole",36.2,138.3,450,1400,{t:"pole",kind:"guard"},"🇯🇵 일본","🇯🇵 Japan","일본 전봇대는 회색 콘크리트 원기둥에 아랫부분 노란 보호 커버, 세로형 광고판, 촘촘한 번호 표찰이 특징입니다. 전선 수가 많고 원통형 변압기가 높이 달립니다.");
T("po-us","pole",39.8,-98.6,1200,2400,{t:"pole",kind:"wood"},"🇺🇸 미국","🇺🇸 USA","미국 전봇대는 갈색 원목 기둥 + 가로 크로스암이 기본형입니다. 금속 태그와 스테이플 자국이 많고 통신선이 낮게 별도로 지나갑니다. 캐나다와 유사하므로 표지판으로 구분하세요.");

/* ── 도로 차선 ── */
T("rd-us","road",39.8,-98.6,1200,2600,{t:"road",center:["#f2b705","double"],edge:["#fff","solid"]},"🌎 아메리카 (미국 등)","🌎 Americas","미국은 중앙선이 노란색(추월금지 구간은 이중 실선), 가장자리선이 흰색입니다. 우측통행이며 차선폭이 넓은 편입니다.");
T("rd-no","road",61.5,9.0,400,1300,{t:"road",center:["#f2b705","dash"],edge:["#fff","solid"]},"🇳🇴 노르웨이","🇳🇴 Norway","노르웨이는 유럽에서 드물게 중앙선이 노란색입니다. 이웃한 스웨덴·핀란드는 흰색이므로 이것만으로도 구분됩니다.");
T("rd-ie","road",53.3,-7.7,250,1000,{t:"road",center:["#fff","dash"],edge:["#f2b705","dash"]},"🇮🇪 아일랜드","🇮🇪 Ireland","아일랜드는 좌측통행이며 가장자리선이 노란 점선인 것이 영국(흰 실선)과 다른 결정적 차이입니다.");
T("rd-uk","road",52.6,-1.5,420,1300,{t:"road",curb:true},"🇬🇧 영국","🇬🇧 UK","영국은 좌측통행이며 도로 가장자리를 따라 노란 단선·이중선(주차 규제)이 자주 보입니다. 중앙선은 흰색입니다.");

/* ── 구글카 ── */
T("cr-ke","car",0.2,37.9,450,1400,{t:"car",kind:"snorkel"},"🇰🇪 케냐","🇰🇪 Kenya","화면 구석에 검은 스노클(공기 흡입관)이 보이면 케냐 구글카입니다.");
T("cr-ng","car",9.1,8.7,500,1500,{t:"car",kind:"escort"},"🇳🇬 나이지리아","🇳🇬 Nigeria","경광등 달린 호위 트럭이 계속 따라오면 나이지리아입니다.");
T("cr-gh","car",7.9,-1.2,300,1100,{t:"car",kind:"rack"},"🇬🇭 가나","🇬🇭 Ghana","차 지붕의 검은 루프랙 바가 화면에 걸리면 가나 구글카입니다.");

/* ── 국기 ── */
function TF(id,lat,lng,r0,s,code,ako,aen,e){T(id,"flag",lat,lng,r0,s,{t:"flag",code},ako,aen,e);}
TF("fl-nl",52.2,5.3,180,800,"nl","🇳🇱 네덜란드","🇳🇱 Netherlands","빨-하-파 가로 3색. 룩셈부르크는 아래가 하늘색, 러시아는 하-파-빨 순서입니다.");
TF("fl-lu",49.8,6.1,60,500,"lu","🇱🇺 룩셈부르크","🇱🇺 Luxembourg","네덜란드와 닮았지만 아래 파랑이 더 밝은 하늘색이면 룩셈부르크입니다.");
TF("fl-id",-2.5,118,900,2200,"id","🇮🇩 인도네시아","🇮🇩 Indonesia","빨강 위·흰색 아래 2색기. 모나코와 같고 폴란드는 반대(흰 위·빨 아래)입니다.");
TF("fl-pl",52.1,19.4,320,1100,"pl","🇵🇱 폴란드","🇵🇱 Poland","흰색 위·빨강 아래면 폴란드입니다.");
TF("fl-ro",45.9,24.9,320,1100,"ro","🇷🇴 루마니아","🇷🇴 Romania","파-노-빨 세로 3색. 차드와 거의 같지만 스트리트뷰에선 대부분 루마니아입니다(몰도바는 문장 있음).");
TF("fl-ie",53.3,-7.7,200,900,"ie","🇮🇪 아일랜드","🇮🇪 Ireland","초-하-주 세로 3색. 코트디부아르는 주황이 깃대 쪽입니다.");
TF("fl-is",64.9,-18.6,250,1000,"is","🇮🇸 아이슬란드","🇮🇸 Iceland","파란 바탕 + 빨간 십자는 아이슬란드(노르웨이는 빨간 바탕 + 파란 십자).");
TF("fl-no",61.5,9.0,400,1300,"no","🇳🇴 노르웨이","🇳🇴 Norway","빨간 바탕에 흰 테두리 파란 십자는 노르웨이입니다.");
TF("fl-se",62.0,15.0,450,1400,"se","🇸🇪 스웨덴","🇸🇪 Sweden","파란 바탕 + 노란 십자는 스웨덴입니다.");
TF("fl-dk",55.9,9.8,180,800,"dk","🇩🇰 덴마크","🇩🇰 Denmark","빨간 바탕 + 흰 십자는 덴마크입니다.");
TF("fl-fi",64.0,26.0,450,1400,"fi","🇫🇮 핀란드","🇫🇮 Finland","흰 바탕 + 파란 십자는 핀란드입니다.");
TF("fl-au",-25.5,134.5,900,2200,"au","🇦🇺 호주","🇦🇺 Australia","유니언잭 + 큰 칠각별(연방별) + 흰 별들이면 호주. 뉴질랜드는 빨간 별 4개입니다.");
TF("fl-nz",-41.5,172.8,400,1300,"nz","🇳🇿 뉴질랜드","🇳🇿 New Zealand","유니언잭 + 빨간 별 4개는 뉴질랜드입니다.");
TF("fl-si",46.1,14.8,140,700,"si","🇸🇮 슬로베니아","🇸🇮 Slovenia","하-파-빨 + 산 그림 문장이면 슬로베니아입니다.");
TF("fl-sk",48.7,19.7,200,900,"sk","🇸🇰 슬로바키아","🇸🇰 Slovakia","하-파-빨 + 이중 십자 방패면 슬로바키아입니다.");
TF("fl-co",4.6,-73.1,450,1400,"co","🇨🇴 콜롬비아","🇨🇴 Colombia","노랑이 절반을 차지하는 노-파-빨. 문장이 없으면 콜롬비아입니다.");
TF("fl-ec",-1.8,-78.2,300,1100,"ec","🇪🇨 에콰도르","🇪🇨 Ecuador","콜롬비아와 같은 배색 + 가운데 콘도르 문장이면 에콰도르입니다.");
TF("fl-ar",-34.6,-64.0,600,1600,"ar","🇦🇷 아르헨티나","🇦🇷 Argentina","하늘-흰-하늘 + 태양 문양은 아르헨티나입니다.");
TF("fl-uy",-32.6,-55.9,300,1100,"uy","🇺🇾 우루과이","🇺🇾 Uruguay","흰·파 줄무늬 + 왼쪽 위 태양은 우루과이입니다.");
TF("fl-th",15.5,101.0,450,1400,"th","🇹🇭 태국","🇹🇭 Thailand","빨-하-파(굵은 파랑)-하-빨 가로줄은 태국. 코스타리카는 빨강이 가운데입니다.");
TF("fl-cr",9.9,-84.2,150,800,"cr","🇨🇷 코스타리카","🇨🇷 Costa Rica","파-하-빨(굵은 빨강)-하-파 순서면 코스타리카입니다.");
TF("fl-gr",39.1,22.9,350,1200,"gr","🇬🇷 그리스","🇬🇷 Greece","파란·흰 줄무늬 + 십자 칸톤은 그리스입니다.");
TF("fl-tr",39.0,35.2,500,1400,"tr","🇹🇷 튀르키예","🇹🇷 Türkiye","빨간 바탕 + 초승달과 별은 튀르키예입니다.");
TF("fl-my",3.9,102.0,350,1000,"my","🇲🇾 말레이시아","🇲🇾 Malaysia","미국과 닮은 줄무늬 + 초승달 칸톤이면 말레이시아입니다.");

/* ═══ 커먼즈 카테고리 매핑 (정확한 국가별 실사 카테고리) ═══
   여기 없는 트릭은 실사를 못 구하면 자동 제외됩니다. */

/* ═══════════ 새 단서: 우체통·소화전·버스정류장·가드레일·가로등·속도표지·횡단보도 ═══════════ */
T("bs-al","busstop",41.1,20.1,200,900,{t:"busstop"},"알바니아","Albania","알바니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-am","busstop",40.3,44.9,200,900,{t:"busstop"},"아르메니아","Armenia","아르메니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ar","busstop",-34.6,-64.0,600,1600,{t:"busstop"},"아르헨티나","Argentina","아르헨티나의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-at","busstop",47.6,14.1,250,1000,{t:"busstop"},"오스트리아","Austria","오스트리아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-au","busstop",-25.5,134.5,900,2200,{t:"busstop"},"호주","Australia","호주의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-az","busstop",40.3,47.7,250,1000,{t:"busstop"},"아제르바이잔","Azerbaijan","아제르바이잔의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-be","busstop",50.6,4.6,160,700,{t:"busstop"},"벨기에","Belgium","벨기에의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-bg","busstop",42.7,25.3,300,1100,{t:"busstop"},"불가리아","Bulgaria","불가리아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-br","busstop",-10.8,-52.9,900,2200,{t:"busstop"},"브라질","Brazil","브라질의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-by","busstop",53.7,27.9,350,1200,{t:"busstop"},"벨라루스","Belarus","벨라루스의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ca","busstop",56.0,-106.0,1500,2800,{t:"busstop"},"캐나다","Canada","캐나다의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ch","busstop",46.8,8.2,180,800,{t:"busstop"},"스위스","Switzerland","스위스의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-cl","busstop",-35.7,-71.5,400,1300,{t:"busstop"},"칠레","Chile","칠레의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-cn","busstop",35.0,105.0,900,2200,{t:"busstop"},"중국","China","중국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-co","busstop",4.6,-73.1,450,1400,{t:"busstop"},"콜롬비아","Colombia","콜롬비아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-cz","busstop",49.8,15.4,220,900,{t:"busstop"},"체코","Czechia","체코의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-de","busstop",51.1,10.4,350,1200,{t:"busstop"},"독일","Germany","독일의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-dk","busstop",55.9,9.8,180,800,{t:"busstop"},"덴마크","Denmark","덴마크의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ee","busstop",58.7,25.5,160,700,{t:"busstop"},"에스토니아","Estonia","에스토니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-eg","busstop",26.8,30.8,500,1500,{t:"busstop"},"이집트","Egypt","이집트의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-es","busstop",40.2,-3.5,380,1200,{t:"busstop"},"스페인","Spain","스페인의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-fi","busstop",64.0,26.0,450,1400,{t:"busstop"},"핀란드","Finland","핀란드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-fr","busstop",46.6,2.4,350,1200,{t:"busstop"},"프랑스","France","프랑스의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ge","busstop",42.0,43.5,250,1000,{t:"busstop"},"조지아","Georgia","조지아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-gh","busstop",7.9,-1.2,300,1100,{t:"busstop"},"가나","Ghana","가나의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-gr","busstop",39.1,22.9,350,1200,{t:"busstop"},"그리스","Greece","그리스의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-hr","busstop",45.4,16.3,250,1000,{t:"busstop"},"크로아티아","Croatia","크로아티아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-hu","busstop",47.2,19.4,220,900,{t:"busstop"},"헝가리","Hungary","헝가리의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-id","busstop",-2.5,118.0,900,2200,{t:"busstop"},"인도네시아","Indonesia","인도네시아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ie","busstop",53.3,-7.7,200,900,{t:"busstop"},"아일랜드","Ireland","아일랜드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-il","busstop",31.5,34.9,180,800,{t:"busstop"},"이스라엘","Israel","이스라엘의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-in","busstop",22.5,79.0,700,1800,{t:"busstop"},"인도","India","인도의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-is","busstop",64.9,-18.6,250,1000,{t:"busstop"},"아이슬란드","Iceland","아이슬란드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-it","busstop",42.8,12.5,380,1200,{t:"busstop"},"이탈리아","Italy","이탈리아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-jp","busstop",36.2,138.3,450,1400,{t:"busstop"},"일본","Japan","일본의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ke","busstop",0.2,37.9,450,1400,{t:"busstop"},"케냐","Kenya","케냐의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-kr","busstop",36.5,127.8,300,900,{t:"busstop"},"대한민국","South Korea","대한민국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-kz","busstop",48.0,66.9,700,1800,{t:"busstop"},"카자흐스탄","Kazakhstan","카자흐스탄의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-lt","busstop",55.3,23.9,180,800,{t:"busstop"},"리투아니아","Lithuania","리투아니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-lu","busstop",49.8,6.1,60,500,{t:"busstop"},"룩셈부르크","Luxembourg","룩셈부르크의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-lv","busstop",56.9,24.6,160,700,{t:"busstop"},"라트비아","Latvia","라트비아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ma","busstop",31.8,-7.1,400,1300,{t:"busstop"},"모로코","Morocco","모로코의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-mx","busstop",23.6,-102.5,600,1600,{t:"busstop"},"멕시코","Mexico","멕시코의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-my","busstop",3.9,102.0,350,1000,{t:"busstop"},"말레이시아","Malaysia","말레이시아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ng","busstop",9.1,8.7,500,1500,{t:"busstop"},"나이지리아","Nigeria","나이지리아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-nl","busstop",52.2,5.3,180,800,{t:"busstop"},"네덜란드","Netherlands","네덜란드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-no","busstop",61.5,9.0,400,1300,{t:"busstop"},"노르웨이","Norway","노르웨이의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-nz","busstop",-41.5,172.8,400,1300,{t:"busstop"},"뉴질랜드","New Zealand","뉴질랜드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-pe","busstop",-9.2,-75.0,500,1500,{t:"busstop"},"페루","Peru","페루의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ph","busstop",12.8,121.8,400,1300,{t:"busstop"},"필리핀","Philippines","필리핀의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-pl","busstop",52.1,19.4,320,1100,{t:"busstop"},"폴란드","Poland","폴란드의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-pt","busstop",39.6,-8.0,220,900,{t:"busstop"},"포르투갈","Portugal","포르투갈의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ro","busstop",45.9,24.9,320,1100,{t:"busstop"},"루마니아","Romania","루마니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-rs","busstop",44.2,20.9,280,1000,{t:"busstop"},"세르비아","Serbia","세르비아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ru","busstop",55.5,45.0,900,2000,{t:"busstop"},"러시아","Russia","러시아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-se","busstop",62.0,15.0,450,1400,{t:"busstop"},"스웨덴","Sweden","스웨덴의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-sg","busstop",1.35,103.82,30,400,{t:"busstop"},"싱가포르","Singapore","싱가포르의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-si","busstop",46.1,14.8,140,700,{t:"busstop"},"슬로베니아","Slovenia","슬로베니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-sk","busstop",48.7,19.7,200,900,{t:"busstop"},"슬로바키아","Slovakia","슬로바키아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-sn","busstop",14.5,-14.5,300,1100,{t:"busstop"},"세네갈","Senegal","세네갈의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-th","busstop",15.5,101.0,450,1400,{t:"busstop"},"태국","Thailand","태국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-tr","busstop",39.0,35.2,500,1400,{t:"busstop"},"튀르키예","Türkiye","튀르키예의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-tw","busstop",23.8,121.0,200,900,{t:"busstop"},"대만","Taiwan","대만의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-tz","busstop",-6.4,34.9,450,1400,{t:"busstop"},"탄자니아","Tanzania","탄자니아의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-ua","busstop",49.4,31.2,450,1400,{t:"busstop"},"우크라이나","Ukraine","우크라이나의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-uk","busstop",52.6,-1.5,420,1300,{t:"busstop"},"영국","United Kingdom","영국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-us","busstop",39.8,-98.6,1200,2400,{t:"busstop"},"미국","United States","미국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-uy","busstop",-32.6,-55.9,300,1100,{t:"busstop"},"우루과이","Uruguay","우루과이의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-vn","busstop",16.0,107.8,400,1300,{t:"busstop"},"베트남","Vietnam","베트남의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("bs-za","busstop",-29.0,25.0,500,1500,{t:"busstop"},"남아프리카 공화국","South Africa","남아프리카 공화국의 버스 정류장입니다. 정류장 표지판 모양과 색, 운영사 로고, 표기 언어가 단서입니다.");
T("cw-at","crossing",47.6,14.1,250,1000,{t:"crossing"},"오스트리아","Austria","오스트리아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-au","crossing",-25.5,134.5,900,2200,{t:"crossing"},"호주","Australia","호주의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-be","crossing",50.6,4.6,160,700,{t:"crossing"},"벨기에","Belgium","벨기에의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-bg","crossing",42.7,25.3,300,1100,{t:"crossing"},"불가리아","Bulgaria","불가리아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-by","crossing",53.7,27.9,350,1200,{t:"crossing"},"벨라루스","Belarus","벨라루스의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ca","crossing",56.0,-106.0,1500,2800,{t:"crossing"},"캐나다","Canada","캐나다 횡단보도 표지는 파란 사각 바탕에 흰 보행자 그림이 들어간 형태가 흔해 미국(노란 마름모)과 다릅니다.");
T("cw-ch","crossing",46.8,8.2,180,800,{t:"crossing"},"스위스","Switzerland","스위스의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-cz","crossing",49.8,15.4,220,900,{t:"crossing"},"체코","Czechia","체코의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ee","crossing",58.7,25.5,160,700,{t:"crossing"},"에스토니아","Estonia","에스토니아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-es","crossing",40.2,-3.5,380,1200,{t:"crossing"},"스페인","Spain","스페인의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-fr","crossing",46.6,2.4,350,1200,{t:"crossing"},"프랑스","France","프랑스의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-hr","crossing",45.4,16.3,250,1000,{t:"crossing"},"크로아티아","Croatia","크로아티아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-id","crossing",-2.5,118.0,900,2200,{t:"crossing"},"인도네시아","Indonesia","인도네시아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ie","crossing",53.3,-7.7,200,900,{t:"crossing"},"아일랜드","Ireland","아일랜드의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-il","crossing",31.5,34.9,180,800,{t:"crossing"},"이스라엘","Israel","이스라엘의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-in","crossing",22.5,79.0,700,1800,{t:"crossing"},"인도","India","인도의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-it","crossing",42.8,12.5,380,1200,{t:"crossing"},"이탈리아","Italy","이탈리아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-kr","crossing",36.5,127.8,300,900,{t:"crossing"},"대한민국","South Korea","대한민국의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-kz","crossing",48.0,66.9,700,1800,{t:"crossing"},"카자흐스탄","Kazakhstan","카자흐스탄의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-lv","crossing",56.9,24.6,160,700,{t:"crossing"},"라트비아","Latvia","라트비아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-my","crossing",3.9,102.0,350,1000,{t:"crossing"},"말레이시아","Malaysia","말레이시아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-nz","crossing",-41.5,172.8,400,1300,{t:"crossing"},"뉴질랜드","New Zealand","뉴질랜드의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ph","crossing",12.8,121.8,400,1300,{t:"crossing"},"필리핀","Philippines","필리핀의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-pl","crossing",52.1,19.4,320,1100,{t:"crossing"},"폴란드","Poland","폴란드의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-rs","crossing",44.2,20.9,280,1000,{t:"crossing"},"세르비아","Serbia","세르비아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ru","crossing",55.5,45.0,900,2000,{t:"crossing"},"러시아","Russia","러시아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-se","crossing",62.0,15.0,450,1400,{t:"crossing"},"스웨덴","Sweden","스웨덴의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-sg","crossing",1.35,103.82,30,400,{t:"crossing"},"싱가포르","Singapore","싱가포르의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-si","crossing",46.1,14.8,140,700,{t:"crossing"},"슬로베니아","Slovenia","슬로베니아의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-ua","crossing",49.4,31.2,450,1400,{t:"crossing"},"우크라이나","Ukraine","우크라이나의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("cw-us","crossing",39.8,-98.6,1200,2400,{t:"crossing"},"미국","United States","미국 횡단보도 표지는 노란색 또는 형광 연두색 마름모꼴에 보행자 그림이 있습니다.");
T("cw-za","crossing",-29.0,25.0,500,1500,{t:"crossing"},"남아프리카 공화국","South Africa","남아프리카 공화국의 횡단보도 표지입니다. 표지판 모양(사각·삼각·마름모)과 바탕색, 보행자 그림 형태가 나라마다 다릅니다.");
T("gr-at","guardrail",47.6,14.1,250,1000,{t:"guardrail"},"오스트리아","Austria","오스트리아의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-br","guardrail",-10.8,-52.9,900,2200,{t:"guardrail"},"브라질","Brazil","브라질의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-ca","guardrail",56.0,-106.0,1500,2800,{t:"guardrail"},"캐나다","Canada","캐나다의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-cn","guardrail",35.0,105.0,900,2200,{t:"guardrail"},"중국","China","중국의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-cz","guardrail",49.8,15.4,220,900,{t:"guardrail"},"체코","Czechia","체코의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-de","guardrail",51.1,10.4,350,1200,{t:"guardrail"},"독일","Germany","독일의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-es","guardrail",40.2,-3.5,380,1200,{t:"guardrail"},"스페인","Spain","스페인의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-fr","guardrail",46.6,2.4,350,1200,{t:"guardrail"},"프랑스","France","프랑스의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-jp","guardrail",36.2,138.3,450,1400,{t:"guardrail"},"일본","Japan","일본의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-pl","guardrail",52.1,19.4,320,1100,{t:"guardrail"},"폴란드","Poland","폴란드의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-pt","guardrail",39.6,-8.0,220,900,{t:"guardrail"},"포르투갈","Portugal","포르투갈의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-ru","guardrail",55.5,45.0,900,2000,{t:"guardrail"},"러시아","Russia","러시아의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-se","guardrail",62.0,15.0,450,1400,{t:"guardrail"},"스웨덴","Sweden","스웨덴의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-sk","guardrail",48.7,19.7,200,900,{t:"guardrail"},"슬로바키아","Slovakia","슬로바키아의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-tw","guardrail",23.8,121.0,200,900,{t:"guardrail"},"대만","Taiwan","대만의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-uk","guardrail",52.6,-1.5,420,1300,{t:"guardrail"},"영국","United Kingdom","영국의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-us","guardrail",39.8,-98.6,1200,2400,{t:"guardrail"},"미국","United States","미국의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("gr-za","guardrail",-29.0,25.0,500,1500,{t:"guardrail"},"남아프리카 공화국","South Africa","남아프리카 공화국의 가드레일입니다. 레일 단면 형태, 지지 기둥 모양, 반사판 색과 위치가 나라마다 다릅니다.");
T("hy-at","hydrant",47.6,14.1,250,1000,{t:"hydrant"},"오스트리아","Austria","오스트리아의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-au","hydrant",-25.5,134.5,900,2200,{t:"hydrant"},"호주","Australia","호주의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-ba","hydrant",44.2,17.8,200,900,{t:"hydrant"},"보스니아 헤르체고비나","Bosnia and Herzegovina","보스니아 헤르체고비나의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-be","hydrant",50.6,4.6,160,700,{t:"hydrant"},"벨기에","Belgium","벨기에의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-br","hydrant",-10.8,-52.9,900,2200,{t:"hydrant"},"브라질","Brazil","브라질의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-ch","hydrant",46.8,8.2,180,800,{t:"hydrant"},"스위스","Switzerland","스위스의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-cl","hydrant",-35.7,-71.5,400,1300,{t:"hydrant"},"칠레","Chile","칠레의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-cn","hydrant",35.0,105.0,900,2200,{t:"hydrant"},"중국","China","중국의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-co","hydrant",4.6,-73.1,450,1400,{t:"hydrant"},"콜롬비아","Colombia","콜롬비아의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-cz","hydrant",49.8,15.4,220,900,{t:"hydrant"},"체코","Czechia","체코의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-de","hydrant",51.1,10.4,350,1200,{t:"hydrant"},"독일","Germany","독일 소화전은 지하식이 많아 흰 바탕에 빨간 테두리의 'H' 안내판이 붙어 있습니다. 지상식은 빨간색입니다.");
T("hy-dk","hydrant",55.9,9.8,180,800,{t:"hydrant"},"덴마크","Denmark","덴마크의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-es","hydrant",40.2,-3.5,380,1200,{t:"hydrant"},"스페인","Spain","스페인의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-fr","hydrant",46.6,2.4,350,1200,{t:"hydrant"},"프랑스","France","프랑스의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-gr","hydrant",39.1,22.9,350,1200,{t:"hydrant"},"그리스","Greece","그리스의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-hu","hydrant",47.2,19.4,220,900,{t:"hydrant"},"헝가리","Hungary","헝가리의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-il","hydrant",31.5,34.9,180,800,{t:"hydrant"},"이스라엘","Israel","이스라엘의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-in","hydrant",22.5,79.0,700,1800,{t:"hydrant"},"인도","India","인도의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-is","hydrant",64.9,-18.6,250,1000,{t:"hydrant"},"아이슬란드","Iceland","아이슬란드의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-it","hydrant",42.8,12.5,380,1200,{t:"hydrant"},"이탈리아","Italy","이탈리아의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-jp","hydrant",36.2,138.3,450,1400,{t:"hydrant"},"일본","Japan","일본 소화전은 빨간색이 기본이며, 주변에 '消火栓' 한자 표지가 붙어 있습니다.");
T("hy-kr","hydrant",36.5,127.8,300,900,{t:"hydrant"},"대한민국","South Korea","대한민국의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-lu","hydrant",49.8,6.1,60,500,{t:"hydrant"},"룩셈부르크","Luxembourg","룩셈부르크의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-mx","hydrant",23.6,-102.5,600,1600,{t:"hydrant"},"멕시코","Mexico","멕시코의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-nl","hydrant",52.2,5.3,180,800,{t:"hydrant"},"네덜란드","Netherlands","네덜란드의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-no","hydrant",61.5,9.0,400,1300,{t:"hydrant"},"노르웨이","Norway","노르웨이의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-ph","hydrant",12.8,121.8,400,1300,{t:"hydrant"},"필리핀","Philippines","필리핀의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-pl","hydrant",52.1,19.4,320,1100,{t:"hydrant"},"폴란드","Poland","폴란드의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-pt","hydrant",39.6,-8.0,220,900,{t:"hydrant"},"포르투갈","Portugal","포르투갈의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-ru","hydrant",55.5,45.0,900,2000,{t:"hydrant"},"러시아","Russia","러시아의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-se","hydrant",62.0,15.0,450,1400,{t:"hydrant"},"스웨덴","Sweden","스웨덴의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-sg","hydrant",1.35,103.82,30,400,{t:"hydrant"},"싱가포르","Singapore","싱가포르의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-si","hydrant",46.1,14.8,140,700,{t:"hydrant"},"슬로베니아","Slovenia","슬로베니아의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-tr","hydrant",39.0,35.2,500,1400,{t:"hydrant"},"튀르키예","Türkiye","튀르키예의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-tw","hydrant",23.8,121.0,200,900,{t:"hydrant"},"대만","Taiwan","대만의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-ua","hydrant",49.4,31.2,450,1400,{t:"hydrant"},"우크라이나","Ukraine","우크라이나의 소화전입니다. 소화전 색깔과 형태(지상식·지하식), 주변 안내 표지판의 디자인과 언어로 나라를 좁히세요.");
T("hy-uk","hydrant",52.6,-1.5,420,1300,{t:"hydrant"},"영국","United Kingdom","영국 소화전은 대부분 지하식이라, 노란 바탕에 검은 'H' 글자가 적힌 표지판이 위치를 알려줍니다.");
T("hy-us","hydrant",39.8,-98.6,1200,2400,{t:"hydrant"},"미국","United States","미국 소화전은 지상식 기둥형이 흔하고 노랑·빨강·은색 등 색이 다양합니다. 오각형 개폐 너트가 특징입니다.");
T("pb-al","postbox",41.1,20.1,200,900,{t:"postbox"},"알바니아","Albania","알바니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-am","postbox",40.3,44.9,200,900,{t:"postbox"},"아르메니아","Armenia","아르메니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ar","postbox",-34.6,-64.0,600,1600,{t:"postbox"},"아르헨티나","Argentina","아르헨티나의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-at","postbox",47.6,14.1,250,1000,{t:"postbox"},"오스트리아","Austria","오스트리아 우체통은 노란색이며 'Post' 로고가 있습니다. 독일과 비슷하니 표기·로고 차이를 확인하세요.");
T("pb-au","postbox",-25.5,134.5,900,2200,{t:"postbox"},"호주","Australia","호주 우체통은 빨간색이 기본이며 'Australia Post' 로고가 있습니다. 노란색은 특급용입니다.");
T("pb-ba","postbox",44.2,17.8,200,900,{t:"postbox"},"보스니아 헤르체고비나","Bosnia and Herzegovina","보스니아 헤르체고비나의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-be","postbox",50.6,4.6,160,700,{t:"postbox"},"벨기에","Belgium","벨기에의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-bg","postbox",42.7,25.3,300,1100,{t:"postbox"},"불가리아","Bulgaria","불가리아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-br","postbox",-10.8,-52.9,900,2200,{t:"postbox"},"브라질","Brazil","브라질 우체통은 노란색이며 'Correios' 로고가 있습니다.");
T("pb-by","postbox",53.7,27.9,350,1200,{t:"postbox"},"벨라루스","Belarus","벨라루스의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ca","postbox",56.0,-106.0,1500,2800,{t:"postbox"},"캐나다","Canada","캐나다 우체통은 빨간색이며 'Canada Post / Postes Canada' 영어·프랑스어 병기가 특징입니다.");
T("pb-ch","postbox",46.8,8.2,180,800,{t:"postbox"},"스위스","Switzerland","스위스 우체통은 노란색이며 'Die Post / La Poste / La Posta' 3개 언어 표기가 붙기도 합니다.");
T("pb-cl","postbox",-35.7,-71.5,400,1300,{t:"postbox"},"칠레","Chile","칠레의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-cn","postbox",35.0,105.0,900,2200,{t:"postbox"},"중국","China","중국 우체통은 초록색이며 '中国邮政' 간체자 표기가 있습니다.");
T("pb-co","postbox",4.6,-73.1,450,1400,{t:"postbox"},"콜롬비아","Colombia","콜롬비아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-cz","postbox",49.8,15.4,220,900,{t:"postbox"},"체코","Czechia","체코 우체통은 주황색이며 'Česká pošta' 표기가 있습니다.");
T("pb-de","postbox",51.1,10.4,350,1200,{t:"postbox"},"독일","Germany","독일 우체통은 노란색이며 검은 뿔나팔 모양의 'Deutsche Post' 로고가 있습니다.");
T("pb-dk","postbox",55.9,9.8,180,800,{t:"postbox"},"덴마크","Denmark","덴마크의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ee","postbox",58.7,25.5,160,700,{t:"postbox"},"에스토니아","Estonia","에스토니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-eg","postbox",26.8,30.8,500,1500,{t:"postbox"},"이집트","Egypt","이집트의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-es","postbox",40.2,-3.5,380,1200,{t:"postbox"},"스페인","Spain","스페인 우체통은 노란색이며 왕관과 뿔나팔이 그려진 'Correos' 로고가 있습니다.");
T("pb-fi","postbox",64.0,26.0,450,1400,{t:"postbox"},"핀란드","Finland","핀란드의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-fr","postbox",46.6,2.4,350,1200,{t:"postbox"},"프랑스","France","프랑스 우체통은 노란색이며 'La Poste' 로고가 붙어 있습니다.");
T("pb-gr","postbox",39.1,22.9,350,1200,{t:"postbox"},"그리스","Greece","그리스 우체통은 노란색이며 'ΕΛΤΑ' 그리스 문자 표기가 있습니다.");
T("pb-hr","postbox",45.4,16.3,250,1000,{t:"postbox"},"크로아티아","Croatia","크로아티아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-hu","postbox",47.2,19.4,220,900,{t:"postbox"},"헝가리","Hungary","헝가리의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ie","postbox",53.3,-7.7,200,900,{t:"postbox"},"아일랜드","Ireland","아일랜드 우체통은 초록색이며 'An Post'와 'Post' 표기가 있습니다. 영국의 빨간 우체통과 확실히 구분됩니다.");
T("pb-il","postbox",31.5,34.9,180,800,{t:"postbox"},"이스라엘","Israel","이스라엘의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-in","postbox",22.5,79.0,700,1800,{t:"postbox"},"인도","India","인도 우체통은 빨간색이며 'India Post' 표기와 힌디어가 함께 쓰이기도 합니다.");
T("pb-is","postbox",64.9,-18.6,250,1000,{t:"postbox"},"아이슬란드","Iceland","아이슬란드의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-it","postbox",42.8,12.5,380,1200,{t:"postbox"},"이탈리아","Italy","이탈리아 우체통은 빨간색이 대표적이며 'Poste Italiane' 표기가 있습니다.");
T("pb-jp","postbox",36.2,138.3,450,1400,{t:"postbox"},"일본","Japan","일본 우체통은 빨간색이며 '〒' 마크가 있습니다. 투입구가 둘인 사각형 우체통도 흔합니다.");
T("pb-kr","postbox",36.5,127.8,300,900,{t:"postbox"},"대한민국","South Korea","한국 우체통은 빨간색이며 제비 모양 우정 로고와 한글 표기가 있습니다.");
T("pb-lt","postbox",55.3,23.9,180,800,{t:"postbox"},"리투아니아","Lithuania","리투아니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-lu","postbox",49.8,6.1,60,500,{t:"postbox"},"룩셈부르크","Luxembourg","룩셈부르크의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ma","postbox",31.8,-7.1,400,1300,{t:"postbox"},"모로코","Morocco","모로코의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-mx","postbox",23.6,-102.5,600,1600,{t:"postbox"},"멕시코","Mexico","멕시코의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-my","postbox",3.9,102.0,350,1000,{t:"postbox"},"말레이시아","Malaysia","말레이시아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-nl","postbox",52.2,5.3,180,800,{t:"postbox"},"네덜란드","Netherlands","네덜란드 우체통은 주황빛 빨간색이며 'PostNL' 로고가 있습니다.");
T("pb-no","postbox",61.5,9.0,400,1300,{t:"postbox"},"노르웨이","Norway","노르웨이의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-np","postbox",28.3,84.1,200,900,{t:"postbox"},"네팔","Nepal","네팔의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-nz","postbox",-41.5,172.8,400,1300,{t:"postbox"},"뉴질랜드","New Zealand","뉴질랜드의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-pl","postbox",52.1,19.4,320,1100,{t:"postbox"},"폴란드","Poland","폴란드의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-pt","postbox",39.6,-8.0,220,900,{t:"postbox"},"포르투갈","Portugal","포르투갈 우체통은 빨간색이며 'CTT Correios' 표기가 있습니다. 스페인(노랑)과 색으로 구분됩니다.");
T("pb-ro","postbox",45.9,24.9,320,1100,{t:"postbox"},"루마니아","Romania","루마니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-rs","postbox",44.2,20.9,280,1000,{t:"postbox"},"세르비아","Serbia","세르비아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-ru","postbox",55.5,45.0,900,2000,{t:"postbox"},"러시아","Russia","러시아 우체통은 파란색이며 'Почта России' 표기가 있습니다.");
T("pb-se","postbox",62.0,15.0,450,1400,{t:"postbox"},"스웨덴","Sweden","스웨덴의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-sg","postbox",1.35,103.82,30,400,{t:"postbox"},"싱가포르","Singapore","싱가포르의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-si","postbox",46.1,14.8,140,700,{t:"postbox"},"슬로베니아","Slovenia","슬로베니아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-sk","postbox",48.7,19.7,200,900,{t:"postbox"},"슬로바키아","Slovakia","슬로바키아의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-th","postbox",15.5,101.0,450,1400,{t:"postbox"},"태국","Thailand","태국의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-tn","postbox",34.1,9.6,300,1100,{t:"postbox"},"튀니지","Tunisia","튀니지의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-tr","postbox",39.0,35.2,500,1400,{t:"postbox"},"튀르키예","Türkiye","튀르키예 우체통은 노란색이며 'PTT' 로고가 있습니다.");
T("pb-tw","postbox",23.8,121.0,200,900,{t:"postbox"},"대만","Taiwan","대만 우체통은 빨간색과 초록색 두 개가 나란히 있는 경우가 많습니다(용도별 구분). 번체 한자 표기를 확인하세요.");
T("pb-ua","postbox",49.4,31.2,450,1400,{t:"postbox"},"우크라이나","Ukraine","우크라이나의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-uk","postbox",52.6,-1.5,420,1300,{t:"postbox"},"영국","United Kingdom","영국 우체통은 빨간색 원통형(필러 박스)이 대표적이며, 국왕 문장과 'Royal Mail' 표기가 붙어 있습니다.");
T("pb-us","postbox",39.8,-98.6,1200,2400,{t:"postbox"},"미국","United States","미국 우체통(USPS 수거함)은 파란색 상자형이며 독수리 로고와 'U.S. Mail' 표기가 있습니다.");
T("pb-uy","postbox",-32.6,-55.9,300,1100,{t:"postbox"},"우루과이","Uruguay","우루과이의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-vn","postbox",16.0,107.8,400,1300,{t:"postbox"},"베트남","Vietnam","베트남의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("pb-za","postbox",-29.0,25.0,500,1500,{t:"postbox"},"남아프리카 공화국","South Africa","남아프리카 공화국의 우체통입니다. 우체통 색깔, 우정 기관 로고와 표기 언어가 나라를 구분하는 핵심 단서입니다.");
T("sl-am","streetlight",40.3,44.9,200,900,{t:"streetlight"},"아르메니아","Armenia","아르메니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ar","streetlight",-34.6,-64.0,600,1600,{t:"streetlight"},"아르헨티나","Argentina","아르헨티나의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-at","streetlight",47.6,14.1,250,1000,{t:"streetlight"},"오스트리아","Austria","오스트리아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-au","streetlight",-25.5,134.5,900,2200,{t:"streetlight"},"호주","Australia","호주의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-az","streetlight",40.3,47.7,250,1000,{t:"streetlight"},"아제르바이잔","Azerbaijan","아제르바이잔의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ba","streetlight",44.2,17.8,200,900,{t:"streetlight"},"보스니아 헤르체고비나","Bosnia and Herzegovina","보스니아 헤르체고비나의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-be","streetlight",50.6,4.6,160,700,{t:"streetlight"},"벨기에","Belgium","벨기에의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-bg","streetlight",42.7,25.3,300,1100,{t:"streetlight"},"불가리아","Bulgaria","불가리아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-bo","streetlight",-16.7,-64.7,400,1300,{t:"streetlight"},"볼리비아","Bolivia","볼리비아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-br","streetlight",-10.8,-52.9,900,2200,{t:"streetlight"},"브라질","Brazil","브라질의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-by","streetlight",53.7,27.9,350,1200,{t:"streetlight"},"벨라루스","Belarus","벨라루스의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ca","streetlight",56.0,-106.0,1500,2800,{t:"streetlight"},"캐나다","Canada","캐나다의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ch","streetlight",46.8,8.2,180,800,{t:"streetlight"},"스위스","Switzerland","스위스의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-cl","streetlight",-35.7,-71.5,400,1300,{t:"streetlight"},"칠레","Chile","칠레의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-cn","streetlight",35.0,105.0,900,2200,{t:"streetlight"},"중국","China","중국의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-co","streetlight",4.6,-73.1,450,1400,{t:"streetlight"},"콜롬비아","Colombia","콜롬비아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-cz","streetlight",49.8,15.4,220,900,{t:"streetlight"},"체코","Czechia","체코의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-de","streetlight",51.1,10.4,350,1200,{t:"streetlight"},"독일","Germany","독일의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-dk","streetlight",55.9,9.8,180,800,{t:"streetlight"},"덴마크","Denmark","덴마크의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ec","streetlight",-1.8,-78.2,300,1100,{t:"streetlight"},"에콰도르","Ecuador","에콰도르의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ee","streetlight",58.7,25.5,160,700,{t:"streetlight"},"에스토니아","Estonia","에스토니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-eg","streetlight",26.8,30.8,500,1500,{t:"streetlight"},"이집트","Egypt","이집트의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-es","streetlight",40.2,-3.5,380,1200,{t:"streetlight"},"스페인","Spain","스페인의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-fi","streetlight",64.0,26.0,450,1400,{t:"streetlight"},"핀란드","Finland","핀란드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-fr","streetlight",46.6,2.4,350,1200,{t:"streetlight"},"프랑스","France","프랑스의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ge","streetlight",42.0,43.5,250,1000,{t:"streetlight"},"조지아","Georgia","조지아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-gr","streetlight",39.1,22.9,350,1200,{t:"streetlight"},"그리스","Greece","그리스의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-hr","streetlight",45.4,16.3,250,1000,{t:"streetlight"},"크로아티아","Croatia","크로아티아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-hu","streetlight",47.2,19.4,220,900,{t:"streetlight"},"헝가리","Hungary","헝가리의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-id","streetlight",-2.5,118.0,900,2200,{t:"streetlight"},"인도네시아","Indonesia","인도네시아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ie","streetlight",53.3,-7.7,200,900,{t:"streetlight"},"아일랜드","Ireland","아일랜드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-il","streetlight",31.5,34.9,180,800,{t:"streetlight"},"이스라엘","Israel","이스라엘의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-in","streetlight",22.5,79.0,700,1800,{t:"streetlight"},"인도","India","인도의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-is","streetlight",64.9,-18.6,250,1000,{t:"streetlight"},"아이슬란드","Iceland","아이슬란드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-it","streetlight",42.8,12.5,380,1200,{t:"streetlight"},"이탈리아","Italy","이탈리아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-jp","streetlight",36.2,138.3,450,1400,{t:"streetlight"},"일본","Japan","일본의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-kr","streetlight",36.5,127.8,300,900,{t:"streetlight"},"대한민국","South Korea","대한민국의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-lt","streetlight",55.3,23.9,180,800,{t:"streetlight"},"리투아니아","Lithuania","리투아니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-lu","streetlight",49.8,6.1,60,500,{t:"streetlight"},"룩셈부르크","Luxembourg","룩셈부르크의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-lv","streetlight",56.9,24.6,160,700,{t:"streetlight"},"라트비아","Latvia","라트비아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ma","streetlight",31.8,-7.1,400,1300,{t:"streetlight"},"모로코","Morocco","모로코의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-mk","streetlight",41.6,21.7,200,900,{t:"streetlight"},"북마케도니아","North Macedonia","북마케도니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-mx","streetlight",23.6,-102.5,600,1600,{t:"streetlight"},"멕시코","Mexico","멕시코의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-my","streetlight",3.9,102.0,350,1000,{t:"streetlight"},"말레이시아","Malaysia","말레이시아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ng","streetlight",9.1,8.7,500,1500,{t:"streetlight"},"나이지리아","Nigeria","나이지리아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-nl","streetlight",52.2,5.3,180,800,{t:"streetlight"},"네덜란드","Netherlands","네덜란드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-no","streetlight",61.5,9.0,400,1300,{t:"streetlight"},"노르웨이","Norway","노르웨이의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-np","streetlight",28.3,84.1,200,900,{t:"streetlight"},"네팔","Nepal","네팔의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-nz","streetlight",-41.5,172.8,400,1300,{t:"streetlight"},"뉴질랜드","New Zealand","뉴질랜드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-pe","streetlight",-9.2,-75.0,500,1500,{t:"streetlight"},"페루","Peru","페루의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ph","streetlight",12.8,121.8,400,1300,{t:"streetlight"},"필리핀","Philippines","필리핀의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-pl","streetlight",52.1,19.4,320,1100,{t:"streetlight"},"폴란드","Poland","폴란드의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-pt","streetlight",39.6,-8.0,220,900,{t:"streetlight"},"포르투갈","Portugal","포르투갈의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ro","streetlight",45.9,24.9,320,1100,{t:"streetlight"},"루마니아","Romania","루마니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-rs","streetlight",44.2,20.9,280,1000,{t:"streetlight"},"세르비아","Serbia","세르비아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-ru","streetlight",55.5,45.0,900,2000,{t:"streetlight"},"러시아","Russia","러시아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-se","streetlight",62.0,15.0,450,1400,{t:"streetlight"},"스웨덴","Sweden","스웨덴의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-sg","streetlight",1.35,103.82,30,400,{t:"streetlight"},"싱가포르","Singapore","싱가포르의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-si","streetlight",46.1,14.8,140,700,{t:"streetlight"},"슬로베니아","Slovenia","슬로베니아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-sk","streetlight",48.7,19.7,200,900,{t:"streetlight"},"슬로바키아","Slovakia","슬로바키아의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-sn","streetlight",14.5,-14.5,300,1100,{t:"streetlight"},"세네갈","Senegal","세네갈의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-th","streetlight",15.5,101.0,450,1400,{t:"streetlight"},"태국","Thailand","태국의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-tn","streetlight",34.1,9.6,300,1100,{t:"streetlight"},"튀니지","Tunisia","튀니지의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-tr","streetlight",39.0,35.2,500,1400,{t:"streetlight"},"튀르키예","Türkiye","튀르키예의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-tw","streetlight",23.8,121.0,200,900,{t:"streetlight"},"대만","Taiwan","대만의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-us","streetlight",39.8,-98.6,1200,2400,{t:"streetlight"},"미국","United States","미국의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-uy","streetlight",-32.6,-55.9,300,1100,{t:"streetlight"},"우루과이","Uruguay","우루과이의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sl-za","streetlight",-29.0,25.0,500,1500,{t:"streetlight"},"남아프리카 공화국","South Africa","남아프리카 공화국의 가로등입니다. 기둥 재질과 색, 등기구 모양(코브라헤드형·직립형 등)이 지역별 단서가 됩니다.");
T("sp-ar","sign",-34.6,-64.0,600,1600,{t:"sign"},"아르헨티나","Argentina","아르헨티나의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-au","sign",-25.5,134.5,900,2200,{t:"sign"},"호주","Australia","호주의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-be","sign",50.6,4.6,160,700,{t:"sign"},"벨기에","Belgium","벨기에의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-br","sign",-10.8,-52.9,900,2200,{t:"sign"},"브라질","Brazil","브라질의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-by","sign",53.7,27.9,350,1200,{t:"sign"},"벨라루스","Belarus","벨라루스의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-ca","sign",56.0,-106.0,1500,2800,{t:"sign"},"캐나다","Canada","캐나다 속도 표지는 흰 직사각형에 'MAXIMUM'이라고 적고 km/h를 씁니다. 미국(SPEED LIMIT, MPH)과 구분하세요.");
T("sp-ch","sign",46.8,8.2,180,800,{t:"sign"},"스위스","Switzerland","스위스의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-co","sign",4.6,-73.1,450,1400,{t:"sign"},"콜롬비아","Colombia","콜롬비아의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-de","sign",51.1,10.4,350,1200,{t:"sign"},"독일","Germany","독일의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-dk","sign",55.9,9.8,180,800,{t:"sign"},"덴마크","Denmark","덴마크의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-es","sign",40.2,-3.5,380,1200,{t:"sign"},"스페인","Spain","스페인의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-fi","sign",64.0,26.0,450,1400,{t:"sign"},"핀란드","Finland","핀란드 속도 표지는 빨간 원 안의 바탕이 노란색인 것이 특징입니다. 흰 바탕인 대부분의 유럽 국가와 구분됩니다.");
T("sp-fr","sign",46.6,2.4,350,1200,{t:"sign"},"프랑스","France","프랑스의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-gr","sign",39.1,22.9,350,1200,{t:"sign"},"그리스","Greece","그리스의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-hk","sign",22.32,114.17,60,500,{t:"sign"},"홍콩","Hong Kong","홍콩의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-ie","sign",53.3,-7.7,200,900,{t:"sign"},"아일랜드","Ireland","아일랜드의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-in","sign",22.5,79.0,700,1800,{t:"sign"},"인도","India","인도의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-jp","sign",36.2,138.3,450,1400,{t:"sign"},"일본","Japan","일본의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-kr","sign",36.5,127.8,300,900,{t:"sign"},"대한민국","South Korea","대한민국의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-mx","sign",23.6,-102.5,600,1600,{t:"sign"},"멕시코","Mexico","멕시코의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-my","sign",3.9,102.0,350,1000,{t:"sign"},"말레이시아","Malaysia","말레이시아의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-nl","sign",52.2,5.3,180,800,{t:"sign"},"네덜란드","Netherlands","네덜란드의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-nz","sign",-41.5,172.8,400,1300,{t:"sign"},"뉴질랜드","New Zealand","뉴질랜드의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-ph","sign",12.8,121.8,400,1300,{t:"sign"},"필리핀","Philippines","필리핀의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-pl","sign",52.1,19.4,320,1100,{t:"sign"},"폴란드","Poland","폴란드의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-pt","sign",39.6,-8.0,220,900,{t:"sign"},"포르투갈","Portugal","포르투갈의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-ru","sign",55.5,45.0,900,2000,{t:"sign"},"러시아","Russia","러시아의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-se","sign",62.0,15.0,450,1400,{t:"sign"},"스웨덴","Sweden","스웨덴의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-si","sign",46.1,14.8,140,700,{t:"sign"},"슬로베니아","Slovenia","슬로베니아의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-sk","sign",48.7,19.7,200,900,{t:"sign"},"슬로바키아","Slovakia","슬로바키아의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-tw","sign",23.8,121.0,200,900,{t:"sign"},"대만","Taiwan","대만의 속도 제한 표지입니다. 테두리 색, 바탕색, 숫자 글꼴과 단위 표기(km/h·MPH)로 나라를 판단하세요.");
T("sp-uk","sign",52.6,-1.5,420,1300,{t:"sign"},"영국","United Kingdom","영국 속도 표지는 빨간 원형이지만 단위가 MPH입니다. 좌측통행과 함께 판단하세요.");

/* ═══ 커먼즈 카테고리 매핑 ═══
   수형님 브라우저에서 위키미디어 커먼즈를 직접 검사해, '카메라로 찍은 2005년 이후 JPEG 사진'이
   3장 이상 확인된 카테고리만 남겼습니다(도면·그림·옛날 사진·철도표지 등 제외, 중복 카테고리 통합).
   배열이면 하위 카테고리까지 함께 불러옵니다. */
const COMMONS={
 "bo-it": "Traffic bollards in Italy",
 "bo-es": "Traffic bollards in Spain",
 "bo-de": "Traffic bollards in Germany",
 "bo-cz": "Traffic bollards in the Czech Republic",
 "bo-at": "Traffic bollards in Austria",
 "bo-fr": "Traffic bollards in France",
 "bo-nl": "Traffic bollards in the Netherlands",
 "bo-pl": "Traffic bollards in Poland",
 "bo-ro": "Traffic bollards in Romania",
 "bo-tr": "Traffic bollards in Turkey",
 "bo-pt": "Traffic bollards in Portugal",
 "bo-ru": "Traffic bollards in Russia",
 "bo-au": "Traffic bollards in Australia",
 "po-ro": "Utility poles in Romania",
 "po-br": "Utility poles in Brazil",
 "sg-pare": "Stop signs in Brazil",
 "po-jp": "Utility poles in Japan",
 "sg-us55": "Speed limit signs in the United States",
 "sg-arret": "Stop signs in Quebec",
 "rd-no": "Road markings in Norway",
 "rd-uk": "Road markings in the United Kingdom",
 "pl-uk": "License plates of the United Kingdom",
 "pl-nl": "License plates of the Netherlands",
 "rd-us": "Road markings in the United States",
 "pl-fr": "License plates of France",
 "pl-ua": "License plates of Ukraine",
 "pl-it": "License plates of Italy",
 "pl-co": "License plates of Colombia",
 "pl-ar": "License plates of Argentina",
 "pl-br": "License plates of Brazil",
 "pl-cl": "License plates of Chile",
 "pl-my": "License plates of Malaysia",
 "pl-nz": "License plates of New Zealand",
 "lg-ua": [
  "Street signs in Ukraine",
  "Street name signs in Ukraine"
 ],
 "sn-eg": [
  "Street signs in Egypt",
  "Street signs in Alexandria",
  "Street name signs in Egypt"
 ],
 "bl-be": "Traffic bollards in Belgium",
 "bl-ua": "Traffic bollards in Ukraine",
 "bl-dk": "Traffic bollards in Denmark",
 "bl-fi": "Traffic bollards in Finland",
 "bl-ie": "Traffic bollards in Ireland",
 "bl-se": "Traffic bollards in Sweden",
 "bl-no": "Traffic bollards in Norway",
 "bl-uk": "Traffic bollards in the United Kingdom",
 "bl-us": "Traffic bollards in the United States",
 "bl-nz": "Traffic bollards in New Zealand",
 "bl-ca": "Traffic bollards in Canada",
 "lp-de": "License plates of Germany",
 "bl-jp": "Traffic bollards in Japan",
 "lp-es": "License plates of Spain",
 "lp-pt": "License plates of Portugal",
 "lp-be": "License plates of Belgium",
 "lp-pl": "License plates of Poland",
 "lp-lu": "License plates of Luxembourg",
 "lp-cz": "License plates of the Czech Republic",
 "lp-sk": "License plates of Slovakia",
 "lp-hu": "License plates of Hungary",
 "lp-bg": "License plates of Bulgaria",
 "lp-ro": "License plates of Romania",
 "lp-gr": "License plates of Greece",
 "lp-hr": "License plates of Croatia",
 "lp-si": "License plates of Slovenia",
 "lp-rs": "License plates of Serbia",
 "lp-lt": "License plates of Lithuania",
 "lp-lv": "License plates of Latvia",
 "lp-ee": "License plates of Estonia",
 "lp-se": "License plates of Sweden",
 "lp-fi": "License plates of Finland",
 "lp-no": "License plates of Norway",
 "lp-ie": "License plates of Ireland",
 "lp-is": "License plates of Iceland",
 "lp-dk": "License plates of Denmark",
 "lp-tr": "License plates of Turkey",
 "lp-tw": "License plates of Taiwan",
 "lp-ge": "License plates of Georgia (country)",
 "lp-jp": "License plates of Japan",
 "lp-il": "License plates of Israel",
 "lp-id": "License plates of Indonesia",
 "lp-th": "License plates of Thailand",
 "lp-hk": "License plates of Hong Kong",
 "lp-vn": "License plates of Vietnam",
 "lp-in": "License plates of India",
 "lp-lk": "License plates of Sri Lanka",
 "lp-sg": "License plates of Singapore",
 "lp-us": "License plates of the United States",
 "lp-uy": "License plates of Uruguay",
 "lp-pe": "License plates of Peru",
 "lp-bo": "License plates of Bolivia",
 "lp-za": "License plates of South Africa",
 "lp-py": "License plates of Paraguay",
 "lp-au": "License plates of Australia",
 "lp-ke": "License plates of Kenya",
 "lp-eg": "License plates of Egypt",
 "lp-ng": "License plates of Nigeria",
 "lp-gh": "License plates of Ghana",
 "rs-fr": "Road signs in France",
 "lp-ma": "License plates of Morocco",
 "lp-tn": "License plates of Tunisia",
 "rs-it": "Road signs in Italy",
 "rs-de": "Road signs in Germany",
 "rs-es": "Road signs in Spain",
 "rs-pt": "Road signs in Portugal",
 "rs-nl": "Road signs in the Netherlands",
 "rs-be": "Road signs in Belgium",
 "rs-ch": "Road signs in Switzerland",
 "rs-at": "Road signs in Austria",
 "rs-pl": "Road signs in Poland",
 "rs-sk": "Road signs in Slovakia",
 "rs-ro": "Road signs in Romania",
 "rs-cz": "Road signs in the Czech Republic",
 "rs-hu": "Road signs in Hungary",
 "rs-bg": "Road signs in Bulgaria",
 "rs-gr": "Road signs in Greece",
 "rs-ua": "Road signs in Ukraine",
 "rs-hr": "Road signs in Croatia",
 "rs-si": "Road signs in Slovenia",
 "rs-rs": "Road signs in Serbia",
 "rs-no": "Road signs in Norway",
 "rs-fi": "Road signs in Finland",
 "rs-se": "Road signs in Sweden",
 "rs-is": "Road signs in Iceland",
 "rs-dk": "Road signs in Denmark",
 "rs-ie": "Road signs in Ireland",
 "rs-uk": "Road signs in the United Kingdom",
 "rs-tw": "Road signs in Taiwan",
 "rs-il": "Road signs in Israel",
 "rs-vn": "Road signs in Vietnam",
 "rs-kr": "Road signs in South Korea",
 "rs-my": "Road signs in Malaysia",
 "rs-th": "Road signs in Thailand",
 "rs-id": "Road signs in Indonesia",
 "rs-in": "Road signs in India",
 "rs-ca": "Road signs in Canada",
 "rs-mx": "Road signs in Mexico",
 "rs-cn": "Road signs in China",
 "rs-nz": "Road signs in New Zealand",
 "rs-cl": "Road signs in Chile",
 "rs-br": "Road signs in Brazil",
 "rs-co": "Road signs in Colombia",
 "rs-pe": "Road signs in Peru",
 "rs-au": "Road signs in Australia",
 "rs-ke": "Road signs in Kenya",
 "rs-eg": "Road signs in Egypt",
 "rs-za": "Road signs in South Africa",
 "rs-ma": "Road signs in Morocco",
 "up-mx": "Utility poles in Mexico",
 "up-in": "Utility poles in India",
 "up-ph": "Utility poles in the Philippines",
 "up-vn": "Utility poles in Vietnam",
 "up-th": "Utility poles in Thailand",
 "up-za": "Utility poles in South Africa",
 "up-ru": "Utility poles in Russia",
 "up-gr": "Utility poles in Greece",
 "up-ke": "Utility poles in Kenya",
 "up-tr": "Utility poles in Turkey",
 "up-ua": "Utility poles in Ukraine",
 "up-pl": "Utility poles in Poland",
 "up-cl": "Utility poles in Chile",
 "up-pe": "Utility poles in Peru",
 "up-ar": "Utility poles in Argentina",
 "st-co": "Stop signs in Colombia",
 "st-ec": "Stop signs in Ecuador",
 "st-cl": "Stop signs in Chile",
 "st-uy": "Stop signs in Uruguay",
 "st-ca": "Stop signs in Canada",
 "st-fr": "Stop signs in France",
 "st-es": "Stop signs in Spain",
 "st-pt": "Stop signs in Portugal",
 "st-it": "Stop signs in Italy",
 "st-de": "Stop signs in Germany",
 "st-nl": "Stop signs in the Netherlands",
 "st-kr": "Stop signs in South Korea",
 "st-pl": "Stop signs in Poland",
 "st-il": "Stop signs in Israel",
 "st-jp": "Stop signs in Japan",
 "st-in": "Stop signs in India",
 "st-za": "Stop signs in South Africa",
 "st-my": "Stop signs in Malaysia",
 "st-au": "Stop signs in Australia",
 "st-nz": "Stop signs in New Zealand",
 "st-ma": "Stop signs in Morocco",
 "rm-ca": "Road markings in Canada",
 "rm-ie": "Road markings in Ireland",
 "rm-fr": "Road markings in France",
 "rm-mx": "Road markings in Mexico",
 "rm-nl": "Road markings in the Netherlands",
 "rm-de": "Road markings in Germany",
 "rm-es": "Road markings in Spain",
 "rm-pl": "Road markings in Poland",
 "rm-tr": "Road markings in Turkey",
 "rm-cz": "Road markings in the Czech Republic",
 "rm-hu": "Road markings in Hungary",
 "rm-fi": "Road markings in Finland",
 "rm-ru": "Road markings in Russia",
 "rm-dk": "Road markings in Denmark",
 "rm-au": "Road markings in Australia",
 "rm-nz": "Road markings in New Zealand",
 "hy-au": "Fire hydrants in Australia",
 "hy-at": "Fire hydrants in Austria",
 "hy-ba": "Fire hydrants in Bosnia and Herzegovina",
 "hy-cl": "Fire hydrants in Chile",
 "hy-cn": "Fire hydrants in China",
 "hy-co": "Fire hydrants in Colombia",
 "hy-cz": "Fire hydrants in the Czech Republic",
 "hy-dk": "Fire hydrants in Denmark",
 "hy-fr": "Fire hydrants in France",
 "hy-hu": "Fire hydrants in Hungary",
 "hy-is": "Fire hydrants in Iceland",
 "hy-in": "Fire hydrants in India",
 "hy-il": "Fire hydrants in Israel",
 "hy-it": "Fire hydrants in Italy",
 "hy-jp": "Fire hydrants in Japan",
 "hy-mx": "Fire hydrants in Mexico",
 "hy-no": "Fire hydrants in Norway",
 "hy-ph": "Fire hydrants in the Philippines",
 "hy-pl": "Fire hydrants in Poland",
 "hy-ru": "Fire hydrants in Russia",
 "hy-sg": "Fire hydrants in Singapore",
 "hy-si": "Fire hydrants in Slovenia",
 "hy-kr": "Fire hydrants in South Korea",
 "hy-es": "Fire hydrants in Spain",
 "hy-ch": "Fire hydrants in Switzerland",
 "hy-tw": "Fire hydrants in Taiwan",
 "hy-tr": "Fire hydrants in Turkey",
 "hy-uk": "Fire hydrants in the United Kingdom",
 "hy-us": "Fire hydrants in the United States",
 "pb-al": "Post boxes in Albania",
 "pb-am": "Post boxes in Armenia",
 "pb-au": "Post boxes in Australia",
 "pb-at": "Post boxes in Austria",
 "pb-by": "Post boxes in Belarus",
 "pb-be": "Post boxes in Belgium",
 "pb-ca": "Post boxes in Canada",
 "pb-cn": "Post boxes in China",
 "pb-co": "Post boxes in Colombia",
 "pb-cz": "Post boxes in the Czech Republic",
 "pb-eg": "Post boxes in Egypt",
 "pb-fr": "Post boxes in France",
 "pb-de": "Post boxes in Germany",
 "pb-ie": "Post boxes in the Republic of Ireland",
 "pb-il": "Post boxes in Israel",
 "pb-jp": "Post boxes in Japan",
 "pb-lt": "Post boxes in Lithuania",
 "pb-mx": "Post boxes in Mexico",
 "pb-ma": "Post boxes in Morocco",
 "pb-nl": "Post boxes in the Netherlands",
 "pb-nz": "Post boxes in New Zealand",
 "pb-pl": "Post boxes in Poland",
 "pb-pt": "Post boxes in Portugal",
 "pb-ru": "Post boxes in Russia",
 "pb-rs": "Post boxes in Serbia",
 "pb-sg": "Post boxes in Singapore",
 "pb-si": "Post boxes in Slovenia",
 "pb-za": "Post boxes in South Africa",
 "pb-kr": "Post boxes in South Korea",
 "pb-es": "Post boxes in Spain",
 "pb-se": "Post boxes in Sweden",
 "pb-th": "Post boxes in Thailand",
 "pb-tn": "Post boxes in Tunisia",
 "pb-ua": "Post boxes in Ukraine",
 "bs-al": "Bus stops in Albania",
 "bs-am": "Bus stops in Armenia",
 "bs-au": "Bus stops in Australia",
 "bs-by": "Bus stops in Belarus",
 "bs-be": "Bus stops in Belgium",
 "bs-br": "Bus stops in Brazil",
 "bs-bg": "Bus stops in Bulgaria",
 "bs-cl": "Bus stops in Chile",
 "bs-cn": "Bus stops in China",
 "bs-dk": "Bus stops in Denmark",
 "bs-fi": "Bus stops in Finland",
 "bs-fr": "Bus stops in France",
 "bs-ge": "Bus stops in Georgia (country)",
 "bs-gh": "Bus stops in Ghana",
 "bs-gr": "Bus stops in Greece",
 "bs-id": "Bus stops in Indonesia",
 "bs-ie": "Bus stops in the Republic of Ireland",
 "bs-il": "Bus stops in Israel",
 "bs-it": "Bus stops in Italy",
 "bs-jp": "Bus stops in Japan",
 "bs-ke": "Bus stops in Kenya",
 "bs-lv": "Bus stops in Latvia",
 "bs-lt": "Bus stops in Lithuania",
 "bs-lu": "Bus stops in Luxembourg",
 "bs-my": "Bus stops in Malaysia",
 "bs-mx": "Bus stops in Mexico",
 "bs-ma": "Bus stops in Morocco",
 "bs-nz": "Bus stops in New Zealand",
 "bs-ng": "Bus stops in Nigeria",
 "bs-no": "Bus stops in Norway",
 "bs-ph": "Bus stops in the Philippines",
 "bs-pl": "Bus stops in Poland",
 "bs-pt": "Bus stops in Portugal",
 "bs-ro": "Bus stops in Romania",
 "bs-ru": "Bus stops in Russia",
 "bs-sn": "Bus stops in Senegal",
 "bs-sg": "Bus stops in Singapore",
 "bs-sk": "Bus stops in Slovakia",
 "bs-si": "Bus stops in Slovenia",
 "bs-za": "Bus stops in South Africa",
 "bs-kr": "Bus stops in South Korea",
 "bs-es": "Bus stops in Spain",
 "bs-se": "Bus stops in Sweden",
 "bs-ch": "Bus stops in Switzerland",
 "bs-tz": "Bus stops in Tanzania",
 "bs-th": "Bus stops in Thailand",
 "bs-tr": "Bus stops in Turkey",
 "bs-ua": "Bus stops in Ukraine",
 "bs-vn": "Bus stops in Vietnam",
 "gr-at": "Guardrails in Austria",
 "gr-br": "Guardrails in Brazil",
 "gr-ca": "Guardrails in Canada",
 "gr-cz": "Guardrails in the Czech Republic",
 "gr-fr": "Guardrails in France",
 "gr-de": "Guardrails in Germany",
 "gr-jp": "Guardrails in Japan",
 "gr-pl": "Guardrails in Poland",
 "gr-ru": "Guardrails in Russia",
 "gr-sk": "Guardrails in Slovakia",
 "gr-za": "Guardrails in South Africa",
 "gr-es": "Guardrails in Spain",
 "gr-se": "Guardrails in Sweden",
 "gr-tw": "Guardrails in Taiwan",
 "gr-us": "Guardrails in the United States",
 "sl-ar": "Street lights in Argentina",
 "sl-am": "Street lights in Armenia",
 "sl-au": "Street lights in Australia",
 "sl-by": "Street lights in Belarus",
 "sl-be": "Street lights in Belgium",
 "sl-bo": "Street lights in Bolivia",
 "sl-ba": "Street lights in Bosnia and Herzegovina",
 "sl-br": "Street lights in Brazil",
 "sl-bg": "Street lights in Bulgaria",
 "sl-ca": "Street lights in Canada",
 "sl-cn": "Street lights in China",
 "sl-co": "Street lights in Colombia",
 "sl-hr": "Street lights in Croatia",
 "sl-cz": "Street lights in the Czech Republic",
 "sl-dk": "Street lights in Denmark",
 "sl-ec": "Street lights in Ecuador",
 "sl-eg": "Street lights in Egypt",
 "sl-ee": "Street lights in Estonia",
 "sl-fi": "Street lights in Finland",
 "sl-fr": "Street lights in France",
 "sl-ge": "Street lights in Georgia (country)",
 "sl-de": "Street lights in Germany",
 "sl-gr": "Street lights in Greece",
 "sl-hu": "Street lights in Hungary",
 "sl-is": "Street lights in Iceland",
 "sl-in": "Street lights in India",
 "sl-id": "Street lights in Indonesia",
 "sl-ie": "Street lights in Ireland",
 "sl-il": "Street lights in Israel",
 "sl-it": "Street lights in Italy",
 "sl-jp": "Street lights in Japan",
 "sl-lv": "Street lights in Latvia",
 "sl-lt": "Street lights in Lithuania",
 "sl-lu": "Street lights in Luxembourg",
 "sl-my": "Street lights in Malaysia",
 "sl-mx": "Street lights in Mexico",
 "sl-ma": "Street lights in Morocco",
 "sl-np": "Street lights in Nepal",
 "sl-nl": "Street lights in the Netherlands",
 "sl-nz": "Street lights in New Zealand",
 "sl-ng": "Street lights in Nigeria",
 "sl-pe": "Street lights in Peru",
 "sl-pl": "Street lights in Poland",
 "sl-pt": "Street lights in Portugal",
 "sl-ro": "Street lights in Romania",
 "sl-ru": "Street lights in Russia",
 "sl-rs": "Street lights in Serbia",
 "sl-sg": "Street lights in Singapore",
 "sl-sk": "Street lights in Slovakia",
 "sl-si": "Street lights in Slovenia",
 "sl-za": "Street lights in South Africa",
 "sl-se": "Street lights in Sweden",
 "sl-ch": "Street lights in Switzerland",
 "sl-tw": "Street lights in Taiwan",
 "sl-th": "Street lights in Thailand",
 "sl-tn": "Street lights in Tunisia",
 "sl-tr": "Street lights in Turkey",
 "sl-uy": "Street lights in Uruguay",
 "sl-us": "Street lights in the United States",
 "sp-fr": "Speed limit signs in France",
 "sp-jp": "Speed limit signs in Japan",
 "sp-pt": "Speed limit signs in Portugal",
 "sp-es": "Speed limit signs in Spain",
 "sp-se": "Speed limit signs in Sweden",
 "sp-ch": "Speed limit signs in Switzerland",
 "sp-uk": "Speed limit signs in the United Kingdom",
 "cw-at": "Pedestrian crossing signs in Austria",
 "cw-be": "Pedestrian crossing signs in Belgium",
 "cw-bg": "Pedestrian crossing signs in Bulgaria",
 "cw-ee": "Pedestrian crossing signs in Estonia",
 "cw-fr": "Pedestrian crossing signs in France",
 "cw-il": "Pedestrian crossing signs in Israel",
 "cw-lv": "Pedestrian crossing signs in Latvia",
 "cw-pl": "Pedestrian crossing signs in Poland",
 "cw-si": "Pedestrian crossing signs in Slovenia",
 "cw-se": "Pedestrian crossing signs in Sweden",
 "cw-ua": "Pedestrian crossing signs in Ukraine",
 "cw-us": "Pedestrian crossing signs in the United States",
 "bo-hu": [
  "Traffic bollards in Hungary",
  "Traffic bollards in Budapest"
 ],
 "sg-alto": [
  "Stop signs in Mexico",
  "Red octagonal stop signs in Mexico"
 ],
 "sg-kanga": [
  "Kangaroo warning signs",
  "Kangaroo warning road signs"
 ],
 "pl-ch": [
  "License plates of Switzerland",
  "Vehicles with license plates of Switzerland"
 ],
 "pl-kr": [
  "License plates of South Korea",
  "Automobiles with license plates of South Korea"
 ],
 "bl-si": [
  "Traffic bollards in Slovenia",
  "Traffic bollards in Izola"
 ],
 "lp-by": [
  "License plates of Belarus",
  "Bus license plates of Belarus",
  "Vehicles with license plates of Belarus"
 ],
 "lp-ph": [
  "License plates of the Philippines",
  "Automobiles with license plates of the Philippines"
 ],
 "lp-cn": [
  "License plates of China",
  "License plates of the People's Republic of China"
 ],
 "lp-mn": [
  "License plates of Mongolia",
  "Automobiles with license plates of Mongolia"
 ],
 "lp-kz": [
  "License plates of Kazakhstan",
  "Vehicles with license plates of Kazakhstan"
 ],
 "lp-ca": [
  "License plates of Canada",
  "Automobiles with license plates of Canada"
 ],
 "lp-mx": [
  "License plates of Mexico",
  "Automobiles with license plates of Mexico"
 ],
 "rs-ru": "Quality images of road signs in Russia",
 "rs-tr": [
  "Road signs in Turkey",
  "City limit signs in Turkey"
 ],
 "rs-us": [
  "Road signs in the United States",
  "Quality images of road signs in the United States"
 ],
 "rs-ar": [
  "Road signs in Buenos Aires",
  "Road Signs in Misiones Province"
 ],
 "up-us": [
  "Utility poles in the United States",
  "Concrete utility poles in the United States"
 ],
 "up-ca": [
  "Utility poles in Canada",
  "Pole-mounted transformers in Canada"
 ],
 "up-id": [
  "Utility poles in Indonesia",
  "Pole-mounted transformers in Indonesia"
 ],
 "up-tw": [
  "Utility poles in Taiwan",
  "Pole-mounted transformers in Taiwan"
 ],
 "st-ar": [
  "Stop signs in Argentina",
  "Stop signs in Buenos Aires"
 ],
 "st-us": [
  "Stop signs in the United States",
  "Stop signs in Washington, D.C."
 ],
 "st-tr": "Red octagonal stop signs in Turkey",
 "st-th": "Red octagonal stop signs in Thailand",
 "st-id": [
  "Stop signs in Indonesia",
  "Red octagonal stop signs in Indonesia"
 ],
 "rm-br": [
  "Road markings in Brazil",
  "Box junctions in Brazil"
 ],
 "rm-ar": [
  "Road markings in Argentina",
  "Zebra crossings in Argentina"
 ],
 "rm-it": [
  "Surface painting warning road signs in Italy",
  "Arrow road markings in Italy"
 ],
 "rm-pt": [
  "Road markings in Portugal",
  "Stop road markings in Portugal"
 ],
 "rm-be": [
  "Road markings in Belgium",
  "Zebra crossings in Belgium"
 ],
 "rm-ua": [
  "Arrow road markings in Ukraine",
  "Stop road markings in Ukraine",
  "Zebra crossings in Ukraine"
 ],
 "rm-se": [
  "Road markings in Sweden",
  "Parking road markings in Sweden",
  "Zebra crossings in Sweden"
 ],
 "rm-tw": [
  "Road markings in Taiwan",
  "Bikeway road markings in Taiwan"
 ],
 "rm-in": "Stop road markings in India",
 "rm-my": "Zebra crossings in Malaysia",
 "hy-be": [
  "Fire hydrants in Belgium",
  "Fire hydrants in Liège"
 ],
 "hy-br": [
  "Fire hydrants in Brazil",
  "Red fire hydrants in Brazil"
 ],
 "hy-de": [
  "Fire hydrants in Germany",
  "Fire hydrant signs in Germany"
 ],
 "hy-gr": [
  "Fire hydrants in Greece",
  "Fire hydrants in Athens"
 ],
 "hy-lu": [
  "Fire hydrants in Luxembourg",
  "Fire hydrant signs in Luxembourg",
  "Red fire hydrants in Luxembourg"
 ],
 "hy-nl": [
  "Fire hydrants in the Netherlands",
  "Fire hydrant signs in the Netherlands"
 ],
 "hy-pt": [
  "Fire hydrants in Portugal",
  "Fire hydrants in Madeira"
 ],
 "hy-se": [
  "Fire hydrants in Sweden",
  "Fire hydrant signs in Sweden"
 ],
 "hy-ua": [
  "Fire hydrants in Ukraine",
  "Fire hydrant signs in Ukraine"
 ],
 "pb-ar": [
  "Post boxes in Argentina",
  "Red post boxes in Argentina"
 ],
 "pb-ba": [
  "Post boxes in Bosnia and Herzegovina",
  "Yellow post boxes in Bosnia and Herzegovina"
 ],
 "pb-br": [
  "Post boxes in Brazil",
  "DCT cast iron post boxes"
 ],
 "pb-bg": [
  "Post boxes in Bulgaria",
  "Post boxes in Sofia"
 ],
 "pb-hr": [
  "Post boxes in Croatia",
  "Yellow post boxes in Croatia"
 ],
 "pb-gr": [
  "Post boxes in Greece",
  "Post boxes in Greece by municipality",
  "Post boxes in Crete"
 ],
 "pb-hu": [
  "Post boxes in Hungary",
  "Red post boxes in Hungary"
 ],
 "pb-is": [
  "Post boxes in Iceland",
  "Red post boxes in Iceland"
 ],
 "pb-in": [
  "Post boxes in India",
  "Green post boxes in India",
  "Red post boxes in India"
 ],
 "pb-it": [
  "Post boxes in Italy",
  "Red post boxes in Italy"
 ],
 "pb-lu": [
  "Post boxes in Luxembourg",
  "Yellow post boxes in Luxembourg"
 ],
 "pb-np": [
  "Post boxes in Nepal",
  "Red post boxes in Nepal"
 ],
 "pb-no": [
  "Post boxes in Norway",
  "Red post boxes in Norway"
 ],
 "pb-ro": "Red post boxes in Romania",
 "pb-sk": [
  "Post boxes in Slovakia",
  "Orange post boxes in Slovakia"
 ],
 "pb-ch": [
  "Post boxes in Switzerland",
  "Yellow post boxes in Switzerland"
 ],
 "pb-tw": [
  "Post boxes in Taiwan",
  "Post boxes by Chunghwa Post"
 ],
 "pb-tr": "Yellow post boxes in Turkey",
 "pb-uk": "Post boxes in the UK with known IDs",
 "pb-us": [
  "Post boxes in the United States",
  "Red post boxes in the United States",
  "United States Postal Service post boxes"
 ],
 "pb-vn": [
  "Post boxes in Vietnam",
  "Post boxes in Ho Chi Minh City"
 ],
 "pb-cl": "Mailboxes in Chile",
 "pb-dk": "Mailboxes in Denmark",
 "pb-ee": "Letter boxes in Estonia",
 "pb-fi": [
  "Mailboxes in Finland",
  "Letter boxes in Finland"
 ],
 "pb-my": [
  "Mailboxes in Malaysia",
  "Red post boxes in Malaysia"
 ],
 "pb-uy": "Mailboxes in Uruguay",
 "bs-ar": [
  "Bus stops in Argentina",
  "Bus stops in Buenos Aires",
  "Queues at bus stops in Argentina"
 ],
 "bs-at": [
  "Bus stops in Austria",
  "Bus shelters in Austria"
 ],
 "bs-az": "Bus shelters in Azerbaijan",
 "bs-ca": [
  "Bus stops in Canada",
  "Bus stop signs in Canada"
 ],
 "bs-co": [
  "Bus stops in Colombia",
  "Bus stop signs in Colombia"
 ],
 "bs-hr": [
  "Bus stops in Croatia",
  "Bus stops in Zagreb"
 ],
 "bs-cz": [
  "Bus stops in the Czech Republic",
  "Combined bus and tram stops in the Czech Republic"
 ],
 "bs-eg": [
  "Bus stops in Egypt",
  "Bus shelters in Egypt"
 ],
 "bs-ee": "Bus shelters in Estonia",
 "bs-de": [
  "Bus stops in Germany",
  "Combined bus and tram stops in Germany"
 ],
 "bs-hu": [
  "Trolleybus stops in Hungary",
  "Bus shelters in Hungary",
  "Bus stop signs in Hungary"
 ],
 "bs-is": [
  "Bus stops in Iceland",
  "Bus stops in Reykjavík"
 ],
 "bs-in": [
  "Bus stops in India",
  "Bus shelters in India"
 ],
 "bs-kz": [
  "Bus stops in Kazakhstan",
  "Quality images of bus stops in Kazakhstan"
 ],
 "bs-nl": [
  "Bus stops in the Netherlands",
  "Bus stop signs in the Netherlands"
 ],
 "bs-pe": [
  "Bus stops in Peru",
  "Bus stops in Lima"
 ],
 "bs-rs": [
  "Bus stops in Serbia",
  "Bus stop signs in Serbia",
  "Bus stops in Belgrade"
 ],
 "bs-tw": [
  "Bus stops in Taiwan",
  "Bus shelters in Taiwan"
 ],
 "bs-uk": [
  "Bus stops in the United Kingdom",
  "Bus stops in England"
 ],
 "bs-us": [
  "Bus stops in the United States",
  "Bus stops in Washington, D.C."
 ],
 "bs-uy": [
  "Bus stops in Uruguay",
  "Bus stop benches in Uruguay"
 ],
 "gr-cn": [
  "Guardrails in China",
  "Guardrails in Hong Kong"
 ],
 "gr-pt": [
  "Guardrails in Portugal",
  "Guardrails in Madeira"
 ],
 "gr-uk": [
  "Guardrails in the United Kingdom",
  "Guardrails in London"
 ],
 "sl-at": [
  "Street lights in Austria",
  "Street lights in Salzburg (state)"
 ],
 "sl-az": [
  "Street lights in Azerbaijan",
  "Street lights in Baku"
 ],
 "sl-cl": [
  "Street lights in Chile",
  "Street lights in Santiago de Chile"
 ],
 "sl-mk": [
  "Street lights in North Macedonia",
  "Street lights in Bitola",
  "Lamp posts in North Macedonia"
 ],
 "sl-no": [
  "Street lights in Norway",
  "Lamp posts in Norway"
 ],
 "sl-ph": [
  "Street lights in the Philippines",
  "Lamp posts in the Philippines"
 ],
 "sl-sn": [
  "Street lights in Senegal",
  "Solar street lights in Senegal"
 ],
 "sl-kr": [
  "Street lights in South Korea",
  "Lamp posts in South Korea"
 ],
 "sl-es": [
  "Street lights in Spain",
  "Quality images of street lights in Spain"
 ],
 "sp-ar": "Speed limit road signs in Argentina",
 "sp-au": [
  "Speed limit signs in Australia",
  "Speed limit road signs in Australia"
 ],
 "sp-by": [
  "Speed limit signs in Belarus",
  "Speed limit road signs in Belarus"
 ],
 "sp-be": "Speed limit road signs in Belgium",
 "sp-br": [
  "Speed limit signs in Brazil",
  "Speed limit road signs in Brazil"
 ],
 "sp-ca": [
  "Speed limit signs in Canada",
  "Speed limit ahead road signs in Canada"
 ],
 "sp-co": "Speed limit road signs in Colombia",
 "sp-dk": [
  "Speed limit signs in Denmark",
  "Speed limit road signs in Denmark"
 ],
 "sp-fi": "Speed limit road signs in Finland",
 "sp-de": [
  "Speed limit signs in Germany",
  "Speed limit road signs in Germany"
 ],
 "sp-gr": "Speed limit road signs in Greece",
 "sp-hk": "Speed limit road signs in Hong Kong",
 "sp-in": "Speed limit road signs in India",
 "sp-ie": [
  "Speed limit signs in Ireland",
  "Speed limit road signs in Ireland"
 ],
 "sp-my": "Speed limit road signs in Malaysia",
 "sp-mx": "Speed limit road signs in Mexico",
 "sp-nl": [
  "Speed limit signs in the Netherlands",
  "Speed limit road signs in the Netherlands"
 ],
 "sp-nz": [
  "Speed limit signs in New Zealand",
  "Speed limit road signs in New Zealand"
 ],
 "sp-ph": "Speed limit road signs in the Philippines",
 "sp-pl": [
  "Speed limit signs in Poland",
  "Speed limit road signs in Poland"
 ],
 "sp-ru": "Speed limit road signs in Russia",
 "sp-sk": "Speed limit road signs in Slovakia",
 "sp-si": "Speed limit road signs in Slovenia",
 "sp-kr": [
  "Speed limit signs in South Korea",
  "Speed limit road signs in South Korea"
 ],
 "sp-tw": "Speed limit road signs in Taiwan",
 "cw-au": [
  "Pedestrian crossing signs in Australia",
  "Pedestrian crossing warning road signs in Australia"
 ],
 "cw-by": [
  "Pedestrian crossing signs in Belarus",
  "Pedestrian crossing indication road signs in Belarus"
 ],
 "cw-ca": "Pedestrian crossing indication road signs in Canada",
 "cw-hr": [
  "Pedestrian crossing signs in Croatia",
  "Pedestrian crossing indication road signs in Croatia"
 ],
 "cw-cz": [
  "Pedestrian crossing signs in the Czech Republic",
  "Pedestrian crossing warning road signs in the Czech Republic"
 ],
 "cw-in": [
  "Pedestrian crossing beacons in India",
  "Pedestrian crossing warning road signs in India"
 ],
 "cw-id": [
  "Pedestrian crossing indication road signs in Indonesia",
  "Pedestrian crossing warning road signs in Indonesia"
 ],
 "cw-ie": "Pedestrian crossing warning road signs in Ireland",
 "cw-it": "Pedestrian crossing indication road signs in Italy",
 "cw-kz": "Pedestrian crossing indication road signs in Kazakhstan",
 "cw-my": "Pedestrian crossing warning road signs in Malaysia",
 "cw-nz": "Pedestrian crossing indication road signs in New Zealand",
 "cw-ph": [
  "Pedestrian crossing signs in the Philippines",
  "Pedestrian crossing indication road signs in the Philippines"
 ],
 "cw-ru": [
  "Pedestrian crossing signs in Russia",
  "Pedestrian crossing signs in Novosibirsk"
 ],
 "cw-rs": [
  "Pedestrian crossing signs in Serbia",
  "Pedestrian crossing indication road signs in Serbia"
 ],
 "cw-sg": [
  "Pedestrian crossing signs in Singapore",
  "Pedestrian crossing instruction road signs in Singapore"
 ],
 "cw-za": [
  "Pedestrian crossing signs in South Africa",
  "Pedestrian crossing warning road signs in South Africa"
 ],
 "cw-kr": [
  "Pedestrian crossing signs in South Korea",
  "Pedestrian crossing indication road signs in South Korea"
 ],
 "cw-es": [
  "Pedestrian crossing signs in Spain",
  "Pedestrian crossing warning road signs in Spain"
 ],
 "cw-ch": [
  "Pedestrian crossing signs in Switzerland",
  "4.11 (road sign, Switzerland)"
 ],
 "lg-al": "Street signs in Albania",
 "sn-ar": "Street signs in Argentina",
 "lg-by": "Street signs in Belarus",
 "sn-be": "Street signs in Belgium",
 "sn-ba": "Street signs in Bosnia and Herzegovina",
 "sn-br": "Street signs in Brazil",
 "lg-bg": "Street signs in Bulgaria",
 "sn-cl": "Street signs in Chile",
 "sn-cn": "Street signs in China",
 "sn-co": "Street signs in Colombia",
 "sn-hr": "Street signs in Croatia",
 "lg-dk": "Street signs in Denmark",
 "sn-ec": "Street signs in Ecuador",
 "lg-ee": "Street signs in Estonia",
 "lg-fi": "Street signs in Finland",
 "lg-de": "Street signs in Germany",
 "sn-gh": "Street signs in Ghana",
 "lg-gr": "Street signs in Greece",
 "lg-hu": "Street signs in Hungary",
 "lg-is": "Street signs in Iceland",
 "sn-in": "Street signs in India",
 "sn-id": "Street signs in Indonesia",
 "lg-il": "Street signs in Israel",
 "lg-jp": "Street signs in Japan",
 "lg-kz": "Street signs in Kazakhstan",
 "lg-lv": "Street signs in Latvia",
 "lg-lt": "Street signs in Lithuania",
 "sn-mx": "Street signs in Mexico",
 "sn-ma": "Street signs in Morocco",
 "lg-nl": "Street signs in the Netherlands",
 "sn-nz": "Street signs in New Zealand",
 "lg-no": "Street signs in Norway",
 "sn-py": "Street signs in Paraguay",
 "sn-ph": "Street signs in the Philippines",
 "lg-pl": "Street signs in Poland",
 "sn-pt": "Street signs in Portugal",
 "lg-ro": "Street signs in Romania",
 "sn-ru": "Street signs in Russia",
 "lg-rs": "Street signs in Serbia",
 "sn-sg": "Street signs in Singapore",
 "lg-sk": "Street signs in Slovakia",
 "sn-za": "Street signs in South Africa",
 "lg-kr": "Street signs in South Korea",
 "lg-se": "Street signs in Sweden",
 "lg-th": "Street signs in Thailand",
 "lg-tr": "Street signs in Turkey",
 "sn-us": "Street signs in the United States",
 "sn-uy": "Street signs in Uruguay",
 "lg-vn": "Street signs in Vietnam",
 "lg-am": [
  "Street signs in Armenia",
  "Street signs in Tsaghkadzor"
 ],
 "sn-au": [
  "Street signs in Australia",
  "Quality images of street signs in Australia",
  "Street signs on buildings in Australia"
 ],
 "sn-at": [
  "Street signs in Austria",
  "Quality images of street signs in Austria"
 ],
 "sn-ca": "Bilingual street signs in Canada",
 "lg-cz": "Bilingual street signs in the Czech Republic",
 "lg-ge": [
  "Street signs in Georgia (country)",
  "Combined street and house number signs in Georgia (country)",
  "Mkhedruli street signs"
 ],
 "sn-ie": [
  "Street signs in Ireland",
  "Street signs on buildings in Ireland"
 ],
 "lg-it": [
  "Street signs in Italy",
  "Street signs on buildings in Italy"
 ],
 "sn-lu": "Street signs in Luxembourg",
 "sn-my": [
  "Street signs in Malaysia",
  "Street signs in Malaysia by state",
  "Malay-language street signs in Malaysia"
 ],
 "sn-me": [
  "Street signs in Montenegro",
  "Bilingual street signs in Montenegro"
 ],
 "sn-pe": [
  "Street signs in Peru",
  "Street signs with explanation in Peru",
  "Quality images of street signs in Peru",
  "Bilingual street signs in Peru"
 ],
 "sn-sn": "Street signs in Dakar",
 "lg-si": [
  "Street signs in Slovenia",
  "Bilingual street signs in Slovenia"
 ],
 "lg-es": "Street signs in Spain",
 "sn-ch": [
  "Street signs in Switzerland",
  "Street signs with explanation in Switzerland"
 ],
 "sn-tn": "Bilingual street signs in Tunisia",
 "sn-uk": "Street signs in the United Kingdom"
};
const FLAG_OK=new Set(["fl-nl", "fl-lu", "fl-id", "fl-pl", "fl-ro", "fl-ie", "fl-is", "fl-no", "fl-se", "fl-dk", "fl-fi", "fl-au", "fl-nz", "fl-si", "fl-sk", "fl-co", "fl-ec", "fl-ar", "fl-uy", "fl-th", "fl-cr", "fl-gr", "fl-tr", "fl-my"]);

/* ═══════════ 확장 트릭 (자동 생성) ═══════════ */
T("sn-fr","lang",46.6,2.4,350,1200,{t:"lang"},"프랑스","France","프랑스의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-de","lang",51.1,10.4,350,1200,{t:"lang"},"독일","Germany","독일의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-it","lang",42.8,12.5,380,1200,{t:"lang"},"이탈리아","Italy","이탈리아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-es","lang",40.2,-3.5,380,1200,{t:"lang"},"스페인","Spain","스페인의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-pt","lang",39.6,-8.0,220,900,{t:"lang"},"포르투갈","Portugal","포르투갈의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-nl","lang",52.2,5.3,180,800,{t:"lang"},"네덜란드","Netherlands","네덜란드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-be","lang",50.6,4.6,160,700,{t:"lang"},"벨기에","Belgium","벨기에의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-lu","lang",49.8,6.1,60,500,{t:"lang"},"룩셈부르크","Luxembourg","룩셈부르크의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ch","lang",46.8,8.2,180,800,{t:"lang"},"스위스","Switzerland","스위스의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-at","lang",47.6,14.1,250,1000,{t:"lang"},"오스트리아","Austria","오스트리아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-pl","lang",52.1,19.4,320,1100,{t:"lang"},"폴란드","Poland","폴란드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-cz","lang",49.8,15.4,220,900,{t:"lang"},"체코","Czechia","체코의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-sk","lang",48.7,19.7,200,900,{t:"lang"},"슬로바키아","Slovakia","슬로바키아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-hu","lang",47.2,19.4,220,900,{t:"lang"},"헝가리","Hungary","헝가리의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ro","lang",45.9,24.9,320,1100,{t:"lang"},"루마니아","Romania","루마니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-bg","lang",42.7,25.3,300,1100,{t:"lang"},"불가리아","Bulgaria","불가리아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-gr","lang",39.1,22.9,350,1200,{t:"lang"},"그리스","Greece","그리스의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-hr","lang",45.4,16.3,250,1000,{t:"lang"},"크로아티아","Croatia","크로아티아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-si","lang",46.1,14.8,140,700,{t:"lang"},"슬로베니아","Slovenia","슬로베니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-rs","lang",44.2,20.9,280,1000,{t:"lang"},"세르비아","Serbia","세르비아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ba","lang",44.2,17.8,200,900,{t:"lang"},"보스니아 헤르체고비나","Bosnia and Herzegovina","보스니아 헤르체고비나의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-mk","lang",41.6,21.7,200,900,{t:"lang"},"북마케도니아","North Macedonia","북마케도니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-al","lang",41.1,20.1,200,900,{t:"lang"},"알바니아","Albania","알바니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-me","lang",42.8,19.3,120,700,{t:"lang"},"몬테네그로","Montenegro","몬테네그로의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ua","lang",49.4,31.2,450,1400,{t:"lang"},"우크라이나","Ukraine","우크라이나의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-by","lang",53.7,27.9,350,1200,{t:"lang"},"벨라루스","Belarus","벨라루스의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ru","lang",55.5,45.0,900,2000,{t:"lang"},"러시아","Russia","러시아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-lt","lang",55.3,23.9,180,800,{t:"lang"},"리투아니아","Lithuania","리투아니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-lv","lang",56.9,24.6,160,700,{t:"lang"},"라트비아","Latvia","라트비아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ee","lang",58.7,25.5,160,700,{t:"lang"},"에스토니아","Estonia","에스토니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-fi","lang",64.0,26.0,450,1400,{t:"lang"},"핀란드","Finland","핀란드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-se","lang",62.0,15.0,450,1400,{t:"lang"},"스웨덴","Sweden","스웨덴의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-no","lang",61.5,9.0,400,1300,{t:"lang"},"노르웨이","Norway","노르웨이의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-dk","lang",55.9,9.8,180,800,{t:"lang"},"덴마크","Denmark","덴마크의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-is","lang",64.9,-18.6,250,1000,{t:"lang"},"아이슬란드","Iceland","아이슬란드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ie","lang",53.3,-7.7,200,900,{t:"lang"},"아일랜드","Ireland","아일랜드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-uk","lang",52.6,-1.5,420,1300,{t:"lang"},"영국","United Kingdom","영국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-tr","lang",39.0,35.2,500,1400,{t:"lang"},"튀르키예","Türkiye","튀르키예의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ge","lang",42.0,43.5,250,1000,{t:"lang"},"조지아","Georgia","조지아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-am","lang",40.3,44.9,200,900,{t:"lang"},"아르메니아","Armenia","아르메니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-az","lang",40.3,47.7,250,1000,{t:"lang"},"아제르바이잔","Azerbaijan","아제르바이잔의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-il","lang",31.5,34.9,180,800,{t:"lang"},"이스라엘","Israel","이스라엘의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-jp","lang",36.2,138.3,450,1400,{t:"lang"},"일본","Japan","일본의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-kr","lang",36.5,127.8,300,900,{t:"lang"},"대한민국","South Korea","대한민국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-tw","lang",23.8,121.0,200,900,{t:"lang"},"대만","Taiwan","대만의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-hk","lang",22.32,114.17,60,500,{t:"lang"},"홍콩","Hong Kong","홍콩의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-th","lang",15.5,101.0,450,1400,{t:"lang"},"태국","Thailand","태국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-vn","lang",16.0,107.8,400,1300,{t:"lang"},"베트남","Vietnam","베트남의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-my","lang",3.9,102.0,350,1000,{t:"lang"},"말레이시아","Malaysia","말레이시아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-id","lang",-2.5,118.0,900,2200,{t:"lang"},"인도네시아","Indonesia","인도네시아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ph","lang",12.8,121.8,400,1300,{t:"lang"},"필리핀","Philippines","필리핀의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-sg","lang",1.35,103.82,30,400,{t:"lang"},"싱가포르","Singapore","싱가포르의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-in","lang",22.5,79.0,700,1800,{t:"lang"},"인도","India","인도의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-lk","lang",7.5,80.7,200,900,{t:"lang"},"스리랑카","Sri Lanka","스리랑카의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-np","lang",28.3,84.1,200,900,{t:"lang"},"네팔","Nepal","네팔의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-cn","lang",35.0,105.0,900,2200,{t:"lang"},"중국","China","중국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-mn","lang",47.9,106.9,600,1600,{t:"lang"},"몽골","Mongolia","몽골의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-kz","lang",48.0,66.9,700,1800,{t:"lang"},"카자흐스탄","Kazakhstan","카자흐스탄의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-us","lang",39.8,-98.6,1200,2400,{t:"lang"},"미국","United States","미국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ca","lang",56.0,-106.0,1500,2800,{t:"lang"},"캐나다","Canada","캐나다의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-mx","lang",23.6,-102.5,600,1600,{t:"lang"},"멕시코","Mexico","멕시코의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-br","lang",-10.8,-52.9,900,2200,{t:"lang"},"브라질","Brazil","브라질의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ar","lang",-34.6,-64.0,600,1600,{t:"lang"},"아르헨티나","Argentina","아르헨티나의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-cl","lang",-35.7,-71.5,400,1300,{t:"lang"},"칠레","Chile","칠레의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-co","lang",4.6,-73.1,450,1400,{t:"lang"},"콜롬비아","Colombia","콜롬비아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-pe","lang",-9.2,-75.0,500,1500,{t:"lang"},"페루","Peru","페루의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ec","lang",-1.8,-78.2,300,1100,{t:"lang"},"에콰도르","Ecuador","에콰도르의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-uy","lang",-32.6,-55.9,300,1100,{t:"lang"},"우루과이","Uruguay","우루과이의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-bo","lang",-16.7,-64.7,400,1300,{t:"lang"},"볼리비아","Bolivia","볼리비아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-py","lang",-23.4,-58.4,350,1200,{t:"lang"},"파라과이","Paraguay","파라과이의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-au","lang",-25.5,134.5,900,2200,{t:"lang"},"호주","Australia","호주의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-nz","lang",-41.5,172.8,400,1300,{t:"lang"},"뉴질랜드","New Zealand","뉴질랜드의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-za","lang",-29.0,25.0,500,1500,{t:"lang"},"남아프리카 공화국","South Africa","남아프리카 공화국의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ke","lang",0.2,37.9,450,1400,{t:"lang"},"케냐","Kenya","케냐의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ng","lang",9.1,8.7,500,1500,{t:"lang"},"나이지리아","Nigeria","나이지리아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-gh","lang",7.9,-1.2,300,1100,{t:"lang"},"가나","Ghana","가나의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-eg","lang",26.8,30.8,500,1500,{t:"lang"},"이집트","Egypt","이집트의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ma","lang",31.8,-7.1,400,1300,{t:"lang"},"모로코","Morocco","모로코의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-tn","lang",34.1,9.6,300,1100,{t:"lang"},"튀니지","Tunisia","튀니지의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-sn","lang",14.5,-14.5,300,1100,{t:"lang"},"세네갈","Senegal","세네갈의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-tz","lang",-6.4,34.9,450,1400,{t:"lang"},"탄자니아","Tanzania","탄자니아의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-ug","lang",1.4,32.3,250,1000,{t:"lang"},"우간다","Uganda","우간다의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("sn-bw","lang",-22.3,24.7,400,1300,{t:"lang"},"보츠와나","Botswana","보츠와나의 도로명 표지판입니다. 표기 언어·문자, 표지판 색과 모양으로 나라를 좁힐 수 있습니다.");
T("bl-fr","bollard",46.6,2.4,350,1200,{t:"bollard"},"프랑스","France","프랑스의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-de","bollard",51.1,10.4,350,1200,{t:"bollard"},"독일","Germany","독일의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-at","bollard",47.6,14.1,250,1000,{t:"bollard"},"오스트리아","Austria","오스트리아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ch","bollard",46.8,8.2,180,800,{t:"bollard"},"스위스","Switzerland","스위스의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-cz","bollard",49.8,15.4,220,900,{t:"bollard"},"체코","Czechia","체코의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-sk","bollard",48.7,19.7,200,900,{t:"bollard"},"슬로바키아","Slovakia","슬로바키아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-it","bollard",42.8,12.5,380,1200,{t:"bollard"},"이탈리아","Italy","이탈리아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-es","bollard",40.2,-3.5,380,1200,{t:"bollard"},"스페인","Spain","스페인의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-pt","bollard",39.6,-8.0,220,900,{t:"bollard"},"포르투갈","Portugal","포르투갈의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-nl","bollard",52.2,5.3,180,800,{t:"bollard"},"네덜란드","Netherlands","네덜란드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-be","bollard",50.6,4.6,160,700,{t:"bollard"},"벨기에","Belgium","벨기에의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-pl","bollard",52.1,19.4,320,1100,{t:"bollard"},"폴란드","Poland","폴란드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-hu","bollard",47.2,19.4,220,900,{t:"bollard"},"헝가리","Hungary","헝가리의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ro","bollard",45.9,24.9,320,1100,{t:"bollard"},"루마니아","Romania","루마니아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-bg","bollard",42.7,25.3,300,1100,{t:"bollard"},"불가리아","Bulgaria","불가리아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-gr","bollard",39.1,22.9,350,1200,{t:"bollard"},"그리스","Greece","그리스의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-hr","bollard",45.4,16.3,250,1000,{t:"bollard"},"크로아티아","Croatia","크로아티아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-si","bollard",46.1,14.8,140,700,{t:"bollard"},"슬로베니아","Slovenia","슬로베니아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-rs","bollard",44.2,20.9,280,1000,{t:"bollard"},"세르비아","Serbia","세르비아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ua","bollard",49.4,31.2,450,1400,{t:"bollard"},"우크라이나","Ukraine","우크라이나의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ru","bollard",55.5,45.0,900,2000,{t:"bollard"},"러시아","Russia","러시아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-lt","bollard",55.3,23.9,180,800,{t:"bollard"},"리투아니아","Lithuania","리투아니아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-lv","bollard",56.9,24.6,160,700,{t:"bollard"},"라트비아","Latvia","라트비아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ee","bollard",58.7,25.5,160,700,{t:"bollard"},"에스토니아","Estonia","에스토니아의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-fi","bollard",64.0,26.0,450,1400,{t:"bollard"},"핀란드","Finland","핀란드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-se","bollard",62.0,15.0,450,1400,{t:"bollard"},"스웨덴","Sweden","스웨덴의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-no","bollard",61.5,9.0,400,1300,{t:"bollard"},"노르웨이","Norway","노르웨이의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-dk","bollard",55.9,9.8,180,800,{t:"bollard"},"덴마크","Denmark","덴마크의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-is","bollard",64.9,-18.6,250,1000,{t:"bollard"},"아이슬란드","Iceland","아이슬란드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ie","bollard",53.3,-7.7,200,900,{t:"bollard"},"아일랜드","Ireland","아일랜드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-uk","bollard",52.6,-1.5,420,1300,{t:"bollard"},"영국","United Kingdom","영국의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-tr","bollard",39.0,35.2,500,1400,{t:"bollard"},"튀르키예","Türkiye","튀르키예의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-au","bollard",-25.5,134.5,900,2200,{t:"bollard"},"호주","Australia","호주의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-nz","bollard",-41.5,172.8,400,1300,{t:"bollard"},"뉴질랜드","New Zealand","뉴질랜드의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-us","bollard",39.8,-98.6,1200,2400,{t:"bollard"},"미국","United States","미국의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-ca","bollard",56.0,-106.0,1500,2800,{t:"bollard"},"캐나다","Canada","캐나다의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("bl-jp","bollard",36.2,138.3,450,1400,{t:"bollard"},"일본","Japan","일본의 도로변 유도봉(볼라드)입니다. 몸통 색·반사판 색·머리 모양을 이웃 나라와 비교하세요.");
T("lp-fr","plate",46.6,2.4,350,1200,{t:"plate"},"프랑스","France","프랑스의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-de","plate",51.1,10.4,350,1200,{t:"plate"},"독일","Germany","독일의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-it","plate",42.8,12.5,380,1200,{t:"plate"},"이탈리아","Italy","이탈리아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-es","plate",40.2,-3.5,380,1200,{t:"plate"},"스페인","Spain","스페인의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-pt","plate",39.6,-8.0,220,900,{t:"plate"},"포르투갈","Portugal","포르투갈의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-nl","plate",52.2,5.3,180,800,{t:"plate"},"네덜란드","Netherlands","네덜란드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-be","plate",50.6,4.6,160,700,{t:"plate"},"벨기에","Belgium","벨기에의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-lu","plate",49.8,6.1,60,500,{t:"plate"},"룩셈부르크","Luxembourg","룩셈부르크의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ch","plate",46.8,8.2,180,800,{t:"plate"},"스위스","Switzerland","스위스의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-at","plate",47.6,14.1,250,1000,{t:"plate"},"오스트리아","Austria","오스트리아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-pl","plate",52.1,19.4,320,1100,{t:"plate"},"폴란드","Poland","폴란드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-cz","plate",49.8,15.4,220,900,{t:"plate"},"체코","Czechia","체코의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-sk","plate",48.7,19.7,200,900,{t:"plate"},"슬로바키아","Slovakia","슬로바키아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-hu","plate",47.2,19.4,220,900,{t:"plate"},"헝가리","Hungary","헝가리의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ro","plate",45.9,24.9,320,1100,{t:"plate"},"루마니아","Romania","루마니아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-bg","plate",42.7,25.3,300,1100,{t:"plate"},"불가리아","Bulgaria","불가리아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-gr","plate",39.1,22.9,350,1200,{t:"plate"},"그리스","Greece","그리스의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-hr","plate",45.4,16.3,250,1000,{t:"plate"},"크로아티아","Croatia","크로아티아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-si","plate",46.1,14.8,140,700,{t:"plate"},"슬로베니아","Slovenia","슬로베니아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-rs","plate",44.2,20.9,280,1000,{t:"plate"},"세르비아","Serbia","세르비아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ua","plate",49.4,31.2,450,1400,{t:"plate"},"우크라이나","Ukraine","우크라이나의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-by","plate",53.7,27.9,350,1200,{t:"plate"},"벨라루스","Belarus","벨라루스의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ru","plate",55.5,45.0,900,2000,{t:"plate"},"러시아","Russia","러시아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-lt","plate",55.3,23.9,180,800,{t:"plate"},"리투아니아","Lithuania","리투아니아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-lv","plate",56.9,24.6,160,700,{t:"plate"},"라트비아","Latvia","라트비아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ee","plate",58.7,25.5,160,700,{t:"plate"},"에스토니아","Estonia","에스토니아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-fi","plate",64.0,26.0,450,1400,{t:"plate"},"핀란드","Finland","핀란드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-se","plate",62.0,15.0,450,1400,{t:"plate"},"스웨덴","Sweden","스웨덴의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-no","plate",61.5,9.0,400,1300,{t:"plate"},"노르웨이","Norway","노르웨이의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-dk","plate",55.9,9.8,180,800,{t:"plate"},"덴마크","Denmark","덴마크의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-is","plate",64.9,-18.6,250,1000,{t:"plate"},"아이슬란드","Iceland","아이슬란드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ie","plate",53.3,-7.7,200,900,{t:"plate"},"아일랜드","Ireland","아일랜드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-uk","plate",52.6,-1.5,420,1300,{t:"plate"},"영국","United Kingdom","영국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-tr","plate",39.0,35.2,500,1400,{t:"plate"},"튀르키예","Türkiye","튀르키예의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ge","plate",42.0,43.5,250,1000,{t:"plate"},"조지아","Georgia","조지아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-il","plate",31.5,34.9,180,800,{t:"plate"},"이스라엘","Israel","이스라엘의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-jp","plate",36.2,138.3,450,1400,{t:"plate"},"일본","Japan","일본의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-kr","plate",36.5,127.8,300,900,{t:"plate"},"대한민국","South Korea","대한민국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-tw","plate",23.8,121.0,200,900,{t:"plate"},"대만","Taiwan","대만의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-hk","plate",22.32,114.17,60,500,{t:"plate"},"홍콩","Hong Kong","홍콩의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-th","plate",15.5,101.0,450,1400,{t:"plate"},"태국","Thailand","태국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-vn","plate",16.0,107.8,400,1300,{t:"plate"},"베트남","Vietnam","베트남의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-my","plate",3.9,102.0,350,1000,{t:"plate"},"말레이시아","Malaysia","말레이시아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-id","plate",-2.5,118.0,900,2200,{t:"plate"},"인도네시아","Indonesia","인도네시아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ph","plate",12.8,121.8,400,1300,{t:"plate"},"필리핀","Philippines","필리핀의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-sg","plate",1.35,103.82,30,400,{t:"plate"},"싱가포르","Singapore","싱가포르의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-in","plate",22.5,79.0,700,1800,{t:"plate"},"인도","India","인도의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-lk","plate",7.5,80.7,200,900,{t:"plate"},"스리랑카","Sri Lanka","스리랑카의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-cn","plate",35.0,105.0,900,2200,{t:"plate"},"중국","China","중국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-mn","plate",47.9,106.9,600,1600,{t:"plate"},"몽골","Mongolia","몽골의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-kz","plate",48.0,66.9,700,1800,{t:"plate"},"카자흐스탄","Kazakhstan","카자흐스탄의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-us","plate",39.8,-98.6,1200,2400,{t:"plate"},"미국","United States","미국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ca","plate",56.0,-106.0,1500,2800,{t:"plate"},"캐나다","Canada","캐나다의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-mx","plate",23.6,-102.5,600,1600,{t:"plate"},"멕시코","Mexico","멕시코의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-br","plate",-10.8,-52.9,900,2200,{t:"plate"},"브라질","Brazil","브라질의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ar","plate",-34.6,-64.0,600,1600,{t:"plate"},"아르헨티나","Argentina","아르헨티나의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-cl","plate",-35.7,-71.5,400,1300,{t:"plate"},"칠레","Chile","칠레의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-co","plate",4.6,-73.1,450,1400,{t:"plate"},"콜롬비아","Colombia","콜롬비아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-pe","plate",-9.2,-75.0,500,1500,{t:"plate"},"페루","Peru","페루의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ec","plate",-1.8,-78.2,300,1100,{t:"plate"},"에콰도르","Ecuador","에콰도르의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-uy","plate",-32.6,-55.9,300,1100,{t:"plate"},"우루과이","Uruguay","우루과이의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-bo","plate",-16.7,-64.7,400,1300,{t:"plate"},"볼리비아","Bolivia","볼리비아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-py","plate",-23.4,-58.4,350,1200,{t:"plate"},"파라과이","Paraguay","파라과이의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-au","plate",-25.5,134.5,900,2200,{t:"plate"},"호주","Australia","호주의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-nz","plate",-41.5,172.8,400,1300,{t:"plate"},"뉴질랜드","New Zealand","뉴질랜드의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-za","plate",-29.0,25.0,500,1500,{t:"plate"},"남아프리카 공화국","South Africa","남아프리카 공화국의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ke","plate",0.2,37.9,450,1400,{t:"plate"},"케냐","Kenya","케냐의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ng","plate",9.1,8.7,500,1500,{t:"plate"},"나이지리아","Nigeria","나이지리아의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-gh","plate",7.9,-1.2,300,1100,{t:"plate"},"가나","Ghana","가나의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-eg","plate",26.8,30.8,500,1500,{t:"plate"},"이집트","Egypt","이집트의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-ma","plate",31.8,-7.1,400,1300,{t:"plate"},"모로코","Morocco","모로코의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("lp-tn","plate",34.1,9.6,300,1100,{t:"plate"},"튀니지","Tunisia","튀니지의 자동차 번호판입니다. 국가 코드·국명 표기, 바탕색, 글자 형식으로 확인하세요(차종·연식에 따라 형태가 다양).");
T("rs-fr","sign",46.6,2.4,350,1200,{t:"sign"},"프랑스","France","프랑스의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-de","sign",51.1,10.4,350,1200,{t:"sign"},"독일","Germany","독일의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-it","sign",42.8,12.5,380,1200,{t:"sign"},"이탈리아","Italy","이탈리아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-es","sign",40.2,-3.5,380,1200,{t:"sign"},"스페인","Spain","스페인의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-pt","sign",39.6,-8.0,220,900,{t:"sign"},"포르투갈","Portugal","포르투갈의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-nl","sign",52.2,5.3,180,800,{t:"sign"},"네덜란드","Netherlands","네덜란드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-be","sign",50.6,4.6,160,700,{t:"sign"},"벨기에","Belgium","벨기에의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ch","sign",46.8,8.2,180,800,{t:"sign"},"스위스","Switzerland","스위스의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-at","sign",47.6,14.1,250,1000,{t:"sign"},"오스트리아","Austria","오스트리아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-pl","sign",52.1,19.4,320,1100,{t:"sign"},"폴란드","Poland","폴란드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-cz","sign",49.8,15.4,220,900,{t:"sign"},"체코","Czechia","체코의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-sk","sign",48.7,19.7,200,900,{t:"sign"},"슬로바키아","Slovakia","슬로바키아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-hu","sign",47.2,19.4,220,900,{t:"sign"},"헝가리","Hungary","헝가리의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ro","sign",45.9,24.9,320,1100,{t:"sign"},"루마니아","Romania","루마니아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-bg","sign",42.7,25.3,300,1100,{t:"sign"},"불가리아","Bulgaria","불가리아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-gr","sign",39.1,22.9,350,1200,{t:"sign"},"그리스","Greece","그리스의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-hr","sign",45.4,16.3,250,1000,{t:"sign"},"크로아티아","Croatia","크로아티아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-si","sign",46.1,14.8,140,700,{t:"sign"},"슬로베니아","Slovenia","슬로베니아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-rs","sign",44.2,20.9,280,1000,{t:"sign"},"세르비아","Serbia","세르비아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ua","sign",49.4,31.2,450,1400,{t:"sign"},"우크라이나","Ukraine","우크라이나의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ru","sign",55.5,45.0,900,2000,{t:"sign"},"러시아","Russia","러시아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-fi","sign",64.0,26.0,450,1400,{t:"sign"},"핀란드","Finland","핀란드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-se","sign",62.0,15.0,450,1400,{t:"sign"},"스웨덴","Sweden","스웨덴의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-no","sign",61.5,9.0,400,1300,{t:"sign"},"노르웨이","Norway","노르웨이의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-dk","sign",55.9,9.8,180,800,{t:"sign"},"덴마크","Denmark","덴마크의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-is","sign",64.9,-18.6,250,1000,{t:"sign"},"아이슬란드","Iceland","아이슬란드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ie","sign",53.3,-7.7,200,900,{t:"sign"},"아일랜드","Ireland","아일랜드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-uk","sign",52.6,-1.5,420,1300,{t:"sign"},"영국","United Kingdom","영국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-tr","sign",39.0,35.2,500,1400,{t:"sign"},"튀르키예","Türkiye","튀르키예의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-il","sign",31.5,34.9,180,800,{t:"sign"},"이스라엘","Israel","이스라엘의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-jp","sign",36.2,138.3,450,1400,{t:"sign"},"일본","Japan","일본의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-kr","sign",36.5,127.8,300,900,{t:"sign"},"대한민국","South Korea","대한민국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-tw","sign",23.8,121.0,200,900,{t:"sign"},"대만","Taiwan","대만의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-th","sign",15.5,101.0,450,1400,{t:"sign"},"태국","Thailand","태국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-vn","sign",16.0,107.8,400,1300,{t:"sign"},"베트남","Vietnam","베트남의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-my","sign",3.9,102.0,350,1000,{t:"sign"},"말레이시아","Malaysia","말레이시아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-id","sign",-2.5,118.0,900,2200,{t:"sign"},"인도네시아","Indonesia","인도네시아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-in","sign",22.5,79.0,700,1800,{t:"sign"},"인도","India","인도의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-cn","sign",35.0,105.0,900,2200,{t:"sign"},"중국","China","중국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-us","sign",39.8,-98.6,1200,2400,{t:"sign"},"미국","United States","미국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ca","sign",56.0,-106.0,1500,2800,{t:"sign"},"캐나다","Canada","캐나다의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-mx","sign",23.6,-102.5,600,1600,{t:"sign"},"멕시코","Mexico","멕시코의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-br","sign",-10.8,-52.9,900,2200,{t:"sign"},"브라질","Brazil","브라질의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ar","sign",-34.6,-64.0,600,1600,{t:"sign"},"아르헨티나","Argentina","아르헨티나의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-cl","sign",-35.7,-71.5,400,1300,{t:"sign"},"칠레","Chile","칠레의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-co","sign",4.6,-73.1,450,1400,{t:"sign"},"콜롬비아","Colombia","콜롬비아의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-pe","sign",-9.2,-75.0,500,1500,{t:"sign"},"페루","Peru","페루의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-au","sign",-25.5,134.5,900,2200,{t:"sign"},"호주","Australia","호주의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-nz","sign",-41.5,172.8,400,1300,{t:"sign"},"뉴질랜드","New Zealand","뉴질랜드의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-za","sign",-29.0,25.0,500,1500,{t:"sign"},"남아프리카 공화국","South Africa","남아프리카 공화국의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ke","sign",0.2,37.9,450,1400,{t:"sign"},"케냐","Kenya","케냐의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-eg","sign",26.8,30.8,500,1500,{t:"sign"},"이집트","Egypt","이집트의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("rs-ma","sign",31.8,-7.1,400,1300,{t:"sign"},"모로코","Morocco","모로코의 도로 표지판입니다. 표기 언어와 표지 디자인(모양·색·픽토그램)으로 나라를 판단하세요.");
T("up-ro","pole",45.9,24.9,320,1100,{t:"pole"},"루마니아","Romania","루마니아 전봇대는 둥근 구멍이 세로로 뚫린 콘크리트 기둥이 대표적입니다. 사다리처럼 규칙적으로 뚫린 구멍이 결정적 단서이고, 상단에 짧은 금속 크로스암과 흰색·회색 애자가 달립니다. 헝가리·불가리아에도 비슷한 구멍 기둥이 있으니 도로명 언어(Strada)와 함께 확인하세요.");
T("up-br","pole",-10.8,-52.9,900,2200,{t:"pole"},"브라질","Brazil","브라질 전봇대는 단면이 둥글거나 사각인 회색 콘크리트 기둥이 압도적으로 많습니다. 도심에서는 통신선까지 뒤엉켜 전선 다발이 매우 지저분하고, 원통형 변압기가 기둥 중간에 자주 매달립니다. 기둥 아래쪽에 흰 페인트나 광고 스티커가 붙은 것도 흔합니다.");
T("up-jp","pole",36.2,138.3,450,1400,{t:"pole"},"일본","Japan","일본 전봇대는 회색 콘크리트 원기둥이며 위로 갈수록 가늘어집니다. 아랫부분에 노란색 보호 커버가 감긴 경우가 많고, 기둥에 세로형 광고판·주소 표찰이 붙습니다. 전선이 매우 많고 변압기가 원통형으로 높이 달리며, 한국과 달리 기둥에 번호 표찰이 촘촘합니다.");
T("up-us","pole",39.8,-98.6,1200,2400,{t:"pole"},"미국","United States","미국 전봇대는 갈색 원목(방부목) 기둥이 기본입니다. 상단에 나무 또는 금속 크로스암이 가로로 뻗고 회색·검은 애자가 얹힙니다. 기둥에 금속 태그와 스테이플 자국이 많고, 통신선이 낮은 위치에 별도로 지나갑니다. 캐나다와 매우 비슷해 표지판 언어로 구분하세요.");
T("up-ca","pole",56.0,-106.0,1500,2800,{t:"pole"},"캐나다","Canada","캐나다 전봇대는 미국과 거의 같은 원목 기둥 + 크로스암 형태입니다. 구분이 어려우므로 주변의 표지판(MAXIMUM 속도 표지, 프랑스어 병기) 같은 다른 단서와 반드시 조합해야 합니다.");
T("up-mx","pole",23.6,-102.5,600,1600,{t:"pole"},"멕시코","Mexico","멕시코 전봇대는 콘크리트 기둥과 원목 기둥이 섞여 나타납니다. 도심에서는 전선이 매우 어지럽고, 기둥에 정치 구호나 광고 페인트가 칠해진 경우가 많습니다.");
T("up-in","pole",22.5,79.0,700,1800,{t:"pole"},"인도","India","인도 전봇대는 회색 콘크리트 각기둥이 흔하고, 단면이 사각이거나 H형(이중 기둥)인 것이 특징입니다. 전선이 낮게 늘어지고 불법 인입선이 뒤엉킨 모습이 자주 보입니다.");
T("up-id","pole",-2.5,118.0,900,2200,{t:"pole"},"인도네시아","Indonesia","인도네시아 전봇대는 원형 콘크리트 기둥이 주를 이루며, 도심에서는 통신선 다발이 굵게 늘어져 아래로 처집니다. 기둥에 광고 현수막·스티커가 붙는 경우가 많습니다.");
T("up-th","pole",15.5,101.0,450,1400,{t:"pole"},"태국","Thailand","태국 전봇대는 사각 단면의 콘크리트 기둥이 매우 특징적입니다. 위로 갈수록 얇아지는 각진 기둥에, 전선과 통신선이 뭉텅이로 감긴 모습이 흔합니다. 방콕 도심의 극단적으로 엉킨 전선 다발은 태국의 상징적 장면입니다.");
T("up-vn","pole",16.0,107.8,400,1300,{t:"pole"},"베트남","Vietnam","베트남 전봇대는 사각 또는 원형 콘크리트 기둥이며, 전선·통신선이 매우 조밀하게 뭉쳐 있습니다. 태국과 비슷하니 도로명 표기(Đường)와 함께 판단하세요.");
T("up-ph","pole",12.8,121.8,400,1300,{t:"pole"},"필리핀","Philippines","필리핀 전봇대는 콘크리트 기둥과 원목 기둥이 혼재하고, 전선이 낮고 어지럽게 늘어집니다. 영어 간판이 많아 다른 동남아 국가와 구분됩니다.");
T("up-kr","pole",36.5,127.8,300,900,{t:"pole"},"대한민국","South Korea","한국 전봇대는 회색 콘크리트 원기둥으로 위로 갈수록 가늘어집니다. 상단에 짧은 금속 완철(크로스암)과 회색 애자가 달리고, 기둥에 흰 바탕의 전주번호 표찰이 붙습니다. 일본과 비슷하나 한국은 노란 보호 커버가 드물고 전선 정리가 상대적으로 깔끔합니다.");
T("up-tw","pole",23.8,121.0,200,900,{t:"pole"},"대만","Taiwan","대만 전봇대는 콘크리트 원기둥이 일반적이며 전선 밀도가 높습니다. 기둥에 번체 한자 표찰이 붙고, 일본과 유사하지만 간판의 번체 한자로 구분할 수 있습니다.");
T("up-ru","pole",55.5,45.0,900,2000,{t:"pole"},"러시아","Russia","러시아 전봇대는 회색 콘크리트 기둥이 많고, 지역에 따라 원목 기둥도 나타납니다. 상단 크로스암이 길고 애자가 큼직하며, 시베리아·극동에서는 목재 기둥 비중이 올라갑니다.");
T("up-ua","pole",49.4,31.2,450,1400,{t:"pole"},"우크라이나","Ukraine","우크라이나 전봇대는 러시아와 유사한 콘크리트 기둥이 주류입니다. 키릴 문자 표지판과 함께 판단하세요.");
T("up-pl","pole",52.1,19.4,320,1100,{t:"pole"},"폴란드","Poland","폴란드 전봇대는 콘크리트 기둥이 흔하며, 농촌에서는 A자형으로 두 기둥을 붙인 형태도 보입니다. 상단 애자 배치가 단정한 편입니다.");
T("up-gr","pole",39.1,22.9,350,1200,{t:"pole"},"그리스","Greece","그리스 전봇대는 콘크리트 기둥이 대부분이고, 섬 지역에서는 흰 벽 건물과 함께 나타납니다. 그리스 문자 표지판과 조합해 판단하세요.");
T("up-tr","pole",39.0,35.2,500,1400,{t:"pole"},"튀르키예","Türkiye","튀르키예 전봇대는 콘크리트 기둥이 많고 도심에서는 철제 기둥도 보입니다. 튀르키예어 간판과 함께 확인하세요.");
T("up-za","pole",-29.0,25.0,500,1500,{t:"pole"},"남아프리카 공화국","South Africa","남아프리카 공화국 전봇대는 가공하지 않은 통나무 느낌의 목재 기둥이 특징입니다. 미국식 크로스암 대신 기둥 꼭대기에 애자를 직접 얹거나 짧은 금속 브래킷을 쓰는 경우가 많고, 초록빛 유리·자기 애자가 눈에 띕니다. 광활한 초원·관목 지형과 함께 나타나는 것이 전형적입니다.");
T("up-ke","pole",0.2,37.9,450,1400,{t:"pole"},"케냐","Kenya","케냐 전봇대는 콘크리트 기둥과 목재 기둥이 혼재합니다. 붉은 흙길, 좌측통행과 함께 나타나는 것이 전형적입니다.");
T("up-ng","pole",9.1,8.7,500,1500,{t:"pole"},"나이지리아","Nigeria","나이지리아 전봇대는 콘크리트 기둥이 많고 전선이 낮게 늘어집니다. 도로변 상점 간판의 영어 표기와 함께 판단하세요.");
T("up-gh","pole",7.9,-1.2,300,1100,{t:"pole"},"가나","Ghana","가나 전봇대는 콘크리트 기둥이 흔하며, 도심에서는 전선이 복잡합니다. 영어 간판과 좌측이 아닌 우측통행으로 주변 국가와 구분하세요.");
T("up-ar","pole",-34.6,-64.0,600,1600,{t:"pole"},"아르헨티나","Argentina","아르헨티나 전봇대는 콘크리트 기둥이 주류이며, 시골에서는 목재 기둥도 나타납니다. 스페인어 표지판과 함께 판단하세요.");
T("up-cl","pole",-35.7,-71.5,400,1300,{t:"pole"},"칠레","Chile","칠레 전봇대는 콘크리트 기둥이 많고, 안데스 산맥을 배경으로 한 좁고 긴 국토 특성상 지형이 좋은 보조 단서가 됩니다.");
T("up-co","pole",4.6,-73.1,450,1400,{t:"pole"},"콜롬비아","Colombia","콜롬비아 전봇대는 콘크리트 기둥이 흔하고 도심의 전선이 어지럽습니다. 노란 번호판·스페인어 간판과 함께 확인하세요.");
T("up-pe","pole",-9.2,-75.0,500,1500,{t:"pole"},"페루","Peru","페루 전봇대는 콘크리트 기둥이 대부분이며, 해안 사막·안데스 고산 등 지형 대비가 큽니다. 스페인어 간판과 조합해 판단하세요.");
T("st-br","sign",-10.8,-52.9,900,2200,{t:"sign"},"브라질","Brazil","브라질의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-mx","sign",23.6,-102.5,600,1600,{t:"sign"},"멕시코","Mexico","멕시코의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-ar","sign",-34.6,-64.0,600,1600,{t:"sign"},"아르헨티나","Argentina","아르헨티나의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-cl","sign",-35.7,-71.5,400,1300,{t:"sign"},"칠레","Chile","칠레의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-co","sign",4.6,-73.1,450,1400,{t:"sign"},"콜롬비아","Colombia","콜롬비아의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-pe","sign",-9.2,-75.0,500,1500,{t:"sign"},"페루","Peru","페루의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-ec","sign",-1.8,-78.2,300,1100,{t:"sign"},"에콰도르","Ecuador","에콰도르의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-uy","sign",-32.6,-55.9,300,1100,{t:"sign"},"우루과이","Uruguay","우루과이의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-bo","sign",-16.7,-64.7,400,1300,{t:"sign"},"볼리비아","Bolivia","볼리비아의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-py","sign",-23.4,-58.4,350,1200,{t:"sign"},"파라과이","Paraguay","파라과이의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-us","sign",39.8,-98.6,1200,2400,{t:"sign"},"미국","United States","미국의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-ca","sign",56.0,-106.0,1500,2800,{t:"sign"},"캐나다","Canada","캐나다의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-fr","sign",46.6,2.4,350,1200,{t:"sign"},"프랑스","France","프랑스의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-de","sign",51.1,10.4,350,1200,{t:"sign"},"독일","Germany","독일의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-it","sign",42.8,12.5,380,1200,{t:"sign"},"이탈리아","Italy","이탈리아의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-es","sign",40.2,-3.5,380,1200,{t:"sign"},"스페인","Spain","스페인의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-pt","sign",39.6,-8.0,220,900,{t:"sign"},"포르투갈","Portugal","포르투갈의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-nl","sign",52.2,5.3,180,800,{t:"sign"},"네덜란드","Netherlands","네덜란드의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-pl","sign",52.1,19.4,320,1100,{t:"sign"},"폴란드","Poland","폴란드의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-tr","sign",39.0,35.2,500,1400,{t:"sign"},"튀르키예","Türkiye","튀르키예의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-gr","sign",39.1,22.9,350,1200,{t:"sign"},"그리스","Greece","그리스의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-il","sign",31.5,34.9,180,800,{t:"sign"},"이스라엘","Israel","이스라엘의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-jp","sign",36.2,138.3,450,1400,{t:"sign"},"일본","Japan","일본의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-kr","sign",36.5,127.8,300,900,{t:"sign"},"대한민국","South Korea","대한민국의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-th","sign",15.5,101.0,450,1400,{t:"sign"},"태국","Thailand","태국의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-in","sign",22.5,79.0,700,1800,{t:"sign"},"인도","India","인도의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-id","sign",-2.5,118.0,900,2200,{t:"sign"},"인도네시아","Indonesia","인도네시아의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-my","sign",3.9,102.0,350,1000,{t:"sign"},"말레이시아","Malaysia","말레이시아의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-au","sign",-25.5,134.5,900,2200,{t:"sign"},"호주","Australia","호주의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-nz","sign",-41.5,172.8,400,1300,{t:"sign"},"뉴질랜드","New Zealand","뉴질랜드의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-za","sign",-29.0,25.0,500,1500,{t:"sign"},"남아프리카 공화국","South Africa","남아프리카 공화국의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-eg","sign",26.8,30.8,500,1500,{t:"sign"},"이집트","Egypt","이집트의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("st-ma","sign",31.8,-7.1,400,1300,{t:"sign"},"모로코","Morocco","모로코의 정지 표지입니다. 표기 단어(STOP·PARE·ALTO·ARRÊT 등)와 언어로 지역을 좁히세요.");
T("rm-us","road",39.8,-98.6,1200,2400,{t:"road"},"미국","United States","미국의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ca","road",56.0,-106.0,1500,2800,{t:"road"},"캐나다","Canada","캐나다의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-mx","road",23.6,-102.5,600,1600,{t:"road"},"멕시코","Mexico","멕시코의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-br","road",-10.8,-52.9,900,2200,{t:"road"},"브라질","Brazil","브라질의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ar","road",-34.6,-64.0,600,1600,{t:"road"},"아르헨티나","Argentina","아르헨티나의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-cl","road",-35.7,-71.5,400,1300,{t:"road"},"칠레","Chile","칠레의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-uk","road",52.6,-1.5,420,1300,{t:"road"},"영국","United Kingdom","영국의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ie","road",53.3,-7.7,200,900,{t:"road"},"아일랜드","Ireland","아일랜드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-fr","road",46.6,2.4,350,1200,{t:"road"},"프랑스","France","프랑스의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-de","road",51.1,10.4,350,1200,{t:"road"},"독일","Germany","독일의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-it","road",42.8,12.5,380,1200,{t:"road"},"이탈리아","Italy","이탈리아의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-es","road",40.2,-3.5,380,1200,{t:"road"},"스페인","Spain","스페인의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-pt","road",39.6,-8.0,220,900,{t:"road"},"포르투갈","Portugal","포르투갈의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-nl","road",52.2,5.3,180,800,{t:"road"},"네덜란드","Netherlands","네덜란드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-be","road",50.6,4.6,160,700,{t:"road"},"벨기에","Belgium","벨기에의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-pl","road",52.1,19.4,320,1100,{t:"road"},"폴란드","Poland","폴란드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-cz","road",49.8,15.4,220,900,{t:"road"},"체코","Czechia","체코의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-hu","road",47.2,19.4,220,900,{t:"road"},"헝가리","Hungary","헝가리의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ro","road",45.9,24.9,320,1100,{t:"road"},"루마니아","Romania","루마니아의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-gr","road",39.1,22.9,350,1200,{t:"road"},"그리스","Greece","그리스의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-tr","road",39.0,35.2,500,1400,{t:"road"},"튀르키예","Türkiye","튀르키예의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ru","road",55.5,45.0,900,2000,{t:"road"},"러시아","Russia","러시아의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-ua","road",49.4,31.2,450,1400,{t:"road"},"우크라이나","Ukraine","우크라이나의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-fi","road",64.0,26.0,450,1400,{t:"road"},"핀란드","Finland","핀란드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-se","road",62.0,15.0,450,1400,{t:"road"},"스웨덴","Sweden","스웨덴의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-no","road",61.5,9.0,400,1300,{t:"road"},"노르웨이","Norway","노르웨이의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-dk","road",55.9,9.8,180,800,{t:"road"},"덴마크","Denmark","덴마크의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-is","road",64.9,-18.6,250,1000,{t:"road"},"아이슬란드","Iceland","아이슬란드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-jp","road",36.2,138.3,450,1400,{t:"road"},"일본","Japan","일본의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-kr","road",36.5,127.8,300,900,{t:"road"},"대한민국","South Korea","대한민국의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-tw","road",23.8,121.0,200,900,{t:"road"},"대만","Taiwan","대만의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-th","road",15.5,101.0,450,1400,{t:"road"},"태국","Thailand","태국의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-in","road",22.5,79.0,700,1800,{t:"road"},"인도","India","인도의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-id","road",-2.5,118.0,900,2200,{t:"road"},"인도네시아","Indonesia","인도네시아의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-my","road",3.9,102.0,350,1000,{t:"road"},"말레이시아","Malaysia","말레이시아의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-au","road",-25.5,134.5,900,2200,{t:"road"},"호주","Australia","호주의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-nz","road",-41.5,172.8,400,1300,{t:"road"},"뉴질랜드","New Zealand","뉴질랜드의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
T("rm-za","road",-29.0,25.0,500,1500,{t:"road"},"남아프리카 공화국","South Africa","남아프리카 공화국의 도로 노면표시입니다. 중앙선·가장자리선 색(흰색/노란색)과 통행 방향으로 지역을 좁히세요.");
TF("fg-fr",46.6,2.4,350,1200,"fr","프랑스","France","프랑스의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-de",51.1,10.4,350,1200,"de","독일","Germany","독일의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-it",42.8,12.5,380,1200,"it","이탈리아","Italy","이탈리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-es",40.2,-3.5,380,1200,"es","스페인","Spain","스페인의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-pt",39.6,-8.0,220,900,"pt","포르투갈","Portugal","포르투갈의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-be",50.6,4.6,160,700,"be","벨기에","Belgium","벨기에의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ch",46.8,8.2,180,800,"ch","스위스","Switzerland","스위스의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-at",47.6,14.1,250,1000,"at","오스트리아","Austria","오스트리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-cz",49.8,15.4,220,900,"cz","체코","Czechia","체코의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hu",47.2,19.4,220,900,"hu","헝가리","Hungary","헝가리의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-bg",42.7,25.3,300,1100,"bg","불가리아","Bulgaria","불가리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hr",45.4,16.3,250,1000,"hr","크로아티아","Croatia","크로아티아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-rs",44.2,20.9,280,1000,"rs","세르비아","Serbia","세르비아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ba",44.2,17.8,200,900,"ba","보스니아 헤르체고비나","Bosnia and Herzegovina","보스니아 헤르체고비나의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-mk",41.6,21.7,200,900,"mk","북마케도니아","North Macedonia","북마케도니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-al",41.1,20.1,200,900,"al","알바니아","Albania","알바니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-me",42.8,19.3,120,700,"me","몬테네그로","Montenegro","몬테네그로의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ua",49.4,31.2,450,1400,"ua","우크라이나","Ukraine","우크라이나의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-by",53.7,27.9,350,1200,"by","벨라루스","Belarus","벨라루스의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ru",55.5,45.0,900,2000,"ru","러시아","Russia","러시아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-lt",55.3,23.9,180,800,"lt","리투아니아","Lithuania","리투아니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-lv",56.9,24.6,160,700,"lv","라트비아","Latvia","라트비아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ee",58.7,25.5,160,700,"ee","에스토니아","Estonia","에스토니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-uk",52.6,-1.5,420,1300,"gb","영국","United Kingdom","영국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ge",42.0,43.5,250,1000,"ge","조지아","Georgia","조지아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-am",40.3,44.9,200,900,"am","아르메니아","Armenia","아르메니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-az",40.3,47.7,250,1000,"az","아제르바이잔","Azerbaijan","아제르바이잔의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-il",31.5,34.9,180,800,"il","이스라엘","Israel","이스라엘의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-jp",36.2,138.3,450,1400,"jp","일본","Japan","일본의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-kr",36.5,127.8,300,900,"kr","대한민국","South Korea","대한민국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-tw",23.8,121.0,200,900,"tw","대만","Taiwan","대만의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hk",22.32,114.17,60,500,"hk","홍콩","Hong Kong","홍콩의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-vn",16.0,107.8,400,1300,"vn","베트남","Vietnam","베트남의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ph",12.8,121.8,400,1300,"ph","필리핀","Philippines","필리핀의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-sg",1.35,103.82,30,400,"sg","싱가포르","Singapore","싱가포르의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-in",22.5,79.0,700,1800,"in","인도","India","인도의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-lk",7.5,80.7,200,900,"lk","스리랑카","Sri Lanka","스리랑카의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-np",28.3,84.1,200,900,"np","네팔","Nepal","네팔의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-cn",35.0,105.0,900,2200,"cn","중국","China","중국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-mn",47.9,106.9,600,1600,"mn","몽골","Mongolia","몽골의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-kz",48.0,66.9,700,1800,"kz","카자흐스탄","Kazakhstan","카자흐스탄의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-us",39.8,-98.6,1200,2400,"us","미국","United States","미국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ca",56.0,-106.0,1500,2800,"ca","캐나다","Canada","캐나다의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-mx",23.6,-102.5,600,1600,"mx","멕시코","Mexico","멕시코의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-br",-10.8,-52.9,900,2200,"br","브라질","Brazil","브라질의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-cl",-35.7,-71.5,400,1300,"cl","칠레","Chile","칠레의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-pe",-9.2,-75.0,500,1500,"pe","페루","Peru","페루의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-bo",-16.7,-64.7,400,1300,"bo","볼리비아","Bolivia","볼리비아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-py",-23.4,-58.4,350,1200,"py","파라과이","Paraguay","파라과이의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-za",-29.0,25.0,500,1500,"za","남아프리카 공화국","South Africa","남아프리카 공화국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ke",0.2,37.9,450,1400,"ke","케냐","Kenya","케냐의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ng",9.1,8.7,500,1500,"ng","나이지리아","Nigeria","나이지리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-gh",7.9,-1.2,300,1100,"gh","가나","Ghana","가나의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-eg",26.8,30.8,500,1500,"eg","이집트","Egypt","이집트의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ma",31.8,-7.1,400,1300,"ma","모로코","Morocco","모로코의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-tn",34.1,9.6,300,1100,"tn","튀니지","Tunisia","튀니지의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-sn",14.5,-14.5,300,1100,"sn","세네갈","Senegal","세네갈의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-tz",-6.4,34.9,450,1400,"tz","탄자니아","Tanzania","탄자니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ug",1.4,32.3,250,1000,"ug","우간다","Uganda","우간다의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-bw",-22.3,24.7,400,1300,"bw","보츠와나","Botswana","보츠와나의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");

