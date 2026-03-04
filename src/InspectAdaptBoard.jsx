import { useState, useRef } from "react";

const COLORS = {
  neon:    "#00FF87",
  magenta: "#FF006E",
  yellow:  "#FFE600",
  orange:  "#FF8C00",
  cyan:    "#00E5FF",
  black:   "#0a0a0a",
  white:   "#FFFFFF",
};

const CARD_CONFIG = [
  { id:"stop",     label:"Dejar de...",   color:COLORS.magenta, pos:{top:"3%",  left:"2%"},           defaultText:"• Centralizar el conocimiento de un tema en una persona\n• Hacer PRs que nadie revisa durante días\n• Planificar sin capacidad real del equipo" },
  { id:"start",    label:"Comenzar a...", color:COLORS.neon,    pos:{top:"3%",  right:"2%"},          defaultText:"• Usar git correctamente: ramas, PRs y commits limpios\n• Definir Definition of Done antes de iniciar una tarea\n• Hacer demos internas antes de la Sprint Review" },
  { id:"less",     label:"Menos de...",   color:COLORS.yellow,  pos:{top:"44%", left:"2%"},           defaultText:"• Faltar a las arch meetings sin avisar\n• Cambiar el scope a mitad del sprint\n• Reuniones de más de 45 min sin agenda" },
  { id:"more",     label:"Más de...",     color:COLORS.orange,  pos:{top:"44%", right:"2%"},          defaultText:"• Escribir las cosas pendientes entre sprints en el backlog\n• Refactorizar mientras añadimos features\n• Compartir aprendizajes en el canal de equipo" },
  { id:"continue", label:"Seguir...",     color:COLORS.cyan,    pos:{top:"72%",  left:"50%",transform:"translateX(-50%)"}, width:"24%",
    defaultText:"• Dejando las cosas anotadas en la wiki del equipo\n• Haciendo retrospectivas honestas y accionables\n• Entrega continua con pipelines automatizados" },
];

const TICKER_TEXT = "INSPECT & ADAPT · BAD BUNNY TEAM · SAFe · UN VERANO SIN BUGS · WORLD'S HOTTEST COACH · EL APAGÓN DE DEUDA TÉCNICA · VOY A APROBARTE LA PR · DEBI TIRAR MAS TESTS · NUMO YOL ";

