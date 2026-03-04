import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   INSPECT & ADAPT BOARD — BAD BUNNY TEAM
   SAFe Agile · Single-file React Component
───────────────────────────────────────────── */

const COLORS = {
  neon: "#00FF87",
  magenta: "#FF006E",
  yellow: "#FFE600",
  orange: "#FF8C00",
  cyan: "#00E5FF",
  black: "#0a0a0a",
  white: "#FFFFFF",
};

const CARD_CONFIG = [
  {
    id: "stop",
    label: "Dejar de...",
    color: COLORS.magenta,
    pos: { top: "6%", left: "3%" },
    defaultText:
      "• Meetings sin agenda clara\n• Code sin revisión\n• Ignorar la deuda técnica",
  },
  {
    id: "start",
    label: "Comenzar a...",
    color: COLORS.neon,
    pos: { top: "6%", left: "62%" },
    defaultText:
      "• Pair programming semanal\n• TDD en nuevas features\n• Documentar decisiones",
  },
  {
    id: "less",
    label: "Menos de...",
    color: COLORS.yellow,
    pos: { top: "50%", left: "1%" },
    defaultText:
      "• Over-engineering\n• Interrupciones en el flow\n• Scope creep sin control",
  },
  {
    id: "more",
    label: "Más de...",
    color: COLORS.orange,
    pos: { top: "50%", left: "70%" },
    defaultText:
      "• Feedback temprano\n• Automatización de pruebas\n• Celebrar victorias",
  },
  {
    id: "continue",
    label: "Seguir...",
    color: COLORS.cyan,
    pos: { top: "79%", left: "36%" },
    defaultText:
      "• Daily standups efectivos\n• Retrospectivas honestas\n• Entrega continua",
  },
];

const TICKER_TEXT =
  "INSPECT & ADAPT · BAD BUNNY TEAM · SAFe · UN VERANO SIN BUGS · WORLD'S HOTTEST SCRUM · EL APAGÓN DE DEUDA TÉCNICA · BABY MÁS VELOCITY · ";

const BG_WORDS = [
  { word: "SPRINT", top: "12%", left: "48%", rot: -15 },
  { word: "RETRO", top: "22%", left: "8%", rot: 20 },
  { word: "SAFE", top: "35%", left: "85%", rot: -8 },
  { word: "PI", top: "60%", left: "50%", rot: 12 },
  { word: "SCRUM", top: "75%", left: "20%", rot: -20 },
  { word: "MVP", top: "80%", left: "75%", rot: 15 },
  { word: "AGILE", top: "45%", left: "35%", rot: -5 },
  { word: "KANBAN", top: "18%", left: "70%", rot: 18 },
  { word: "BACKLOG", top: "68%", left: "88%", rot: -12 },
  { word: "DEPLOY", top: "90%", left: "55%", rot: 7 },
];

