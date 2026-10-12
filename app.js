/* ═══════════ utils ═══════════ */
const $=id=>document.getElementById(id);
let LANG=localStorage.getItem("plk_lang")||"ko";
let NICK=localStorage.getItem("plk_nick")||"";
const tt=k=>(I18N[LANG]&&I18N[LANG][k])||I18N.ko[k]||k;
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=tt(el.dataset.i18n);});
  $("lang-label").textContent=LANG==="ko"?"한국어":"English";
  $("nick-label").textContent=NICK||(LANG==="ko"?"닉네임":"Nickname");
  $("daily-date-label").textContent=todayStr();
  if(typeof applyMapLang==="function")applyMapLang();
}
let toastTimer=null;
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.remove("hidden");
  // 긴 안내문은 읽을 시간을 더 준다
  const ms=Math.min(9000,Math.max(2600,String(msg).length*110));
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add("hidden"),ms);}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");}
function todayStr(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function hash32(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);
  t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(arr,rng){for(let i=arr.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}}
// 경도를 -180~180으로 정규화 (지도가 좌우로 반복되어도 같은 지점으로 취급)
function normLng(lng){return ((lng+180)%360+360)%360-180;}
function haversine(a,b){const R=6371,rad=x=>x*Math.PI/180;
  // 두 지점의 경도 차는 항상 지구를 도는 '가장 짧은 쪽'으로 계산해야 한다.
  let dLngDeg=normLng(b[1])-normLng(a[1]);
  if(dLngDeg>180)dLngDeg-=360;
  if(dLngDeg<-180)dLngDeg+=360;
  const dLat=rad(b[0]-a[0]),dLng=rad(dLngDeg);
  const h=Math.sin(dLat/2)**2+Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));}
function scoreFor(tr,d){if(d<=tr.r0)return 5000;return Math.max(0,Math.round(5000*Math.exp(-(d-tr.r0)/tr.s)));}
function fmtKm(d){return d<10?d.toFixed(1):Math.round(d).toLocaleString();}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

/* ═══════════ SVG 렌더러 ═══════════ */
const SKY="#BFD9EF",GRASS="#8FB573",ASPH="#6E7580",WALL="#E8E2D2";
function stage(inner){return `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="340" fill="${SKY}"/><rect y="220" width="520" height="120" fill="${GRASS}"/>
  <polygon points="0,340 520,340 520,268 0,300" fill="${ASPH}"/>
  <circle cx="440" cy="60" r="26" fill="#fff8dc" opacity=".8"/>${inner}</svg>`;}
function card(inner,bg=WALL){return `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="260" fill="${bg}"/>${inner}</svg>`;}

