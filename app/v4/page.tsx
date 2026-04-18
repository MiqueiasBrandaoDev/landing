"use client"

import { useEffect } from "react"
import CTAButton from "@/components/CTAButton"
import {
  PRECO_LANCAMENTO,
  PRECO_REGULAR,
  PRECO_USD,
  PRECO_TOTAL_STACK,
  ALUNOS,
  GARANTIA_DIAS,
  OFERTA_VALIDA_ATE,
} from "@/lib/constants"

export default function PageV4() {
  useEffect(() => {
    function update() {
      const target = new Date()
      target.setHours(23, 59, 59, 999)
      let diff = target.getTime() - Date.now()
      if (diff < 0) diff = 0
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      document.querySelectorAll('[data-cd="h"]').forEach(e => e.textContent = String(h).padStart(2, "0"))
      document.querySelectorAll('[data-cd="m"]').forEach(e => e.textContent = String(m).padStart(2, "0"))
      document.querySelectorAll('[data-cd="s"]').forEach(e => e.textContent = String(s).padStart(2, "0"))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="v4">
      <style dangerouslySetInnerHTML={{ __html: `
/* ========== V4 TOKENS ========== */
.v4 {
  --ink: #0A0A0A;
  --ink-2: #141414;
  --ink-3: #1E1E1E;
  --line: #2A2A2A;
  --paper: #F5F3EE;
  --paper-2: #E9E6DE;
  --muted: #8C8A85;
  --muted-dark: #6E6C66;
  --accent: oklch(0.72 0.19 48);
  --accent-ink: #0A0A0A;
  --accent-dim: oklch(0.72 0.19 48 / 0.15);
  --pad: clamp(48px, 6vw, 96px);
  --gap: 16px;
  --radius: 6px;
  --radius-lg: 10px;
  --ff-display: 'Archivo Black', system-ui, sans-serif;
  --ff-sans: 'Archivo', 'Inter', system-ui, sans-serif;
  --ff-mono: 'JetBrains Mono', ui-monospace, monospace;

  background: var(--ink);
  color: var(--paper);
  font-family: var(--ff-sans);
  -webkit-font-smoothing: antialiased;
  line-height: 1.45;
  overflow-x: hidden;
}
.v4 *, .v4 *::before, .v4 *::after { box-sizing: border-box; }
.v4 ::selection { background: var(--accent); color: var(--accent-ink); }

.v4 .wrap { max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
.v4 section { padding: var(--pad) 0; position: relative; }

/* ========== EYEBROW ========== */
.v4 .eyebrow {
  font-family: var(--ff-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.v4 .eyebrow::before {
  content: "";
  width: 28px; height: 1px;
  background: currentColor;
  opacity: 0.6;
}

/* ========== TOPBAR ========== */
.v4 .topbar {
  border-bottom: 1px solid var(--line);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 14px 0;
  position: sticky;
  top: 0;
  background: rgba(10,10,10,0.88);
  backdrop-filter: blur(8px);
  z-index: 50;
}
.v4 .topbar .wrap { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.v4 .topbar .brand { color: var(--paper); font-weight: 700; letter-spacing: 0.18em; }
.v4 .topbar .dot-accent { display: inline-block; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; margin-right: 10px; }
.v4 .topbar .meta { display: flex; gap: 20px; align-items: center; }
.v4 .topbar .meta span { display: inline-flex; align-items: center; gap: 8px; }
.v4 .topbar .pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: v4pulse 2s infinite; }
@keyframes v4pulse { 0%{box-shadow:0 0 0 0 var(--accent)} 70%{box-shadow:0 0 0 8px transparent} 100%{box-shadow:0 0 0 0 transparent} }
@media(max-width:600px){ .v4 .topbar .meta span:first-child{display:none} }

/* ========== HERO ========== */
.v4 .hero { padding-top: clamp(40px, 5vw, 80px); padding-bottom: clamp(40px, 5vw, 80px); position: relative; overflow: hidden; }
.v4 .hero::before { content:""; position:absolute; inset:0; background:radial-gradient(60% 50% at 85% 20%, var(--accent-dim), transparent 70%); pointer-events:none; }
.v4 .hero .wrap { position: relative; z-index: 1; }

.v4 .hero-badge { display:inline-flex; align-items:center; gap:10px; padding:8px 14px; border:1px solid var(--line); border-radius:100px; font-family:var(--ff-mono); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--paper); }
.v4 .hero-badge .num { color: var(--accent); font-weight: 700; }

.v4 .hero-grid { display:grid; grid-template-columns:1.15fr 1fr; gap:clamp(24px,5vw,64px); align-items:center; margin-top:28px; }
@media(max-width:860px){ .v4 .hero-grid{grid-template-columns:1fr} }

.v4 .hero h1 { font-family:var(--ff-display); font-size:clamp(36px,7vw,100px); line-height:0.88; letter-spacing:-0.04em; text-transform:uppercase; color:var(--paper); text-wrap:balance; margin:0; }
.v4 .hero h1 .accent { color:var(--accent); font-style:italic; }
.v4 .hero h1 .stroke { -webkit-text-stroke:2px var(--paper); color:transparent; }

.v4 .hero-sub { margin-top:20px; font-size:clamp(16px,1.5vw,20px); color:var(--muted); max-width:52ch; line-height:1.45; }
.v4 .hero-sub strong { color:var(--paper); font-weight:700; }

/* Price card */
.v4 .price-card { margin-top:28px; border:1px solid var(--line); border-radius:var(--radius-lg); padding:24px; background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent); display:grid; gap:16px; }
.v4 .price-row { display:flex; align-items:baseline; gap:14px; flex-wrap:wrap; }
.v4 .price-old { font-family:var(--ff-mono); font-size:14px; color:var(--muted); text-decoration:line-through; text-decoration-thickness:2px; }
.v4 .price-new { font-family:var(--ff-display); font-size:clamp(28px,5vw,56px); color:var(--paper); line-height:1; letter-spacing:-0.03em; }
.v4 .price-new em { color:var(--accent); font-style:normal; }
.v4 .price-tag { font-family:var(--ff-mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; padding:5px 10px; border:1px solid var(--accent); color:var(--accent); border-radius:4px; }

.v4 .hero-cta { display:flex; flex-direction:column; gap:14px; }

.v4 .trust-row { display:flex; gap:16px; flex-wrap:wrap; font-family:var(--ff-mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.v4 .trust-row span { display:inline-flex; align-items:center; gap:6px; }
.v4 .tick { width:14px; height:14px; border-radius:50%; background:var(--accent); color:var(--accent-ink); display:inline-flex; align-items:center; justify-content:center; font-size:8px; font-weight:900; }

/* Countdown */
.v4 .countdown { padding:14px 16px; border:1px dashed var(--line); border-radius:var(--radius); display:flex; align-items:center; gap:14px; flex-wrap:wrap; background:rgba(255,255,255,0.02); }
.v4 .cd-label { font-family:var(--ff-mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); display:inline-flex; align-items:center; gap:8px; }
.v4 .cd-blocks { display:flex; gap:6px; align-items:center; }
.v4 .cd-block { background:var(--ink-3); border:1px solid var(--line); padding:8px 10px; min-width:44px; text-align:center; border-radius:4px; font-family:var(--ff-mono); font-weight:700; }
.v4 .cd-block .num { font-size:18px; color:var(--paper); line-height:1; display:block; }
.v4 .cd-block .unit { font-size:8px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin-top:4px; display:block; }
.v4 .cd-sep { color:var(--muted); font-family:var(--ff-mono); font-weight:700; }

/* Product visual */
.v4 .product-visual { position:relative; aspect-ratio:1; border:1px solid var(--line); border-radius:var(--radius-lg); overflow:hidden; background:radial-gradient(70% 70% at 50% 30%, rgba(255,255,255,0.05), transparent 70%), var(--ink-2); display:flex; align-items:center; justify-content:center; }
.v4 .product-visual::before { content:""; position:absolute; inset:0; background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:40px 40px; opacity:0.25; pointer-events:none; }
.v4 .product-visual img { max-width:85%; max-height:85%; object-fit:contain; position:relative; z-index:1; filter:drop-shadow(0 30px 50px rgba(0,0,0,0.5)); }
.v4 .chip { position:absolute; z-index:2; font-family:var(--ff-mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; padding:6px 10px; background:var(--ink); border:1px solid var(--line); border-radius:4px; color:var(--paper); display:inline-flex; align-items:center; gap:6px; }
.v4 .chip.tl { top:14px; left:14px; }
.v4 .chip.br { bottom:14px; right:14px; color:var(--accent); border-color:var(--accent); }

/* ========== MARQUEE ========== */
.v4 .marquee { border-top:1px solid var(--line); border-bottom:1px solid var(--line); overflow:hidden; padding:18px 0; background:var(--ink-2); }
.v4 .marquee-track { display:flex; gap:48px; white-space:nowrap; animation:v4marquee 35s linear infinite; width:max-content; font-family:var(--ff-display); font-size:clamp(18px,2.2vw,28px); text-transform:uppercase; letter-spacing:-0.02em; color:var(--paper); align-items:center; }
.v4 .marquee-track .dot { width:8px; height:8px; background:var(--accent); border-radius:50%; display:inline-block; }
.v4 .marquee-track .ghost { color:transparent; -webkit-text-stroke:1.5px var(--muted); }
@keyframes v4marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ========== DELIVERS ========== */
.v4 .delivers { background:var(--paper); color:var(--ink); }
.v4 .delivers .eyebrow { color:var(--muted-dark); }
.v4 .section-title { font-family:var(--ff-display); font-size:clamp(28px,5vw,64px); line-height:0.95; letter-spacing:-0.035em; text-transform:uppercase; text-wrap:balance; margin-top:20px; }

.v4 .deliver-list { margin-top:40px; border-top:1px solid rgba(0,0,0,0.1); }
.v4 .deliver { display:grid; grid-template-columns:48px 1fr auto; gap:clamp(12px,2vw,32px); padding:20px 0; border-bottom:1px solid rgba(0,0,0,0.1); align-items:center; }
.v4 .deliver .num { font-family:var(--ff-display); font-size:clamp(28px,4vw,48px); line-height:1; letter-spacing:-0.04em; color:var(--ink); }
.v4 .deliver .body h3 { font-family:var(--ff-display); font-size:clamp(15px,1.6vw,22px); text-transform:uppercase; letter-spacing:-0.02em; line-height:1.1; margin:0; }
.v4 .deliver .body p { margin:4px 0 0; color:var(--muted-dark); font-size:13px; line-height:1.45; max-width:50ch; }
.v4 .deliver .tags { display:flex; gap:6px; flex-wrap:wrap; margin-top:6px; }
.v4 .tag-free { font-family:var(--ff-mono); font-size:9px; letter-spacing:0.12em; text-transform:uppercase; padding:4px 7px; background:var(--ink); color:var(--accent); border-radius:3px; font-weight:700; }
.v4 .tag-top { font-family:var(--ff-mono); font-size:9px; letter-spacing:0.12em; text-transform:uppercase; padding:4px 7px; background:var(--accent); color:var(--accent-ink); border-radius:3px; font-weight:700; }
.v4 .deliver .price { font-family:var(--ff-mono); font-size:12px; color:var(--muted-dark); text-align:right; white-space:nowrap; }
.v4 .deliver .price .old { text-decoration:line-through; display:block; }
.v4 .deliver .price .new { color:var(--ink); font-weight:700; display:block; margin-top:2px; }
@media(max-width:600px){
  .v4 .deliver { grid-template-columns:36px 1fr; }
  .v4 .deliver .price { grid-column:2; text-align:left; }
}

/* Totalizer */
.v4 .totalizer { margin-top:32px; background:var(--ink); color:var(--paper); border-radius:var(--radius-lg); overflow:hidden; }
.v4 .totalizer-prices { display:grid; grid-template-columns:1fr 1fr; }
@media(max-width:600px){ .v4 .totalizer-prices{grid-template-columns:1fr} }
.v4 .totalizer-prices > div { padding:28px; display:grid; gap:6px; align-content:center; }
.v4 .totalizer-prices .col-val { border-right:1px solid var(--line); }
@media(max-width:600px){ .v4 .totalizer-prices .col-val{border-right:none;border-bottom:1px solid var(--line)} }
.v4 .totalizer-prices .col-now { background:var(--accent); color:var(--accent-ink); }
.v4 .totalizer-prices .label { font-family:var(--ff-mono); font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); }
.v4 .totalizer-prices .col-now .label { color:rgba(0,0,0,0.5); }
.v4 .totalizer-prices .value { font-family:var(--ff-display); font-size:clamp(28px,4vw,48px); line-height:1; letter-spacing:-0.035em; }
.v4 .totalizer-cta { padding:20px 28px; background:var(--ink-2); display:flex; flex-wrap:wrap; gap:14px; align-items:center; justify-content:space-between; border-top:1px solid var(--line); }
.v4 .totalizer-cta .count { font-family:var(--ff-mono); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.v4 .totalizer-cta .count b { color:var(--accent); }

/* ========== TESTI ========== */
.v4 .testi-section { background:var(--ink-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.v4 .testi-card { max-width:600px; margin:0 auto; text-align:center; }
.v4 .stars { display:flex; justify-content:center; gap:2px; color:var(--accent); font-size:18px; letter-spacing:3px; margin-bottom:20px; }
.v4 .testi-card blockquote { margin:0; font-size:clamp(16px,1.4vw,20px); line-height:1.5; font-weight:500; font-style:italic; }
.v4 .testi-meta { display:flex; align-items:center; justify-content:center; gap:12px; margin-top:20px; }
.v4 .testi-meta .avatar { width:36px; height:36px; border-radius:50%; background:var(--accent); color:var(--accent-ink); display:inline-flex; align-items:center; justify-content:center; font-family:var(--ff-display); font-size:14px; font-weight:900; }
.v4 .testi-meta .name { font-weight:700; font-size:13px; }
.v4 .testi-meta small { font-family:var(--ff-mono); font-size:10px; letter-spacing:0.08em; color:var(--muted); text-transform:uppercase; }

/* ========== FINAL ========== */
.v4 .final { position:relative; overflow:hidden; }
.v4 .final::before { content:""; position:absolute; inset:0; background:radial-gradient(50% 60% at 50% 10%, var(--accent-dim), transparent 60%); pointer-events:none; }
.v4 .final .wrap { position:relative; z-index:1; text-align:center; }
.v4 .final-price { display:grid; gap:4px; }
.v4 .final-price .old { font-family:var(--ff-mono); font-size:14px; color:var(--muted); text-decoration:line-through; }
.v4 .final-price .now { font-family:var(--ff-display); font-size:clamp(48px,10vw,88px); line-height:0.9; letter-spacing:-0.04em; color:var(--accent); }
.v4 .final-price .sub { font-family:var(--ff-mono); font-size:11px; color:var(--muted); letter-spacing:0.1em; text-transform:uppercase; margin-top:6px; }
.v4 .final-cta { display:flex; justify-content:center; margin-top:24px; }
.v4 .final-trust { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; margin-top:20px; padding-top:20px; border-top:1px solid var(--line); font-family:var(--ff-mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.v4 .final-trust span { display:inline-flex; align-items:center; gap:6px; }
.v4 .final-trust .dot { width:5px; height:5px; background:var(--accent); border-radius:50%; }

/* Shield */
.v4 .shield-row { display:flex; align-items:center; justify-content:center; gap:16px; margin-top:28px; padding:20px; border:1px dashed var(--line); border-radius:var(--radius); max-width:500px; margin-left:auto; margin-right:auto; }
.v4 .shield-circle { width:56px; height:56px; border-radius:50%; background:var(--accent); color:var(--accent-ink); display:flex; align-items:center; justify-content:center; font-family:var(--ff-display); font-size:24px; font-weight:900; flex-shrink:0; }
.v4 .shield-text { font-size:13px; color:var(--muted); line-height:1.5; text-align:left; }
.v4 .shield-text strong { color:var(--paper); }

/* ========== FOOTER ========== */
.v4 footer { border-top:1px solid var(--line); padding:32px 0; text-align:center; font-family:var(--ff-mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }

/* ========== CTA OVERRIDE ========== */
.v4 .btn-primary {
  background: var(--accent) !important;
  color: var(--accent-ink) !important;
  border: 1.5px solid var(--accent) !important;
  border-radius: var(--radius) !important;
  font-family: var(--ff-sans) !important;
  font-size: 15px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  padding: 18px 24px !important;
  width: auto !important;
  max-width: none !important;
  transition: transform .15s ease, box-shadow .2s ease !important;
  text-decoration: none !important;
}
.v4 .btn-primary:hover {
  transform: translate(-2px, -2px) !important;
  box-shadow: 6px 6px 0 0 var(--paper) !important;
  background-color: var(--accent) !important;
}
.v4 .delivers .btn-primary:hover { box-shadow: 6px 6px 0 0 var(--ink) !important; }

@media(max-width:480px){
  .v4 .btn-primary { width:100% !important; padding:16px 16px !important; font-size:13px !important; white-space:normal !important; text-align:center !important; }
  .v4 .hero h1 { font-size: clamp(32px, 9vw, 48px); }
  .v4 .countdown { flex-direction:column; gap:10px; align-items:flex-start; }
  .v4 .section-title { font-size: clamp(24px, 7vw, 48px); }
  .v4 .shield-row { flex-direction:column; text-align:center; }
  .v4 .shield-text { text-align:center; }
}
      `}} />

      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* ===== TOPBAR ===== */}
      <div className="topbar">
        <div className="wrap">
          <div className="brand"><span className="dot-accent" />SISTEMA FULLBODY</div>
          <div className="meta">
            <span>Protocolo v2.0</span>
            <span><span className="pulse" />Lanzamiento</span>
          </div>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-badge">
            <span className="num">+{ALUNOS}</span> entrenadores ya lo usan
          </div>

          <div className="hero-grid">
            <div>
              <h1>
                ¿Tus alumnos<br />
                <span className="accent">se van</span> antes<br />
                de <span className="stroke">3 meses?</span>
              </h1>

              <p className="hero-sub">
                El sistema que resuelve eso <strong>existe</strong>. Y cuesta menos que una <strong>hora de entrenamiento</strong>.
              </p>

              <div className="price-card">
                <div className="price-row">
                  <span className="price-tag">Lanzamiento</span>
                  <span className="price-old">{PRECO_REGULAR}</span>
                  <span className="price-new"><em>{PRECO_LANCAMENTO}</em></span>
                </div>

                <div className="hero-cta">
                  <CTAButton text={`Quiero el Sistema · ${PRECO_LANCAMENTO} →`} />
                  <div className="trust-row">
                    <span><span className="tick">✓</span> Garantía {GARANTIA_DIAS} días</span>
                    <span><span className="tick">✓</span> Descarga inmediata</span>
                    <span><span className="tick">✓</span> Pago seguro</span>
                  </div>
                </div>

                <div className="countdown">
                  <div className="cd-label">⏳ Precio termina en</div>
                  <div className="cd-blocks">
                    <div className="cd-block"><span className="num" data-cd="h">00</span><span className="unit">hrs</span></div>
                    <span className="cd-sep">:</span>
                    <div className="cd-block"><span className="num" data-cd="m">00</span><span className="unit">min</span></div>
                    <span className="cd-sep">:</span>
                    <div className="cd-block"><span className="num" data-cd="s">00</span><span className="unit">seg</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-visual">
              <div className="chip tl"><span className="dot-accent" />Sistema Fullbody</div>
              <img src="/mockup-produto.png" alt="Sistema Fullbody — Protocolo Completo" />
              <div className="chip br">6 piezas incluidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee">
        <div className="marquee-track">
          <span>FULLBODY<span className="dot" /></span>
          <span className="ghost">HIPERTROFIA</span>
          <span>RETENCIÓN<span className="dot" /></span>
          <span className="ghost">PERIODIZACIÓN</span>
          <span>FUERZA<span className="dot" /></span>
          <span className="ghost">PRESCRIPCIÓN</span>
          <span>FULLBODY<span className="dot" /></span>
          <span className="ghost">HIPERTROFIA</span>
          <span>RETENCIÓN<span className="dot" /></span>
          <span className="ghost">PERIODIZACIÓN</span>
          <span>FUERZA<span className="dot" /></span>
          <span className="ghost">PRESCRIPCIÓN</span>
        </div>
      </div>

      {/* ===== ENTREGÁVEIS ===== */}
      <section className="delivers">
        <div className="wrap">
          <span className="eyebrow">Lo que recibes hoy</span>
          <h2 className="section-title">
            No es un curso.<br />
            Es un sistema que{" "}
            <span style={{ background: "var(--accent)", padding: "0 8px" }}>vas a usar.</span>
          </h2>

          <div className="deliver-list">
            <div className="deliver">
              <div className="num">01</div>
              <div className="body">
                <h3>Guía Completa del Sistema Fullbody</h3>
                <p>Protocolo de 50 páginas con base científica. Aplicable desde el primer día.</p>
              </div>
              <div className="price"><span className="new">INCLUIDO</span></div>
            </div>
            <div className="deliver">
              <div className="num">02</div>
              <div className="body">
                <h3>Plantillas de Prescripción Editables</h3>
                <p>4 protocolos de 8 semanas en Excel. Adapta en minutos.</p>
                <div className="tags"><span className="tag-free">$15.000 → GRATIS</span></div>
              </div>
              <div className="price"><span className="old">$15.000</span><span className="new">GRATIS</span></div>
            </div>
            <div className="deliver">
              <div className="num">03</div>
              <div className="body">
                <h3>Guía Científica de Hipertrofia</h3>
                <p>Directrices actualizadas de la ciencia. Lenguaje directo.</p>
                <div className="tags"><span className="tag-free">$10.000 → GRATIS</span></div>
              </div>
              <div className="price"><span className="old">$10.000</span><span className="new">GRATIS</span></div>
            </div>
            <div className="deliver">
              <div className="num">04</div>
              <div className="body">
                <h3>Checklist + Protocolo de Periodización</h3>
                <p>Evaluación del alumno + 12 semanas de programación semana a semana.</p>
              </div>
              <div className="price"><span className="new">INCLUIDO</span></div>
            </div>
            <div className="deliver">
              <div className="num">05</div>
              <div className="body">
                <h3>Kit del Entrenador Profesional</h3>
                <p>3 fichas: evaluación inicial, seguimiento mensual y script de renovación.</p>
                <div className="tags"><span className="tag-top">Más valorado</span><span className="tag-free">$18.000 → GRATIS</span></div>
              </div>
              <div className="price"><span className="old">$18.000</span><span className="new">GRATIS</span></div>
            </div>
          </div>

          <div className="totalizer">
            <div className="totalizer-prices">
              <div className="col-val">
                <span className="label">Valor Total</span>
                <span className="value">{PRECO_TOTAL_STACK}</span>
              </div>
              <div className="col-now">
                <span className="label">Hoy solo</span>
                <span className="value">{PRECO_LANCAMENTO}</span>
              </div>
            </div>
            <div className="totalizer-cta">
              <span className="count"><b>+{ALUNOS}</b> entrenadores ya lo tienen</span>
              <CTAButton text={`Obtener el Sistema · ${PRECO_LANCAMENTO} →`} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTO ===== */}
      <section className="testi-section">
        <div className="wrap">
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <blockquote>
              &ldquo;¡Excelente! Lo compré y lo recomiendo sin dudar. Vale cada peso.&rdquo;
            </blockquote>
            <div className="testi-meta">
              <div className="avatar">R</div>
              <div>
                <span className="name">@rodrigueseduardo2</span><br />
                <small>🇧🇷 Brasil</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Oferta de Lanzamiento</span>
          <h2 className="section-title" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "16ch" }}>
            Empieza hoy.<br />
            <span style={{ color: "var(--accent)" }}>Tu alumno no espera.</span>
          </h2>

          <div style={{ marginTop: "32px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            <div className="final-price">
              <span className="old">{PRECO_REGULAR}</span>
              <span className="now">{PRECO_LANCAMENTO}</span>
              <span className="sub">{PRECO_USD} · pago único · acceso de por vida</span>
            </div>

            <div className="final-cta">
              <CTAButton text={`Obtener el Sistema · ${PRECO_LANCAMENTO} →`} />
            </div>

            <div className="final-trust">
              <span>🛡️ Garantía {GARANTIA_DIAS} días</span>
              <span><span className="dot" />Pago seguro</span>
              <span><span className="dot" />Descarga inmediata</span>
              <span><span className="dot" />Acceso de por vida</span>
            </div>

            <div className="shield-row">
              <div className="shield-circle">{GARANTIA_DIAS}</div>
              <div className="shield-text">
                Si no es para ti, reembolso completo en {GARANTIA_DIAS} días. <strong>Sin preguntas.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="wrap">
          Sistema Fullbody · Protocolo Completo para Entrenadores · © 2026
        </div>
      </footer>
    </div>
  )
}