// ══════════════════════════════════════════════════════════════
//  MARIO KART BACKGROUND — Rainbow Road edition
// ══════════════════════════════════════════════════════════════
function MarioKartBg() {
  return (
    <svg viewBox="0 0 1100 572" xmlns="http://www.w3.org/2000/svg"
      style={{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0}}
      preserveAspectRatio="xMidYMid slice">
      <defs>
        {/* Cielo noche estrellado MK */}
        <radialGradient id="sky" cx="50%" cy="30%" r="80%">
          <stop offset="0%"  stopColor="#0a0050"/>
          <stop offset="40%" stopColor="#040028"/>
          <stop offset="100%" stopColor="#000010"/>
        </radialGradient>
        {/* Planeta MK estilo */}
        <radialGradient id="planet" cx="35%" cy="25%" r="65%">
          <stop offset="0%"  stopColor="#5588ff"/>
          <stop offset="45%" stopColor="#2244bb"/>
          <stop offset="100%" stopColor="#0a1a66"/>
        </radialGradient>
        {/* Rainbow road - gradiente horizontal arco iris */}
        <linearGradient id="rainbow1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#FF0000"/>
          <stop offset="16%"  stopColor="#FF8800"/>
          <stop offset="32%"  stopColor="#FFFF00"/>
          <stop offset="50%"  stopColor="#00FF44"/>
          <stop offset="66%"  stopColor="#0088FF"/>
          <stop offset="83%"  stopColor="#8800FF"/>
          <stop offset="100%" stopColor="#FF0088"/>
        </linearGradient>
        <linearGradient id="rainbow2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#FF0088"/>
          <stop offset="16%"  stopColor="#FF0000"/>
          <stop offset="32%"  stopColor="#FF8800"/>
          <stop offset="50%"  stopColor="#FFFF00"/>
          <stop offset="66%"  stopColor="#00FF44"/>
          <stop offset="83%"  stopColor="#0088FF"/>
          <stop offset="100%" stopColor="#8800FF"/>
        </linearGradient>
        <linearGradient id="mkGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fff59d"/>
          <stop offset="30%"  stopColor="#FFE600"/>
          <stop offset="70%"  stopColor="#FF8C00"/>
          <stop offset="100%" stopColor="#cc5500"/>
        </linearGradient>
        <linearGradient id="mkRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#ff8080"/>
          <stop offset="50%" stopColor="#dd0000"/>
          <stop offset="100%" stopColor="#880000"/>
        </linearGradient>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffde7"/>
          <stop offset="50%" stopColor="#FFE600"/>
          <stop offset="100%" stopColor="#FF8C00"/>
        </linearGradient>
        <radialGradient id="vig" cx="50%" cy="50%" r="70%">
          <stop offset="25%" stopColor="transparent"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0.78"/>
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glowStrong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="4" stdDeviation="4" floodColor="black" floodOpacity="0.8"/>
        </filter>
      </defs>

      {/* ── FONDO SKY ── */}
      <rect width="1100" height="572" fill="url(#sky)"/>

      {/* Estrellas brillantes */}
      {[[60,22,1.8],[150,55,1.2],[240,15,2],[350,40,1.5],[480,18,1.8],[590,32,1.3],[720,20,2.2],[860,42,1.6],[980,25,1.4],[1050,55,1.8],[55,100,1.2],[180,82,1.5],[310,110,1],[450,88,1.8],[620,95,1.3],[780,78,1.6],[930,100,1.1],[1080,85,1.4],[90,155,1.3],[230,170,1.6],[400,145,1.1],[560,160,1.4],[700,140,1.7],[850,165,1],[1000,150,1.5],[130,215,1.5],[285,200,1.2],[455,220,1.6],[610,205,1.1],[770,215,1.4],[920,195,1.7]].map(([x,y,r],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={0.15+i%5*0.1} filter={i%7===0?"url(#glow)":undefined}/>
      ))}

      {/* Nebulosas de colores (fondo) */}
      <ellipse cx="160" cy="110" rx="180" ry="65" fill="#aa00ff" opacity="0.06"/>
      <ellipse cx="920" cy="80"  rx="200" ry="60" fill="#0044ff" opacity="0.07"/>
      <ellipse cx="550" cy="50"  rx="300" ry="45" fill="#ff0066" opacity="0.05"/>

      {/* ── PLANETA AZUL grande (fondo derecha) ── */}
      <ellipse cx="980" cy="160" rx="145" ry="140" fill="url(#planet)" opacity="0.75"/>
      {/* Anillos del planeta */}
      <ellipse cx="980" cy="190" rx="210" ry="40" fill="none" stroke="#8899ff" strokeWidth="6" opacity="0.18"/>
      <ellipse cx="980" cy="190" rx="195" ry="34" fill="none" stroke="#aabbff" strokeWidth="3" opacity="0.12"/>
      {/* Grid del planeta */}
      {[0,1,2,3].map(i=>(
        <ellipse key={i} cx="980" cy="160" rx={145-i*30} ry={140-i*28}
          fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.08"/>
      ))}
      <ellipse cx="980" cy="130" rx="55" ry="35" fill="#5577ee" opacity="0.25"/>

      {/* ── LUNA pequeña (izquierda arriba) ── */}
      <circle cx="85" cy="75" r="38" fill="#ddddaa" opacity="0.55"/>
      <circle cx="95" cy="65" r="38" fill="url(#sky)" opacity="0.9"/>
      <circle cx="75" cy="72" r="5"  fill="#aaa" opacity="0.3"/>
      <circle cx="65" cy="85" r="3"  fill="#aaa" opacity="0.25"/>
      <circle cx="82" cy="90" r="4"  fill="#aaa" opacity="0.2"/>

      {/* ═══════════════════════════════════════════════════════
          RAINBOW ROAD — LA PISTA DE ARCO IRIS
          Perspectiva 3D: viene del horizonte (arriba centro)
          y se abre en perspectiva hacia los lados (abajo)
      ═══════════════════════════════════════════════════════ */}

      {/* Sombra de la pista */}
      <path d="M 450,200 L 650,200 L 900,570 L 200,570 Z" fill="black" opacity="0.55"/>

      {/* CAPA RAINBOW 1 — borde exterior izquierdo */}
      <path d="M 448,198 L 454,198 L 210,572 L 195,572 Z" fill="url(#rainbow1)" opacity="0.95"/>
      {/* CAPA RAINBOW 2 — borde exterior derecho */}
      <path d="M 646,198 L 652,198 L 905,572 L 890,572 Z" fill="url(#rainbow2)" opacity="0.95"/>

      {/* Superficie principal de la pista */}
      <path d="M 454,198 L 646,198 L 890,572 L 210,572 Z" fill="#110033" opacity="0.82"/>

      {/* Franjas de colores arco iris DENTRO de la pista */}
      {/* Líneas transversales rainbow */}
      {[0,1,2,3,4,5,6,7,8].map(t=>{
        const p=t/8;
        const xL1=454+(210-454)*p, yL1=198+(572-198)*p;
        const xR1=646+(890-646)*p, yR1=198+(572-198)*p;
        const xL2=454+(210-454)*(p+0.07), yL2=198+(572-198)*(p+0.07);
        const xR2=646+(890-646)*(p+0.07), yR2=198+(572-198)*(p+0.07);
        const colors=["#FF0000","#FF8800","#FFFF00","#00FF44","#0088FF","#8800FF","#FF0088","#FF0000","#FF8800"];
        return (
          <path key={t} d={`M ${xL1},${yL1} L ${xR1},${yR1} L ${xR2},${yR2} L ${xL2},${yL2} Z`}
            fill={colors[t]} opacity="0.22"/>
        );
      })}

      {/* Guarda BORDE interior luminoso izquierdo */}
      <path d="M 454,198 L 462,198 L 222,572 L 210,572 Z" fill="white" opacity="0.25"/>
      {/* Guarda BORDE interior luminoso derecho */}
      <path d="M 638,198 L 646,198 L 890,572 L 878,572 Z" fill="white" opacity="0.25"/>

      {/* Línea central punteada blanca */}
      {[0,1,2,3,4,5,6,7,8,9].map(i=>{
        const t1=i/10, t2=(i+0.45)/10;
        const xc1=550, yc1=198+(572-198)*t1;
        const xc2=550, yc2=198+(572-198)*t2;
        return <line key={i} x1={xc1} y1={yc1} x2={xc2} y2={yc2}
          stroke="white" strokeWidth="4" opacity="0.3" strokeLinecap="round"/>;
      })}

      {/* Boost arrows en la pista (flechas de turbo) */}
      {[0.25,0.45,0.65].map((t,i)=>{
        const xc=550, yc=198+(572-198)*t;
        const sc=0.8+t*0.5;
        return (
          <g key={i} transform={`translate(${xc},${yc}) scale(${sc})`} opacity="0.5">
            <polygon points="0,-18 22,6 9,6 9,22 -9,22 -9,6 -22,6" fill="#00FFCC"/>
            <polygon points="0,-18 22,6 9,6 9,22 -9,22 -9,6 -22,6" fill="none" stroke="white" strokeWidth="1.5"/>
          </g>
        );
      })}

      {/* Línea de meta — tablero de ajedrez */}
      <g transform="translate(420, 188)">
        {Array.from({length:22},(_,col)=>Array.from({length:2},(_,row)=>(
          <rect key={`${col}-${row}`} x={col*12} y={row*10} width="12" height="10"
            fill={(col+row)%2===0?"white":"black"} opacity="0.85"/>
        )))}
        <text x="132" y="35" textAnchor="middle" fontSize="11"
          fontFamily="Arial Black,sans-serif" fontWeight="900" fill="white" opacity="0.6" letterSpacing="3">META</text>
      </g>

      {/* ═══════════════════════════════════════════════════════
          MARIO KART LOGO — grande y brillante en el centro
      ═══════════════════════════════════════════════════════ */}
      <g transform="translate(550,132)" filter="url(#shadow)">
        {/* Sombra del texto */}
        <text x="4" y="5" textAnchor="middle" fontSize="66" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="#550000" letterSpacing="5">MARIO</text>
        {/* Borde amarillo grueso */}
        <text x="0" y="0" textAnchor="middle" fontSize="66" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="none" stroke="#FFE600" strokeWidth="10" strokeLinejoin="round" letterSpacing="5">MARIO</text>
        {/* Relleno rojo */}
        <text x="0" y="0" textAnchor="middle" fontSize="66" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="url(#mkRed)" letterSpacing="5">MARIO</text>

        {/* KART más grande */}
        <text x="5" y="66" textAnchor="middle" fontSize="86" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="#330000" letterSpacing="8" transform="translate(0,6)">KART</text>
        <text x="0" y="66" textAnchor="middle" fontSize="86" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="none" stroke="#cc0000" strokeWidth="12" strokeLinejoin="round" letterSpacing="8">KART</text>
        <text x="0" y="66" textAnchor="middle" fontSize="86" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="url(#mkGold)" letterSpacing="8">KART</text>

        {/* Número 8 */}
        <text x="198" y="55" textAnchor="middle" fontSize="54" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="none" stroke="#cc0000" strokeWidth="9" strokeLinejoin="round">8</text>
        <text x="198" y="55" textAnchor="middle" fontSize="54" fontFamily="Arial Black,Impact,sans-serif"
          fontWeight="900" fill="url(#mkGold)">8</text>

        {/* Estrellas decorativas */}
        {[[-205,-15],[-180,52],[205,-10],[180,52]].map(([dx,dy],i)=>{
          const pts=Array.from({length:5},(_,j)=>{
            const r1=12,r2=5.5;
            const a1=Math.PI/2+(j*2*Math.PI)/5, a2=a1+Math.PI/5;
            return `${r1*Math.cos(a1)},${-r1*Math.sin(a1)} ${r2*Math.cos(a2)},${-r2*Math.sin(a2)}`;
          }).join(" ");
          return <polygon key={i} points={pts} fill="#FFE600" stroke="#FF8C00" strokeWidth="1"
            transform={`translate(${dx},${dy})`} filter="url(#glow)"/>;
        })}
      </g>

      {/* ─────────────────────────────────────────
          MARIO — izquierda grande
      ───────────────────────────────────────── */}
      <g transform="translate(148,405) scale(1.35)" filter="url(#shadow)">
        <ellipse cx="0" cy="32" rx="42" ry="9" fill="black" opacity="0.45"/>
        {/* Kart Rojo */}
        <path d="M -38,10 Q -40,-5 -28,-10 L 28,-10 Q 40,-5 38,10 Z" fill="#ee1111"/>
        <path d="M -32,10 L 32,10 Q 34,24 27,28 L -27,28 Q -34,24 -32,10 Z" fill="#cc0000"/>
        <path d="M -28,-10 Q -22,-18 -10,-18 L 10,-18 Q 22,-18 28,-10 Z" fill="#ff2222"/>
        {/* Parabrisas */}
        <path d="M -18,-10 L 18,-10 L 15,-20 L -15,-20 Z" fill="#99ddff" opacity="0.88"/>
        <line x1="0" y1="-10" x2="0" y2="-20" stroke="#66aacc" strokeWidth="1.5"/>
        <line x1="-38" y1="4" x2="38" y2="4" stroke="white" strokeWidth="2" opacity="0.45"/>
        {/* Aleta */}
        <path d="M -38,0 L -50,-12 L -40,-12 L -38,-2 Z" fill="#cc0000"/>
        {/* Tubos */}
        <rect x="-48" y="6" width="12" height="7" rx="2.5" fill="#444"/>
        <ellipse cx="-48" cy="9.5" rx="4" ry="4" fill="#222"/>
        <ellipse cx="-48" cy="9.5" rx="2" ry="2" fill="#555"/>
        {/* Ruedas */}
        {[[-28,29],[28,29]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="11" fill="#111"/>
            <circle cx={cx} cy={cy} r="7.5" fill="#2a2a2a"/>
            <circle cx={cx} cy={cy} r="3.5" fill="#888"/>
            <line x1={cx-11} y1={cy} x2={cx+11} y2={cy} stroke="#555" strokeWidth="1.2"/>
            <line x1={cx} y1={cy-11} x2={cx} y2={cy+11} stroke="#555" strokeWidth="1.2"/>
          </g>
        ))}
        {/* Número */}
        <circle cx="10" cy="7" r="7.5" fill="white" opacity="0.92"/>
        <text x="10" y="12" textAnchor="middle" fontSize="10" fontFamily="Arial Black" fontWeight="900" fill="#cc0000">1</text>
        {/* Mario */}
        <rect x="-14" y="-34" width="25" height="16" rx="3.5" fill="#2244cc"/>
        <rect x="-12" y="-42" width="21" height="10" rx="3.5" fill="#cc1111"/>
        <ellipse cx="-17" cy="-32" rx="5" ry="7" fill="#cc1111"/>
        <ellipse cx="15"  cy="-32" rx="5" ry="7" fill="#cc1111"/>
        <circle cx="-18" cy="-24" r="5" fill="#ffbb80"/>
        <circle cx="16"  cy="-24" r="5" fill="#ffbb80"/>
        {/* Cabeza */}
        <circle cx="1" cy="-54" r="17" fill="#ffbb80"/>
        {/* Gorro */}
        <path d="M -16,-56 Q -14,-76 1,-77 Q 16,-76 18,-56 Z" fill="#cc1111"/>
        <rect x="-18" y="-59" width="36" height="6" rx="2.5" fill="#cc1111"/>
        <ellipse cx="1" cy="-52" rx="18" ry="5" fill="#aa0000"/>
        <circle cx="1" cy="-70" r="6.5" fill="white"/>
        <text x="1" y="-66" textAnchor="middle" fontSize="9" fontFamily="Arial Black" fontWeight="900" fill="#cc1111">M</text>
        {/* Ojos */}
        <circle cx="-6" cy="-54" r="4" fill="white"/>
        <circle cx="7"  cy="-54" r="4" fill="white"/>
        <circle cx="-5" cy="-54" r="2.2" fill="#1a0a00"/>
        <circle cx="8"  cy="-54" r="2.2" fill="#1a0a00"/>
        <circle cx="-4.2" cy="-55" r="0.8" fill="white"/>
        <circle cx="8.8"  cy="-55" r="0.8" fill="white"/>
        {/* Cejas */}
        <path d="M -10,-59 Q -6,-63 -1,-60" fill="none" stroke="#2a1a00" strokeWidth="2"/>
        <path d="M 2,-60 Q 7,-63 11,-59" fill="none" stroke="#2a1a00" strokeWidth="2"/>
        {/* Bigote */}
        <path d="M -11,-49 Q -5,-45 1,-47 Q 7,-45 12,-49" fill="#2a1a00"/>
        {/* Nariz */}
        <ellipse cx="2" cy="-51" rx="5" ry="4.5" fill="#e89060"/>
        {/* Orejas */}
        <circle cx="-15" cy="-53" r="5" fill="#ffbb80"/>
        <circle cx="16"  cy="-53" r="5" fill="#ffbb80"/>
        {/* Speed lines */}
        <line x1="-52" y1="-2" x2="-74" y2="-6" stroke="#ff4444" strokeWidth="3" strokeLinecap="round" opacity="0.75"/>
        <line x1="-52" y1="7"  x2="-78" y2="7"  stroke="#ff4444" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
        <line x1="-52" y1="15" x2="-70" y2="17" stroke="#ff4444" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="-52" y1="-10" x2="-66" y2="-14" stroke="#ff8844" strokeWidth="1.8" strokeLinecap="round" opacity="0.35"/>
      </g>

      {/* ─────────────────────────────────────────
          LUIGI — derecha grande
      ───────────────────────────────────────── */}
      <g transform="translate(952,388) scale(1.22)" filter="url(#shadow)">
        <ellipse cx="0" cy="30" rx="40" ry="8" fill="black" opacity="0.4"/>
        {/* Kart Verde */}
        <path d="M -36,10 Q -38,-4 -26,-9 L 26,-9 Q 38,-4 36,10 Z" fill="#117700"/>
        <path d="M -30,10 L 30,10 Q 32,22 26,26 L -26,26 Q -32,22 -30,10 Z" fill="#0a5500"/>
        <path d="M -26,-9 Q -20,-17 -9,-17 L 9,-17 Q 20,-17 26,-9 Z" fill="#1a9900"/>
        <path d="M -17,-9 L 17,-9 L 14,-19 L -14,-19 Z" fill="#99ddff" opacity="0.85"/>
        <line x1="0" y1="-9" x2="0" y2="-19" stroke="#66aacc" strokeWidth="1.5"/>
        <line x1="-36" y1="4" x2="36" y2="4" stroke="white" strokeWidth="2" opacity="0.4"/>
        <path d="M -36,0 L -46,-11 L -38,-11 L -36,-2 Z" fill="#0a5500"/>
        <rect x="-44" y="6" width="11" height="7" rx="2.5" fill="#444"/>
        <ellipse cx="-44" cy="9.5" rx="3.5" ry="3.5" fill="#222"/>
        {[[-26,28],[26,28]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="#111"/>
            <circle cx={cx} cy={cy} r="6.5" fill="#2a2a2a"/>
            <circle cx={cx} cy={cy} r="3" fill="#888"/>
          </g>
        ))}
        <circle cx="8" cy="7" r="7" fill="white" opacity="0.9"/>
        <text x="8" y="12" textAnchor="middle" fontSize="9" fontFamily="Arial Black" fontWeight="900" fill="#117700">2</text>
        {/* Luigi */}
        <rect x="-13" y="-32" width="23" height="15" rx="3.5" fill="#2244cc"/>
        <rect x="-11" y="-40" width="20" height="10" rx="3.5" fill="#117700"/>
        <ellipse cx="-16" cy="-30" rx="5" ry="7" fill="#117700"/>
        <ellipse cx="14"  cy="-30" rx="5" ry="7" fill="#117700"/>
        <circle cx="-17" cy="-22" r="4.5" fill="#ffbb80"/>
        <circle cx="15"  cy="-22" r="4.5" fill="#ffbb80"/>
        <ellipse cx="0" cy="-52" rx="15" ry="17" fill="#ffbb80"/>
        {/* Gorro verde */}
        <path d="M -15,-55 Q -13,-75 0,-76 Q 13,-75 15,-55 Z" fill="#117700"/>
        <rect x="-16" y="-58" width="32" height="6" rx="2.5" fill="#117700"/>
        <ellipse cx="0" cy="-51" rx="16" ry="5" fill="#0a5500"/>
        <circle cx="0" cy="-69" r="6" fill="white"/>
        <text x="0" y="-65" textAnchor="middle" fontSize="8" fontFamily="Arial Black" fontWeight="900" fill="#117700">L</text>
        {/* Ojos Luigi (asustados) */}
        <circle cx="-6" cy="-52" r="4" fill="white"/>
        <circle cx="6"  cy="-52" r="4" fill="white"/>
        <circle cx="-5" cy="-52" r="2" fill="#1a0a00"/>
        <circle cx="7"  cy="-52" r="2" fill="#1a0a00"/>
        <circle cx="-4.2" cy="-53" r="0.8" fill="white"/>
        <circle cx="7.8"  cy="-53" r="0.8" fill="white"/>
        {/* Cejas luigi - asustado */}
        <path d="M -9,-57 Q -6,-61 -2,-58" fill="none" stroke="#1a0a00" strokeWidth="2"/>
        <path d="M 2,-57 Q 5,-62 9,-58"    fill="none" stroke="#1a0a00" strokeWidth="2"/>
        <path d="M -9,-47 Q -4,-44 0,-45 Q 4,-44 9,-47" fill="#1a0a00"/>
        <ellipse cx="1" cy="-50" rx="4.5" ry="3.5" fill="#e89060"/>
        <circle cx="-14" cy="-50" r="4" fill="#ffbb80"/>
        <circle cx="14"  cy="-50" r="4" fill="#ffbb80"/>
        {/* Speed lines Luigi (hacia atrás = derecha) */}
        <line x1="40" y1="-2" x2="62" y2="-6" stroke="#22cc22" strokeWidth="3" strokeLinecap="round" opacity="0.75"/>
        <line x1="40" y1="7"  x2="65" y2="7"  stroke="#22cc22" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
        <line x1="40" y1="15" x2="58" y2="17" stroke="#22cc22" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </g>

      {/* ─────────────────────────────────────────
          HUESITOS (Dry Bones) — pequeño, fondo izq
      ───────────────────────────────────────── */}
      <g transform="translate(255,468) scale(0.85)" filter="url(#shadow)">
        <ellipse cx="0" cy="28" rx="30" ry="6" fill="black" opacity="0.32"/>
        {/* Kart morado */}
        <path d="M -30,9 Q -32,-2 -21,-7 L 21,-7 Q 32,-2 30,9 Z" fill="#8844cc"/>
        <path d="M -24,9 L 24,9 Q 26,20 21,23 L -21,23 Q -26,20 -24,9 Z" fill="#6633aa"/>
        <path d="M -13,-7 L 13,-7 L 11,-15 L -11,-15 Z" fill="#bbddff" opacity="0.8"/>
        <rect x="-36" y="5" width="10" height="7" rx="2" fill="#444"/>
        {[[-19,23],[19,23]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="8.5" fill="#1a0a33"/>
            <circle cx={cx} cy={cy} r="5.5" fill="#4422aa"/>
            <circle cx={cx} cy={cy} r="2.5" fill="#8844cc"/>
          </g>
        ))}
        {/* Dry Bones */}
        <rect x="-9" y="-27" width="18" height="16" rx="2" fill="#f0eedc"/>
        <line x1="-6" y1="-23" x2="6" y2="-23" stroke="#ccc8a0" strokeWidth="1.5"/>
        <line x1="-6" y1="-18" x2="6" y2="-18" stroke="#ccc8a0" strokeWidth="1.5"/>
        <line x1="-6" y1="-13" x2="6" y2="-13" stroke="#ccc8a0" strokeWidth="1.5"/>
        {/* Brazos */}
        <line x1="-9" y1="-23" x2="-18" y2="-17" stroke="#f0eedc" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="-18" cy="-17" r="4" fill="#f0eedc"/>
        <line x1="9" y1="-23" x2="18" y2="-17" stroke="#f0eedc" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="18" cy="-17" r="4" fill="#f0eedc"/>
        {/* Caparazón */}
        <ellipse cx="0" cy="-20" rx="12" ry="9" fill="#3366bb" opacity="0.8"/>
        {/* Cráneo */}
        <ellipse cx="0" cy="-41" rx="15" ry="14" fill="#f0eedc"/>
        <path d="M -11,-31 Q -10,-26 0,-25 Q 10,-26 11,-31" fill="#e8e5cc"/>
        <rect x="-8"  y="-31" width="5" height="6" rx="0.8" fill="white"/>
        <rect x="-2.5" y="-31" width="5" height="7" rx="0.8" fill="white"/>
        <rect x="3"   y="-31" width="5" height="6" rx="0.8" fill="white"/>
        <ellipse cx="-7" cy="-43" rx="5.5" ry="6" fill="#111122"/>
        <ellipse cx="7"  cy="-43" rx="5.5" ry="6" fill="#111122"/>
        <ellipse cx="-7" cy="-43" rx="3"   ry="3.5" fill="#cc0000" opacity="0.9"/>
        <ellipse cx="7"  cy="-43" rx="3"   ry="3.5" fill="#cc0000" opacity="0.9"/>
        <circle  cx="-6" cy="-44" r="1.2" fill="white" opacity="0.75"/>
        <circle  cx="8"  cy="-44" r="1.2" fill="white" opacity="0.75"/>
        <path d="M -1,-55 L 1,-48 L 3,-51" fill="none" stroke="#ccc8a0" strokeWidth="1.2"/>
      </g>

      {/* ─────────────────────────────────────────
          YOSHI AZUL — pequeño, fondo derecho
      ───────────────────────────────────────── */}
      <g transform="translate(848,468) scale(0.82)" filter="url(#shadow)">
        <ellipse cx="0" cy="28" rx="29" ry="6" fill="black" opacity="0.3"/>
        {/* Kart naranja */}
        <path d="M -29,9 Q -31,-2 -21,-7 L 21,-7 Q 31,-2 29,9 Z" fill="#ff7722"/>
        <path d="M -23,9 L 23,9 Q 25,20 21,23 L -21,23 Q -25,20 -23,9 Z" fill="#cc5500"/>
        <path d="M -12,-7 L 12,-7 L 10,-14 L -10,-14 Z" fill="#bbddff" opacity="0.8"/>
        {[[-18,23],[18,23]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="#111"/>
            <circle cx={cx} cy={cy} r="5" fill="#333"/>
            <circle cx={cx} cy={cy} r="2.2" fill="#888"/>
          </g>
        ))}
        {/* Yoshi AZUL */}
        <ellipse cx="0" cy="-20" rx="13" ry="12" fill="#4488ff"/>
        <ellipse cx="0" cy="-18" rx="8.5" ry="8.5" fill="#eef5ff"/>
        {/* Cresta */}
        {[[-5,-1],[-3,-4],[-1,-5],[1,-4],[3,-1]].map(([dx,dy],i)=>(
          <circle key={i} cx={dx} cy={-54+dy} r="3.5" fill="#4488ff"/>
        ))}
        <ellipse cx="0" cy="-38" rx="15" ry="14" fill="#4488ff"/>
        <ellipse cx="5" cy="-32" rx="11" ry="7.5" fill="#ffccaa"/>
        <path d="M -4,-30 Q 0,-27 10,-29" fill="none" stroke="#cc6644" strokeWidth="1.8"/>
        <ellipse cx="8" cy="-35" rx="5" ry="4" fill="#5599ff"/>
        <circle cx="7" cy="-35" r="1.5" fill="#1a1a66"/>
        <circle cx="9.5" cy="-35" r="1.5" fill="#1a1a66"/>
        {/* Ojos grandes Yoshi */}
        <ellipse cx="-5" cy="-41" rx="6.5" ry="7" fill="white"/>
        <ellipse cx="7"  cy="-41" rx="6.5" ry="7" fill="white"/>
        <circle  cx="-4" cy="-41" r="3.8" fill="#1a1a55"/>
        <circle  cx="8"  cy="-41" r="3.8" fill="#1a1a55"/>
        <circle  cx="-3" cy="-42" r="1.5" fill="white"/>
        <circle  cx="9"  cy="-42" r="1.5" fill="white"/>
        <ellipse cx="-14" cy="-41" rx="4" ry="5" fill="#3377ee"/>
        <ellipse cx="14"  cy="-41" rx="4" ry="5" fill="#3377ee"/>
        <circle cx="-6" cy="-20" r="4" fill="#3377ee" opacity="0.5"/>
        <circle cx="6"  cy="-20" r="4" fill="#3377ee" opacity="0.5"/>
      </g>

      {/* ─────────────────────────────────────────
          HUD POSICIONES — panel MK estilo
      ───────────────────────────────────────── */}
      <g transform="translate(18, 268)">
        {/* Fondo panel */}
        <rect x="0" y="0" width="75" height="148" rx="10" fill="#000022" opacity="0.85"/>
        <rect x="0" y="0" width="75" height="148" rx="10" fill="none" stroke="#FFE600" strokeWidth="2" opacity="0.7"/>
        {/* Título POS */}
        <rect x="5" y="5" width="65" height="22" rx="5" fill="#FFE600" opacity="0.9"/>
        <text x="37" y="20" textAnchor="middle" fontSize="13"
          fontFamily="Arial Black,sans-serif" fontWeight="900" fill="#000" letterSpacing="2">POSICIÓN</text>
        {/* Lista */}
        {[{n:"1st",col:"#FFE600",tc:"#880000",ch:"M",bg:"#331100"},{n:"2nd",col:"#cccccc",tc:"#333",ch:"L",bg:"#001133"},{n:"3rd",col:"#FF8C00",tc:"#330000",ch:"Y",bg:"#002200"},{n:"4th",col:"#8844cc",tc:"#fff",ch:"H",bg:"#110022"}].map((r,i)=>(
          <g key={i} transform={`translate(5,${32+i*28})`}>
            <rect x="0" y="0" width="65" height="22" rx="5" fill={r.bg} opacity="0.9"/>
            <rect x="0" y="0" width="65" height="22" rx="5" fill="none" stroke={r.col} strokeWidth="1.5" opacity="0.7"/>
            <text x="16" y="16" textAnchor="middle" fontSize="14"
              fontFamily="Arial Black,sans-serif" fontWeight="900" fill={r.col}>{r.n}</text>
            <text x="42" y="16" textAnchor="middle" fontSize="13"
              fontFamily="Arial Black,sans-serif" fontWeight="900" fill="white">{r.ch}</text>
          </g>
        ))}
      </g>

      {/* HUD VUELTA/LAP */}
      <g transform="translate(1007, 268)">
        <rect x="0" y="0" width="84" height="68" rx="10" fill="#000022" opacity="0.85"/>
        <rect x="0" y="0" width="84" height="68" rx="10" fill="none" stroke="#00E5FF" strokeWidth="2" opacity="0.7"/>
        <rect x="5" y="5" width="74" height="22" rx="5" fill="#00E5FF" opacity="0.85"/>
        <text x="42" y="20" textAnchor="middle" fontSize="12"
          fontFamily="Arial Black,sans-serif" fontWeight="900" fill="#000" letterSpacing="2">LAP</text>
        <text x="42" y="54" textAnchor="middle" fontSize="28"
          fontFamily="Arial Black,sans-serif" fontWeight="900" fill="white">3/3</text>
      </g>

      {/* HUD MONEDAS */}
      <g transform="translate(1007, 345)">
        <rect x="0" y="0" width="84" height="50" rx="10" fill="#000022" opacity="0.85"/>
        <rect x="0" y="0" width="84" height="50" rx="10" fill="none" stroke="#FFE600" strokeWidth="2" opacity="0.7"/>
        <ellipse cx="22" cy="25" rx="10" ry="13" fill="url(#coinGrad)" filter="url(#glow)"/>
        <ellipse cx="19" cy="22" rx="4.5" ry="6" fill="white" opacity="0.4"/>
        <text x="55" y="32" textAnchor="middle" fontSize="22"
          fontFamily="Arial Black,sans-serif" fontWeight="900" fill="#FFE600">×10</text>
      </g>

      {/* ─────────────────────────────────────────
          ITEMS en la pista: Caja ?
      ───────────────────────────────────────── */}
      {[[340,225],[608,210],[760,225]].map(([x,y],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.88">
          <rect x="-14" y="-14" width="28" height="28" rx="3" fill="white"/>
          <rect x="-14" y="-14" width="28" height="28" rx="3" fill="none"
            stroke={["#FF0000","#00FF44","#0088FF"][i]} strokeWidth="4"/>
          <line x1="-14" y1="0" x2="14" y2="0" stroke={["#FF0000","#00FF44","#0088FF"][i]} strokeWidth="2" opacity="0.5"/>
          <line x1="0" y1="-14" x2="0" y2="14" stroke={["#FF0000","#00FF44","#0088FF"][i]} strokeWidth="2" opacity="0.5"/>
          <text x="0" y="9" textAnchor="middle" fontSize="20"
            fontFamily="Arial Black,sans-serif" fontWeight="900" fill="#FFE600">?</text>
        </g>
      ))}

      {/* Monedas en la pista */}
      {[[400,170],[475,152],[550,145],[625,152],[700,170]].map(([cx,cy],i)=>(
        <g key={i} transform={`translate(${cx},${cy})`} filter="url(#glow)" opacity="0.95">
          <ellipse cx="0" cy="0" rx="9" ry="12" fill="url(#coinGrad)"/>
          <ellipse cx="-2" cy="-3" rx="4" ry="5.5" fill="white" opacity="0.45"/>
        </g>
      ))}

      {/* ─────────────────────────────────────────
          CAPARAZÓN ROJO volando
      ───────────────────────────────────────── */}
      <g transform="translate(720,310)" filter="url(#glow)">
        <ellipse cx="0" cy="0" rx="14" ry="11" fill="#cc0000"/>
        <ellipse cx="-3" cy="-2" rx="6" ry="4" fill="#ff4444" opacity="0.6"/>
        <circle cx="0" cy="0" r="3" fill="#880000"/>
        {/* Manchas blancas */}
        <circle cx="-6" cy="-2" r="2.5" fill="white" opacity="0.7"/>
        <circle cx="5" cy="3" r="2" fill="white" opacity="0.6"/>
        <circle cx="7" cy="-3" r="1.5" fill="white" opacity="0.5"/>
      </g>

      {/* CAPARAZÓN AZUL con alas */}
      <g transform="translate(370,310)" filter="url(#glow)">
        <ellipse cx="0" cy="0" rx="14" ry="11" fill="#0044cc"/>
        <ellipse cx="-3" cy="-2" rx="6" ry="4" fill="#4488ff" opacity="0.6"/>
        <circle cx="0" cy="0" r="3" fill="#002288"/>
        <circle cx="-6" cy="-2" r="2.5" fill="white" opacity="0.7"/>
        <circle cx="5" cy="3" r="2" fill="white" opacity="0.6"/>
        {/* Alas */}
        <path d="M -14,-3 Q -30,-18 -22,-24 Q -12,-20 -14,-3" fill="#99bbff" opacity="0.85"/>
        <path d="M 14,-3 Q 30,-18 22,-24 Q 12,-20 14,-3" fill="#99bbff" opacity="0.85"/>
      </g>

      {/* BANANA PEEL */}
      <g transform="translate(448,490)" opacity="0.85">
        <ellipse cx="0" cy="0" rx="18" ry="7" fill="#FFE600" transform="rotate(-25)"/>
        <path d="M -16,-5 Q -5,-18 8,2" fill="none" stroke="#FFE600" strokeWidth="5" strokeLinecap="round"/>
        <path d="M -14,-4 Q -5,-16 7,2" fill="none" stroke="#cc9900" strokeWidth="2" strokeLinecap="round"/>
      </g>

      {/* HONGO ROJO */}
      <g transform="translate(660,495)" filter="url(#shadow)">
        <ellipse cx="0" cy="8" rx="10" ry="5" fill="white"/>
        <ellipse cx="0" cy="2" rx="10" ry="6" fill="white"/>
        {/* Cap */}
        <ellipse cx="0" cy="-4" rx="18" ry="14" fill="#dd0000"/>
        <circle cx="-7" cy="-7" r="4" fill="white" opacity="0.9"/>
        <circle cx="7"  cy="-5" r="3.5" fill="white" opacity="0.9"/>
        <circle cx="1"  cy="-14" r="3" fill="white" opacity="0.9"/>
        <circle cx="-11" cy="-1" r="2.5" fill="white" opacity="0.8"/>
        <circle cx="12" cy="-2" r="2.5" fill="white" opacity="0.8"/>
        {/* Cara */}
        <ellipse cx="-3" cy="3" rx="2.5" ry="2.8" fill="#222"/>
        <ellipse cx="3"  cy="3" rx="2.5" ry="2.8" fill="#222"/>
        <path d="M -4,7 Q 0,10 4,7" fill="none" stroke="#222" strokeWidth="1.5"/>
      </g>

      {/* RELÁMPAGO ⚡ */}
      <g transform="translate(550,500)" filter="url(#glow)" opacity="0.9">
        <polygon points="-6,-18 2,-18 -3,-2 6,-2 -8,18 0,3 -9,3" fill="#FFE600"/>
        <polygon points="-6,-18 2,-18 -3,-2 6,-2 -8,18 0,3 -9,3" fill="none" stroke="#FF8C00" strokeWidth="1.5"/>
      </g>

      {/* Vignette final */}
      <rect width="1100" height="572" fill="url(#vig)"/>
    </svg>
  );
}