function rBollard(v){
  const cx=260,base=302;let w=40;
  if(v.shape==="slim")w=26;if(v.shape==="chunky")w=58;if(v.shape==="stripesThin")w=20;if(v.shape==="stripes")w=44;
  const h=180,x=cx-w/2,y=base-h;let body="";
  if(v.shape==="stripes"||v.shape==="stripesThin"){
    const n=v.shape==="stripes"?6:8,sh=h/n;
    for(let i=0;i<n;i++)body+=`<rect x="${x}" y="${y+i*sh}" width="${w}" height="${sh}" fill="${v.colors[i%2]}"/>`;
    body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#0003" rx="4"/>`;
  }else{
    const rx=v.shape==="round"?w/2:5;
    body=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${v.body}" stroke="#0002"/>`;
    if(v.band)body+=`<rect x="${x}" y="${y+v.band.y}" width="${w}" height="${v.band.h}" fill="${v.band.color}"/>`;
    if(v.refl){
      if(v.refl.shape==="rect")body+=`<rect x="${cx-11}" y="${y+18}" width="22" height="30" rx="3" fill="${v.refl.color}" stroke="#0003"/>`;
      if(v.refl.shape==="strip")body+=`<rect x="${cx-6}" y="${y+14}" width="12" height="110" rx="4" fill="${v.refl.color}"/>`;
      if(v.refl.shape==="inband"&&v.band)body+=`<rect x="${cx-9}" y="${y+v.band.y+6}" width="18" height="${v.band.h-12}" rx="2" fill="${v.refl.color==="#fff"?"#fff":"#e8e8e8"}"/>`;
    }
    if(v.cap&&!v.capShape)body+=`<rect x="${x-2}" y="${y-14}" width="${w+4}" height="16" rx="4" fill="${v.cap}"/>`;
    if(v.capShape==="hat")body+=`<polygon points="${x-4},${y} ${x+w+4},${y} ${x+w-8},${y-26} ${x+4},${y-26}" fill="${v.cap||"#d62828"}"/>`;
    if(v.capShape==="roundtop")body+=`<path d="M ${x} ${y} A ${w/2} ${w/2} 0 0 1 ${x+w} ${y}" fill="${v.body}" stroke="#0002"/>`;
  }
  body+=`<ellipse cx="${cx}" cy="${base+4}" rx="${w}" ry="8" fill="#0002"/>`;
  return stage(body);
}
function rPole(v){
  const cx=260,base=310,topY=30;let s="";
  const col=v.kind==="wood"?"#7a5636":"#9aa0a6";
  s+=`<polygon points="${cx-12},${base} ${cx+12},${base} ${cx+7},${topY} ${cx-7},${topY}" fill="${col}" stroke="#0002"/>`;
  if(v.kind==="holes")for(let i=0;i<7;i++)s+=`<circle cx="${cx}" cy="${70+i*30}" r="7.5" fill="#5c6166"/>`;
  if(v.kind==="guard")s+=`<rect x="${cx-13}" y="${base-90}" width="26" height="90" fill="#ffd60a"/><rect x="${cx-13}" y="${base-60}" width="26" height="10" fill="#111"/><rect x="${cx-13}" y="${base-30}" width="26" height="10" fill="#111"/>`;
  s+=`<rect x="${cx-70}" y="${topY+8}" width="140" height="8" fill="${col}"/>`;
  if(v.kind==="wood")s+=`<rect x="${cx-64}" y="${topY-2}" width="6" height="12" fill="#3b6ea5"/><rect x="${cx+58}" y="${topY-2}" width="6" height="12" fill="#3b6ea5"/>`;
  const wires=v.kind==="concrete"?6:3;
  for(let i=0;i<wires;i++)s+=`<path d="M0 ${topY+20+i*9} Q ${cx} ${topY+42+i*9} 520 ${topY+18+i*9}" stroke="#333" fill="none" stroke-width="1.6"/>`;
  s+=`<ellipse cx="${cx}" cy="${base+4}" rx="26" ry="7" fill="#0002"/>`;
  return stage(s);
}
function rRoad(v){
  if(v.curb){ // UK double yellow curb lines
    return `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="340" fill="${SKY}"/><rect y="120" width="520" height="60" fill="#cfc9b8"/>
      <rect y="180" width="520" height="26" fill="#b7b1a0"/>
      <rect y="206" width="520" height="134" fill="${ASPH}"/>
      <rect y="214" width="520" height="7" fill="#f2b705"/><rect y="228" width="520" height="7" fill="#f2b705"/></svg>`;
  }
  const road=`<polygon points="150,340 370,340 300,120 220,120" fill="${ASPH}"/>`;
  let lines="";
  const cc=v.center[0],cp=v.center[1];
  if(cp==="double"){lines+=`<polygon points="252,340 258,340 256,120 251,120" fill="${cc}"/><polygon points="263,340 269,340 265,120 260,120" fill="${cc}"/>`;}
  else if(cp==="dash"){for(let i=0;i<7;i++){const y1=330-i*32,y2=y1-16,w1=6-i*0.6,x=258;lines+=`<polygon points="${x-w1},${y1} ${x+w1},${y1} ${x+w1*0.85},${y2} ${x-w1*0.85},${y2}" fill="${cc}"/>`;}}
  else lines+=`<polygon points="255,340 263,340 261,120 258,120" fill="${cc}"/>`;
  const ec=v.edge?v.edge[0]:"#fff",ep=v.edge?v.edge[1]:"solid";
  if(ep==="dash"){for(let i=0;i<7;i++){const y1=330-i*32,y2=y1-16;const xl=158+ (330-y1)*0.32, xr=362-(330-y1)*0.32;
      lines+=`<rect x="${xl}" y="${y2}" width="5" height="16" fill="${ec}" transform="skewX(0)"/><rect x="${xr}" y="${y2}" width="5" height="16" fill="${ec}"/>`;}}
  else{lines+=`<polygon points="158,340 166,340 228,120 223,120" fill="${ec}"/><polygon points="354,340 362,340 297,120 292,120" fill="${ec}"/>`;}
  return stage(road+lines);
}
function rSign(v){
  const px=260,py=170;
  if(v.kind==="stop"){
    const o=64,pts=[];for(let i=0;i<8;i++){const a=Math.PI/8+i*Math.PI/4;pts.push((px+Math.cos(a)*86)+","+(py-40+Math.sin(a)*86));}
    let s=`<rect x="${px-6}" y="${py+30}" width="12" height="110" fill="#8a8f98"/>`;
    s+=`<polygon points="${pts.join(" ")}" fill="#c1121f" stroke="#fff" stroke-width="7"/>`;
    const fs=v.text.length>4?34:44;
    s+=`<text x="${px}" y="${py-40+(v.sub?4:14)}" text-anchor="middle" font-family="Arial,'IBM Plex Sans KR'" font-weight="900" font-size="${fs}" fill="#fff">${esc(v.text)}</text>`;
    if(v.sub)s+=`<text x="${px}" y="${py-2}" text-anchor="middle" font-family="Arial" font-weight="700" font-size="20" fill="#fff">${esc(v.sub)}</text>`;
    return stage(s);
  }
  if(v.kind==="speedus"){
    const lines=v.text.split("\n");
    let s=`<rect x="${px-6}" y="${py+70}" width="12" height="80" fill="#8a8f98"/>`;
    s+=`<rect x="${px-62}" y="${py-100}" width="124" height="170" rx="10" fill="#fff" stroke="#111" stroke-width="6"/>`;
    lines.forEach((ln,i)=>{const last=i===lines.length-1;
      s+=`<text x="${px}" y="${py-100+34+i*40+(last?18:0)}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="${last?52:24}" fill="#111">${esc(ln)}</text>`;});
    return stage(s);
  }
  if(v.kind==="warn"){
    let s=`<rect x="${px-6}" y="${py+50}" width="12" height="96" fill="#8a8f98"/>`;
    s+=`<polygon points="${px},${py-104} ${px+94},${py+52} ${px-94},${py+52}" fill="#c1121f"/>`;
    s+=`<polygon points="${px},${py-76} ${px+70},${py+38} ${px-70},${py+38}" fill="${v.bg}"/>`;
    s+=`<rect x="${px-7}" y="${py-40}" width="14" height="44" rx="6" fill="#111"/><circle cx="${px}" cy="${py+22}" r="9" fill="#111"/>`;
    return stage(s);
  }
  if(v.kind==="motorway"){
    let s=`<rect x="70" y="60" width="380" height="160" rx="14" fill="${v.bg}" stroke="#fff" stroke-width="5"/>`;
    v.lines.forEach((ln,i)=>{s+=`<text x="100" y="${118+i*54}" font-family="Arial" font-weight="800" font-size="40" fill="#fff">${esc(ln)}</text><polygon points="418,${100+i*54} 438,${112+i*54} 418,${124+i*54}" fill="#fff"/>`;});
    s+=`<rect x="88" y="184" width="76" height="30" rx="6" fill="#fff2"/><text x="126" y="207" text-anchor="middle" font-family="Arial" font-weight="800" font-size="22" fill="#fff">${esc(v.badge)}</text>`;
    s+=`<rect x="250" y="220" width="14" height="100" fill="#8a8f98"/>`;
    return stage(s);
  }
  if(v.kind==="borne"){
    let s=`<rect x="${px-52}" y="${py-20}" width="104" height="130" rx="12" fill="#f5f5f0" stroke="#0002"/>`;
    s+=`<path d="M ${px-52} ${py+8} L ${px-52} ${py-20} A 52 42 0 0 1 ${px+52} ${py-20} L ${px+52} ${py+8} Z" fill="#c1121f"/>`;
    s+=`<text x="${px}" y="${py-2}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="30" fill="#fff">${esc(v.text)}</text>`;
    s+=`<text x="${px}" y="${py+64}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="34" fill="#333">128</text>`;
    return stage(s);
  }
  if(v.kind==="kanga"){
    let s=`<rect x="${px-6}" y="${py+64}" width="12" height="82" fill="#8a8f98"/>`;
    s+=`<rect x="${px-78}" y="${py-118}" width="156" height="156" rx="16" transform="rotate(45 ${px} ${py-40})" fill="#ffcf00" stroke="#111" stroke-width="5"/>`;
    s+=`<path d="M ${px-44} ${py-8} q 18 -10 30 -26 q 4 -18 18 -24 q 10 -16 22 -14 q -2 8 4 10 q 10 2 8 8 q -8 4 -14 4 q -6 10 -14 26 q 12 6 10 16 q -10 4 -16 -4 q -8 2 -16 0 q -6 8 -18 10 q 8 4 6 10 l -10 0 q -4 -6 -10 -8 z" fill="#111"/>`;
    return stage(s);
  }
  return stage("");
}
function rPlate(v){
  const pw=v.long?470:440,ph=v.long?96:118,px=(520-pw)/2,py=(260-ph)/2+8;
  let s=`<rect x="${px-8}" y="${py-8}" width="${pw+16}" height="${ph+16}" rx="12" fill="#d9d2c0"/>`;
  s+=`<rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="8" fill="${v.bg}" stroke="#555" stroke-width="3"/>`;
  let txX=px+pw/2,availL=px,availR=px+pw;
  if(v.left){s+=`<rect x="${px}" y="${py}" width="50" height="${ph}" fill="${v.left.bg}"/>`;
    if(v.left.flag)s+=`<rect x="${px}" y="${py}" width="50" height="${ph/2}" fill="${v.left.bg}"/><rect x="${px}" y="${py+ph/2}" width="50" height="${ph/2}" fill="${v.left.flag}"/>`;
    else{for(let i=0;i<6;i++){const a=i/6*Math.PI*2;s+=`<circle cx="${px+25+Math.cos(a)*13}" cy="${py+30+Math.sin(a)*13}" r="2.4" fill="#ffcc00"/>`;}}
    s+=`<text x="${px+25}" y="${py+ph-12}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="20" fill="#fff">${esc(v.left.txt)}</text>`;availL=px+50;}
  if(v.right){s+=`<rect x="${px+pw-50}" y="${py}" width="50" height="${ph}" fill="${v.right.bg}"/>`;
    s+=`<text x="${px+pw-25}" y="${py+ph/2+8}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="24" fill="#fff" ${v.hlRight?'stroke="#ffcf00" stroke-width="1.2"':''}>${esc(v.right.txt)}</text>`;
    if(v.hlRight)s+=`<rect x="${px+pw-50}" y="${py}" width="50" height="${ph}" fill="none" stroke="#ffcf00" stroke-width="4"/>`;
    availR=px+pw-50;}
  if(v.rusBox){const bx=px+pw-112;s+=`<line x1="${bx}" y1="${py}" x2="${bx}" y2="${py+ph}" stroke="#555" stroke-width="3"/>`;
    s+=`<text x="${bx+56}" y="${py+52}" text-anchor="middle" font-family="Arial" font-weight="800" font-size="46" fill="#111">${esc(v.region)}</text>`;
    s+=`<text x="${bx+38}" y="${py+ph-16}" text-anchor="middle" font-family="Arial" font-weight="700" font-size="15" fill="#111">RUS</text>`;
    s+=`<g><rect x="${bx+62}" y="${py+ph-32}" width="34" height="7" fill="#fff" stroke="#999" stroke-width=".5"/><rect x="${bx+62}" y="${py+ph-25}" width="34" height="7" fill="#0039a6"/><rect x="${bx+62}" y="${py+ph-18}" width="34" height="7" fill="#d52b1e"/></g>`;
    s+=`<rect x="${bx}" y="${py}" width="112" height="${ph}" fill="none" stroke="#ffcf00" stroke-width="4"/>`;availR=bx;}
  if(v.top){s+=`<text x="${(availL+availR)/2}" y="${py+30}" text-anchor="middle" font-family="${v.top.script?"Georgia,serif":"Arial"}" ${v.top.script?'font-style="italic"':''} font-weight="700" font-size="24" fill="${v.top.script?"#c1121f":(v.top.bg==="#0a3d91"?"#fff":v.fg)}">${esc(v.top.txt)}</text>`;
    if(v.top.bg&&v.top.bg!==v.bg)s=`<rect x="${px}" y="${py}" width="${pw}" height="38" fill="${v.top.bg}"/>`+s;}
  const mainY=v.top||v.sub?py+ph/2+(v.top?22:2):py+ph/2+14;
  let mainTxt;
  if(v.hl){const i=v.text.indexOf(v.hl);const a=esc(v.text.slice(0,i)),b=esc(v.hl),c=esc(v.text.slice(i+v.hl.length));
    mainTxt=`${a}<tspan fill="#d62828" text-decoration="underline">${b}</tspan>${c}`;}
  else mainTxt=esc(v.text);
  const fsz=v.text.length>11?34:(v.text.length>8?40:46);
  s+=`<text x="${(availL+availR)/2}" y="${mainY}" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-weight="700" font-size="${fsz}" fill="${v.fg}">${mainTxt}</text>`;
  if(v.sub)s+=`<text x="${(availL+availR)/2}" y="${py+ph-14}" text-anchor="middle" font-family="'IBM Plex Sans KR',Arial" font-size="17" fill="${v.fg}">${esc(v.sub)}</text>`;
  if(v.shield){s+=`<rect x="${px+8}" y="${py+ph/2-14}" width="24" height="28" rx="4" fill="#d52b1e"/><rect x="${px+18}" y="${py+ph/2-9}" width="4" height="18" fill="#fff"/><rect x="${px+11}" y="${py+ph/2-2}" width="18" height="4" fill="#fff"/>
      <rect x="${px+pw-32}" y="${py+ph/2-14}" width="24" height="28" rx="4" fill="#1a3d8f"/><circle cx="${px+pw-20}" cy="${py+ph/2}" r="6" fill="#fff"/>`;}
  return card(s,"#DFE5EC");
}
function rLang(v){
  let bg="#DFE5EC",plate="",tx="#fff",border="#fff";
  if(v.style==="blue"){plate=`<rect x="30" y="70" width="460" height="120" rx="10" fill="#14508c" stroke="#fff" stroke-width="6"/>`;}
  else if(v.style==="tile"){plate=`<rect x="30" y="70" width="460" height="120" rx="4" fill="#f7f4ea" stroke="#2b5aa0" stroke-width="8"/><rect x="42" y="82" width="436" height="96" fill="none" stroke="#2b5aa0" stroke-width="2"/>`;tx="#1d3f73";}
  else{plate=`<rect x="30" y="70" width="460" height="120" rx="10" fill="#fdfdf8" stroke="#333" stroke-width="4"/>`;tx="#222";}
  const fs=v.big.length>16?30:(v.big.length>10?38:46);
  let s=plate+`<text x="260" y="${v.sub?128:140}" text-anchor="middle" font-family="'IBM Plex Sans KR',Arial" font-weight="700" font-size="${fs}" fill="${tx}">${esc(v.big)}</text>`;
  if(v.sub)s+=`<text x="260" y="170" text-anchor="middle" font-size="22" fill="${tx}" opacity=".85" font-family="'IBM Plex Sans KR',Arial">${esc(v.sub)}</text>`;
  return card(s);
}
function rTld(v){
  let s=`<rect x="40" y="40" width="440" height="60" fill="#b23a3a"/>`;
  for(let i=0;i<11;i++)s+=`<rect x="${40+i*40}" y="40" width="20" height="60" fill="#e8e0d0"/>`;
  s+=`<path d="M40 100 L480 100 L470 116 L50 116 Z" fill="#8f2e2e"/>`;
  s+=`<rect x="60" y="140" width="400" height="80" rx="8" fill="#123524" stroke="#0a2418" stroke-width="4"/>`;
  const fs=v.url.length>22?26:30;
  s+=`<text x="260" y="190" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-weight="700" font-size="${fs}" fill="#f4f1e6">${esc(v.url)}</text>`;
  return card(s);
}
function rPhone(v){
  let s=`<rect x="60" y="52" width="400" height="156" rx="10" fill="#fdfdf8" stroke="#333" stroke-width="4"/>`;
  s+=`<text x="260" y="100" text-anchor="middle" font-family="Arial" font-weight="800" font-size="26" fill="#b23a3a">${esc(v.sub)}</text>`;
  s+=`<text x="260" y="168" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-weight="700" font-size="40" fill="#16324f">${esc(v.num)}</text>`;
  s+=`<text x="260" y="236" text-anchor="middle" font-size="16" fill="#8a8474" font-family="Arial">☎ CALL NOW</text>`;
  return card(s);
}
function rCar(v){
  if(v.kind==="escort"){
    let s=`<rect x="120" y="150" width="200" height="70" rx="12" fill="#2f6d3a"/><rect x="290" y="128" width="90" height="92" rx="10" fill="#2f6d3a"/>`;
    s+=`<rect x="300" y="140" width="52" height="34" rx="6" fill="#bcd6ef"/>`;
    s+=`<rect x="300" y="112" width="60" height="14" rx="6" fill="#c1121f"/><rect x="330" y="112" width="30" height="14" rx="6" fill="#1d6fd1"/>`;
    s+=`<circle cx="170" cy="228" r="26" fill="#222"/><circle cx="330" cy="228" r="26" fill="#222"/><circle cx="170" cy="228" r="11" fill="#999"/><circle cx="330" cy="228" r="11" fill="#999"/>`;
    s+=`<rect x="120" y="168" width="200" height="14" fill="#fff2"/>`;
    return stage(s);
  }
  let s=`<path d="M40 340 Q 260 236 480 340 Z" fill="#23272e"/>`;
  s+=`<path d="M70 340 Q 260 258 450 340 Z" fill="#31363f"/>`;
  if(v.kind==="snorkel")s+=`<rect x="404" y="150" width="26" height="150" rx="10" fill="#111"/><rect x="396" y="132" width="52" height="30" rx="10" fill="#111"/>`;
  if(v.kind==="rack"){s+=`<rect x="90" y="252" width="340" height="12" rx="6" fill="#111"/><rect x="120" y="230" width="280" height="12" rx="6" fill="#111"/>`;}
  return stage(s);
}
function renderTrick(tr){
  const v=tr.v;
  if(v.t==="flag")return `<div style="padding:26px;background:#DFE5EC"><img class="flagimg" style="border:1px solid #0002;box-shadow:0 6px 18px #0003" src="https://flagcdn.com/w320/${v.code}.png" alt="flag"></div>`;
  if(v.t==="bollard")return rBollard(v);
  if(v.t==="plate")return rPlate(v);
  if(v.t==="lang")return rLang(v);
  if(v.t==="tld")return rTld(v);
  if(v.t==="phone")return rPhone(v);
  if(v.t==="sign")return rSign(v);
  if(v.t==="pole")return rPole(v);
  if(v.t==="road")return rRoad(v);
  if(v.t==="car")return rCar(v);
  return "";
}

