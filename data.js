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
T("bo-fr","bollard",46.6,2.4,350,1200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#d62828",shape:"rect"}},"🇫🇷 프랑스","🇫🇷 France","흰 몸통 상단에 빨간 직사각형 반사판이 붙은 납작한 볼라드는 프랑스의 시그니처(J6 볼라드)입니다.");
T("bo-de","bollard",51.1,10.4,350,1200,{t:"bollard",shape:"round",body:"#f2f2f2",band:{color:"#222",y:40,h:34},refl:{color:"#333",shape:"inband"}},"🇩🇪 독일","🇩🇪 Germany","회백색 둥근 몸통 + 검은 띠 안에 반사판이 든 볼라드(Leitpfosten)는 독일식. 오스트리아·스위스와 비슷하지만 독일이 가장 흔합니다.");
T("bo-at","bollard",47.6,14.1,250,1000,{t:"bollard",shape:"flat",body:"#fff",cap:"#d62828",capShape:"hat"},"🇦🇹 오스트리아","🇦🇹 Austria","위쪽에 빨간 '모자'처럼 꺾인 머리가 달린 흰 볼라드는 오스트리아 특유의 형태입니다.");
T("bo-cz","bollard",49.8,15.4,220,900,{t:"bollard",shape:"round",body:"#fff",cap:"#111",band:{color:"#ff7b00",y:52,h:22}},"🇨🇿 체코","🇨🇿 Czechia","검은 캡 + 주황 반사띠 조합의 흰 볼라드는 체코(슬로바키아도 유사)에서 보입니다.");
T("bo-it","bollard",42.8,12.5,380,1200,{t:"bollard",shape:"flat",body:"#fff",cap:"#111",refl:{color:"#d62828",shape:"rect"}},"🇮🇹 이탈리아","🇮🇹 Italy","검은 머리에 앞면 빨강(뒷면 흰색) 반사판이 달린 볼라드는 이탈리아식입니다.");
T("bo-es","bollard",40.2,-3.5,380,1200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#ffb703",shape:"rect"}},"🇪🇸 스페인","🇪🇸 Spain","노란(주황빛) 반사판이 박힌 흰 사각 볼라드(hito)는 스페인에서 흔합니다.");
T("bo-pt","bollard",39.6,-8.0,220,900,{t:"bollard",shape:"slim",body:"#fff",cap:"#111",refl:{color:"#ff7b00",shape:"rect"}},"🇵🇹 포르투갈","🇵🇹 Portugal","스페인보다 얇은 몸통 + 검은 캡 + 주황 반사판이면 포르투갈 쪽을 의심하세요.");
T("bo-nl","bollard",52.2,5.3,180,800,{t:"bollard",shape:"slim",body:"#fff",band:{color:"#d62828",y:30,h:26}},"🇳🇱 네덜란드","🇳🇱 Netherlands","상단에 빨간 띠를 두른 가늘고 유연한 흰 기둥은 네덜란드식 볼라드입니다.");
T("bo-pl","bollard",52.1,19.4,320,1100,{t:"bollard",shape:"flat",body:"#fff",band:{color:"#d62828",y:34,h:40}},"🇵🇱 폴란드","🇵🇱 Poland","넓은 빨간 띠가 상단을 감싼 흰 사각 볼라드는 폴란드에서 흔합니다.");
T("bo-hu","bollard",47.2,19.4,220,900,{t:"bollard",shape:"flat",body:"#fff",band:{color:"#d62828",y:30,h:26},refl:{color:"#fff",shape:"inband"}},"🇭🇺 헝가리","🇭🇺 Hungary","납작한 흰 판형 몸통 + 빨간 띠 속 흰 반사판 조합은 헝가리식입니다.");
T("bo-ro","bollard",45.9,24.9,320,1100,{t:"bollard",shape:"chunky",body:"#f4f4f4",cap:"#111",refl:{color:"#d62828",shape:"rect"}},"🇷🇴 루마니아","🇷🇴 Romania","콘크리트 느낌의 두툼한 몸통 + 검은 머리 + 빨간 반사판이면 루마니아입니다.");
T("bo-tr","bollard",39.0,35.2,500,1400,{t:"bollard",shape:"stripes",colors:["#111","#fff"]},"🇹🇷 튀르키예","🇹🇷 Türkiye","검정·흰색 가로줄무늬 기둥형 볼라드는 튀르키예 도로의 특징입니다.");
T("bo-ru","bollard",55.5,45.0,900,2000,{t:"bollard",shape:"stripesThin",colors:["#111","#fff"]},"🇷🇺 러시아","🇷🇺 Russia","가늘고 긴 흑백 줄무늬 시선유도봉은 러시아(및 구소련권)에서 흔합니다.");
T("bo-ee","bollard",58.7,25.5,160,700,{t:"bollard",shape:"slim",body:"#fff",band:{color:"#ff7b00",y:36,h:22},capShape:"roundtop"},"🇪🇪 에스토니아","🇪🇪 Estonia","둥근 머리의 가는 플라스틱 기둥 + 주황 띠는 발트권, 특히 에스토니아에서 보입니다.");
T("bo-au","bollard",-25.5,134.5,900,2200,{t:"bollard",shape:"flat",body:"#fff",refl:{color:"#d62828",shape:"strip"}},"🇦🇺 호주","🇦🇺 Australia","납작한 흰 플라스틱 판에 세로 빨간 반사띠 — 호주식 가이드포스트입니다(좌측통행 확인!).");
T("bo-is","bollard",64.9,-18.6,200,900,{t:"bollard",shape:"round",body:"#ffd60a",cap:"#111"},"🇮🇸 아이슬란드","🇮🇸 Iceland","노란 몸통에 검은 머리의 볼라드는 아이슬란드의 상징적인 메타입니다.");

/* ── 번호판(국가) ── */
T("pl-nl","plate",52.2,5.3,180,800,{t:"plate",bg:"#F9C50B",fg:"#111",left:{bg:"#003399",txt:"NL"},text:"XL-889-P"},"🇳🇱 네덜란드","🇳🇱 Netherlands","앞뒤 모두 노란 번호판은 유럽에서 네덜란드가 대표적입니다(룩셈부르크도 노랑).");
T("pl-uk","plate",52.6,-1.5,420,1300,{t:"plate",bg:"#F9C50B",fg:"#111",left:{bg:"#003399",txt:"UK"},text:"AB12 CDE"},"🇬🇧 영국","🇬🇧 UK","앞은 흰색·뒤는 노란색 번호판 + 좌측통행이면 영국입니다.");
T("pl-fr","plate",46.6,2.4,350,1200,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"F"},right:{bg:"#003399",txt:"69"},text:"AA-123-BB"},"🇫🇷 프랑스","🇫🇷 France","왼쪽 EU 띠 + 오른쪽에도 파란 지역(데파르트망) 띠가 있으면 프랑스입니다.");
T("pl-it","plate",42.8,12.5,380,1200,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#003399",txt:"I"},right:{bg:"#003399",txt:"MI"},text:"AB 123 CD"},"🇮🇹 이탈리아","🇮🇹 Italy","양쪽 모두 파란 세로 띠가 있는 흰 번호판은 이탈리아입니다(오른쪽엔 연도·도 코드).");
T("pl-ch","plate",46.8,8.2,180,800,{t:"plate",bg:"#fff",fg:"#111",text:"ZH 123456",noStrip:true,shield:true},"🇨🇭 스위스","🇨🇭 Switzerland","EU 파란 띠가 없고 양옆에 문장(방패)이 붙은 번호판은 스위스입니다.");
T("pl-ua","plate",49.4,31.2,450,1400,{t:"plate",bg:"#fff",fg:"#111",left:{bg:"#0057b7",txt:"UA",flag:"#ffd700"},text:"AA 1234 BK"},"🇺🇦 우크라이나","🇺🇦 Ukraine","왼쪽 띠가 파랑+노랑(국기색)이면 우크라이나 번호판입니다.");
T("pl-co","plate",4.6,-73.1,450,1400,{t:"plate",bg:"#F9C50B",fg:"#111",text:"ABC 123",noStrip:true},"🇨🇴 콜롬비아","🇨🇴 Colombia","남미에서 앞뒤 모두 노란 번호판은 콜롬비아입니다(에콰도르는 뒤만 주황빛인 경우).");
T("pl-ar","plate",-34.6,-64.0,600,1600,{t:"plate",bg:"#fff",fg:"#111",top:{bg:"#0a3d91",txt:"■ ARGENTINA ■"},text:"AB 123 CD"},"🇦🇷 아르헨티나","🇦🇷 Argentina","위쪽에 진한 파란 띠가 있는 메르코수르 번호판(AB 123 CD)은 아르헨티나입니다.");
T("pl-br","plate",-10.8,-52.9,900,2200,{t:"plate",bg:"#fff",fg:"#111",top:{bg:"#003399",txt:"BRASIL"},text:"ABC1D23"},"🇧🇷 브라질","🇧🇷 Brazil","파란 상단 띠 + ABC1D23 형식(문자·숫자 혼합)은 브라질 메르코수르 번호판입니다.");
T("pl-cl","plate",-35.7,-71.5,400,1300,{t:"plate",bg:"#fff",fg:"#111",text:"BB·BB·12",noStrip:true},"🇨🇱 칠레","🇨🇱 Chile","띠 없는 흰 바탕에 BBBB·12 형식이면 칠레입니다.");
T("pl-kr","plate",36.5,127.8,300,900,{t:"plate",bg:"#fff",fg:"#111",text:"12가 3456",noStrip:true,long:true},"🇰🇷 대한민국","🇰🇷 South Korea","한글 한 글자가 낀 가로로 긴 흰 번호판은 한국입니다.");
T("pl-my","plate",3.9,102.0,350,1000,{t:"plate",bg:"#111",fg:"#fff",text:"WVX 1234",noStrip:true},"🇲🇾 말레이시아","🇲🇾 Malaysia","검은 바탕 + 흰 글자 번호판은 동남아에서 말레이시아·인도네시아. 띄어쓰기 3+4 형식과 W(쿠알라룸푸르) 등 접두로 구분합니다.");
T("pl-nz","plate",-41.5,172.8,400,1300,{t:"plate",bg:"#fff",fg:"#111",text:"ABC123",noStrip:true},"🇳🇿 뉴질랜드","🇳🇿 New Zealand","아무 띠도 없는 심플한 흰 번호판(ABC123) + 좌측통행이면 뉴질랜드를 의심하세요.");

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
T("sg-pare","sign",-15,-55,1200,2600,{t:"sign",kind:"stop",text:"PARE"},"🌎 남미 (브라질 등)","🌎 South America","PARE 정지판은 브라질·칠레·페루 등 남미권입니다(스페인·포르투갈은 STOP 사용).");
T("sg-alto","sign",23.6,-102.5,900,1800,{t:"sign",kind:"stop",text:"ALTO"},"🇲🇽 멕시코·중미","🇲🇽 Mexico · C. America","ALTO 정지판은 멕시코와 중앙아메리카입니다.");
T("sg-arret","sign",47.5,-72.0,400,1200,{t:"sign",kind:"stop",text:"ARRÊT"},"🇨🇦 캐나다 · 퀘벡","🇨🇦 Canada · Québec","ARRÊT 정지판은 퀘벡의 상징입니다(프랑스 본토는 STOP!).");
T("sg-qif","sign",31.3,36.4,700,2200,{t:"sign",kind:"stop",text:"قف",sub:"STOP"},"🇯🇴 중동·북아프리카","🇯🇴 Middle East","아랍어 قف 병기 정지판은 요르단·UAE·튀니지 등 아랍권입니다.");
T("sg-us55","sign",39.8,-98.6,1200,2400,{t:"sign",kind:"speedus",text:"SPEED\nLIMIT\n55"},"🇺🇸 미국","🇺🇸 USA","흰 세로판에 SPEED LIMIT은 미국입니다.");
T("sg-max50","sign",54,-100,1500,2800,{t:"sign",kind:"speedus",text:"MAXIMUM\n50"},"🇨🇦 캐나다","🇨🇦 Canada","같은 흰 판이라도 MAXIMUM이라 쓰면 캐나다입니다.");
T("sg-warnY","sign",62,15,900,2400,{t:"sign",kind:"warn",bg:"#ffcf00"},"🇸🇪 스웨덴 등 노랑 표지 국가","🇸🇪 Sweden etc.","경고 삼각형 속이 노란색이면 스웨덴·핀란드·아이슬란드·폴란드·그리스·발칸 일부입니다. 목표는 스웨덴.");
T("sg-mwy-it","sign",44.5,11.3,350,1200,{t:"sign",kind:"motorway",bg:"#0a7a2f",lines:["ROMA","FIRENZE"],badge:"A1"},"🇮🇹 이탈리아","🇮🇹 Italy","고속도로 표지가 초록색이면 이탈리아·스위스식입니다. 도시명이 이탈리아어면 확정.");
T("sg-mwy-fr",  "sign",46.6,2.4,350,1200,{t:"sign",kind:"motorway",bg:"#0a3d91",lines:["PARIS","LYON"],badge:"A6"},"🇫🇷 프랑스","🇫🇷 France","파란 고속도로 표지 + 프랑스 도시명 + A도로 번호는 프랑스입니다.");
T("sg-borne","sign",46.6,2.4,350,1200,{t:"sign",kind:"borne",text:"N7"},"🇫🇷 프랑스","🇫🇷 France","빨간 머리의 흰 돌 이정표(borne kilométrique)는 프랑스 국도의 상징입니다.");
T("sg-kanga","sign",-25,134,900,2200,{t:"sign",kind:"kanga"},"🇦🇺 호주","🇦🇺 Australia","노란 마름모 + 캥거루 실루엣이면 호주입니다.");

/* ── 전봇대 ── */
T("po-ro","pole",45.9,24.9,320,1100,{t:"pole",kind:"holes"},"🇷🇴 루마니아","🇷🇴 Romania","둥근 구멍이 사다리처럼 뚫린 콘크리트 전봇대는 루마니아의 상징입니다(헝가리도 유사한 형태 존재).");
T("po-br","pole",-14,-52,900,2200,{t:"pole",kind:"concrete"},"🇧🇷 브라질","🇧🇷 Brazil","민무늬 원형 콘크리트 기둥 + 어지러운 전선 다발은 브라질에서 흔합니다.");
T("po-jp","pole",36.2,138.3,450,1400,{t:"pole",kind:"guard"},"🇯🇵 일본","🇯🇵 Japan","전봇대 아랫부분에 노란 보호 커버가 감긴 모습은 일본입니다.");
T("po-us","pole",39.8,-98.6,1200,2400,{t:"pole",kind:"wood"},"🇺🇸 미국","🇺🇸 USA","갈색 원목 전봇대 + 가로 크로스암은 북미(미국·캐나다)식입니다.");

/* ── 도로 차선 ── */
T("rd-us","road",39.8,-98.6,1200,2600,{t:"road",center:["#f2b705","double"],edge:["#fff","solid"]},"🌎 아메리카 (미국 등)","🌎 Americas","중앙선이 노란색(특히 이중 실선)이면 남북 아메리카입니다. 목표는 미국 중부.");
T("rd-no","road",61.5,9.0,400,1300,{t:"road",center:["#f2b705","dash"],edge:["#fff","solid"]},"🇳🇴 노르웨이","🇳🇴 Norway","유럽에서 노란 중앙선이면 노르웨이입니다(스웨덴·핀란드는 흰색).");
T("rd-ie","road",53.3,-7.7,250,1000,{t:"road",center:["#fff","dash"],edge:["#f2b705","dash"]},"🇮🇪 아일랜드","🇮🇪 Ireland","가장자리 선이 노란 점선이면 아일랜드입니다(영국은 흰 실선).");
T("rd-uk","road",52.6,-1.5,420,1300,{t:"road",curb:true},"🇬🇧 영국","🇬🇧 UK","도로 가장자리 연석을 따라 노란 이중선(주차금지)은 영국입니다.");

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