// ── Star central ─────────────────────────────
function StarSVG({ hovered=false, smiling=false, spinning=false }) {
  const pts = Array.from({length:5},(_,i)=>{
    const o=46,inn=20;
    const a1=Math.PI/2+(i*2*Math.PI)/5,a2=a1+Math.PI/5;
    return `${50+o*Math.cos(a1)},${50-o*Math.sin(a1)} ${50+inn*Math.cos(a2)},${50-inn*Math.sin(a2)}`;
  }).join(" ");

  // ── estados de cara ──────────────────────────────────
  // smiling: gran sonrisa con ojos entrecerrados de felicidad
  // hovered: sorpresa (pupilas arriba, cejas altas, boca abierta)
  // spinning: ojos mareados (espirales simuladas)
  // normal: cara tranquila

  const eyeL   = (hovered&&!smiling) ? {cx:37,cy:43,rx:7,  ry:8.5}  : {cx:37,cy:46,rx:6.5,ry:7};
  const eyeR   = (hovered&&!smiling) ? {cx:63,cy:43,rx:7,  ry:8.5}  : {cx:63,cy:46,rx:6.5,ry:7};
  const pupL   = (hovered&&!smiling) ? {cx:36,cy:40,rx:3,  ry:3.5}  : {cx:38.5,cy:47.5,rx:3.5,ry:4};
  const pupR   = (hovered&&!smiling) ? {cx:62,cy:40,rx:3,  ry:3.5}  : {cx:64.5,cy:47.5,rx:3.5,ry:4};
  const shine1 = (hovered&&!smiling) ? {cx:37.5,cy:38.5,r:1.2}      : {cx:40,cy:45.5,r:1.2};
  const shine2 = (hovered&&!smiling) ? {cx:63.5,cy:38.5,r:1.2}      : {cx:66,cy:45.5,r:1.2};

  const mouthPath = smiling
    ? "M 33 56 Q 50 72 67 56"          // sonrisa enorme post-peonza
    : (hovered&&!smiling)
      ? "M 40 60 Q 50 70 60 60"        // boca abierta sorpresa
      : "M 41 57 Q 50 63 59 57";       // sonrisa normal

  const cheekSize  = smiling ? 7 : (hovered&&!smiling) ? 6 : 4;
  const cheekOpacity = smiling ? 0.75 : (hovered&&!smiling) ? 0.65 : 0.4;

  // ojos entrecerrados al sonreír post-spin
  const eyeClosedL = "M 30 46 Q 37 40 44 46";
  const eyeClosedR = "M 56 46 Q 63 40 70 46";

  const gradStart = smiling ? "#ffffff" : (hovered&&!smiling) ? "#ffffff" : "#FFE600";
  const gradMid   = smiling ? "#FFE600" : (hovered&&!smiling) ? "#FFE600" : "#FF8C00";
  const gradEnd   = smiling ? "#FF8C00" : (hovered&&!smiling) ? "#FF8C00" : "#FF003C";

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
      style={{width:"100%",height:"100%",overflow:"visible",transition:"all .15s"}}>
      <defs>
        <filter id="sGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sGlowBig" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation={hovered||smiling ? "6" : "2.5"} result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="sGrad" cx="50%" cy="38%" r="62%">
          <stop offset="0%"   stopColor={gradStart}/>
          <stop offset="42%"  stopColor={gradMid}/>
          <stop offset="100%" stopColor={gradEnd}/>
        </radialGradient>
      </defs>

      {/* Halos */}
      {(hovered||smiling||spinning) && <circle cx="50" cy="50" r="54" fill="#FFE600" opacity="0.1"/>}
      {(smiling||spinning) && <circle cx="50" cy="50" r="50" fill="#FFE600" opacity="0.12"/>}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#FFE600" strokeWidth="0.5" opacity="0.2"/>

      {/* Cuerpo estrella */}
      <polygon points={pts} fill="url(#sGrad)" filter="url(#sGlowBig)"/>
      <polygon points={pts} fill="none" stroke="#FFE600" strokeWidth="0.7" opacity="0.6"/>

      {/* ── CARA SONRIENTE (post-peonza) ── */}
      {smiling && <>
        {/* Ojos entrecerrados felices */}
        <path d={eyeClosedL} fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
        <path d={eyeClosedR} fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
        {/* Sonrisa enorme */}
        <path d={mouthPath} fill="#111" stroke="none"/>
        {/* Dientes */}
        <path d="M 33 56 Q 50 72 67 56 L 65 58 Q 50 68 35 58 Z" fill="white" opacity="0.9"/>
        {/* Estrellitas de felicidad */}
        {[{x:20,y:28},{x:78,y:25},{x:15,y:60},{x:83,y:58},{x:50,y:10}].map((s,i)=>(
          <polygon key={i} points={Array.from({length:5},(_,j)=>{
            const r1=4,r2=1.8,a1=Math.PI/2+(j*2*Math.PI)/5,a2=a1+Math.PI/5;
            return `${s.x+r1*Math.cos(a1)},${s.y-r1*Math.sin(a1)} ${s.x+r2*Math.cos(a2)},${s.y-r2*Math.sin(a2)}`;
          }).join(" ")} fill="#FFE600" opacity="0.95"/>
        ))}
        {/* Notas musicales */}
        <text x="22" y="22" fontSize="8" fill="#FFE600" opacity="0.9">♪</text>
        <text x="72" y="20" fontSize="9" fill="#FFE600" opacity="0.9">♫</text>
      </>}

      {/* ── CARA GIRANDO (ojos de espiral/mareo) ── */}
      {spinning && !smiling && <>
        {/* Ojos como espirales (simuladas con círculos concéntricos) */}
        <circle cx="37" cy="46" r="7" fill="white"/>
        <circle cx="63" cy="46" r="7" fill="white"/>
        <circle cx="37" cy="46" r="5" fill="none" stroke="#111" strokeWidth="1.2"/>
        <circle cx="37" cy="46" r="3" fill="none" stroke="#111" strokeWidth="1"/>
        <circle cx="37" cy="46" r="1.2" fill="#111"/>
        <circle cx="63" cy="46" r="5" fill="none" stroke="#111" strokeWidth="1.2"/>
        <circle cx="63" cy="46" r="3" fill="none" stroke="#111" strokeWidth="1"/>
        <circle cx="63" cy="46" r="1.2" fill="#111"/>
        {/* Boca mareada */}
        <path d="M 38 58 Q 44 54 50 58 Q 56 62 62 58" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
      </>}

      {/* ── CARA NORMAL / HOVER ── */}
      {!smiling && !spinning && <>
        <ellipse style={{transition:"all .15s"}} cx={eyeL.cx} cy={eyeL.cy} rx={eyeL.rx} ry={eyeL.ry} fill="white"/>
        <ellipse style={{transition:"all .15s"}} cx={eyeR.cx} cy={eyeR.cy} rx={eyeR.rx} ry={eyeR.ry} fill="white"/>
        <ellipse style={{transition:"all .15s"}} cx={pupL.cx} cy={pupL.cy} rx={pupL.rx} ry={pupL.ry} fill="#111"/>
        <ellipse style={{transition:"all .15s"}} cx={pupR.cx} cy={pupR.cy} rx={pupR.rx} ry={pupR.ry} fill="#111"/>
        <circle style={{transition:"all .15s"}} cx={shine1.cx} cy={shine1.cy} r={shine1.r} fill="white" opacity="0.9"/>
        <circle style={{transition:"all .15s"}} cx={shine2.cx} cy={shine2.cy} r={shine2.r} fill="white" opacity="0.9"/>
        {/* Cejas */}
        {hovered ? (
          <>
            <path d="M 30 36 Q 37 31 44 34" fill="none" stroke="#111" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M 56 34 Q 63 31 70 36" fill="none" stroke="#111" strokeWidth="1.4" strokeLinecap="round"/>
          </>
        ) : (
          <>
            <line x1="31" y1="41" x2="33" y2="39.5" stroke="#111" strokeWidth="0.8"/>
            <line x1="34" y1="39.5" x2="35" y2="37.8" stroke="#111" strokeWidth="0.8"/>
            <line x1="37" y1="39"   x2="37" y2="37"   stroke="#111" strokeWidth="0.8"/>
            <line x1="40" y1="39.5" x2="41.5" y2="38" stroke="#111" strokeWidth="0.8"/>
            <line x1="43" y1="41"   x2="44.5" y2="39.8" stroke="#111" strokeWidth="0.8"/>
            <line x1="57" y1="41"   x2="55.5" y2="39.8" stroke="#111" strokeWidth="0.8"/>
            <line x1="60" y1="39.5" x2="58.5" y2="38"   stroke="#111" strokeWidth="0.8"/>
            <line x1="63" y1="39"   x2="63"   y2="37"   stroke="#111" strokeWidth="0.8"/>
            <line x1="66" y1="39.5" x2="67"   y2="37.8" stroke="#111" strokeWidth="0.8"/>
            <line x1="69" y1="41"   x2="71"   y2="39.5" stroke="#111" strokeWidth="0.8"/>
          </>
        )}
        {/* Boca */}
        <path style={{transition:"all .2s"}} d={mouthPath}
          fill={hovered?"#111":"none"}
          stroke={hovered?"none":"#111"}
          strokeWidth="1.8" strokeLinecap="round"/>
        {hovered && <ellipse cx="50" cy="64" rx="5" ry="4" fill="#FF4444" opacity="0.7"/>}
        {/* Estrellitas hover */}
        {hovered && [{x:15,y:20,r:3,delay:"0s"},{x:82,y:18,r:2.5,delay:"0.05s"},{x:10,y:60,r:2,delay:"0.1s"},{x:88,y:55,r:3,delay:"0.08s"},{x:50,y:8,r:2.5,delay:"0.03s"}].map((s,i)=>(
          <polygon key={i} style={{animation:`floatStar 0.6s ${s.delay} ease-out forwards`,opacity:0}}
            points={Array.from({length:5},(_,j)=>{
              const a1=Math.PI/2+(j*2*Math.PI)/5,a2=a1+Math.PI/5;
              return `${s.x+s.r*Math.cos(a1)},${s.y-s.r*Math.sin(a1)} ${s.x+(s.r*0.45)*Math.cos(a2)},${s.y-(s.r*0.45)*Math.sin(a2)}`;
            }).join(" ")} fill="#FFE600"/>
        ))}
      </>}

      {/* Mejillas (siempre visibles, cambian tamaño) */}
      {!spinning && <>
        <ellipse style={{transition:"all .2s"}} cx="32" cy="56" rx={cheekSize} ry={cheekSize*0.55} fill="#FF6B6B" opacity={cheekOpacity}/>
        <ellipse style={{transition:"all .2s"}} cx="68" cy="56" rx={cheekSize} ry={cheekSize*0.55} fill="#FF6B6B" opacity={cheekOpacity}/>
      </>}
    </svg>
  );
}