/* ═══════════ 지도 ═══════════ */
let map=null,guessMarker=null,resultLayers=[],mapLocked=false,pendingGuess=null,pendingGuessRaw=null;
/* ── 지도 라벨 언어 (GeoGuessr 방식: 내 언어 이름 크게 + 현지 이름 작게) ── */
let glMap=null;
function mapLabelExpr(){
  const k="name:"+(LANG==="en"?"en":LANG);
  return ["case",
    ["all",["has",k],["!=",["get",k],["get","name"]]],
    ["format",["get",k],{},"\n",{},["get","name"],{"font-scale":0.8}],
    ["coalesce",["get",k],["get","name_en"],["get","name"]]];
}
function applyMapLang(){
  if(!glMap||!glMap.isStyleLoaded())return;
  const expr=mapLabelExpr();
  for(const l of glMap.getStyle().layers){
    if(l.type!=="symbol")continue;
    const tf=l.layout&&l.layout["text-field"];
    // 지명(name)을 쓰는 라벨만 바꾸고, 도로 번호(ref) 방패는 그대로 둔다
    if(!tf||!JSON.stringify(tf).includes('"name'))continue;
    glMap.setLayoutProperty(l.id,"text-field",expr);
  }
}
function webglOK(){try{const c=document.createElement("canvas");return !!(c.getContext("webgl2")||c.getContext("webgl"));}catch(e){return false;}}
function addRasterFallback(){
  if(map._rasterFallback)return;
  map._rasterFallback=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,keepBuffer:6,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
}
function initMap(){
  map=L.map("map",{worldCopyJump:true,minZoom:2,maxZoom:19,zoomControl:true}).setView([30,10],3);
  map.attributionControl.setPrefix("Leaflet"); // 출처 표기는 남기되 게임 중에는 눌러도 이동하지 않게(style.css)
  // 벡터 지도(OpenFreeMap, API 키·요금 없음) + 라벨을 한국어/영어로 표시
  if(typeof L.maplibreGL==="function"&&webglOK()){
    const layer=L.maplibreGL({
      style:"https://tiles.openfreemap.org/styles/liberty",
      // 한글·한자·가나는 기기 폰트로 그려 깨짐 없이 표시
      localIdeographFontFamily:"'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo','Noto Sans CJK KR',sans-serif",
      attributionControl:{customAttribution:'<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> © <a href="https://www.openmaptiles.org/" target="_blank">OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'}
    }).addTo(map);
    glMap=layer.getMaplibreMap();
    let loaded=false;
    glMap.on("load",()=>{loaded=true;applyMapLang();});
    // 지도 서버에 접속하지 못하면 기본 OSM 지도로 대체
    setTimeout(()=>{if(!loaded){console.warn("[Plonkle] 벡터 지도 로드 실패 → OSM 지도로 대체");addRasterFallback();}},10000);
  }else{
    addRasterFallback();
  }
  // 적도·회귀선·날짜변경선 안내선 (WorldGuessr 스타일)
  const guide={color:"#c0392b",weight:1,opacity:.55,dashArray:"6 6",interactive:false};
  [[0,"#c0392b",.55],[23.4366,"#888",.45],[-23.4366,"#888",.45]].forEach(([lat,c,o])=>{
    L.polyline([[lat,-540],[lat,540]],{...guide,color:c,opacity:o}).addTo(map);});
  L.polyline([[-85,180],[85,180]],{...guide,color:"#888",opacity:.45}).addTo(map);
  L.polyline([[-85,-180],[85,-180]],{...guide,color:"#888",opacity:.45}).addTo(map);
  map.on("click",e=>{if(!mapLocked)setGuessPin(e.latlng);});
  $("mapbox").addEventListener("transitionend",()=>map.invalidateSize());
  $("mapbox").addEventListener("mouseenter",()=>setTimeout(()=>map.invalidateSize(),280));
  $("mapbox").addEventListener("mouseleave",()=>setTimeout(()=>map.invalidateSize(),280));
}
function setGuessPin(latlng){
  // 핀은 사용자가 클릭한 자리에 그대로 두되(시각적 이질감 방지),
  // 채점·결과선에 쓰는 좌표는 -180~180으로 정규화해 보관한다.
  pendingGuess=L.latLng(latlng.lat,normLng(latlng.lng));
  pendingGuessRaw=latlng;
  if(!guessMarker)guessMarker=L.marker(latlng).addTo(map);
  else guessMarker.setLatLng(latlng);
  const b=$("btn-guess");b.disabled=false;b.textContent=tt("guessGo");
}
function resetMapForRound(){
  mapLocked=false;pendingGuess=null;pendingGuessRaw=null;
  if(guessMarker){map.removeLayer(guessMarker);guessMarker=null;}
  resultLayers.forEach(l=>map.removeLayer(l));resultLayers=[];
  map.setView([30,10],3);
  const b=$("btn-guess");b.disabled=true;b.textContent=tt("guess");
  $("mapbox").classList.remove("expanded");
  $("dock").classList.add("hidden");
  setTimeout(()=>map.invalidateSize(),300);
}

