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
}
let toastTimer=null;
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.remove("hidden");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add("hidden"),2600);}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");}
function todayStr(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function hash32(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);
  t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(arr,rng){for(let i=arr.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}}
function haversine(a,b){const R=6371,rad=x=>x*Math.PI/180;
  const dLat=rad(b[0]-a[0]),dLng=rad(b[1]-a[1]);
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
let map=null,guessMarker=null,resultLayers=[],mapLocked=false,pendingGuess=null;
function initMap(){
  map=L.map("map",{worldCopyJump:true,minZoom:2,maxZoom:20,zoomControl:true}).setView([25,10],2);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{
    subdomains:"abcd",maxZoom:20,keepBuffer:6,updateWhenIdle:false,updateWhenZooming:true,
    attribution:"&copy; OpenStreetMap &copy; CARTO"
  }).addTo(map);
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
  pendingGuess=latlng;
  if(!guessMarker)guessMarker=L.marker(latlng).addTo(map);
  else guessMarker.setLatLng(latlng);
  const b=$("btn-guess");b.disabled=false;b.textContent=tt("guessGo");
}
function resetMapForRound(){
  mapLocked=false;pendingGuess=null;
  if(guessMarker){map.removeLayer(guessMarker);guessMarker=null;}
  resultLayers.forEach(l=>map.removeLayer(l));resultLayers=[];
  map.setView([25,10],2);
  const b=$("btn-guess");b.disabled=true;b.textContent=tt("guess");
  $("mapbox").classList.remove("expanded");
  $("dock").classList.add("hidden");
  setTimeout(()=>map.invalidateSize(),300);
}

/* ═══════════ 게임 상태 ═══════════ */
let G=null,timerInt=null;
function pickTricks(rng){
  const idx=[...TRICKS.keys()];shuffle(idx,rng);
  const chosen=[],cats=new Set();
  for(const i of idx){const tr=TRICKS[i];if(cats.has(tr.cat))continue;chosen.push(tr);cats.add(tr.cat);if(chosen.length===5)break;}
  let j=0;while(chosen.length<5&&j<idx.length){const tr=TRICKS[idx[j++]];if(!chosen.includes(tr))chosen.push(tr);}
  return chosen;
}
function startGame(mode,seed){
  G={mode,seed,round:0,total:0,scores:[],submitted:false,tricks:pickTricks(mulberry32(seed>>>0))};
  show("scr-game");
  if(!map)initMap();
  setTimeout(()=>map.invalidateSize(),60);
  $("hud-opp-wrap").classList.toggle("hidden",mode!=="battle");
  $("hud-timer").classList.toggle("hidden",mode!=="battle");
  $("dock").classList.add("hidden");$("ov-final").classList.add("hidden");
  startRound();
}
/* ── 실물 사진 파이프라인 ──
   우선순위: img/<id>.jpg(직접 업로드) → 위키백과 대표사진 → 위키미디어 커먼즈 실시간 검색 → SVG
   ※ tld/phone/car/flag 는 검색 제외(국기는 이미 실사, 나머지는 '코드 자체'가 단서) */
const photoCache={};
const NOSEARCH={tld:1,phone:1,car:1,flag:1};
function autoQuery(tr){
  const en=tr.a.en.replace(/[^\x20-\x7E]/g," ").replace(/\s+/g," ").trim();
  switch(tr.cat){
    case"bollard":return "road delineator post "+en;
    case"plate":return en+" vehicle registration plate";
    case"platecode":return en+" license plate";
    case"lang":return en+" street name sign";
    case"sign":return en+" road sign";
    case"pole":return en+" utility pole";
    case"road":return en+" road markings";
    default:return null;
  }
}
function commonsSearch(q){
  const url="https://commons.wikimedia.org/w/api.php?action=query&generator=search"
    +"&gsrsearch="+encodeURIComponent(q+" filetype:bitmap")
    +"&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url&iiurlwidth=1100&format=json&origin=*";
  return fetch(url).then(r=>r.json()).then(j=>{
    const pages=j.query&&j.query.pages?Object.values(j.query.pages):[];
    pages.sort((a,b)=>(a.index||99)-(b.index||99));
    return pages.map(p=>p.imageinfo&&p.imageinfo[0]&&(p.imageinfo[0].thumburl||p.imageinfo[0].url)).filter(Boolean);
  }).catch(()=>[]);
}
function loadWikiPhoto(tr){
  const t=(typeof WIKI!=="undefined")&&WIKI[tr.id];
  if(!t)return Promise.resolve(null);
  let lang="en",title=t;const m=t.match(/^([a-z]{2}):(.+)$/);if(m){lang=m[1];title=m[2];}
  return fetch("https://"+lang+".wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(title))
    .then(r=>r.ok?r.json():null)
    .then(j=>j&&((j.originalimage&&j.originalimage.source)||(j.thumbnail&&j.thumbnail.source))||null)
    .catch(()=>null);
}
function loadFirstImage(urls,ok){
  if(!urls||!urls.length)return;
  const u=urls[0],im=new Image();
  im.onload=()=>ok(im,u);
  im.onerror=()=>loadFirstImage(urls.slice(1),ok);
  im.referrerPolicy="no-referrer";
  im.src=u;
}
function photoUrlsFor(tr){
  if(photoCache[tr.id])return Promise.resolve(photoCache[tr.id]);
  const saved=localStorage.getItem("plk_img_"+tr.id);
  if(saved){const arr=JSON.parse(saved);photoCache[tr.id]=arr;return Promise.resolve(arr);}
  return loadWikiPhoto(tr).then(wu=>{
    const q=(typeof Q!=="undefined"&&Q[tr.id])||(!NOSEARCH[tr.cat]&&autoQuery(tr));
    const p=q?commonsSearch(q):Promise.resolve([]);
    return Promise.resolve(p).then(list=>{
      const arr=(wu?[wu]:[]).concat(list);
      photoCache[tr.id]=arr;
      try{if(arr.length)localStorage.setItem("plk_img_"+tr.id,JSON.stringify(arr));}catch(e){}
      return arr;
    });
  });
}
function setExhibit(tr){
  const box=$("exhibit"),hint=$("exhibit-hint");
  box.innerHTML=renderTrick(tr);
  if(hint)hint.textContent=tt("exhibitHint");
  const swap=(im,src)=>{
    if(!G||G.tricks[G.round]!==tr)return;
    box.innerHTML="";im.className="photo";box.appendChild(im);
    if(hint&&src&&/wikimedia|wikipedia/.test(src))hint.textContent="📷 Wikimedia Commons · "+tt("exhibitHint");
  };
  const local=new Image();
  local.onload=()=>swap(local,null);
  local.onerror=()=>{photoUrlsFor(tr).then(arr=>loadFirstImage(arr,swap));};
  local.src="img/"+tr.id+".jpg";
}
function startRound(){
  const tr=G.tricks[G.round];G.submitted=false;
  $("hud-round").textContent=G.round+1;
  $("hud-score").textContent=G.total;
  $("exhibit-cat").textContent="EXHIBIT · "+(CATS[tr.cat][LANG]||CATS[tr.cat].en);
  setExhibit(tr);
  resetMapForRound();
  if(G.mode==="battle")startBattleTimer();
}
function submitGuess(auto){
  if(!G||G.submitted)return;
  G.submitted=true;mapLocked=true;clearInterval(timerInt);
  const tr=G.tricks[G.round];
  let d=null,sc=0,g=null;
  if(pendingGuess){g=[pendingGuess.lat,pendingGuess.lng];d=haversine(g,tr.tgt);sc=scoreFor(tr,d);}
  G.scores.push(sc);G.total+=sc;
  $("hud-score").textContent=G.total;
  const tgt=L.latLng(tr.tgt[0],tr.tgt[1]);
  const tm=L.circleMarker(tgt,{radius:9,color:"#0b3d1e",weight:2,fillColor:"#5EBF82",fillOpacity:1});
  resultLayers.push(tm.addTo(map));
  tm.bindTooltip(tr.a[LANG]||tr.a.ko,{permanent:true,direction:"top",offset:[0,-10]});
  $("mapbox").classList.add("expanded");
  if(g){const line=L.polyline([L.latLng(g[0],g[1]),tgt],{color:"#FFC24B",weight:3,dashArray:"7 7"});
    resultLayers.push(line.addTo(map));
    setTimeout(()=>{map.invalidateSize();map.fitBounds(line.getBounds().pad(0.45));},330);
  }else setTimeout(()=>{map.invalidateSize();map.setView(tgt,4);},330);
  const b=$("btn-guess");b.disabled=true;b.textContent="🔍 "+(tr.a[LANG]||tr.a.ko);
  if(G.mode==="battle")battleSubmit(g,d,sc);
  showRoundResult(tr,d,sc,auto);
}
function showRoundResult(tr,d,sc,auto){
  $("dock-answer").textContent=tr.a[LANG]||tr.a.ko;
  $("dock-points").textContent=sc.toLocaleString();
  $("dock-dist").textContent=d==null?tt("timeout"):fmtKm(d)+" "+tt("distKm");
  $("dock-explain").textContent=tr.e;
  $("dock-bar").style.width="0";
  requestAnimationFrame(()=>requestAnimationFrame(()=>{$("dock-bar").style.width=(sc/5000*100)+"%";}));
  const oppEl=$("dock-opp");
  if(G.mode==="battle"){oppEl.classList.remove("hidden");oppEl.textContent="\u23f3 "+tt("waiting");updateBattleRoundOpp();}
  else oppEl.classList.add("hidden");
  $("dock-next").textContent=G.round===4?tt("seeResult"):tt("next");
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
function fbInit(){
  try{
    if(typeof FIREBASE_CONFIG==="undefined"||!FIREBASE_CONFIG.apiKey||/붙여넣기/.test(FIREBASE_CONFIG.apiKey)){setOnline(false);return;}
    firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth=firebase.auth();db=firebase.database();
    fbAuth.onAuthStateChanged(u=>{if(u){uid=u.uid;setOnline(true);}});
    fbAuth.signInAnonymously().catch(()=>setOnline(false));
  }catch(e){setOnline(false);}
}
function needOnline(){if(!online||!uid){toast(tt("needFirebase"));return true;}return false;}

/* ── 데일리 ── */
function dailySeed(){return hash32("plonkle-"+todayStr());}
function dailySubmit(){
  if(!online||!uid){toast(tt("needFirebase"));return;}
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

/* ── 1대1 배틀 ── */
let B=null;
function roomCode(){const A="ABCDEFGHJKLMNPQRSTUVWXYZ";let c="";for(let i=0;i<5;i++)c+=A[Math.floor(Math.random()*A.length)];return c;}
function createRoom(){
  if(needOnline())return;
  const code=roomCode(),seed=Math.floor(Math.random()*2**31);
  const ref=db.ref("rooms/"+code);
  ref.set({seed,status:"waiting",round:0,roundStart:0,
    pHost:{uid,name:NICK||"HOST"},created:firebase.database.ServerValue.TIMESTAMP})
  .then(()=>{
    B={code,ref,isHost:true,opp:null,oppTotal:0,lastRound:0};
    ref.child("pHost").onDisconnect().remove();
    $("room-code-view").textContent=code;
    show("scr-wait");
    attachRoom();
  }).catch(()=>toast("Firebase error"));
}
function joinRoom(){
  if(needOnline())return;
  const code=$("join-code").value.trim().toUpperCase();
  if(code.length!==5)return;
  const ref=db.ref("rooms/"+code);
  ref.once("value").then(sn=>{
    const r=sn.val();
    const err=$("lobby-err");
    if(!r){err.textContent=tt("noRoom");err.classList.remove("hidden");return;}
    if(r.pGuest){err.textContent=tt("roomFull");err.classList.remove("hidden");return;}
    err.classList.add("hidden");
    B={code,ref,isHost:false,opp:null,oppTotal:0,lastRound:0};
    ref.update({pGuest:{uid,name:NICK||"GUEST"},status:"playing",roundStart:Date.now()})
      .then(()=>{ref.child("pGuest").onDisconnect().remove();attachRoom();});
  });
}
function attachRoom(){
  B.handler=B.ref.on("value",sn=>{
    const r=sn.val();
    if(!r){leaveBattle(true);return;}
    B.room=r;
    const meP=B.isHost?r.pHost:r.pGuest,opP=B.isHost?r.pGuest:r.pHost;
    if(r.status==="playing"&&!B.started){
      B.started=true;B.opp=opP;
      startGame("battle",r.seed);
      $("hud-opp-name").textContent=(opP&&opP.name)||"?";
    }
    if(B.started&&!opP&&r.status==="playing"){toast(tt("oppLeft"));leaveBattle();return;}
    if(B.started){
      if(opP)$("hud-opp-name").textContent=opP.name;
      updateOppScore(r);
      if(r.round>G.round&&r.round<=4){ // 라운드 넘어감
        G.round=r.round;startRound();
      }
      if(G.submitted)updateBattleRoundOpp();
    }
  });
}
function battleGuesses(r,round){return (r.guesses&&r.guesses[round])||{};}
function updateOppScore(r){
  if(!B.opp)return;let sum=0;
  for(let i=0;i<5;i++){const g=battleGuesses(r,i)[B.opp.uid];if(g)sum+=g.score;}
  B.oppTotal=sum;$("hud-opp-score").textContent=sum;
}
function battleSubmit(g,d,sc){
  if(!B)return;
  B.ref.child("guesses/"+G.round+"/"+uid).set({lat:g?g[0]:null,lng:g?g[1]:null,d:d==null?null:Math.round(d),score:sc,name:NICK||"?"});
}
function updateBattleRoundOpp(){
  if(!B||!B.room||!B.opp)return;
  const og=battleGuesses(B.room,G.round)[B.opp.uid];
  const el=$("dock-opp");
  if(og){el.textContent="🆚 "+(B.opp.name||"?")+" — "+og.score.toLocaleString()+tt("pts")+(og.d!=null?" · "+fmtKm(og.d)+" km":"");}
}
function battleNext(){
  if(G.round===4){finishGame();return;}
  if(B.isHost){B.ref.update({round:G.round+1,roundStart:Date.now()});}
  else toast("⏳ Host…");
}
function battleFinish(){
  const opp=B&&B.opp;
  const el=$("final-opp");el.classList.remove("hidden");
  const o=B?B.oppTotal:0;
  let verdict=G.total>o?`<span class="win">${tt("win")}</span>`:(G.total<o?`<span class="lose">${tt("lose")}</span>`:tt("draw"));
  el.innerHTML=`${verdict}<br>${esc(NICK||"ME")} ${G.total.toLocaleString()} : ${o.toLocaleString()} ${esc(opp?opp.name:"?")}`;
}
function startBattleTimer(){
  clearInterval(timerInt);
  const el=$("hud-timer");
  timerInt=setInterval(()=>{
    const start=(B&&B.room&&B.room.roundStart)||Date.now();
    const remain=Math.max(0,40-Math.floor((Date.now()-start)/1000));
    el.textContent=remain;
    el.classList.toggle("low",remain<=10);
    if(remain<=0&&!G.submitted)submitGuess(true);
  },250);
}
function leaveBattle(silent){
  if(B){
    try{B.ref.off("value",B.handler);
      B.ref.child(B.isHost?"pHost":"pGuest").remove();
      if(B.isHost&&(!B.room||B.room.status==="waiting"))B.ref.remove();
    }catch(e){}
  }
  B=null;clearInterval(timerInt);
  show("scr-home");
}

/* ═══════════ 도감 ═══════════ */
function buildStudy(){
  const sel=$("study-filter");
  sel.innerHTML=`<option value="all">${tt("all")}</option>`+
    Object.keys(CATS).map(c=>`<option value="${c}">${CATS[c][LANG]||CATS[c].en}</option>`).join("");
  renderStudy("all");
}
function renderStudy(cat){
  const grid=$("study-grid");
  grid.innerHTML=TRICKS.filter(tr=>cat==="all"||tr.cat===cat).map(tr=>
    `<div class="study-card"><div class="exhibit">${renderTrick(tr)}</div>
     <h4>${esc(tr.a[LANG]||tr.a.ko)}</h4><p>${esc(tr.e)}</p></div>`).join("");
}

/* ═══════════ 이벤트 바인딩 ═══════════ */
function askNick(force){
  if(NICK&&!force)return true;
  const n=prompt(tt("nickPrompt"),NICK||"");
  if(n===null)return !!NICK;
  NICK=n.trim().slice(0,10)||NICK||"Player";
  localStorage.setItem("plk_nick",NICK);
  applyI18n();return true;
}
$("btn-practice").onclick=()=>startGame("practice",Math.floor(Math.random()*2**31));
$("btn-daily").onclick=()=>{askNick();startGame("daily",dailySeed());};
$("btn-battle").onclick=()=>{askNick();show("scr-lobby");};
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

/* init */
applyI18n();
fbInit();