// ── STAR SVG ──────────────────────────────────
function StarSVG() {
  const pts = Array.from({ length: 5 }, (_, i) => {
    const outer = 46;
    const inner = 20;
    const a1 = (Math.PI / 2) + (i * 2 * Math.PI) / 5;
    const a2 = a1 + Math.PI / 5;
    const ox = 50 + outer * Math.cos(a1);
    const oy = 50 - outer * Math.sin(a1);
    const ix = 50 + inner * Math.cos(a2);
    const iy = 50 - inner * Math.sin(a2);
    return `${ox},${oy} ${ix},${iy}`;
  });
  const starPoints = pts.join(" ");

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <defs>
        {/* Glow filter */}
        <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Star gradient */}
        <radialGradient id="starGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFE600" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF003C" />
        </radialGradient>
        {/* Halo gradient */}
        <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#FFE60044" />
        </radialGradient>
        {/* Noise */}
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
        <clipPath id="starClip">
          <polygon points={starPoints} />
        </clipPath>
      </defs>

      {/* Halo pulse ring */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#FFE600" strokeWidth="0.5" opacity="0.3" className="star-halo-ring" />
      <circle cx="50" cy="50" r="48" fill="url(#haloGrad)" className="star-halo" />

      {/* Main star body */}
      <polygon
        points={starPoints}
        fill="url(#starGrad)"
        filter="url(#starGlow)"
        className="star-body"
      />

      {/* Noise overlay on star */}
      <polygon
        points={starPoints}
        fill="url(#starGrad)"
        filter="url(#noise)"
        opacity="0.15"
      />

      {/* Star outline */}
      <polygon
        points={starPoints}
        fill="none"
        stroke="#FFE600"
        strokeWidth="0.8"
        opacity="0.8"
      />

      {/* ── Eyes ── */}
      {/* Left eye white */}
      <ellipse cx="37" cy="46" rx="6.5" ry="7" fill="white" />
      {/* Right eye white */}
      <ellipse cx="63" cy="46" rx="6.5" ry="7" fill="white" />

      {/* Left pupil */}
      <ellipse cx="38.5" cy="47.5" rx="3.5" ry="4" fill="#1a1a1a" />
      {/* Right pupil */}
      <ellipse cx="64.5" cy="47.5" rx="3.5" ry="4" fill="#1a1a1a" />

      {/* Left highlight */}
      <circle cx="40" cy="45.5" r="1.2" fill="white" opacity="0.9" />
      {/* Right highlight */}
      <circle cx="66" cy="45.5" r="1.2" fill="white" opacity="0.9" />

      {/* Left eyelashes top */}
      <line x1="31" y1="41" x2="33" y2="39.5" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="34" y1="39.5" x2="35" y2="37.8" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="37" y1="39" x2="37" y2="37" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="40" y1="39.5" x2="41.5" y2="38" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="43" y1="41" x2="44.5" y2="39.8" stroke="#1a1a1a" strokeWidth="0.8" />

      {/* Right eyelashes top */}
      <line x1="57" y1="41" x2="55.5" y2="39.8" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="60" y1="39.5" x2="58.5" y2="38" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="63" y1="39" x2="63" y2="37" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="66" y1="39.5" x2="67" y2="37.8" stroke="#1a1a1a" strokeWidth="0.8" />
      <line x1="69" y1="41" x2="71" y2="39.5" stroke="#1a1a1a" strokeWidth="0.8" />

      {/* Smile */}
      <path
        d="M 41 57 Q 50 63 59 57"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Cheeks */}
      <ellipse cx="32" cy="56" rx="4" ry="2.5" fill="#FF6B6B" opacity="0.5" />
      <ellipse cx="68" cy="56" rx="4" ry="2.5" fill="#FF6B6B" opacity="0.5" />
    </svg>
  );
}