/* ═══════════ 게임 상태 ═══════════ */
let G=null,timerInt=null;
// 실사 확보 가능한 트릭만 출제 대상 (커먼즈 카테고리 있음 or 국기)
const POOL=TRICKS.filter(t=>t.v.t==="flag"||(typeof COMMONS!=="undefined"&&COMMONS[t.id]));
function getRecent(){try{return JSON.parse(localStorage.getItem("plk_recent")||"[]");}catch(e){return[];}}
function pushRecent(ids){try{localStorage.setItem("plk_recent",JSON.stringify([...ids,...getRecent()].slice(0,200)));}catch(e){}}
function pickTricks(rng,avoidRecent){
  let pool=POOL.slice();
  if(avoidRecent){
    const rec=new Set(getRecent());
    const fresh=pool.filter(t=>!rec.has(t.id));
    // 최근에 안 나온 것 우선. 남은 게 너무 적으면 전체에서 뽑되 최근 것은 뒤로 밀기
    pool=fresh.length>=5?fresh:pool.slice().sort((a,b)=>(rec.has(a.id)?1:0)-(rec.has(b.id)?1:0));
  }
  shuffle(pool,rng);
  const chosen=[],catCount={};
  // 1차: 카테고리당 최대 1개로 다양성 확보
  for(const tr of pool){
    if((catCount[tr.cat]||0)>=1)continue;
    chosen.push(tr);catCount[tr.cat]=1;
    if(chosen.length===5)break;
  }
  // 2차: 그래도 5개가 안 되면 카테고리당 최대 2개까지 허용
  if(chosen.length<5){
    for(const tr of pool){
      if(chosen.includes(tr))continue;
      if((catCount[tr.cat]||0)>=2)continue;
      chosen.push(tr);catCount[tr.cat]=(catCount[tr.cat]||0)+1;
      if(chosen.length===5)break;
    }
  }
  // 3차: 최후 수단 - 무조건 5개 채우기
  for(const tr of pool){
    if(chosen.length>=5)break;
    if(!chosen.includes(tr))chosen.push(tr);
  }
  return chosen;
}
function startGame(mode,seed){
  G={mode,seed,round:0,total:0,scores:[],submitted:false,tricks:pickTricks(mulberry32(seed>>>0),mode==='practice')};
  pushRecent(G.tricks.map(t=>t.id));
  show("scr-game");
  if(!map)initMap();
  setTimeout(()=>map.invalidateSize(),60);
  $("hud-opp-wrap").classList.toggle("hidden",mode!=="battle");
  $("hud-timer").classList.toggle("hidden",mode!=="battle");
  $("dock").classList.add("hidden");$("ov-final").classList.add("hidden");
  startRound();
}
function startRound(){
  const tr=G.tricks[G.round];G.submitted=false;
  $("hud-round").textContent=G.round+1;
  $("hud-score").textContent=G.total;
  $("exhibit-cat").textContent="EXHIBIT · "+(CATS[tr.cat][LANG]||CATS[tr.cat].en);
  setExhibit(tr);
  resetMapForRound();
}
/* ── 실물 사진 파이프라인 (정확도 우선: 커먼즈 국가별 카테고리) ──
   각 트릭 = 사람이 분류한 커먼즈 카테고리의 실사. 국기는 실물 국기 이미지.
   실사를 못 구하는 트릭은 아예 출제되지 않음(TRICKS 로드 시 필터). */
if(localStorage.getItem("plk_v")!=="8"){
  Object.keys(localStorage).forEach(k=>{if(k.indexOf("plk_")===0&&k!=="plk_nick"&&k!=="plk_lang")localStorage.removeItem(k);});
  localStorage.setItem("plk_v","8");
}
const catCache={};
const PHOTO_META={}; // 사진 주소 -> {page, artist, lic} (정답 공개 뒤 출처 표시용)
// ── 실사 판별 기준 ──
// 1) 카메라로 찍은 JPEG만 사용: 카메라 정보(EXIF 제조사/모델)가 없는 파일은
//    도면·글꼴 규격표·그림·스캔본일 가능성이 매우 높아 제외한다.
//    (예: 대만 노면표시 카테고리의 글자 규격 도면은 전부 EXIF 없는 PNG였음)
// 2) 촬영일이 2005년 이전이면 옛날 사진으로 보고 제외한다.
// 3) 제목에 그림·도면·역사 자료를 뜻하는 낱말이 있으면 제외한다.
const BAD_WORDS=/(drawing|illustration|sketch|painting|engraving|lithograph|woodcut|cartoon|caricature|poster|diagram|schematic|blueprint|specification|font|typeface|lettering|template|chart|logo|icon|clipart|vector|scan|postcard|stamp|banknote|museum|replica|model\b|miniature|toy|historic|vintage|antique|archive)/i;
function usableCommonsFile(pg){
  const ii=pg.imageinfo&&pg.imageinfo[0];
  if(!ii)return false;
  if(ii.mime!=="image/jpeg")return false;
  if(!ii.width||!ii.height||ii.width<640||ii.height<420||ii.height/ii.width>1.9)return false;
  if(BAD_WORDS.test(pg.title||""))return false;
  const md={};(ii.commonmetadata||[]).forEach(m=>{md[m.name]=m.value;});
  if(!md.Make&&!md.Model)return false;
  const y=parseInt(String(md.DateTimeOriginal||md.DateTime||"").slice(0,4),10);
  if(!(y>=2005&&y<=2030))return false; // 촬영일 없거나 2005년 이전이면 제외
  return true;
}
function commonsCategoryImages(cat){
  if(catCache[cat])return catCache[cat];
  const url="https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*"
    +"&generator=categorymembers&gcmtype=file&gcmlimit=50"
    +"&gcmtitle="+encodeURIComponent("Category:"+cat)
    +"&prop=imageinfo&iiprop=url|mime|size|commonmetadata|extmetadata&iiextmetadatafilter=Artist|LicenseShortName&iiurlwidth=1100";
  const p=fetch(url).then(r=>r.ok?r.json():null).then(j=>{
    const pages=j&&j.query&&j.query.pages?Object.values(j.query.pages):[];
    return pages.filter(usableCommonsFile).map(pg=>{
      const ii=pg.imageinfo[0],em=ii.extmetadata||{},u=ii.thumburl||ii.url;
      PHOTO_META[u]={page:ii.descriptionurl||"",
        artist:String((em.Artist&&em.Artist.value)||"").replace(/<[^>]*>/g,"").trim().slice(0,80),
        lic:String((em.LicenseShortName&&em.LicenseShortName.value)||"").replace(/<[^>]*>/g,"").trim()};
      return u;
    });
  }).catch(()=>[]);
  catCache[cat]=p;return p;
}
function trickPhotoUrls(tr){
  if(tr.v.t==="flag")return Promise.resolve(["https://flagcdn.com/w320/"+tr.v.code+".png"]);
  const c=(typeof COMMONS!=="undefined")&&COMMONS[tr.id];
  if(!c)return Promise.resolve([]);
  // 한 트릭에 여러 카테고리(본 카테고리 + 검증된 하위 카테고리)를 연결할 수 있다
  const cats=Array.isArray(c)?c:[c];
  return Promise.all(cats.map(commonsCategoryImages)).then(lists=>[...new Set([].concat(...lists))]);
}
// 커먼즈 파일명에는 촬영 장소가 들어 있는 경우가 많다(예: "Bollard à Eguisheim.jpg").
// 사진을 받아서 blob: 임시 주소로 보여주면, 우클릭·새 탭 열기로 파일명을 볼 수 없다.
const blobCache=new Map();
function photoSrc(url){
  if(/^(img\/|blob:|data:)/.test(url))return Promise.resolve(url);
  if(blobCache.has(url))return blobCache.get(url);
  const p=fetch(url,{mode:"cors",referrerPolicy:"no-referrer"})
    .then(r=>{if(!r.ok)throw new Error("http "+r.status);return r.blob();})
    .then(b=>URL.createObjectURL(b))
    .catch(()=>url); // CORS 등으로 실패하면 원래 주소로라도 보여준다
  blobCache.set(url,p);
  if(blobCache.size>40){const k=blobCache.keys().next().value;const old=blobCache.get(k);blobCache.delete(k);
    old.then(s=>{if(s.startsWith("blob:"))setTimeout(()=>URL.revokeObjectURL(s),60000);});}
  return p;
}
function loadImg(url){return photoSrc(url).then(src=>new Promise((res,rej)=>{const im=new Image();
  im.referrerPolicy="no-referrer";im.draggable=false;im.alt="";im.dataset.src=url;
  im.onload=()=>res(im);im.onerror=rej;im.src=src;}));}
// 같은 트릭이라도 매번 카테고리 안의 '다른 사진'을 뽑아 새 문제처럼 만든다.
// (사진 한 장 = 사실상 문제 하나 → 체감 문제 수가 수천 개로 늘어남)
const shownPhotos={}; // trickId -> 이번 세션에 이미 보여준 사진 URL 집합
function preparePhotos(tr){
  const local="img/"+tr.id+".jpg";
  return loadImg(local).then(()=>[local]).catch(()=>
    trickPhotoUrls(tr).then(list=>{
      if(!list||!list.length)return [];
      if(G&&G.mode==="daily"){ // 오늘의 챌린지: 모든 플레이어가 같은 사진을 보도록 고정된 순서
        const arr=list.slice().sort(),k=hash32(G.seed+":"+tr.id)%arr.length;
        return arr.slice(k).concat(arr.slice(0,k)).slice(0,8);
      }
      const seen=shownPhotos[tr.id]||(shownPhotos[tr.id]=new Set());
      // 아직 안 나온 사진 우선, 다 봤으면 초기화하고 다시 전체에서 뽑기
      let fresh=list.filter(u=>!seen.has(u));
      if(!fresh.length){seen.clear();fresh=list.slice();}
      for(let i=fresh.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fresh[i],fresh[j]]=[fresh[j],fresh[i]];}
      const pick=fresh.slice(0,8);
      if(pick[0])seen.add(pick[0]);
      return pick;
    }));
}
/* ── 문제 사진 뷰어 ──
   틀(#exhibit)을 사진 비율에 꼭 맞춰 만들고, 확대한 사진은 틀 밖으로 밀려 나가지 않게 이동 범위를 제한한다.
   (휠·버튼·더블클릭·두 손가락으로 확대, 드래그로 이동, 1:1 버튼으로 처음 상태) */