function StarWrapper() {
  const [hovered,  setHovered]  = useState(false);
  const [wiggling, setWiggling] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [smiling,  setSmiling]  = useState(false);

  const handleEnter = () => { if(spinning) return; setHovered(true); setWiggling(true); };
  const handleLeave = () => { if(spinning) return; setHovered(false); setTimeout(()=>setWiggling(false),700); };

  const handleClick = () => {
    if(spinning) return;
    setHovered(false);
    setWiggling(false);
    setSmiling(false);
    setSpinning(true);
    // Al terminar la animación (1.8s) → cara sonriente durante 1.5s
    setTimeout(() => {
      setSpinning(false);
      setSmiling(true);
      setTimeout(() => setSmiling(false), 1500);
    }, 1800);
  };

  const cls = spinning ? "star-spin" : wiggling ? "star-hover" : "star-wrap";

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      style={{position:"absolute",top:"5%",left:"34%",width:"32%",bottom:"12%",zIndex:5,cursor:spinning?"default":"pointer"}}
    >
      <div className={cls} style={{width:"100%",height:"100%"}}>
        <StarSVG hovered={hovered} smiling={smiling} spinning={spinning}/>
      </div>
    </div>
  );
}

function Particles() {
  const p=Array.from({length:14},(_,i)=>({
    id:i,size:Math.random()*5+3,top:Math.random()*100,left:Math.random()*100,
    color:i%2===0?COLORS.neon:COLORS.magenta,
    delay:(Math.random()*4).toFixed(1),duration:(Math.random()*3+3).toFixed(1),
  }));
  return <>{p.map(x=>(
    <div key={x.id} style={{position:"absolute",width:x.size,height:x.size,borderRadius:"50%",
      background:x.color,top:`${x.top}%`,left:`${x.left}%`,
      boxShadow:`0 0 ${x.size*2}px ${x.color}`,
      animation:`floatP ${x.duration}s ${x.delay}s ease-in-out infinite alternate`,
      pointerEvents:"none"}}/>
  ))}</>;
}

