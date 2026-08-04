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
    nickPrompt:"닉네임을 입력하세요 (최대 10자)",dailyDone:"오늘의 챌린지 완료! 내일 다시 도전하세요.",
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
    nickPrompt:"Enter a nickname (max 10 chars)",dailyDone:"Daily done! Come back tomorrow.",
    win:"Victory! 🏆",lose:"Defeat…",draw:"Draw!",oppLeft:"Opponent left",noRoom:"Room not found",roomFull:"Room is full",
    timeout:"Time's up!",all:"All categories",distKm:"km away",leaderboard:"Today's ranking"}
};
const CATS = {
  bollard:{ko:"볼라드",en:"BOLLARD"}, plate:{ko:"번호판",en:"PLATE"}, platecode:{ko:"번호판 지역코드",en:"PLATE CODE"},
  lang:{ko:"언어 · 문자",en:"LANGUAGE"}, tld:{ko:"인터넷 도메인",en:"DOMAIN"}, phone:{ko:"전화 지역번호",en:"AREA CODE"},
  sign:{ko:"표지판",en:"SIGN"}, pole:{ko:"전봇대",en:"POLE"}, road:{ko:"도로 차선",en:"ROAD LINE"},
  car:{ko:"구글카",en:"GOOGLE CAR"}, flag:{ko:"국기",en:"FLAG"}
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
T("po-ro","pole",45.9,24.9,320,1100,{t:"pole",kind:"holes"},"🇷🇴 루마니아","🇷🇴 Romania","루마니아에서는 둥근 구멍이 뚫린 콘크리트 전봇대가 흔합니다(헝가리 등 인접국도 유사한 형태 존재).");
T("po-br","pole",-14,-52,900,2200,{t:"pole",kind:"concrete"},"🇧🇷 브라질","🇧🇷 Brazil","브라질에서는 원형 콘크리트 전봇대와 복잡하게 엉킨 전선 다발이 흔합니다.");
T("po-jp","pole",36.2,138.3,450,1400,{t:"pole",kind:"guard"},"🇯🇵 일본","🇯🇵 Japan","일본 전봇대는 아랫부분에 노란 보호 커버가 감긴 경우가 많습니다.");
T("po-us","pole",39.8,-98.6,1200,2400,{t:"pole",kind:"wood"},"🇺🇸 미국","🇺🇸 USA","북미(미국·캐나다)에서는 갈색 원목 전봇대와 가로 크로스암이 흔합니다.");

/* ── 도로 차선 ── */
T("rd-us","road",39.8,-98.6,1200,2600,{t:"road",center:["#f2b705","double"],edge:["#fff","solid"]},"🌎 아메리카 (미국 등)","🌎 Americas","아메리카 대륙은 도로 중앙선이 노란색인 경우가 많습니다(특히 이중 실선). 표지 언어로 나라를 좁히세요.");
T("rd-no","road",61.5,9.0,400,1300,{t:"road",center:["#f2b705","dash"],edge:["#fff","solid"]},"🇳🇴 노르웨이","🇳🇴 Norway","유럽에서 노란 중앙선이 보이면 노르웨이일 가능성이 큽니다(스웨덴·핀란드는 흰색).");
T("rd-ie","road",53.3,-7.7,250,1000,{t:"road",center:["#fff","dash"],edge:["#f2b705","dash"]},"🇮🇪 아일랜드","🇮🇪 Ireland","가장자리 선이 노란 점선이면 아일랜드입니다(영국은 흰 실선).");
T("rd-uk","road",52.6,-1.5,420,1300,{t:"road",curb:true},"🇬🇧 영국","🇬🇧 UK","영국은 도로 가장자리를 따라 노란 이중선(주차 규제)이 자주 보이고 좌측통행입니다.");

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
const COMMONS={
  "bo-fr":"Traffic bollards in France",
  "bo-de":"Traffic bollards in Germany",
  "bo-at":"Traffic bollards in Austria",
  "bo-cz":"Traffic bollards in the Czech Republic",
  "bo-it":"Traffic bollards in Italy",
  "bo-es":"Traffic bollards in Spain",
  "bo-pt":"Traffic bollards in Portugal",
  "bo-nl":"Traffic bollards in the Netherlands",
  "bo-pl":"Traffic bollards in Poland",
  "bo-hu":"Traffic bollards in Hungary",
  "bo-ro":"Traffic bollards in Romania",
  "bo-tr":"Traffic bollards in Turkey",
  "bo-ru":"Traffic bollards in Russia",
  "bo-ee":"Traffic bollards in Estonia",
  "bo-au":"Traffic bollards in Australia",
  "bo-is":"Traffic bollards in Iceland",
  "po-ro":"Utility poles in Romania",
  "po-br":"Utility poles in Brazil",
  "po-jp":"Utility poles in Japan",
  "po-us":"Utility poles in the United States",
  "sg-pare":"Stop signs in Brazil",
  "sg-alto":"Stop signs in Mexico",
  "sg-arret":"Stop signs in Quebec",
  "sg-us55":"Speed limit signs in the United States",
  "sg-max50":"Speed limit signs in Canada",
  "sg-mwy-it":"Motorway signs in Italy",
  "sg-mwy-fr":"Motorway signs in France",
  "sg-kanga":"Kangaroo warning signs",
  "sg-borne":"Kilometer posts in France",
  "rd-us":"Road markings in the United States",
  "rd-no":"Road markings in Norway",
  "rd-uk":"Road markings in the United Kingdom",
  "pl-nl":"License plates of the Netherlands",
  "pl-uk":"License plates of the United Kingdom",
  "pl-fr":"License plates of France",
  "pl-it":"License plates of Italy",
  "pl-ch":"License plates of Switzerland",
  "pl-ua":"License plates of Ukraine",
  "pl-co":"License plates of Colombia",
  "pl-ar":"License plates of Argentina",
  "pl-br":"License plates of Brazil",
  "pl-cl":"License plates of Chile",
  "pl-kr":"License plates of South Korea",
  "pl-my":"License plates of Malaysia",
  "pl-nz":"License plates of New Zealand",
  "lg-jp":"Street name signs in Japan",
  "lg-kr":"Street name signs in South Korea",
  "lg-hk":"Street name signs in Hong Kong",
  "lg-tw":"Street name signs in Taiwan",
  "lg-gr":"Street name signs in Greece",
  "lg-th":"Street name signs in Thailand",
  "lg-ru":"Street name signs in Russia",
  "lg-ge":"Street name signs in Georgia (country)",
  "lg-il":"Street name signs in Israel",
  "lg-vn":"Street name signs in Vietnam",
  "lg-de":"Street name signs in Germany",
  "lg-fr":"Street name signs in France",
  "lg-it":"Street name signs in Italy",
  "lg-es":"Street name signs in Spain",
  "lg-nl":"Street name signs in the Netherlands",
  "lg-pl":"Street name signs in Poland",
  "lg-cz":"Street name signs in the Czech Republic",
  "lg-ro":"Street name signs in Romania",
  "lg-tr":"Street name signs in Turkey",
  "lg-ua":"Street name signs in Ukraine",
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
T("up-ro","pole",45.9,24.9,320,1100,{t:"pole"},"루마니아","Romania","루마니아의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-br","pole",-10.8,-52.9,900,2200,{t:"pole"},"브라질","Brazil","브라질의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-jp","pole",36.2,138.3,450,1400,{t:"pole"},"일본","Japan","일본의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-us","pole",39.8,-98.6,1200,2400,{t:"pole"},"미국","United States","미국의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ca","pole",56.0,-106.0,1500,2800,{t:"pole"},"캐나다","Canada","캐나다의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-mx","pole",23.6,-102.5,600,1600,{t:"pole"},"멕시코","Mexico","멕시코의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-in","pole",22.5,79.0,700,1800,{t:"pole"},"인도","India","인도의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-id","pole",-2.5,118.0,900,2200,{t:"pole"},"인도네시아","Indonesia","인도네시아의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-th","pole",15.5,101.0,450,1400,{t:"pole"},"태국","Thailand","태국의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-vn","pole",16.0,107.8,400,1300,{t:"pole"},"베트남","Vietnam","베트남의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ph","pole",12.8,121.8,400,1300,{t:"pole"},"필리핀","Philippines","필리핀의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-kr","pole",36.5,127.8,300,900,{t:"pole"},"대한민국","South Korea","대한민국의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-tw","pole",23.8,121.0,200,900,{t:"pole"},"대만","Taiwan","대만의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ru","pole",55.5,45.0,900,2000,{t:"pole"},"러시아","Russia","러시아의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ua","pole",49.4,31.2,450,1400,{t:"pole"},"우크라이나","Ukraine","우크라이나의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-pl","pole",52.1,19.4,320,1100,{t:"pole"},"폴란드","Poland","폴란드의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-gr","pole",39.1,22.9,350,1200,{t:"pole"},"그리스","Greece","그리스의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-tr","pole",39.0,35.2,500,1400,{t:"pole"},"튀르키예","Türkiye","튀르키예의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-za","pole",-29.0,25.0,500,1500,{t:"pole"},"남아프리카 공화국","South Africa","남아프리카 공화국의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ke","pole",0.2,37.9,450,1400,{t:"pole"},"케냐","Kenya","케냐의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ng","pole",9.1,8.7,500,1500,{t:"pole"},"나이지리아","Nigeria","나이지리아의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-gh","pole",7.9,-1.2,300,1100,{t:"pole"},"가나","Ghana","가나의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-ar","pole",-34.6,-64.0,600,1600,{t:"pole"},"아르헨티나","Argentina","아르헨티나의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-cl","pole",-35.7,-71.5,400,1300,{t:"pole"},"칠레","Chile","칠레의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-co","pole",4.6,-73.1,450,1400,{t:"pole"},"콜롬비아","Colombia","콜롬비아의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
T("up-pe","pole",-9.2,-75.0,500,1500,{t:"pole"},"페루","Peru","페루의 전봇대입니다. 재질(목재·콘크리트·강관), 크로스암 모양, 전선 배치가 지역별로 다릅니다.");
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
TF("fg-nl",52.2,5.3,180,800,"nl","네덜란드","Netherlands","네덜란드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-be",50.6,4.6,160,700,"be","벨기에","Belgium","벨기에의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-lu",49.8,6.1,60,500,"lu","룩셈부르크","Luxembourg","룩셈부르크의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ch",46.8,8.2,180,800,"ch","스위스","Switzerland","스위스의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-at",47.6,14.1,250,1000,"at","오스트리아","Austria","오스트리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-pl",52.1,19.4,320,1100,"pl","폴란드","Poland","폴란드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-cz",49.8,15.4,220,900,"cz","체코","Czechia","체코의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-sk",48.7,19.7,200,900,"sk","슬로바키아","Slovakia","슬로바키아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hu",47.2,19.4,220,900,"hu","헝가리","Hungary","헝가리의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ro",45.9,24.9,320,1100,"ro","루마니아","Romania","루마니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-bg",42.7,25.3,300,1100,"bg","불가리아","Bulgaria","불가리아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-gr",39.1,22.9,350,1200,"gr","그리스","Greece","그리스의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hr",45.4,16.3,250,1000,"hr","크로아티아","Croatia","크로아티아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-si",46.1,14.8,140,700,"si","슬로베니아","Slovenia","슬로베니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
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
TF("fg-fi",64.0,26.0,450,1400,"fi","핀란드","Finland","핀란드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-se",62.0,15.0,450,1400,"se","스웨덴","Sweden","스웨덴의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-no",61.5,9.0,400,1300,"no","노르웨이","Norway","노르웨이의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-dk",55.9,9.8,180,800,"dk","덴마크","Denmark","덴마크의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-is",64.9,-18.6,250,1000,"is","아이슬란드","Iceland","아이슬란드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ie",53.3,-7.7,200,900,"ie","아일랜드","Ireland","아일랜드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-uk",52.6,-1.5,420,1300,"gb","영국","United Kingdom","영국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-tr",39.0,35.2,500,1400,"tr","튀르키예","Türkiye","튀르키예의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ge",42.0,43.5,250,1000,"ge","조지아","Georgia","조지아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-am",40.3,44.9,200,900,"am","아르메니아","Armenia","아르메니아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-az",40.3,47.7,250,1000,"az","아제르바이잔","Azerbaijan","아제르바이잔의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-il",31.5,34.9,180,800,"il","이스라엘","Israel","이스라엘의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-jp",36.2,138.3,450,1400,"jp","일본","Japan","일본의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-kr",36.5,127.8,300,900,"kr","대한민국","South Korea","대한민국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-tw",23.8,121.0,200,900,"tw","대만","Taiwan","대만의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-hk",22.32,114.17,60,500,"hk","홍콩","Hong Kong","홍콩의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-th",15.5,101.0,450,1400,"th","태국","Thailand","태국의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-vn",16.0,107.8,400,1300,"vn","베트남","Vietnam","베트남의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-my",3.9,102.0,350,1000,"my","말레이시아","Malaysia","말레이시아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-id",-2.5,118.0,900,2200,"id","인도네시아","Indonesia","인도네시아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
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
TF("fg-ar",-34.6,-64.0,600,1600,"ar","아르헨티나","Argentina","아르헨티나의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-cl",-35.7,-71.5,400,1300,"cl","칠레","Chile","칠레의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-co",4.6,-73.1,450,1400,"co","콜롬비아","Colombia","콜롬비아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-pe",-9.2,-75.0,500,1500,"pe","페루","Peru","페루의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-ec",-1.8,-78.2,300,1100,"ec","에콰도르","Ecuador","에콰도르의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-uy",-32.6,-55.9,300,1100,"uy","우루과이","Uruguay","우루과이의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-bo",-16.7,-64.7,400,1300,"bo","볼리비아","Bolivia","볼리비아의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-py",-23.4,-58.4,350,1200,"py","파라과이","Paraguay","파라과이의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-au",-25.5,134.5,900,2200,"au","호주","Australia","호주의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
TF("fg-nz",-41.5,172.8,400,1300,"nz","뉴질랜드","New Zealand","뉴질랜드의 국기입니다. 색 배열·문양·비율로 비슷한 국기와 구분하세요.");
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

Object.assign(COMMONS,{
 "sn-fr": "Street name signs in France",
 "sn-de": "Street name signs in Germany",
 "sn-it": "Street name signs in Italy",
 "sn-es": "Street name signs in Spain",
 "sn-pt": "Street name signs in Portugal",
 "sn-nl": "Street name signs in the Netherlands",
 "sn-be": "Street name signs in Belgium",
 "sn-lu": "Street name signs in Luxembourg",
 "sn-ch": "Street name signs in Switzerland",
 "sn-at": "Street name signs in Austria",
 "sn-pl": "Street name signs in Poland",
 "sn-cz": "Street name signs in the Czech Republic",
 "sn-sk": "Street name signs in Slovakia",
 "sn-hu": "Street name signs in Hungary",
 "sn-ro": "Street name signs in Romania",
 "sn-bg": "Street name signs in Bulgaria",
 "sn-gr": "Street name signs in Greece",
 "sn-hr": "Street name signs in Croatia",
 "sn-si": "Street name signs in Slovenia",
 "sn-rs": "Street name signs in Serbia",
 "sn-ba": "Street name signs in Bosnia and Herzegovina",
 "sn-mk": "Street name signs in North Macedonia",
 "sn-al": "Street name signs in Albania",
 "sn-me": "Street name signs in Montenegro",
 "sn-ua": "Street name signs in Ukraine",
 "sn-by": "Street name signs in Belarus",
 "sn-ru": "Street name signs in Russia",
 "sn-lt": "Street name signs in Lithuania",
 "sn-lv": "Street name signs in Latvia",
 "sn-ee": "Street name signs in Estonia",
 "sn-fi": "Street name signs in Finland",
 "sn-se": "Street name signs in Sweden",
 "sn-no": "Street name signs in Norway",
 "sn-dk": "Street name signs in Denmark",
 "sn-is": "Street name signs in Iceland",
 "sn-ie": "Street name signs in Ireland",
 "sn-uk": "Street name signs in the United Kingdom",
 "sn-tr": "Street name signs in Turkey",
 "sn-ge": "Street name signs in Georgia (country)",
 "sn-am": "Street name signs in Armenia",
 "sn-az": "Street name signs in Azerbaijan",
 "sn-il": "Street name signs in Israel",
 "sn-jp": "Street name signs in Japan",
 "sn-kr": "Street name signs in South Korea",
 "sn-tw": "Street name signs in Taiwan",
 "sn-hk": "Street name signs in Hong Kong",
 "sn-th": "Street name signs in Thailand",
 "sn-vn": "Street name signs in Vietnam",
 "sn-my": "Street name signs in Malaysia",
 "sn-id": "Street name signs in Indonesia",
 "sn-ph": "Street name signs in the Philippines",
 "sn-sg": "Street name signs in Singapore",
 "sn-in": "Street name signs in India",
 "sn-lk": "Street name signs in Sri Lanka",
 "sn-np": "Street name signs in Nepal",
 "sn-cn": "Street name signs in China",
 "sn-mn": "Street name signs in Mongolia",
 "sn-kz": "Street name signs in Kazakhstan",
 "sn-us": "Street name signs in the United States",
 "sn-ca": "Street name signs in Canada",
 "sn-mx": "Street name signs in Mexico",
 "sn-br": "Street name signs in Brazil",
 "sn-ar": "Street name signs in Argentina",
 "sn-cl": "Street name signs in Chile",
 "sn-co": "Street name signs in Colombia",
 "sn-pe": "Street name signs in Peru",
 "sn-ec": "Street name signs in Ecuador",
 "sn-uy": "Street name signs in Uruguay",
 "sn-bo": "Street name signs in Bolivia",
 "sn-py": "Street name signs in Paraguay",
 "sn-au": "Street name signs in Australia",
 "sn-nz": "Street name signs in New Zealand",
 "sn-za": "Street name signs in South Africa",
 "sn-ke": "Street name signs in Kenya",
 "sn-ng": "Street name signs in Nigeria",
 "sn-gh": "Street name signs in Ghana",
 "sn-eg": "Street name signs in Egypt",
 "sn-ma": "Street name signs in Morocco",
 "sn-tn": "Street name signs in Tunisia",
 "sn-sn": "Street name signs in Senegal",
 "sn-tz": "Street name signs in Tanzania",
 "sn-ug": "Street name signs in Uganda",
 "sn-bw": "Street name signs in Botswana",
 "bl-fr": "Traffic bollards in France",
 "bl-de": "Traffic bollards in Germany",
 "bl-at": "Traffic bollards in Austria",
 "bl-ch": "Traffic bollards in Switzerland",
 "bl-cz": "Traffic bollards in the Czech Republic",
 "bl-sk": "Traffic bollards in Slovakia",
 "bl-it": "Traffic bollards in Italy",
 "bl-es": "Traffic bollards in Spain",
 "bl-pt": "Traffic bollards in Portugal",
 "bl-nl": "Traffic bollards in the Netherlands",
 "bl-be": "Traffic bollards in Belgium",
 "bl-pl": "Traffic bollards in Poland",
 "bl-hu": "Traffic bollards in Hungary",
 "bl-ro": "Traffic bollards in Romania",
 "bl-bg": "Traffic bollards in Bulgaria",
 "bl-gr": "Traffic bollards in Greece",
 "bl-hr": "Traffic bollards in Croatia",
 "bl-si": "Traffic bollards in Slovenia",
 "bl-rs": "Traffic bollards in Serbia",
 "bl-ua": "Traffic bollards in Ukraine",
 "bl-ru": "Traffic bollards in Russia",
 "bl-lt": "Traffic bollards in Lithuania",
 "bl-lv": "Traffic bollards in Latvia",
 "bl-ee": "Traffic bollards in Estonia",
 "bl-fi": "Traffic bollards in Finland",
 "bl-se": "Traffic bollards in Sweden",
 "bl-no": "Traffic bollards in Norway",
 "bl-dk": "Traffic bollards in Denmark",
 "bl-is": "Traffic bollards in Iceland",
 "bl-ie": "Traffic bollards in Ireland",
 "bl-uk": "Traffic bollards in the United Kingdom",
 "bl-tr": "Traffic bollards in Turkey",
 "bl-au": "Traffic bollards in Australia",
 "bl-nz": "Traffic bollards in New Zealand",
 "bl-us": "Traffic bollards in the United States",
 "bl-ca": "Traffic bollards in Canada",
 "bl-jp": "Traffic bollards in Japan",
 "lp-fr": "License plates of France",
 "lp-de": "License plates of Germany",
 "lp-it": "License plates of Italy",
 "lp-es": "License plates of Spain",
 "lp-pt": "License plates of Portugal",
 "lp-nl": "License plates of the Netherlands",
 "lp-be": "License plates of Belgium",
 "lp-lu": "License plates of Luxembourg",
 "lp-ch": "License plates of Switzerland",
 "lp-at": "License plates of Austria",
 "lp-pl": "License plates of Poland",
 "lp-cz": "License plates of the Czech Republic",
 "lp-sk": "License plates of Slovakia",
 "lp-hu": "License plates of Hungary",
 "lp-ro": "License plates of Romania",
 "lp-bg": "License plates of Bulgaria",
 "lp-gr": "License plates of Greece",
 "lp-hr": "License plates of Croatia",
 "lp-si": "License plates of Slovenia",
 "lp-rs": "License plates of Serbia",
 "lp-ua": "License plates of Ukraine",
 "lp-by": "License plates of Belarus",
 "lp-ru": "License plates of Russia",
 "lp-lt": "License plates of Lithuania",
 "lp-lv": "License plates of Latvia",
 "lp-ee": "License plates of Estonia",
 "lp-fi": "License plates of Finland",
 "lp-se": "License plates of Sweden",
 "lp-no": "License plates of Norway",
 "lp-dk": "License plates of Denmark",
 "lp-is": "License plates of Iceland",
 "lp-ie": "License plates of Ireland",
 "lp-uk": "License plates of the United Kingdom",
 "lp-tr": "License plates of Turkey",
 "lp-ge": "License plates of Georgia (country)",
 "lp-il": "License plates of Israel",
 "lp-jp": "License plates of Japan",
 "lp-kr": "License plates of South Korea",
 "lp-tw": "License plates of Taiwan",
 "lp-hk": "License plates of Hong Kong",
 "lp-th": "License plates of Thailand",
 "lp-vn": "License plates of Vietnam",
 "lp-my": "License plates of Malaysia",
 "lp-id": "License plates of Indonesia",
 "lp-ph": "License plates of the Philippines",
 "lp-sg": "License plates of Singapore",
 "lp-in": "License plates of India",
 "lp-lk": "License plates of Sri Lanka",
 "lp-cn": "License plates of China",
 "lp-mn": "License plates of Mongolia",
 "lp-kz": "License plates of Kazakhstan",
 "lp-us": "License plates of the United States",
 "lp-ca": "License plates of Canada",
 "lp-mx": "License plates of Mexico",
 "lp-br": "License plates of Brazil",
 "lp-ar": "License plates of Argentina",
 "lp-cl": "License plates of Chile",
 "lp-co": "License plates of Colombia",
 "lp-pe": "License plates of Peru",
 "lp-ec": "License plates of Ecuador",
 "lp-uy": "License plates of Uruguay",
 "lp-bo": "License plates of Bolivia",
 "lp-py": "License plates of Paraguay",
 "lp-au": "License plates of Australia",
 "lp-nz": "License plates of New Zealand",
 "lp-za": "License plates of South Africa",
 "lp-ke": "License plates of Kenya",
 "lp-ng": "License plates of Nigeria",
 "lp-gh": "License plates of Ghana",
 "lp-eg": "License plates of Egypt",
 "lp-ma": "License plates of Morocco",
 "lp-tn": "License plates of Tunisia",
 "rs-fr": "Road signs in France",
 "rs-de": "Road signs in Germany",
 "rs-it": "Road signs in Italy",
 "rs-es": "Road signs in Spain",
 "rs-pt": "Road signs in Portugal",
 "rs-nl": "Road signs in the Netherlands",
 "rs-be": "Road signs in Belgium",
 "rs-ch": "Road signs in Switzerland",
 "rs-at": "Road signs in Austria",
 "rs-pl": "Road signs in Poland",
 "rs-cz": "Road signs in the Czech Republic",
 "rs-sk": "Road signs in Slovakia",
 "rs-hu": "Road signs in Hungary",
 "rs-ro": "Road signs in Romania",
 "rs-bg": "Road signs in Bulgaria",
 "rs-gr": "Road signs in Greece",
 "rs-hr": "Road signs in Croatia",
 "rs-si": "Road signs in Slovenia",
 "rs-rs": "Road signs in Serbia",
 "rs-ua": "Road signs in Ukraine",
 "rs-ru": "Road signs in Russia",
 "rs-fi": "Road signs in Finland",
 "rs-se": "Road signs in Sweden",
 "rs-no": "Road signs in Norway",
 "rs-dk": "Road signs in Denmark",
 "rs-is": "Road signs in Iceland",
 "rs-ie": "Road signs in Ireland",
 "rs-uk": "Road signs in the United Kingdom",
 "rs-tr": "Road signs in Turkey",
 "rs-il": "Road signs in Israel",
 "rs-jp": "Road signs in Japan",
 "rs-kr": "Road signs in South Korea",
 "rs-tw": "Road signs in Taiwan",
 "rs-th": "Road signs in Thailand",
 "rs-vn": "Road signs in Vietnam",
 "rs-my": "Road signs in Malaysia",
 "rs-id": "Road signs in Indonesia",
 "rs-in": "Road signs in India",
 "rs-cn": "Road signs in China",
 "rs-us": "Road signs in the United States",
 "rs-ca": "Road signs in Canada",
 "rs-mx": "Road signs in Mexico",
 "rs-br": "Road signs in Brazil",
 "rs-ar": "Road signs in Argentina",
 "rs-cl": "Road signs in Chile",
 "rs-co": "Road signs in Colombia",
 "rs-pe": "Road signs in Peru",
 "rs-au": "Road signs in Australia",
 "rs-nz": "Road signs in New Zealand",
 "rs-za": "Road signs in South Africa",
 "rs-ke": "Road signs in Kenya",
 "rs-eg": "Road signs in Egypt",
 "rs-ma": "Road signs in Morocco",
 "up-ro": "Utility poles in Romania",
 "up-br": "Utility poles in Brazil",
 "up-jp": "Utility poles in Japan",
 "up-us": "Utility poles in the United States",
 "up-ca": "Utility poles in Canada",
 "up-mx": "Utility poles in Mexico",
 "up-in": "Utility poles in India",
 "up-id": "Utility poles in Indonesia",
 "up-th": "Utility poles in Thailand",
 "up-vn": "Utility poles in Vietnam",
 "up-ph": "Utility poles in the Philippines",
 "up-kr": "Utility poles in South Korea",
 "up-tw": "Utility poles in Taiwan",
 "up-ru": "Utility poles in Russia",
 "up-ua": "Utility poles in Ukraine",
 "up-pl": "Utility poles in Poland",
 "up-gr": "Utility poles in Greece",
 "up-tr": "Utility poles in Turkey",
 "up-za": "Utility poles in South Africa",
 "up-ke": "Utility poles in Kenya",
 "up-ng": "Utility poles in Nigeria",
 "up-gh": "Utility poles in Ghana",
 "up-ar": "Utility poles in Argentina",
 "up-cl": "Utility poles in Chile",
 "up-co": "Utility poles in Colombia",
 "up-pe": "Utility poles in Peru",
 "st-br": "Stop signs in Brazil",
 "st-mx": "Stop signs in Mexico",
 "st-ar": "Stop signs in Argentina",
 "st-cl": "Stop signs in Chile",
 "st-co": "Stop signs in Colombia",
 "st-pe": "Stop signs in Peru",
 "st-ec": "Stop signs in Ecuador",
 "st-uy": "Stop signs in Uruguay",
 "st-bo": "Stop signs in Bolivia",
 "st-py": "Stop signs in Paraguay",
 "st-us": "Stop signs in the United States",
 "st-ca": "Stop signs in Canada",
 "st-fr": "Stop signs in France",
 "st-de": "Stop signs in Germany",
 "st-it": "Stop signs in Italy",
 "st-es": "Stop signs in Spain",
 "st-pt": "Stop signs in Portugal",
 "st-nl": "Stop signs in the Netherlands",
 "st-pl": "Stop signs in Poland",
 "st-tr": "Stop signs in Turkey",
 "st-gr": "Stop signs in Greece",
 "st-il": "Stop signs in Israel",
 "st-jp": "Stop signs in Japan",
 "st-kr": "Stop signs in South Korea",
 "st-th": "Stop signs in Thailand",
 "st-in": "Stop signs in India",
 "st-id": "Stop signs in Indonesia",
 "st-my": "Stop signs in Malaysia",
 "st-au": "Stop signs in Australia",
 "st-nz": "Stop signs in New Zealand",
 "st-za": "Stop signs in South Africa",
 "st-eg": "Stop signs in Egypt",
 "st-ma": "Stop signs in Morocco",
 "rm-us": "Road markings in the United States",
 "rm-ca": "Road markings in Canada",
 "rm-mx": "Road markings in Mexico",
 "rm-br": "Road markings in Brazil",
 "rm-ar": "Road markings in Argentina",
 "rm-cl": "Road markings in Chile",
 "rm-uk": "Road markings in the United Kingdom",
 "rm-ie": "Road markings in Ireland",
 "rm-fr": "Road markings in France",
 "rm-de": "Road markings in Germany",
 "rm-it": "Road markings in Italy",
 "rm-es": "Road markings in Spain",
 "rm-pt": "Road markings in Portugal",
 "rm-nl": "Road markings in the Netherlands",
 "rm-be": "Road markings in Belgium",
 "rm-pl": "Road markings in Poland",
 "rm-cz": "Road markings in the Czech Republic",
 "rm-hu": "Road markings in Hungary",
 "rm-ro": "Road markings in Romania",
 "rm-gr": "Road markings in Greece",
 "rm-tr": "Road markings in Turkey",
 "rm-ru": "Road markings in Russia",
 "rm-ua": "Road markings in Ukraine",
 "rm-fi": "Road markings in Finland",
 "rm-se": "Road markings in Sweden",
 "rm-no": "Road markings in Norway",
 "rm-dk": "Road markings in Denmark",
 "rm-is": "Road markings in Iceland",
 "rm-jp": "Road markings in Japan",
 "rm-kr": "Road markings in South Korea",
 "rm-tw": "Road markings in Taiwan",
 "rm-th": "Road markings in Thailand",
 "rm-in": "Road markings in India",
 "rm-id": "Road markings in Indonesia",
 "rm-my": "Road markings in Malaysia",
 "rm-au": "Road markings in Australia",
 "rm-nz": "Road markings in New Zealand",
 "rm-za": "Road markings in South Africa"
});