const EX={s:1,tx:0,ty:0,w:0,h:0,img:null};
function exApply(anim){
  const inner=$("ex-inner"),box=$("exhibit");if(!inner)return;
  inner.classList.toggle("anim",!!anim);
  inner.style.transform="translate("+EX.tx+"px,"+EX.ty+"px) scale("+EX.s+")";
  box.classList.toggle("zoomed",EX.s>1.001);
}
function exClamp(){
  if(!EX.w){EX.s=1;EX.tx=0;EX.ty=0;return;}
  EX.s=Math.min(6,Math.max(1,EX.s));
  // 확대된 사진의 가장자리가 틀 안쪽으로 들어오지 않게(=흰 여백이 보이지 않게) 이동 범위 제한
  EX.tx=Math.min(0,Math.max(EX.w-EX.w*EX.s,EX.tx));
  EX.ty=Math.min(0,Math.max(EX.h-EX.h*EX.s,EX.ty));
}
function exZoomAt(f,cx,cy,anim){
  if(!EX.w)return;
  const s0=EX.s,s1=Math.min(6,Math.max(1,s0*f));if(s1===s0)return;
  EX.tx=cx-(cx-EX.tx)*(s1/s0);EX.ty=cy-(cy-EX.ty)*(s1/s0);EX.s=s1;
  exClamp();exApply(anim);
}
function exReset(anim){EX.s=1;EX.tx=0;EX.ty=0;exApply(anim!==false);}
function exFit(){
  const box=$("exhibit"),inner=$("ex-inner");if(!box)return;
  box.style.width="";box.style.height="";inner.style.width="";inner.style.height="";
  const im=EX.img;
  if(!im||!im.naturalWidth){EX.w=EX.h=0;exReset(false);return;}
  // 카드는 내용물 크기에 따라 줄어들 수 있으므로, 화면 너비와 카드 최대 폭(560px, style.css)을 기준으로 계산
  const card=box.parentElement,cs=getComputedStyle(card),stage=card.parentElement;
  const pad=parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight);
  const stageW=stage&&stage.clientWidth?stage.clientWidth-36:window.innerWidth;
  const maxW=Math.max(160,Math.min(window.innerWidth*0.92,stageW,560)-pad);
  const maxH=Math.max(220,window.innerHeight*0.56);
  const fit=Math.min(maxW/im.naturalWidth,maxH/im.naturalHeight);
  EX.w=Math.round(im.naturalWidth*fit);EX.h=Math.round(im.naturalHeight*fit);
  box.style.width=EX.w+"px";box.style.height=EX.h+"px";
  inner.style.width=EX.w+"px";inner.style.height=EX.h+"px";
  im.style.width=EX.w+"px";im.style.height=EX.h+"px";
  exReset(false);
}
function exShow(html){EX.img=null;$("ex-inner").innerHTML=html;exFit();}
function exShowImage(im){
  const inner=$("ex-inner");inner.innerHTML="";im.className="photo";inner.appendChild(im);
  EX.img=im;exFit();
  if(G)G.curPhoto=im.dataset.src||"";
}
function setExhibit(tr){
  const hint=$("exhibit-hint");
  if(hint)hint.textContent=tt("exhibitHint");
  const mine=()=>G&&G.tricks[G.round]===tr;
  exShow('<div class="ex-loading"><div class="spinner"></div></div>');
  const ok=im=>{if(!mine())return;exShowImage(im);
    if(hint)hint.textContent="📷 Wikimedia Commons · "+tt("exhibitHint");};
  // 배틀: 방장이 정해 둔 같은 사진을 두 사람 모두에게 보여준다(다른 문제로 바꾸지 않음)
  const fixed=G&&G.fixed&&G.fixed[G.round];
  if(fixed&&fixed.id===tr.id){
    let tries=0;const go=()=>loadImg(fixed.url).then(ok).catch(()=>{
      if(!mine())return;
      if(++tries<4)setTimeout(go,1200);
      else exShow('<div class="ex-loading dim" style="font-size:13px;padding:0 16px;text-align:center">'+esc(tt("photoFail"))+'</div>');
    });go();return;
  }
  const showPhoto=urls=>{
    if(!mine())return;
    if(!urls||!urls.length){skipTrick(tr);return;}
    let i=0;const step=()=>{
      if(!mine())return;
      if(i>=urls.length){skipTrick(tr);return;}
      loadImg(urls[i]).then(ok).catch(()=>{i++;step();});
    };step();
  };
  if(tr.v.t==="flag"){showPhoto(["https://flagcdn.com/w320/"+tr.v.code+".png"]);return;}
  preparePhotos(tr).then(showPhoto);
  if(G&&G.round<4&&G.tricks[G.round+1])preparePhotos(G.tricks[G.round+1]).then(u=>{if(u&&u[0])loadImg(u[0]).catch(()=>{});}); // 다음 라운드 미리 받기
}
// 사진을 못 구한 문제를 사진 있는 다른 문제로 교체 (무한 반복 방지)
function skipTrick(failed){
  if(!G)return;
  if(!G.dead)G.dead=new Set();
  if(failed)G.dead.add(failed.id);
  const used=new Set(G.tricks.map(t=>t.id));
  const cands=POOL.filter(t=>!used.has(t.id)&&!G.dead.has(t.id));
  // 오늘의 챌린지는 모두에게 같은 대체 문제가 나오도록 시드로 섞는다
  const rnd=G.mode==="daily"?mulberry32(hash32(G.seed+":skip:"+G.round+":"+G.dead.size)):Math.random;
  for(let k=cands.length-1;k>0;k--){const j=Math.floor(rnd()*(k+1));[cands[k],cands[j]]=[cands[j],cands[k]];}
  const pick=cands[0];
  if(!pick||G.dead.size>=8){
    exShow('<div class="ex-loading dim" style="font-size:13px;padding:0 16px;text-align:center">'+esc(tt("photoFail"))+'</div>');
    return;
  }
  G.tricks[G.round]=pick;
  $("exhibit-cat").textContent="EXHIBIT · "+(CATS[pick.cat][LANG]||CATS[pick.cat].en);
  setExhibit(pick);
}
function submitGuess(auto){
  if(!G||G.submitted)return;
  G.submitted=true;mapLocked=true;
  const tr=G.tricks[G.round];
  let d=null,sc=0,g=null;
  if(pendingGuess){g=[pendingGuess.lat,pendingGuess.lng];d=haversine(g,tr.tgt);sc=scoreFor(tr,d);}
  G.scores.push(sc);G.total+=sc;
  G.last={g,d,sc,raw:pendingGuessRaw,auto};
  if(G.mode==="battle"){
    // 배틀: 내 답만 보내고, 정답은 두 사람 모두 끝났을 때 동시에 공개한다
    battleSubmit(g,d,sc);
    const b=$("btn-guess");b.disabled=true;b.textContent="⏳ "+tt("waitOpp");
    return;
  }
  clearInterval(timerInt);
  revealRound();
}
// 정답 위치·거리·해설을 보여준다
function revealRound(){
  const tr=G.tricks[G.round],L0=G.last||{};
  $("hud-score").textContent=G.total;
  // 사용자가 클릭한 세계(복사본)와 같은 쪽에 정답 마커를 그린다.
  const refLng=L0.raw?L0.raw.lng:tr.tgt[1];
  const tgtLng=tr.tgt[1]+Math.round((refLng-tr.tgt[1])/360)*360;
  const tgt=L.latLng(tr.tgt[0],tgtLng);
  G.tgtLatLng=tgt;
  const tm=L.circleMarker(tgt,{radius:9,color:"#0b3d1e",weight:2,fillColor:"#5EBF82",fillOpacity:1});
  resultLayers.push(tm.addTo(map));
  tm.bindTooltip(tr.a[LANG]||tr.a.ko,{permanent:true,direction:"top",offset:[0,-10]});
  $("mapbox").classList.add("expanded");
  if(L0.g){const from=L0.raw||L.latLng(L0.g[0],L0.g[1]);
    const line=L.polyline([from,tgt],{color:"#FFC24B",weight:3,dashArray:"7 7"});
    resultLayers.push(line.addTo(map));
    setTimeout(()=>{map.invalidateSize();map.fitBounds(line.getBounds().pad(0.45));},330);
  }else setTimeout(()=>{map.invalidateSize();map.setView(tgt,4);},330);
  const b=$("btn-guess");b.disabled=true;b.textContent="🔍 "+(tr.a[LANG]||tr.a.ko);
  showRoundResult(tr,L0.d,L0.sc||0);
}
function showRoundResult(tr,d,sc){
  $("dock-answer").textContent=tr.a[LANG]||tr.a.ko;
  $("dock-points").textContent=sc.toLocaleString();
  $("dock-dist").textContent=d==null?tt("timeout"):fmtKm(d)+" "+tt("distKm");
  $("dock-explain").textContent=tr.e;
  $("dock-bar").style.width="0";
  requestAnimationFrame(()=>requestAnimationFrame(()=>{$("dock-bar").style.width=(sc/5000*100)+"%";}));
  // 사진 출처: 라운드가 끝난 뒤에만 보여준다(파일 설명에 장소가 적혀 있어 힌트가 되므로)
  const cr=$("dock-credit"),fx=G.fixed&&G.fixed[G.round];
  const meta=fx&&fx.id===tr.id?fx:(PHOTO_META[G.curPhoto]||null);
  if(meta&&meta.page){
    cr.href=meta.page;
    cr.textContent="📷 "+tt("photoBy")+": "+(meta.artist||"Wikimedia Commons")+(meta.lic?" · "+meta.lic:"")+" · Wikimedia Commons";
    cr.classList.remove("hidden");
  }else cr.classList.add("hidden");
  const oppEl=$("dock-opp");
  if(G.mode==="battle"){oppEl.classList.remove("hidden");oppEl.textContent="⏳ "+tt("waitOpp");updateBattleRoundOpp();}
  else oppEl.classList.add("hidden");
  const nx=$("dock-next");nx.disabled=false;
  nx.textContent=G.mode==="battle"?(G.round===4?tt("readyFinal"):tt("readyNext")):(G.round===4?tt("seeResult"):tt("next"));
  $("dock").classList.remove("hidden");
}
function nextRound(){
  if(G.mode==="battle"){battleNext();return;}
  if(G.round===4){finishGame();return;}
  G.round++;startRound();
}
function finishGame(){
  $("dock").classList.add("hidden");
  $("final-score").textContent=G.total.toLocaleString();
  $("final-title").textContent=tt("finalTitle");
  $("final-opp").classList.add("hidden");
  $("final-board").classList.add("hidden");
  $("btn-again").classList.toggle("hidden",G.mode==="daily");
  if(G.mode==="battle")battleFinish();
  if(G.mode==="daily")dailySubmit();
  $("ov-final").classList.remove("hidden");
}