// ── PARTICLES ─────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    color: i % 2 === 0 ? COLORS.neon : COLORS.magenta,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            top: `${p.top}%`,
            left: `${p.left}%`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `floatParticle ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

// ── EQUALIZER ─────────────────────────────────
function Equalizer() {
  const bars = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    color: [COLORS.neon, COLORS.magenta, COLORS.yellow, COLORS.orange, COLORS.cyan][i % 5],
    delay: (i * 0.15).toFixed(2),
    minH: Math.random() * 20 + 15,
    maxH: Math.random() * 30 + 40,
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 4,
        height: 40,
        padding: "0 16px",
      }}
    >
      {bars.map((b) => (
        <div
          key={b.id}
          style={{
            width: 6,
            borderRadius: 3,
            background: b.color,
            boxShadow: `0 0 8px ${b.color}`,
            animationName: `eqBar${b.id}`,
            animationDuration: `${(Math.random() * 0.4 + 0.5).toFixed(2)}s`,
            animationDelay: `${b.delay}s`,
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationTimingFunction: "ease-in-out",
          }}
          className={`eq-bar-${b.id}`}
        />
      ))}
    </div>
  );
}

// ── CARD MODAL ────────────────────────────────
function EditModal({ card, value, onSave, onClose }) {
  const [text, setText] = useState(value);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "#111",
          border: `2px solid ${card.color}`,
          borderRadius: 12,
          padding: 28,
          width: 420,
          boxShadow: `0 0 40px ${card.color}55`,
        }}
      >
        {/* Modal header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              background: card.color,
              color: card.color === COLORS.yellow ? "#000" : "#fff",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 18,
              padding: "4px 14px",
              borderRadius: 6,
              letterSpacing: 1,
            }}
          >
            {card.label}
          </span>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#888",
              fontSize: 22,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${card.color}66`,
            borderRadius: 8,
            color: "#fff",
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            padding: 12,
            resize: "vertical",
            outline: "none",
            boxSizing: "border-box",
            lineHeight: 1.7,
          }}
          autoFocus
        />

        <div style={{ display: "flex", gap: 10, marginTop: 14, justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "1px solid #444",
              color: "#888",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 15,
              padding: "8px 22px",
              borderRadius: 6,
              cursor: "pointer",
              letterSpacing: 1,
            }}
          >
            CANCELAR
          </button>
          <button
            onClick={() => onSave(text)}
            style={{
              background: card.color,
              border: "none",
              color: card.color === COLORS.yellow ? "#000" : "#fff",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 15,
              padding: "8px 28px",
              borderRadius: 6,
              cursor: "pointer",
              letterSpacing: 1,
              boxShadow: `0 0 16px ${card.color}88`,
            }}
          >
            GUARDAR
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CARD COMPONENT ────────────────────────────
function Card({ card, value, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        ...card.pos,
        width: "26%",
        minHeight: "18%",
        background: "rgba(0,0,0,0.78)",
        border: `1.5px solid ${card.color}`,
        borderRadius: 10,
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 8px 32px ${card.color}66, 0 0 0 1px ${card.color}44`
          : `0 2px 12px rgba(0,0,0,0.5)`,
        overflow: "hidden",
        zIndex: 10,
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Badge header */}
      <div
        style={{
          background: card.color,
          padding: "5px 12px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 16,
            letterSpacing: 1.5,
            color: card.color === COLORS.yellow || card.color === COLORS.neon ? "#000" : "#fff",
            lineHeight: 1,
          }}
        >
          {card.label}
        </span>
        <span style={{ fontSize: 12, opacity: 0.7 }}>
          {card.color === COLORS.yellow || card.color === COLORS.neon ? "✦" : "✦"}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "10px 12px 20px",
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "#e8e8e8",
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
          minHeight: 80,
        }}
      >
        {value || (
          <span style={{ color: "#555", fontStyle: "italic" }}>Click para editar...</span>
        )}
      </div>

      {/* Pencil icon on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            fontSize: 14,
            opacity: 0.75,
          }}
        >
          ✏️
        </div>
      )}

      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 0 18px 18px",
          borderColor: `transparent transparent ${card.color}33 transparent`,
        }}
      />
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────
export default function InspectAdaptBoard() {
  const [cardTexts, setCardTexts] = useState(
    Object.fromEntries(CARD_CONFIG.map((c) => [c.id, c.defaultText]))
  );
  const [editingCard, setEditingCard] = useState(null);
  const [piName, setPiName] = useState("PI 2025 Q2");
  const [editingPI, setEditingPI] = useState(false);
  const [piInput, setPiInput] = useState("PI 2025 Q2");

  const handleSave = (id, text) => {
    setCardTexts((prev) => ({ ...prev, [id]: text }));
    setEditingCard(null);
  };

  const handlePISave = () => {
    setPiName(piInput);
    setEditingPI(false);
  };

  // Generate dynamic keyframes for equalizer bars
  const eqKeyframes = Array.from({ length: 10 }, (_, i) => {
    const minH = Math.floor(Math.random() * 15 + 10);
    const maxH = Math.floor(Math.random() * 25 + 30);
    return `
      @keyframes eqBar${i} {
        0%   { height: ${minH}px; }
        50%  { height: ${maxH}px; }
        100% { height: ${Math.floor(minH * 1.4)}px; }
      }
    `;
  }).join("\n");

  return (
    <>
      {/* ── GOOGLE FONTS ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
        rel="stylesheet"
      />

      {/* ── GLOBAL STYLES & KEYFRAMES ── */}
      <style>{`
        :root {
          --neon:    ${COLORS.neon};
          --magenta: ${COLORS.magenta};
          --yellow:  ${COLORS.yellow};
          --orange:  ${COLORS.orange};
          --cyan:    ${COLORS.cyan};
          --black:   ${COLORS.black};
        }

        * { box-sizing: border-box; }

        /* ── Glitch title ── */
        .glitch-title {
          position: relative;
          display: inline-block;
          color: ${COLORS.white};
          font-family: 'Bebas Neue', cursive;
          font-size: 36px;
          letter-spacing: 4px;
          line-height: 1;
        }
        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          overflow: hidden;
          font-family: 'Bebas Neue', cursive;
          font-size: 36px;
          letter-spacing: 4px;
          line-height: 1;
        }
        .glitch-title::before {
          color: var(--neon);
          animation: glitch-before 3.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          left: 2px;
          text-shadow: none;
        }
        .glitch-title::after {
          color: var(--magenta);
          animation: glitch-after 3.5s infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          left: -2px;
          text-shadow: none;
        }
        @keyframes glitch-before {
          0%   { transform: translate(0px, 0px);  clip-path: polygon(0 0,   100% 0,   100% 33%, 0 33%); }
          5%   { transform: translate(-3px, 1px); clip-path: polygon(0 10%, 100% 10%, 100% 45%, 0 45%); }
          10%  { transform: translate(2px, -1px); clip-path: polygon(0 20%, 100% 20%, 100% 55%, 0 55%); }
          15%  { transform: translate(0px, 0px);  clip-path: polygon(0 0,   100% 0,   100% 33%, 0 33%); }
          70%  { transform: translate(0px, 0px);  clip-path: polygon(0 0,   100% 0,   100% 33%, 0 33%); }
          75%  { transform: translate(3px, -2px); clip-path: polygon(0 5%,  100% 5%,  100% 40%, 0 40%); }
          80%  { transform: translate(-2px, 1px); clip-path: polygon(0 15%, 100% 15%, 100% 50%, 0 50%); }
          85%  { transform: translate(0px, 0px);  clip-path: polygon(0 0,   100% 0,   100% 33%, 0 33%); }
          100% { transform: translate(0px, 0px);  clip-path: polygon(0 0,   100% 0,   100% 33%, 0 33%); }
        }
        @keyframes glitch-after {
          0%   { transform: translate(0px, 0px);   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
          5%   { transform: translate(3px, -1px);  clip-path: polygon(0 60%, 100% 60%, 100% 90%,  0 90%); }
          10%  { transform: translate(-2px, 2px);  clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); }
          15%  { transform: translate(0px, 0px);   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
          70%  { transform: translate(0px, 0px);   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
          75%  { transform: translate(-3px, 2px);  clip-path: polygon(0 55%, 100% 55%, 100% 85%,  0 85%); }
          80%  { transform: translate(2px, -1px);  clip-path: polygon(0 65%, 100% 65%, 100% 95%,  0 95%); }
          85%  { transform: translate(0px, 0px);   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
          100% { transform: translate(0px, 0px);   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
        }

        /* ── Ticker ── */
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 22s linear infinite;
        }

        /* ── Star pulse ── */
        @keyframes starPulse {
          0%   { transform: scale(1.0);   filter: drop-shadow(0 0 8px #FFE600aa); }
          50%  { transform: scale(1.04);  filter: drop-shadow(0 0 28px #FFE600cc) drop-shadow(0 0 50px #FF8C0088); }
          100% { transform: scale(1.0);   filter: drop-shadow(0 0 8px #FFE600aa); }
        }
        .star-wrapper {
          animation: starPulse 2.8s ease-in-out infinite;
          transform-origin: center center;
        }

        /* ── Star halo ring ── */
        @keyframes haloRing {
          0%   { opacity: 0.15; r: 48; }
          50%  { opacity: 0.4;  r: 50; }
          100% { opacity: 0.15; r: 48; }
        }
        .star-halo-ring { animation: haloRing 2.8s ease-in-out infinite; }

        /* ── Particle float ── */
        @keyframes floatParticle {
          0%   { transform: translateY(0px)   translateX(0px)   scale(1); opacity: 0.8; }
          33%  { transform: translateY(-12px) translateX(5px)   scale(1.2); opacity: 1; }
          66%  { transform: translateY(-6px)  translateX(-8px)  scale(0.9); opacity: 0.7; }
          100% { transform: translateY(-18px) translateX(3px)   scale(1.1); opacity: 0.9; }
        }

        /* ── Background grain ── */
        .board-bg {
          background-color: var(--black);
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(255,255,255,0.012) 80px,
              rgba(255,255,255,0.012) 81px
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(255,255,255,0.008) 80px,
              rgba(255,255,255,0.008) 81px
            );
        }

        /* ── Noise overlay ── */
        .noise-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 256px;
          opacity: 0.35;
          pointer-events: none;
          z-index: 1;
          border-radius: inherit;
        }

        /* ── EQ bars dynamic ── */
        ${eqKeyframes}

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: var(--neon); border-radius: 2px; }
      `}</style>

      {/* ── OUTER WRAPPER ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 0 32px",
          fontFamily: "'DM Mono', monospace",
          background: "#050505",
          minHeight: "100vh",
        }}
      >
        {/* ══ BOARD ══ */}
        <div
          className="board-bg noise-overlay"
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "58%",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #222",
            boxShadow:
              "0 0 0 1px #111, 0 20px 80px rgba(0,255,135,0.08), 0 4px 24px rgba(0,0,0,0.9)",
          }}
        >
          {/* ── Background floating words ── */}
          {BG_WORDS.map((w) => (
            <span
              key={w.word}
              style={{
                position: "absolute",
                top: w.top,
                left: w.left,
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 11,
                color: "rgba(255,255,255,0.045)",
                transform: `rotate(${w.rot}deg)`,
                pointerEvents: "none",
                userSelect: "none",
                letterSpacing: 3,
                zIndex: 1,
              }}
            >
              {w.word}
            </span>
          ))}

          {/* ══ HEADER ══ */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "11%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2.5% 0 2%",
              background: "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 20,
            }}
          >
            {/* Logo left */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 32, lineHeight: 1 }}>🐰</span>
              <span className="glitch-title" data-text="BAD BUNNY">
                BAD BUNNY
              </span>
            </div>

            {/* Center subtitle */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 13,
                  color: "#555",
                  letterSpacing: 4,
                }}
              >
                INSPECT &amp; ADAPT BOARD
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#444",
                  letterSpacing: 2,
                }}
              >
                SAFe AGILE · PI PLANNING
              </div>
            </div>

            {/* PI Name right */}
            <div>
              {editingPI ? (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <input
                    value={piInput}
                    onChange={(e) => setPiInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handlePISave()}
                    autoFocus
                    style={{
                      background: "rgba(0,255,135,0.08)",
                      border: `1px solid ${COLORS.neon}`,
                      borderRadius: 6,
                      color: COLORS.neon,
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: 18,
                      padding: "4px 10px",
                      outline: "none",
                      width: 140,
                      letterSpacing: 2,
                    }}
                  />
                  <button
                    onClick={handlePISave}
                    style={{
                      background: COLORS.neon,
                      border: "none",
                      color: "#000",
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: 13,
                      padding: "4px 10px",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    OK
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setPiInput(piName);
                    setEditingPI(true);
                  }}
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 22,
                    color: COLORS.neon,
                    letterSpacing: 3,
                    cursor: "pointer",
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.neon}33`,
                    transition: "all 0.2s",
                    textShadow: `0 0 12px ${COLORS.neon}88`,
                  }}
                  title="Click para editar el PI"
                >
                  {piName} ✏️
                </div>
              )}
            </div>
          </div>

          {/* ══ TICKER BAND ══ */}
          <div
            style={{
              position: "absolute",
              top: "11%",
              left: 0,
              right: 0,
              height: "5%",
              background: COLORS.neon,
              overflow: "hidden",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="ticker-inner">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 13,
                    color: "#000",
                    letterSpacing: 3,
                    padding: "0 8px",
                  }}
                >
                  {TICKER_TEXT}
                </span>
              ))}
            </div>
          </div>

          {/* ══ STAR AREA ══ */}
          <div
            style={{
              position: "absolute",
              top: "16%",
              left: "34%",
              width: "32%",
              bottom: "14%",
              zIndex: 5,
            }}
          >
            <div className="star-wrapper" style={{ width: "100%", height: "100%" }}>
              <StarSVG />
            </div>
          </div>

          {/* ══ PARTICLES (around star area) ══ */}
          <div
            style={{
              position: "absolute",
              top: "14%",
              left: "28%",
              width: "44%",
              bottom: "10%",
              zIndex: 6,
              pointerEvents: "none",
            }}
          >
            <Particles />
          </div>

          {/* ══ CARDS ══ */}
          {CARD_CONFIG.map((card) => (
            <Card
              key={card.id}
              card={card}
              value={cardTexts[card.id]}
              onClick={() => setEditingCard(card)}
            />
          ))}

          {/* ══ TEAM LABEL (center-bottom of star) ══ */}
          <div
            style={{
              position: "absolute",
              bottom: "14.5%",
              left: "34%",
              width: "32%",
              textAlign: "center",
              zIndex: 15,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(9px, 1.4vw, 16px)",
                color: "#ffffff44",
                letterSpacing: 5,
              }}
            >
              TEAM · BAD BUNNY
            </div>
          </div>

          {/* ══ FOOTER ══ */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "14%",
              background: "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, transparent 100%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "0 2.5% 1.5%",
              zIndex: 20,
            }}
          >
            {/* Footer left: label */}
            <div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 11,
                  color: "#444",
                  letterSpacing: 3,
                  marginBottom: 4,
                }}
              >
                🔊 NOW PLAYING
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#333",
                  letterSpacing: 1,
                }}
              >
                Un Verano Sin Bugs — Bad Bunny Team
              </div>
            </div>

            {/* Footer center: equalizer */}
            <Equalizer />

            {/* Footer right: SAFe badge */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 10,
                  color: "#333",
                  letterSpacing: 3,
                  marginBottom: 2,
                }}
              >
                POWERED BY
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 16,
                  background: `linear-gradient(90deg, ${COLORS.neon}, ${COLORS.cyan})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: 2,
                }}
              >
                SAFe® AGILE
              </div>
            </div>
          </div>

          {/* ── Decorative corner accents ── */}
          {[
            { top: "16.5%", left: "1.5%" },
            { top: "16.5%", right: "1.5%" },
            { bottom: "14.5%", left: "1.5%" },
            { bottom: "14.5%", right: "1.5%" },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 16,
                height: 16,
                borderTop: i < 2 ? `2px solid ${COLORS.neon}44` : "none",
                borderBottom: i >= 2 ? `2px solid ${COLORS.neon}44` : "none",
                borderLeft: i % 2 === 0 ? `2px solid ${COLORS.neon}44` : "none",
                borderRight: i % 2 !== 0 ? `2px solid ${COLORS.neon}44` : "none",
                zIndex: 25,
                ...pos,
              }}
            />
          ))}

          {/* ── Side labels ── */}
          <div
            style={{
              position: "absolute",
              left: "0.8%",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 9,
              color: `${COLORS.magenta}55`,
              letterSpacing: 4,
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            RETROSPECTIVA
          </div>
          <div
            style={{
              position: "absolute",
              right: "0.8%",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 9,
              color: `${COLORS.neon}55`,
              letterSpacing: 4,
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            MEJORA CONTINUA
          </div>
        </div>

        {/* ── Caption below board ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#333",
            letterSpacing: 2,
          }}
        >
          INSPECT &amp; ADAPT · BAD BUNNY TEAM · SAFe AGILE FRAMEWORK ·{" "}
          <span style={{ color: COLORS.neon }}>Click en las tarjetas para editar</span>
        </div>
      </div>

      {/* ══ EDIT MODAL ══ */}
      {editingCard && (
        <EditModal
          card={editingCard}
          value={cardTexts[editingCard.id]}
          onSave={(text) => handleSave(editingCard.id, text)}
          onClose={() => setEditingCard(null)}
        />
      )}
    </>
  );
}