function Equalizer() {
  const bars=Array.from({length:10},(_,i)=>({id:i,
    color:[COLORS.neon,COLORS.magenta,COLORS.yellow,COLORS.orange,COLORS.cyan][i%5],
    delay:(i*.15).toFixed(2),dur:(0.45+i*.07).toFixed(2),minH:10+(i%3)*5,maxH:28+(i%4)*8}));
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:4,height:36,padding:"0 8px"}}>
      {bars.map(b=>(
        <div key={b.id} style={{width:5,borderRadius:3,background:b.color,
          boxShadow:`0 0 6px ${b.color}`,height:b.minH,
          "--min-h":`${b.minH}px`,"--max-h":`${b.maxH}px`,
          animation:`eqP ${b.dur}s ${b.delay}s ease-in-out infinite alternate`}}/>
      ))}
    </div>
  );
}

function EditModal({card,value,onSave,onClose}) {
  const [text,setText]=useState(value);
  const light=card.color===COLORS.yellow||card.color===COLORS.neon;
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()}
      style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.88)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#111",border:`2px solid ${card.color}`,borderRadius:14,padding:28,width:440,boxShadow:`0 0 50px ${card.color}44`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <span style={{background:card.color,color:light?"#000":"#fff",fontFamily:"'Bebas Neue',cursive",fontSize:18,padding:"4px 14px",borderRadius:6,letterSpacing:1}}>{card.label}</span>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#666",fontSize:22,cursor:"pointer"}}>✕</button>
        </div>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={7} autoFocus
          style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${card.color}55`,borderRadius:8,color:"#fff",fontFamily:"'DM Mono',monospace",fontSize:13,padding:12,resize:"vertical",outline:"none",boxSizing:"border-box",lineHeight:1.75}}/>
        <div style={{display:"flex",gap:10,marginTop:14,justifyContent:"flex-end"}}>
          <button onClick={onClose} style={{background:"transparent",border:"1px solid #444",color:"#777",fontFamily:"'Bebas Neue',cursive",fontSize:15,padding:"8px 22px",borderRadius:6,cursor:"pointer",letterSpacing:1}}>CANCELAR</button>
          <button onClick={()=>onSave(text)} style={{background:card.color,border:"none",color:light?"#000":"#fff",fontFamily:"'Bebas Neue',cursive",fontSize:15,padding:"8px 28px",borderRadius:6,cursor:"pointer",letterSpacing:1,boxShadow:`0 0 18px ${card.color}88`}}>GUARDAR</button>
        </div>
      </div>
    </div>
  );
}

function Card({card,value,onClick}) {
  const [hovered,setHovered]=useState(false);
  const light=card.color===COLORS.yellow||card.color===COLORS.neon;
  return (
    <div onClick={onClick} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{position:"absolute",...card.pos,width:card.width||"27%",
        background:"rgba(0,0,0,0.82)",border:`1.5px solid ${card.color}`,
        borderRadius:10,cursor:"pointer",
        transition:"transform .25s,box-shadow .25s",
        transform:hovered?"translateY(-6px)":"translateY(0)",
        boxShadow:hovered?`0 10px 36px ${card.color}77,0 0 0 1px ${card.color}44`:`0 2px 14px rgba(0,0,0,0.7),0 0 8px ${card.color}22`,
        overflow:"hidden",zIndex:10,backdropFilter:"blur(8px)"}}>
      <div style={{background:card.color,padding:"5px 12px 4px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontFamily:"'Bebas Neue',cursive",fontSize:15,letterSpacing:1.5,color:light?"#000":"#fff",lineHeight:1}}>{card.label}</span>
        <span style={{fontSize:10,opacity:.6}}>✦</span>
      </div>
      <div style={{padding:"8px 11px 18px",fontFamily:"'DM Mono',monospace",fontSize:11,color:"#ddd",lineHeight:1.6,whiteSpace:"pre-wrap",minHeight:55}}>
        {value||<span style={{color:"#555",fontStyle:"italic"}}>Click para editar...</span>}
      </div>
      {hovered&&<div style={{position:"absolute",bottom:7,right:9,fontSize:13}}>✏️</div>}
      <div style={{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:`transparent transparent ${card.color}44 transparent`}}/>
    </div>
  );
}

// ══════════════════════════════════════════════
export default function InspectAdaptBoard() {
  const [cardTexts,setCardTexts]=useState(Object.fromEntries(CARD_CONFIG.map(c=>[c.id,c.defaultText])));
  const [editingCard,setEditingCard]=useState(null);
  const [piName,setPiName]=useState("PI 6.2");
  const [editingPI,setEditingPI]=useState(false);
  const [piInput,setPiInput]=useState("PI 6.2");
  const [exporting,setExporting]=useState(false);
  const wrapRef=useRef(null);

  const handleSave=(id,txt)=>{setCardTexts(p=>({...p,[id]:txt}));setEditingCard(null);};

  const handleExport=async()=>{
    if(exporting)return;setExporting(true);
    try{
      if(!window.html2canvas){
        await new Promise((res,rej)=>{const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";s.onload=res;s.onerror=rej;document.head.appendChild(s);});
      }
      const canvas=await window.html2canvas(wrapRef.current,{scale:2,useCORS:true,backgroundColor:"#0a0a0a",logging:false});
      const a=document.createElement("a");a.download=`InspectAdapt_${piName.replace(/\s/g,"_")}.png`;a.href=canvas.toDataURL("image/png");a.click();
    }catch{alert("Error al exportar.");}finally{setExporting(false);}
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
      <style>{`
        :root{--neon:${COLORS.neon};--mag:${COLORS.magenta};--yel:${COLORS.yellow};--ora:${COLORS.orange};--cya:${COLORS.cyan};}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .glitch{position:relative;display:inline-block;color:#fff;font-family:'Bebas Neue',cursive;font-size:clamp(20px,2.8vw,34px);letter-spacing:4px;line-height:1}
        .glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;overflow:hidden;font-family:'Bebas Neue',cursive;font-size:clamp(20px,2.8vw,34px);letter-spacing:4px;line-height:1}
        .glitch::before{color:var(--neon);left:2px;animation:gB 3.6s infinite;clip-path:polygon(0 0,100% 0,100% 33%,0 33%)}
        .glitch::after{color:var(--mag);left:-2px;animation:gA 3.6s infinite;clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%)}
        @keyframes gB{0%,15%,85%,100%{transform:translate(0);clip-path:polygon(0 0,100% 0,100% 33%,0 33%)}5%{transform:translate(-3px,1px);clip-path:polygon(0 10%,100% 10%,100% 45%,0 45%)}10%{transform:translate(2px,-1px);clip-path:polygon(0 20%,100% 20%,100% 55%,0 55%)}75%{transform:translate(3px,-2px);clip-path:polygon(0 5%,100% 5%,100% 40%,0 40%)}80%{transform:translate(-2px,1px);clip-path:polygon(0 15%,100% 15%,100% 50%,0 50%)}}
        @keyframes gA{0%,15%,85%,100%{transform:translate(0);clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%)}5%{transform:translate(3px,-1px);clip-path:polygon(0 60%,100% 60%,100% 90%,0 90%)}10%{transform:translate(-2px,2px);clip-path:polygon(0 70%,100% 70%,100% 100%,0 100%)}75%{transform:translate(-3px,2px);clip-path:polygon(0 55%,100% 55%,100% 85%,0 85%)}80%{transform:translate(2px,-1px);clip-path:polygon(0 65%,100% 65%,100% 95%,0 95%)}}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .ticker-inner{display:inline-block;white-space:nowrap;animation:ticker 24s linear infinite}
        @keyframes starP{0%,100%{transform:scale(1);filter:drop-shadow(0 0 8px #FFE600aa)}50%{transform:scale(1.05);filter:drop-shadow(0 0 32px #FFE600dd) drop-shadow(0 0 60px #FF8C0088)}}
        .star-wrap{animation:starP 2.8s ease-in-out infinite;transform-origin:center;cursor:pointer}
        @keyframes starWiggle{
          0%  {transform:scale(1) rotate(0deg)}
          8%  {transform:scale(1.18) rotate(-12deg)}
          16% {transform:scale(1.22) rotate(12deg)}
          24% {transform:scale(1.15) rotate(-10deg)}
          32% {transform:scale(1.25) rotate(8deg)}
          40% {transform:scale(1.1) rotate(-6deg) translateY(-8px)}
          50% {transform:scale(1.3) rotate(0deg) translateY(-14px)}
          60% {transform:scale(1.1) rotate(6deg) translateY(-8px)}
          68% {transform:scale(1.2) rotate(-8deg)}
          76% {transform:scale(1.15) rotate(10deg)}
          84% {transform:scale(1.22) rotate(-12deg)}
          92% {transform:scale(1.1) rotate(6deg)}
          100%{transform:scale(1) rotate(0deg)}
        }
        .star-hover{animation:starWiggle 0.7s ease-in-out,starP 2.8s ease-in-out 0.7s infinite;transform-origin:center;filter:drop-shadow(0 0 40px #FFE600ff) drop-shadow(0 0 80px #FF8C00cc)!important}
        @keyframes spinTop{
          0%   {transform:rotate(0deg)   scale(1.05) translateY(0px)}
          10%  {transform:rotate(360deg) scale(1.25) translateY(-6px)}
          20%  {transform:rotate(720deg) scale(1.35) translateY(-10px)}
          35%  {transform:rotate(1440deg) scale(1.3) translateY(-8px)}
          55%  {transform:rotate(2520deg) scale(1.2) translateY(-4px)}
          72%  {transform:rotate(3240deg) scale(1.1) translateY(-2px)}
          85%  {transform:rotate(3600deg) scale(1.05) translateY(0px)}
          92%  {transform:rotate(3630deg) scale(1.08) translateY(-2px)}
          96%  {transform:rotate(3615deg) scale(1.06) translateY(-1px)}
          100% {transform:rotate(3600deg) scale(1) translateY(0px)}
        }
        .star-spin{animation:spinTop 1.8s cubic-bezier(0.2,0,0.4,1) forwards;transform-origin:center;filter:drop-shadow(0 0 50px #FFE600ff) drop-shadow(0 0 90px #FF8C00dd)!important;cursor:default}
        @keyframes floatP{0%{transform:translateY(0) translateX(0) scale(1);opacity:.8}33%{transform:translateY(-12px) translateX(5px) scale(1.2);opacity:1}66%{transform:translateY(-6px) translateX(-8px) scale(.9);opacity:.7}100%{transform:translateY(-18px) translateX(3px) scale(1.1);opacity:.9}}
        @keyframes floatStar{0%{opacity:1;transform:scale(0) translate(0,0)}60%{opacity:1;transform:scale(1.4) translate(0,-12px)}100%{opacity:0;transform:scale(0.8) translate(0,-22px)}}
        @keyframes eqP{from{height:var(--min-h,10px)}to{height:var(--max-h,36px)}}
        .exp-btn{display:flex;align-items:center;gap:7px;background:linear-gradient(135deg,#FFE600,#FF8C00);border:none;border-radius:8px;color:#000;font-family:'Bebas Neue',cursive;font-size:14px;letter-spacing:2px;padding:8px 18px;cursor:pointer;box-shadow:0 0 18px #FFE60055;transition:transform .15s,box-shadow .15s}
        .exp-btn:hover{transform:translateY(-2px);box-shadow:0 0 32px #FFE600aa}
        .exp-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--neon);border-radius:2px}
      `}</style>

      <div style={{background:"#050505",minHeight:"100vh",padding:"14px 8px 28px"}}>
        <div style={{maxWidth:1100,margin:"0 auto 10px",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
          <button onClick={handleExport} disabled={exporting} title="Exportar PNG" style={{background:"transparent",border:"1px solid #2a2a2a",borderRadius:6,color:"#444",fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:1,padding:"4px 8px",cursor:"pointer",opacity:0.45,transition:"opacity .2s"}} onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity="0.45"}>{exporting?"...":"📥 PNG"}</button>
        </div>

        <div ref={wrapRef} style={{maxWidth:1100,margin:"0 auto",borderRadius:14,overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 0 0 1px #111,0 24px 80px rgba(0,255,135,0.07)"}}>
          {/* HEADER */}
          <div style={{background:"linear-gradient(90deg,#0a0a0a 0%,#0d0230 50%,#0a0a0a 100%)",borderBottom:"1px solid #1a1040",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 20px",height:58}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:28,lineHeight:1}}>🐰</span>
              <span className="glitch" data-text="BAD BUNNY">BAD BUNNY</span>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(9px,1vw,12px)",color:"#444",letterSpacing:4}}>INSPECT &amp; ADAPT BOARD</div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(7px,.8vw,9px)",color:"#333",letterSpacing:2}}>SAFe AGILE · PI PLANNING</div>
            </div>
            <div>
              {editingPI?(
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                  <input value={piInput} onChange={e=>setPiInput(e.target.value)}
                    onKeyDown={e=>{if(e.key==="Enter"){setPiName(piInput);setEditingPI(false);}}} autoFocus
                    style={{background:"rgba(0,255,135,.07)",border:`1px solid ${COLORS.neon}`,borderRadius:6,color:COLORS.neon,fontFamily:"'Bebas Neue',cursive",fontSize:17,padding:"3px 8px",outline:"none",width:130,letterSpacing:2}}/>
                  <button onClick={()=>{setPiName(piInput);setEditingPI(false);}} style={{background:COLORS.neon,border:"none",color:"#000",fontFamily:"'Bebas Neue',cursive",fontSize:13,padding:"3px 9px",borderRadius:5,cursor:"pointer"}}>OK</button>
                </div>
              ):(
                <div onClick={()=>{setPiInput(piName);setEditingPI(true);}}
                  style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(14px,1.8vw,21px)",color:COLORS.neon,letterSpacing:3,cursor:"pointer",padding:"3px 9px",borderRadius:6,border:`1px solid ${COLORS.neon}22`,textShadow:`0 0 12px ${COLORS.neon}66`}}>
                  {piName} ✏️
                </div>
              )}
            </div>
          </div>

          {/* TICKER */}
          <div style={{height:30,background:COLORS.neon,overflow:"hidden",display:"flex",alignItems:"center"}}>
            <div className="ticker-inner">
              {[0,1].map(n=>(<span key={n} style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(10px,1.1vw,13px)",color:"#000",letterSpacing:3,padding:"0 6px"}}>{TICKER_TEXT}</span>))}
            </div>
          </div>

          {/* BOARD */}
          <div style={{position:"relative",width:"100%",paddingBottom:"56%",overflow:"hidden"}}>
            <MarioKartBg/>
            <div style={{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,backgroundSize:"256px",opacity:.15}}/>

            <StarWrapper/>

            <div style={{position:"absolute",top:"3%",left:"28%",width:"44%",bottom:"8%",zIndex:6,pointerEvents:"none"}}>
              <Particles/>
            </div>

            {CARD_CONFIG.map(card=>(
              <Card key={card.id} card={card} value={cardTexts[card.id]} onClick={()=>setEditingCard(card)}/>
            ))}

            <div style={{position:"absolute",bottom:"12%",left:"34%",width:"32%",textAlign:"center",zIndex:8,pointerEvents:"none"}}>
              <div style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(7px,1vw,13px)",color:"#ffffff22",letterSpacing:5}}>TEAM · BAD BUNNY</div>
            </div>

            <div style={{position:"absolute",bottom:0,left:0,right:0,height:"12%",background:"linear-gradient(0deg,rgba(0,0,0,.85) 0%,transparent 100%)",display:"flex",alignItems:"flex-end",justifyContent:"space-between",padding:"0 2% 1.2%",zIndex:20}}>
              <div>
                <div style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(7px,.9vw,10px)",color:"#3a3a3a",letterSpacing:3,marginBottom:2}}>🔊 NOW PLAYING</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,.8vw,9px)",color:"#2e2e2e",letterSpacing:1}}>Un Verano Sin Bugs — Bad Bunny Team</div>
              </div>
              <Equalizer/>
              <div style={{textAlign:"right"}}>
                <div style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(6px,.8vw,9px)",color:"#2e2e2e",letterSpacing:3,marginBottom:1}}>POWERED BY</div>
                <div style={{fontFamily:"'Bebas Neue',cursive",fontSize:"clamp(9px,1.3vw,15px)",background:`linear-gradient(90deg,${COLORS.neon},${COLORS.cyan})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:2}}>SAFe® AGILE</div>
              </div>
            </div>

            {[{top:"2%",left:"1%"},{top:"2%",right:"1%"},{bottom:"12%",left:"1%"},{bottom:"12%",right:"1%"}].map((pos,i)=>(
              <div key={i} style={{position:"absolute",width:14,height:14,
                borderTop:i<2?`2px solid ${COLORS.neon}55`:"none",
                borderBottom:i>=2?`2px solid ${COLORS.neon}55`:"none",
                borderLeft:i%2===0?`2px solid ${COLORS.neon}55`:"none",
                borderRight:i%2!==0?`2px solid ${COLORS.neon}55`:"none",
                zIndex:25,...pos}}/>
            ))}
          </div>
        </div>


      </div>

      {editingCard&&(<EditModal card={editingCard} value={cardTexts[editingCard.id]} onSave={txt=>handleSave(editingCard.id,txt)} onClose={()=>setEditingCard(null)}/>)}
    </>
  );
}