/* ═══════════ Firebase ═══════════ */
let db=null,fbAuth=null,uid=null,online=false;
function setOnline(v){online=v;$("online-status").textContent=v?"🟢 "+tt("online"):"⚪ "+tt("offline");}
let fbProblem=null; // 어느 단계에서 막혔는지 사용자에게 알려주기 위한 진단 메시지
function fbInit(){
  const C=(typeof FIREBASE_CONFIG!=="undefined")?FIREBASE_CONFIG:null;
  const bad=v=>!v||/붙여넣기/.test(String(v));
  if(!C||bad(C.apiKey)){
    fbProblem="config.js에 Firebase 설정값을 넣어주세요 (apiKey 등이 비어 있음)";
    setOnline(false);console.warn("[Plonkle]",fbProblem);return;
  }
  if(bad(C.databaseURL)){
    fbProblem="config.js의 databaseURL이 비어 있어요. Firebase 콘솔에서 Realtime Database를 만든 뒤 그 주소를 넣어주세요";
    setOnline(false);console.warn("[Plonkle]",fbProblem);return;
  }
  if(typeof firebase==="undefined"){
    fbProblem="Firebase SDK를 불러오지 못했어요 (네트워크 차단 또는 index.html의 스크립트 누락)";
    setOnline(false);console.warn("[Plonkle]",fbProblem);return;
  }
  try{
    firebase.initializeApp(C);
    fbAuth=firebase.auth();db=firebase.database();
    fbAuth.onAuthStateChanged(u=>{if(u){uid=u.uid;fbProblem=null;setOnline(true);}});
    fbAuth.signInAnonymously().catch(err=>{
      const c=(err&&err.code)||"";
      if(/operation-not-allowed/.test(c))
        fbProblem="Firebase 콘솔 → Authentication → Sign-in method 에서 '익명(Anonymous)'을 사용 설정해 주세요";
      else if(/api-key|invalid/.test(c))
        fbProblem="apiKey가 올바르지 않아요. Firebase 콘솔의 웹 앱 설정값을 다시 복사해 주세요";
      else if(/configuration-not-found/.test(c))
        fbProblem="이 프로젝트에 웹 앱이 등록되지 않았거나 Authentication이 시작되지 않았어요";
      else fbProblem="Firebase 로그인 실패: "+(c||err);
      setOnline(false);console.warn("[Plonkle]",fbProblem,err);
    });
  }catch(e){
    fbProblem="Firebase 초기화 실패: "+(e&&e.message||e);
    setOnline(false);console.warn("[Plonkle]",fbProblem,e);
  }
}
function needOnline(){if(!online||!uid){toast(fbProblem||tt("needFirebase"));return true;}return false;}

/* ── 데일리 ── */
function dailySeed(){return hash32("plonkle-"+todayStr());}
function dailySubmit(){
  if(!online||!uid){toast(fbProblem||tt("needFirebase"));return;}
  const ref=db.ref("daily/"+todayStr()+"/"+uid);
  const total=G.total,name=NICK||"???";
  ref.transaction(cur=>{if(cur&&cur.score>=total)return cur;return{name,score:total,ts:Date.now()};})
    .then(loadDailyBoard).catch(()=>{});
}
function loadDailyBoard(){
  db.ref("daily/"+todayStr()).orderByChild("score").limitToLast(20).once("value").then(sn=>{
    const rows=[];sn.forEach(c=>{rows.push({uid:c.key,...c.val()});});
    rows.sort((a,b)=>b.score-a.score);
    const el=$("final-board");
    el.innerHTML="<b>🏆 "+tt("leaderboard")+"</b>"+rows.map((r,i)=>
      `<div class="row ${r.uid===uid?"me":""}"><span class="rank">${i+1}</span><span>${esc(r.name)}</span><span class="pts">${r.score.toLocaleString()}</span></div>`).join("");
    el.classList.remove("hidden");
  }).catch(()=>{});
}

/* ── 1대1 배틀 ──
   두 사람이 '서버 시계' 하나를 기준으로 같은 순간에 시작하고, 같은 순간에 끝난다.
   - 방장이 문제 5개와 사진을 정해 방(rooms/CODE/rounds)에 저장 → 두 사람 모두 같은 문제·같은 사진
   - 라운드 상태(phase): guess(답 고르기) → result(정답 공개) → 다음 라운드 … → final
   - 시작 시각 t0, 마감 시각 tEnd, 결과 화면 마감 resultEnd 를 서버 시간으로 저장하고
     두 사람 모두 Firebase 서버 시간(.info/serverTimeOffset)으로 남은 시간을 계산한다
   - 상태 전환(라운드 종료·다음 라운드)은 방장만 기록해서 두 화면이 어긋나지 않는다 */
let B=null,srvOffset=0;
const ROUND_MS=40000,COUNTDOWN_MS=3500,AFTER_FIRST_MS=15000,RESULT_MS=15000;
function srvNow(){return Date.now()+srvOffset;}
function roomCode(){const A="ABCDEFGHJKLMNPQRSTUVWXYZ";let c="";for(let i=0;i<5;i++)c+=A[Math.floor(Math.random()*A.length)];return c;}
function setWait(title,sub){$("wait-title").textContent=title;$("wait-sub").textContent=sub||"";}
function createRoom(){
  if(needOnline())return;
  const code=roomCode(),seed=Math.floor(Math.random()*2**31);
  const ref=db.ref("rooms/"+code);
  ref.set({seed,status:"waiting",pHost:{uid,name:NICK||"HOST"},created:firebase.database.ServerValue.TIMESTAMP})
  .then(()=>{
    B={code,ref,isHost:true,opp:null,oppTotal:0};
    ref.onDisconnect().remove(); // 방장이 나가면 방 자체를 정리
    $("room-code-view").textContent=code;
    setWait(tt("waiting"),tt("shareCode"));
    show("scr-wait");
    attachRoom();
  }).catch(err=>toast("Firebase: "+((err&&err.code)||err)));
}
function joinRoom(){
  if(needOnline())return;
  const code=$("join-code").value.trim().toUpperCase();
  if(code.length!==5)return;
  const ref=db.ref("rooms/"+code),err=$("lobby-err");
  const fail=m=>{err.textContent=m;err.classList.remove("hidden");};
  ref.once("value").then(sn=>{
    const r=sn.val();
    if(!r||!r.pHost)return fail(tt("noRoom"));
    if(r.status!=="waiting")return fail(tt("roomFull"));
    // 동시에 두 명이 들어오는 경우를 막기 위해 트랜잭션으로 자리 차지
    return ref.child("pGuest").transaction(cur=>{if(cur&&cur.uid!==uid)return;return{uid,name:NICK||"GUEST"};})
      .then(res=>{
        if(!res.committed)return fail(tt("roomFull"));
        err.classList.add("hidden");
        B={code,ref,isHost:false,opp:null,oppTotal:0};
        ref.child("pGuest").onDisconnect().remove();
        $("room-code-view").textContent=code;
        setWait(tt("preparing"),"");
        show("scr-wait");
        ref.update({status:"preparing"});
        attachRoom();
      });
  }).catch(e=>fail("Firebase: "+((e&&e.code)||e)));
}
function attachRoom(){
  B.offRef=db.ref(".info/serverTimeOffset");
  B.offHandler=B.offRef.on("value",s=>{srvOffset=s.val()||0;});
  B.handler=B.ref.on("value",sn=>{
    if(!B)return;
    const r=sn.val();
    if(!r){
      // 최종 결과를 보고 있을 때 상대가 먼저 나가도 내 결과 화면은 그대로 둔다
      if(B.finished){B.ref.off("value",B.handler);clearInterval(B.tick);return;}
      if(B.started)toast(tt("oppLeft"));
      leaveBattle(true);return;
    }
    B.room=r;
    const opP=B.isHost?r.pGuest:r.pHost;
    if(opP)B.opp=opP;
    if(B.started&&!opP&&r.phase!=="final"){toast(tt("oppLeft"));leaveBattle();return;}
    if(r.status==="preparing"){
      setWait(tt("preparing"),opP?("🆚 "+opP.name):"");
      if(B.isHost&&!B.preparing)hostPrepare(r);
    }
    if(r.status==="playing"&&r.rounds){
      if(!B.started){B.started=true;startBattleGame(r);}
      battleSync(r);
    }
  });
  if(B.isHost)B.tick=setInterval(hostTick,250);
}
// 방장: 문제 5개 + 각 문제의 사진을 정해서 방에 저장 (사진이 실제로 열리는지 확인한 것만)
async function hostPrepare(r){
  B.preparing=true;
  try{
    const first=pickTricks(mulberry32(r.seed>>>0),false);
    const backup=POOL.slice();shuffle(backup,mulberry32((r.seed^0x5bd1e995)>>>0));
    const used=new Set(),rounds=[];let bi=0;
    const nextBackup=()=>{while(bi<backup.length){const t=backup[bi++];if(!used.has(t.id))return t;}return null;};
    for(let i=0;i<5;i++){
      let tr=first[i],got=null;
      for(let tries=0;tries<10&&tr&&!got;tries++){
        if(used.has(tr.id)){tr=nextBackup();continue;}
        got=await pickLoadablePhoto(tr);
        if(!got){used.add(tr.id);tr=nextBackup();}
      }
      if(!got)throw new Error("no photo");
      used.add(tr.id);rounds.push(Object.assign({id:tr.id},got));
    }
    if(!B)return;
    const t0=srvNow()+COUNTDOWN_MS+1500;
    await B.ref.update({rounds,status:"playing",round:0,phase:"guess",t0,tEnd:t0+ROUND_MS,cut:false});
  }catch(e){
    B&&(B.preparing=false);
    toast("배틀 준비 실패: 사진을 불러오지 못했어요. 다시 시도해 주세요.");
  }
}
async function pickLoadablePhoto(tr){
  const urls=tr.v.t==="flag"?["https://flagcdn.com/w320/"+tr.v.code+".png"]:await preparePhotos(tr);
  for(const u of (urls||[]).slice(0,4)){
    try{await loadImg(u);const m=PHOTO_META[u]||{};return{url:u,page:m.page||"",artist:m.artist||"",lic:m.lic||""};}catch(e){}
  }
  return null;
}
function startBattleGame(r){
  const tricks=r.rounds.map(x=>TRICKS.find(t=>t.id===x.id));
  if(tricks.some(t=>!t)){toast("두 사람의 게임 버전이 달라요. 새로고침(Ctrl+Shift+R) 후 다시 시도해 주세요.");leaveBattle();return;}
  G={mode:"battle",seed:r.seed,round:-1,total:0,scores:[],submitted:true,tricks,fixed:r.rounds};
  r.rounds.forEach(x=>loadImg(x.url).catch(()=>{})); // 사진 5장 미리 받아 두기 → 시작 순간 바로 표시
  show("scr-game");
  if(!map)initMap();
  setTimeout(()=>map.invalidateSize(),60);
  $("hud-opp-wrap").classList.remove("hidden");
  $("hud-timer").classList.remove("hidden");
  $("hud-opp-name").textContent=(B.opp&&B.opp.name)||"?";
  $("dock").classList.add("hidden");$("ov-final").classList.add("hidden");
  startBattleTimer();
}
function battleSync(r){
  const key=r.round+"|"+r.phase;
  if(B.shown!==key){
    B.shown=key;
    if(r.phase==="guess")beginBattleRound(r);
    else if(r.phase==="result"){
      if(G.round!==r.round)beginBattleRound(r,true);
      if(!G.submitted)submitGuess(true); // 시간이 끝났는데 아직 안 냈으면 지금 찍힌 핀으로 제출
      revealRound();
    }else if(r.phase==="final"){
      if(G.round===r.round&&!G.submitted)submitGuess(true);
      B.finished=true;finishGame();
    }
  }
  updateOppScore(r);
  if(r.phase==="result"){updateBattleRoundOpp();drawOppPin(r);}
}
function beginBattleRound(r,silent){
  G.round=r.round;G.submitted=false;G.last=null;B.oppDrawn=false;
  const tr=G.tricks[G.round];
  $("hud-round").textContent=G.round+1;
  $("hud-score").textContent=G.total;
  $("exhibit-cat").textContent="EXHIBIT · "+(CATS[tr.cat][LANG]||CATS[tr.cat].en);
  resetMapForRound();
  mapLocked=true; // 시작 신호 전에는 핀을 꽂을 수 없다
  clearTimeout(B.revealT);
  if(silent)return;
  showCountdown(r);
  B.revealT=setTimeout(()=>{
    if(!G||G.round!==r.round||G.submitted)return;
    mapLocked=false;setExhibit(tr);
  },Math.max(0,r.t0-srvNow()));
}
function showCountdown(r){
  const left=Math.max(1,Math.ceil((r.t0-srvNow())/1000));
  exShow('<div class="ex-countdown"><b id="ex-count">'+left+'</b><small>ROUND '+(r.round+1)+' · '+esc(tt("startsIn"))+'</small></div>');
}
function battleGuesses(r,round){return (r.guesses&&r.guesses[round])||{};}
// 상대 점수: 정답이 공개된 라운드까지만 합산 (진행 중인 라운드 점수로 힌트를 얻지 않도록)
function updateOppScore(r){
  if(!B||!B.opp)return;let sum=0;
  const upto=r.phase==="guess"?r.round-1:r.round;
  for(let i=0;i<=upto;i++){const g=battleGuesses(r,i)[B.opp.uid];if(g)sum+=g.score;}
  B.oppTotal=sum;$("hud-opp-score").textContent=sum;
}
function battleSubmit(g,d,sc){
  if(!B)return;
  B.ref.child("guesses/"+G.round+"/"+uid).set({lat:g?g[0]:null,lng:g?g[1]:null,d:d==null?null:Math.round(d),score:sc,name:NICK||"?"});
}
function updateBattleRoundOpp(){
  if(!B||!B.room||!B.opp||!G)return;
  const og=battleGuesses(B.room,G.round)[B.opp.uid];
  const el=$("dock-opp");
  if(og)el.textContent="🆚 "+(B.opp.name||"?")+" — "+og.score.toLocaleString()+tt("pts")+(og.d!=null?" · "+fmtKm(og.d)+" km":" · "+tt("timeout"));
}
// 정답 공개 때 상대가 찍은 위치도 지도에 표시
function drawOppPin(r){
  if(B.oppDrawn||!B.opp||!G.tgtLatLng)return;
  const og=battleGuesses(r,G.round)[B.opp.uid];
  if(!og||og.lat==null)return;
  B.oppDrawn=true;
  const lng=og.lng+Math.round((G.tgtLatLng.lng-og.lng)/360)*360;
  const p=L.latLng(og.lat,lng);
  const m=L.circleMarker(p,{radius:7,color:"#7a1020",weight:2,fillColor:"#FF5D6C",fillOpacity:1}).addTo(map);
  m.bindTooltip(B.opp.name||tt("oppPin"),{direction:"top",offset:[0,-8]});
  resultLayers.push(m);
  resultLayers.push(L.polyline([p,G.tgtLatLng],{color:"#FF5D6C",weight:2,dashArray:"4 6"}).addTo(map));
}
// '다음 라운드 준비' → 두 사람 모두 준비되거나 결과 화면 시간이 끝나면 방장이 동시에 다음 라운드를 시작
function battleNext(){
  if(!B||!G)return;
  B.ref.child("ready/"+G.round+"/"+uid).set(true);
  const nx=$("dock-next");nx.disabled=true;nx.textContent="⏳ "+tt("readyWait");
}
function hostTick(){
  if(!B||!B.isHost||B.busy||!B.room||B.room.status!=="playing")return;
  const r=B.room,now=srvNow();
  const ids=[r.pHost&&r.pHost.uid,r.pGuest&&r.pGuest.uid].filter(Boolean);
  const upd=o=>{B.busy=true;B.ref.update(o).then(()=>{B.busy=false;},()=>{B.busy=false;});};
  if(r.phase==="guess"){
    const gs=battleGuesses(r,r.round),n=ids.filter(id=>gs[id]).length;
    if(n>=2||now>=r.tEnd+1200)upd({phase:"result",resultEnd:now+RESULT_MS});
    else if(n===1&&!r.cut&&r.tEnd-now>AFTER_FIRST_MS)upd({tEnd:now+AFTER_FIRST_MS,cut:true}); // 한 명이 먼저 내면 남은 사람은 15초
  }else if(r.phase==="result"){
    const rd=(r.ready&&r.ready[r.round])||{};
    if(ids.every(id=>rd[id])||now>=r.resultEnd){
      if(r.round>=4)upd({phase:"final"});
      else{const t0=now+COUNTDOWN_MS;upd({round:r.round+1,phase:"guess",t0,tEnd:t0+ROUND_MS,cut:false});}
    }
  }
}
function battleFinish(){
  const opp=B&&B.opp;
  const el=$("final-opp");el.classList.remove("hidden");
  const o=B?B.oppTotal:0;
  let verdict=G.total>o?`<span class="win">${tt("win")}</span>`:(G.total<o?`<span class="lose">${tt("lose")}</span>`:tt("draw"));
  el.innerHTML=`${verdict}<br>${esc(NICK||"ME")} ${G.total.toLocaleString()} : ${o.toLocaleString()} ${esc(opp?opp.name:"?")}`;
}
// 남은 시간 표시: 모두 서버 시간 기준이라 두 화면의 숫자가 같다
function startBattleTimer(){
  clearInterval(timerInt);
  const el=$("hud-timer");
  timerInt=setInterval(()=>{
    if(!B||!B.room||!G)return;
    const r=B.room,now=srvNow();
    if(r.phase==="guess"){
      if(now<r.t0){
        const left=Math.max(1,Math.ceil((r.t0-now)/1000));
        el.textContent=left;el.classList.remove("low");
        const c=document.getElementById("ex-count");if(c)c.textContent=left;
        return;
      }
      const remain=Math.max(0,Math.ceil((r.tEnd-now)/1000));
      el.textContent=remain;el.classList.toggle("low",remain<=10);
      if(now>=r.tEnd&&!G.submitted)submitGuess(true);
    }else if(r.phase==="result"){
      const remain=Math.max(0,Math.ceil((r.resultEnd-now)/1000));
      el.textContent=remain;el.classList.remove("low");
    }
  },200);
}
function leaveBattle(silent){
  if(B){
    try{
      B.ref.off("value",B.handler);
      if(B.offRef)B.offRef.off("value",B.offHandler);
      clearInterval(B.tick);clearTimeout(B.revealT);
      if(B.isHost)B.ref.remove();
      else B.ref.child("pGuest").remove();
    }catch(e){}
  }
  B=null;clearInterval(timerInt);G=null;
  show("scr-home");
}

/* ═══════════ 도감 ═══════════ */
function buildStudy(){
  const sel=$("study-filter");
  const cats=[...new Set(POOL.map(t=>t.cat))];
  sel.innerHTML=`<option value="all">${tt("all")}</option>`+
    cats.map(c=>`<option value="${c}">${CATS[c][LANG]||CATS[c].en}</option>`).join("");
  renderStudy("all");
}
function renderStudy(cat){
  const grid=$("study-grid");
  const list=POOL.filter(tr=>cat==="all"||tr.cat===cat);
  grid.innerHTML=`<div class="study-count">총 ${list.length}개</div>`+list.map(tr=>
    `<div class="study-card" data-tid="${tr.id}"><div class="exhibit"><div class="ex-loading" style="min-height:150px"><div class="spinner"></div></div></div>
     <h4>${esc(tr.a[LANG]||tr.a.ko)}</h4><p>${esc(tr.e)}</p></div>`).join("");
  const byId={};list.forEach(tr=>byId[tr.id]=tr);
  const fill=cardEl=>{
    if(!cardEl||cardEl.dataset.done)return;
    cardEl.dataset.done="1";
    const tr=byId[cardEl.dataset.tid];if(!tr)return;
    const card=cardEl.querySelector('.exhibit');if(!card)return;
    if(tr.v.t==="flag"){
      loadImg("https://flagcdn.com/w320/"+tr.v.code+".png")
        .then(im=>{im.className="photo";card.innerHTML="";card.appendChild(im);})
        .catch(()=>{cardEl.remove();});
      return;}
    preparePhotos(tr).then(urls=>{
      const first=(urls&&urls[0]);
      if(!first){cardEl.remove();return;} // 실사 없으면 카드 제거(일러스트 금지)
      loadImg(first).then(im=>{im.className="photo";card.innerHTML="";card.appendChild(im);})
        .catch(()=>{cardEl.remove();});
    });
  };
  // 화면에 보이는 카드만 순차적으로 사진을 불러온다(수백 개 동시 요청 방지)
  const cards=[...grid.querySelectorAll('.study-card')];
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(ents=>{
      ents.forEach(e=>{if(e.isIntersecting){fill(e.target);io.unobserve(e.target);}});
    },{root:grid,rootMargin:"300px"});
    cards.forEach(c=>io.observe(c));
  }else{
    cards.slice(0,40).forEach(fill);
  }
}

/* ═══════════ 이벤트 바인딩 ═══════════ */
// 닉네임 입력: 1~10글자, 입력하는 동안 "3 / 10"처럼 글자 수를 보여준다
function nickLen(s){return [...s].length;}
function askNick(force){
  if(NICK&&!force)return Promise.resolve(true);
  return new Promise(resolve=>{
    const ov=$("ov-nick"),inp=$("nick-input"),cnt=$("nick-count"),help=document.querySelector(".nick-help");
    const upd=()=>{const n=nickLen(inp.value.trim());cnt.textContent=n+" / 10";help.classList.remove("err");$("nick-rule").textContent=tt("nickRule");};
    const close=ok=>{ov.classList.add("hidden");inp.oninput=null;inp.onkeydown=null;resolve(ok);};
    inp.value=NICK||"";upd();inp.oninput=upd;
    const save=()=>{
      const v=[...inp.value.trim()].slice(0,10).join("");
      if(!v){help.classList.add("err");$("nick-rule").textContent=tt("nickEmpty");inp.focus();return;}
      NICK=v;try{localStorage.setItem("plk_nick",NICK);}catch(e){}
      applyI18n();close(true);
    };
    $("nick-ok").onclick=save;
    $("nick-cancel").onclick=()=>{if(!NICK){NICK="Player";try{localStorage.setItem("plk_nick",NICK);}catch(e){}applyI18n();}close(!!NICK);};
    inp.onkeydown=e=>{if(e.key==="Enter"&&!e.isComposing)save();if(e.key==="Escape")$("nick-cancel").onclick();};
    ov.classList.remove("hidden");setTimeout(()=>{inp.focus();inp.select();},30);
  });
}
$("btn-practice").onclick=()=>startGame("practice",Math.floor(Math.random()*2**31));
$("btn-daily").onclick=()=>{askNick().then(()=>startGame("daily",dailySeed()));};
$("btn-battle").onclick=()=>{askNick().then(()=>show("scr-lobby"));};
$("btn-study").onclick=()=>{buildStudy();show("scr-study");};
$("btn-nick").onclick=()=>askNick(true);
$("btn-lang").onclick=()=>$("lang-menu").classList.toggle("hidden");
document.querySelectorAll("#lang-menu [data-lang]").forEach(b=>b.onclick=()=>{
  LANG=b.dataset.lang;localStorage.setItem("plk_lang",LANG);
  $("lang-menu").classList.add("hidden");applyI18n();
});
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>show("scr-home"));
$("btn-create-room").onclick=createRoom;
$("btn-join-room").onclick=joinRoom;
$("btn-cancel-room").onclick=()=>leaveBattle();
$("btn-quit").onclick=()=>{clearInterval(timerInt);if(G&&G.mode==="battle")leaveBattle();else show("scr-home");G=null;};
$("btn-guess").onclick=()=>submitGuess(false);
$("dock-next").onclick=nextRound;
$("btn-again").onclick=()=>{$("ov-final").classList.add("hidden");
  if(G.mode==="battle"){leaveBattle();return;}
  startGame(G.mode==="daily"?"practice":G.mode,Math.floor(Math.random()*2**31));};
$("btn-home").onclick=()=>{$("ov-final").classList.add("hidden");if(G&&G.mode==="battle")leaveBattle();else show("scr-home");G=null;};
$("map-expand").onclick=()=>{$("mapbox").classList.toggle("expanded");setTimeout(()=>map&&map.invalidateSize(),300);};
$("study-filter").onchange=e=>renderStudy(e.target.value);
window.addEventListener("resize",()=>map&&map.invalidateSize());
$("join-code").addEventListener("keydown",e=>{if(e.key==="Enter")joinRoom();});

/* 문제 사진 조작: 휠·더블클릭·두 손가락 확대, 드래그 이동, ＋/－/1:1 버튼 */
(function(){
  const box=$("exhibit");if(!box)return;
  const pts=new Map();let last=null,pinch=null;
  const rel=e=>{const r=box.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top];};
  const onCtrl=e=>!!(e.target.closest&&e.target.closest(".ex-ctrl"));
  box.addEventListener("wheel",e=>{if(!EX.w)return;e.preventDefault();const[x,y]=rel(e);exZoomAt(e.deltaY<0?1.2:1/1.2,x,y,false);},{passive:false});
  // 버튼 위에서 누른 것은 드래그로 가로채지 않는다 → ＋/－/1:1 버튼이 확대 중에도 정상 동작
  box.addEventListener("pointerdown",e=>{
    if(onCtrl(e)||!EX.w)return;
    try{box.setPointerCapture(e.pointerId);}catch(_){}
    pts.set(e.pointerId,rel(e));
    if(pts.size===2){const[a,b]=[...pts.values()];pinch=Math.hypot(a[0]-b[0],a[1]-b[1]);}
    last=rel(e);box.classList.add("dragging");
  });
  box.addEventListener("pointermove",e=>{
    if(!pts.has(e.pointerId))return;
    const p=rel(e);pts.set(e.pointerId,p);
    if(pts.size>=2){
      const[a,b]=[...pts.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);
      if(pinch>0)exZoomAt(d/pinch,(a[0]+b[0])/2,(a[1]+b[1])/2,false);
      pinch=d;return;
    }
    if(last&&EX.s>1){EX.tx+=p[0]-last[0];EX.ty+=p[1]-last[1];exClamp();exApply(false);}
    last=p;
  });
  const up=e=>{pts.delete(e.pointerId);if(pts.size<2)pinch=null;last=pts.size?[...pts.values()][0]:null;if(!pts.size)box.classList.remove("dragging");};
  box.addEventListener("pointerup",up);box.addEventListener("pointercancel",up);
  box.addEventListener("dblclick",e=>{if(onCtrl(e)||!EX.w)return;const[x,y]=rel(e);if(EX.s>1.001)exReset();else exZoomAt(2.5,x,y,true);});
  // 우클릭 저장·끌어서 새 탭 열기 막기 (사진 파일명에 장소가 적혀 있는 경우가 있어서)
  box.addEventListener("contextmenu",e=>e.preventDefault());
  box.addEventListener("dragstart",e=>e.preventDefault());
  $("ex-plus").onclick=()=>exZoomAt(1.5,EX.w/2,EX.h/2,true);
  $("ex-minus").onclick=()=>exZoomAt(1/1.5,EX.w/2,EX.h/2,true);
  $("ex-reset").onclick=()=>exReset(true);
  let rt=null;window.addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(()=>{if(EX.img)exFit();},120);});
})();

/* init */
applyI18n();
fbInit();
