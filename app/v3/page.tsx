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

export default function PageV3() {
  useEffect(() => {
    function update() {
      const target = new Date()
      target.setHours(23, 59, 59, 999)
      let diff = target.getTime() - Date.now()
      if (diff < 0) diff = 0
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      document
        .querySelectorAll('[data-cd="h"]')
        .forEach((e) => (e.textContent = String(h).padStart(2, "0")))
      document
        .querySelectorAll('[data-cd="m"]')
        .forEach((e) => (e.textContent = String(m).padStart(2, "0")))
      document
        .querySelectorAll('[data-cd="s"]')
        .forEach((e) => (e.textContent = String(s).padStart(2, "0")))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div data-accent="orange" data-density="compact">
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ---------- Tokens ---------- */
:root {
  --ink: #0A0A0A;
  --ink-2: #141414;
  --ink-3: #1E1E1E;
  --line: #2A2A2A;
  --paper: #F5F3EE;
  --paper-2: #E9E6DE;
  --muted: #8C8A85;
  --muted-dark: #6E6C66;

  --accent: oklch(0.88 0.22 125);
  --accent-ink: #0A0A0A;
  --accent-dim: oklch(0.88 0.22 125 / 0.15);

  --pad-section: clamp(72px, 9vw, 140px);
  --gap: clamp(20px, 2.2vw, 32px);

  --radius: 6px;
  --radius-lg: 10px;

  --ff-display: 'Archivo Black', 'Archivo', system-ui, sans-serif;
  --ff-sans: 'Archivo', 'Inter', system-ui, sans-serif;
  --ff-mono: 'JetBrains Mono', ui-monospace, monospace;
}

[data-accent="orange"] {
  --accent: oklch(0.72 0.19 48);
  --accent-ink: #0A0A0A;
  --accent-dim: oklch(0.72 0.19 48 / 0.15);
}

[data-density="compact"] {
  --pad-section: clamp(56px, 6vw, 96px);
  --gap: 16px;
}
[data-density="airy"] {
  --pad-section: clamp(96px, 12vw, 180px);
  --gap: 36px;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }

body {
  background: var(--ink);
  color: var(--paper);
  font-family: var(--ff-sans);
  font-feature-settings: "ss01","cv11";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  line-height: 1.45;
  overflow-x: hidden;
}

::selection { background: var(--accent); color: var(--accent-ink); }

/* ---------- Layout ---------- */
.wrap { max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 56px); }
section { padding: var(--pad-section) 0; position: relative; }

.paper { background: var(--paper); color: var(--ink); }
.dark { background: var(--ink); color: var(--paper); }

/* ---------- Type ---------- */
.eyebrow {
  font-family: var(--ff-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.eyebrow::before {
  content: "";
  display: inline-block;
  width: 28px; height: 1px;
  background: currentColor;
  opacity: 0.6;
}
.paper .eyebrow { color: var(--muted-dark); }

h1, h2, h3, h4 { margin: 0; letter-spacing: -0.02em; }

.display {
  font-family: var(--ff-display);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
}

h2.section-title {
  font-family: var(--ff-display);
  font-size: clamp(40px, 5.4vw, 84px);
  line-height: 0.95;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  text-wrap: balance;
  margin-top: 24px;
}

.lede {
  font-size: clamp(18px, 1.6vw, 22px);
  color: var(--muted);
  max-width: 62ch;
  line-height: 1.5;
  text-wrap: pretty;
}
.paper .lede { color: var(--muted-dark); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 28px;
  font-family: var(--ff-sans);
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  border-radius: var(--radius);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, background .2s ease, color .2s ease, border-color .2s ease;
  line-height: 1;
  white-space: nowrap;
}
.btn-primary {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
  box-shadow: 0 0 0 0 var(--accent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 28px;
  font-family: var(--ff-sans);
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  border-radius: var(--radius);
  border: 1.5px solid var(--accent);
  cursor: pointer;
  transition: transform .15s ease, background .2s ease, color .2s ease, border-color .2s ease;
  line-height: 1;
  white-space: nowrap;
}
.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 0 var(--paper);
}
.paper .btn-primary:hover {
  box-shadow: 6px 6px 0 0 var(--ink);
}

.btn-ghost {
  background: transparent;
  color: var(--paper);
  border-color: var(--line);
}
.paper .btn-ghost { color: var(--ink); border-color: rgba(0,0,0,0.15); }

/* ---------- Top bar ---------- */
.topbar {
  border-bottom: 1px solid var(--line);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 14px 0;
  position: sticky;
  top: 0;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(8px);
  z-index: 50;
}
.topbar .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.topbar .brand {
  color: var(--paper);
  font-weight: 700;
  letter-spacing: 0.18em;
}
.topbar .brand .dot {
  display: inline-block;
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  transform: translateY(-1px);
}
.topbar .meta {
  display: flex;
  gap: 28px;
  align-items: center;
}
.topbar .meta span { display: inline-flex; align-items: center; gap: 8px; }
.topbar .pulse {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 var(--accent);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--accent); }
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
@media (max-width: 720px) {
  .topbar .meta span:first-child { display: none; }
}

/* ---------- HERO ---------- */
.hero {
  padding-top: clamp(48px, 6vw, 96px);
  padding-bottom: clamp(48px, 6vw, 96px);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 50% at 85% 20%, var(--accent-dim), transparent 70%),
    linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4));
  pointer-events: none;
}
.hero .wrap { position: relative; z-index: 1; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 100px;
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--paper);
}
.hero-badge .num { color: var(--accent); font-weight: 700; }

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
  margin-top: 36px;
}
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; }
}

.hero h1 {
  font-family: var(--ff-display);
  font-size: clamp(36px, 8vw, 120px);
  line-height: 0.88;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--paper);
  text-wrap: balance;
}
.hero h1 .accent { color: var(--accent); font-style: italic; }
.hero h1 .stroke {
  -webkit-text-stroke: 2px var(--paper);
  color: transparent;
}

.hero-sub {
  margin-top: 28px;
  font-size: clamp(18px, 1.55vw, 22px);
  color: var(--muted);
  max-width: 52ch;
  line-height: 1.45;
  text-wrap: pretty;
}
.hero-sub strong { color: var(--paper); font-weight: 700; }

/* Price block */
.price-card {
  margin-top: 36px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 28px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  display: grid;
  gap: 20px;
}
.price-row { display: flex; align-items: baseline; gap: 18px; flex-wrap: wrap; }
.price-old {
  font-family: var(--ff-mono);
  font-size: 16px;
  color: var(--muted);
  text-decoration: line-through;
  text-decoration-thickness: 2px;
}
.price-new {
  font-family: var(--ff-display);
  font-size: clamp(36px, 4.6vw, 64px);
  color: var(--paper);
  line-height: 1;
  letter-spacing: -0.03em;
}
.price-new em { color: var(--accent); font-style: normal; }
.price-tag {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 10px;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 4px;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.hero-cta .btn-primary { align-self: flex-start; font-size: 17px; padding: 22px 30px; }

.trust-row {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
.trust-row span { display: inline-flex; align-items: center; gap: 8px; }
.trust-row .tick {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-ink);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 9px;
  font-weight: 900;
}

/* Countdown */
.countdown {
  margin-top: 8px;
  padding: 18px 20px;
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  background: rgba(255,255,255,0.02);
}
.countdown-label {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: inline-flex; align-items: center; gap: 8px;
}
.countdown-blocks { display: flex; gap: 8px; align-items: center; }
.cd-block {
  background: var(--ink-3);
  border: 1px solid var(--line);
  padding: 10px 12px;
  min-width: 54px;
  text-align: center;
  border-radius: 4px;
  font-family: var(--ff-mono);
  font-weight: 700;
}
.cd-block .num {
  font-size: 22px;
  color: var(--paper);
  line-height: 1;
  display: block;
}
.cd-block .unit {
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 6px;
  display: block;
}
.cd-sep { color: var(--muted); font-family: var(--ff-mono); font-weight: 700; }

/* Product visual */
.product-visual {
  position: relative;
  aspect-ratio: 4/5;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background:
    radial-gradient(70% 70% at 50% 30%, rgba(255,255,255,0.05), transparent 70%),
    var(--ink-2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.25;
  pointer-events: none;
}
.product-visual img {
  max-width: 88%;
  max-height: 88%;
  object-fit: contain;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 40px 60px rgba(0,0,0,0.5));
}
.product-chip {
  position: absolute;
  z-index: 2;
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 12px;
  background: var(--ink);
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--paper);
  display: inline-flex; align-items: center; gap: 8px;
}
.product-chip.tl { top: 20px; left: 20px; }
.product-chip.br { bottom: 20px; right: 20px; color: var(--accent); border-color: var(--accent); }
.product-chip.tr { top: 20px; right: 20px; }
.product-chip .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

/* Marquee */
.marquee {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  padding: 22px 0;
  background: var(--ink-2);
}
.marquee-track {
  display: flex;
  gap: 60px;
  white-space: nowrap;
  animation: marquee 40s linear infinite;
  width: max-content;
  font-family: var(--ff-display);
  font-size: clamp(22px, 2.4vw, 34px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--paper);
  align-items: center;
}
.marquee-track span { display: inline-flex; align-items: center; gap: 60px; }
.marquee-track .dot {
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  display: inline-block;
}
.marquee-track .ghost { color: transparent; -webkit-text-stroke: 1.5px var(--muted); }
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ---------- Problem section ---------- */
.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 96px);
  margin-top: 72px;
  align-items: start;
}
@media (max-width: 860px) {
  .problem-grid { grid-template-columns: 1fr; }
}
.problem-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0; }
.problem-list li {
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  gap: 20px;
  padding: 22px 0;
  border-top: 1px solid rgba(0,0,0,0.1);
  font-size: clamp(17px, 1.4vw, 20px);
  font-weight: 500;
  color: var(--ink);
  line-height: 1.35;
}
.problem-list li:last-child { border-bottom: 1px solid rgba(0,0,0,0.1); }
.problem-list .x {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--accent);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 18px;
  font-weight: 900;
  font-family: var(--ff-display);
}
.problem-list .n {
  font-family: var(--ff-mono);
  font-size: 11px;
  color: var(--muted-dark);
  letter-spacing: 0.12em;
  margin-right: 8px;
}

.solution-callout {
  margin-top: 48px;
  padding: 36px;
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius-lg);
  display: grid;
  gap: 24px;
}
.solution-callout p {
  margin: 0;
  font-family: var(--ff-display);
  font-size: clamp(22px, 2.2vw, 32px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-wrap: balance;
}
.solution-callout p em { color: var(--accent); font-style: normal; }
.solution-callout .cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}
.solution-callout .cta-row .trust {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ---------- Benefits section (dark) ---------- */
.benefits-head { max-width: 860px; }
.benefits-grid {
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}
@media (max-width: 1000px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px)  { .benefits-grid { grid-template-columns: 1fr; } }

.benefit {
  padding: 36px 28px 40px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  display: grid;
  gap: 20px;
  align-content: start;
  position: relative;
  transition: background .2s ease;
}
.benefit:hover { background: var(--ink-2); }
.benefit .idx {
  font-family: var(--ff-mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.15em;
}
.benefit .check {
  width: 44px; height: 44px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-ink);
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 900;
  font-family: var(--ff-display);
  font-size: 22px;
}
.benefit h3 {
  font-family: var(--ff-display);
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--paper);
}
.benefit p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
}

/* ---------- Testimonials ---------- */
.testi-head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: end;
}
@media (max-width: 860px) { .testi-head { grid-template-columns: 1fr; } }

.testi-stat {
  text-align: right;
  border-left: 1px solid rgba(0,0,0,0.12);
  padding-left: 32px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@media (max-width: 860px) { .testi-stat { border-left: none; padding-left: 0; text-align: left; } }
.testi-stat .big {
  font-family: var(--ff-display);
  font-size: clamp(48px, 6vw, 80px);
  line-height: 0.9;
  letter-spacing: -0.04em;
}
.testi-stat .big em { color: var(--ink); font-style: normal; background: var(--accent); padding: 0 8px; }
.testi-stat .sub {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-dark);
  margin-top: 12px;
}

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 56px;
}
@media (max-width: 920px) { .testi-grid { grid-template-columns: 1fr; } }

.testi {
  background: var(--ink);
  color: var(--paper);
  padding: 32px 28px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  overflow: hidden;
}
.testi:nth-child(2) { background: var(--accent); color: var(--accent-ink); }
.testi:nth-child(2) .stars { color: var(--accent-ink); }
.testi:nth-child(2) .testi-meta .avatar { background: var(--ink); color: var(--accent); }
.testi:nth-child(2) .testi-meta small { color: var(--accent-ink); opacity: 0.7; }

.stars {
  display: flex;
  gap: 2px;
  color: var(--accent);
  font-size: 16px;
  letter-spacing: 2px;
}
.testi blockquote {
  margin: 0;
  font-size: 17px;
  line-height: 1.45;
  font-weight: 500;
  text-wrap: pretty;
  flex: 1;
}
.testi-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.testi:nth-child(2) .testi-meta { border-top-color: rgba(0,0,0,0.15); }
.testi-meta .avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-ink);
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--ff-display);
  font-size: 16px;
  font-weight: 900;
}
.testi-meta .meta-text { display: grid; gap: 2px; line-height: 1.2; }
.testi-meta .name { font-weight: 700; font-size: 14px; }
.testi-meta small { font-family: var(--ff-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--muted); text-transform: uppercase; }

.testi-coda {
  margin-top: 56px;
  padding: 36px;
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius-lg);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  align-items: center;
}
@media (max-width: 720px) { .testi-coda { grid-template-columns: 1fr; } }
.testi-coda .tag {
  font-family: var(--ff-display);
  font-size: clamp(40px, 5vw, 64px);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.035em;
}
.testi-coda .tag em { color: var(--accent); font-style: normal; }
.testi-coda p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.5; max-width: 52ch; }

/* ---------- Deliverables section (paper) ---------- */
.deliver-head { max-width: 960px; }

.deliver-list {
  margin-top: 56px;
  border-top: 1px solid rgba(0,0,0,0.1);
}
.deliver {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: clamp(20px, 3vw, 48px);
  padding: 28px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  align-items: center;
  transition: background .2s ease, padding .2s ease;
}
.deliver:hover { background: var(--paper-2); padding-left: 14px; padding-right: 14px; }
.deliver .num {
  font-family: var(--ff-display);
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--ink);
}
.deliver .body h3 {
  font-family: var(--ff-display);
  font-size: clamp(20px, 2vw, 28px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.05;
}
.deliver .body p {
  margin: 8px 0 0;
  color: var(--muted-dark);
  font-size: 15px;
  line-height: 1.5;
  max-width: 60ch;
}
.deliver .tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
.deliver .tag-free {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 8px;
  background: var(--ink);
  color: var(--accent);
  border-radius: 3px;
  font-weight: 700;
}
.deliver .tag-top {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 8px;
  background: var(--accent);
  color: var(--accent-ink);
  border-radius: 3px;
  font-weight: 700;
}
.deliver .price {
  font-family: var(--ff-mono);
  font-size: 13px;
  color: var(--muted-dark);
  text-align: right;
  white-space: nowrap;
}
.deliver .price .old { text-decoration: line-through; display: block; }
.deliver .price .new { color: var(--ink); font-weight: 700; display: block; margin-top: 4px; }
@media (max-width: 720px) {
  .deliver { grid-template-columns: 60px 1fr; }
  .deliver .price { grid-column: 2; text-align: left; }
}

.deliver-totalizer {
  margin-top: 40px;
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 720px) { .deliver-totalizer { grid-template-columns: 1fr; } }
.deliver-totalizer > div {
  padding: 36px;
  display: grid;
  gap: 8px;
  align-content: center;
}
.deliver-totalizer .col-value { border-right: 1px solid var(--line); }
@media (max-width: 720px) { .deliver-totalizer .col-value { border-right: none; border-bottom: 1px solid var(--line); } }
.deliver-totalizer .col-today { background: var(--accent); color: var(--accent-ink); }
.deliver-totalizer .label {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.deliver-totalizer .col-today .label { color: rgba(0,0,0,0.55); }
.deliver-totalizer .value {
  font-family: var(--ff-display);
  font-size: clamp(36px, 4.4vw, 56px);
  line-height: 1;
  letter-spacing: -0.035em;
}
.deliver-totalizer .cta-row {
  padding: 28px 36px;
  grid-column: 1 / -1;
  background: var(--ink-2);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--line);
}
.deliver-totalizer .cta-row .count {
  font-family: var(--ff-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
.deliver-totalizer .cta-row .count b { color: var(--accent); }

/* ---------- Credibility (dark) ---------- */
.cred-grid {
  margin-top: 72px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
@media (max-width: 720px) { .cred-grid { grid-template-columns: 1fr; } }
.cred-cell {
  padding: 44px 36px;
  display: grid;
  gap: 12px;
  align-content: center;
  border-right: 1px solid var(--line);
  position: relative;
}
.cred-cell:last-child { border-right: none; }
@media (max-width: 720px) {
  .cred-cell { border-right: none; border-bottom: 1px solid var(--line); }
  .cred-cell:last-child { border-bottom: none; }
}
.cred-cell .num {
  font-family: var(--ff-display);
  font-size: clamp(56px, 7vw, 96px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--paper);
}
.cred-cell:nth-child(2) .num { color: var(--accent); }
.cred-cell .lbl {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  max-width: 24ch;
}

.cred-closer {
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: end;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}
@media (max-width: 720px) { .cred-closer { grid-template-columns: 1fr; } }
.cred-closer h3 {
  font-family: var(--ff-display);
  font-size: clamp(32px, 3.8vw, 56px);
  line-height: 0.95;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  text-wrap: balance;
  max-width: 18ch;
}
.cred-closer p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.5; max-width: 52ch; }

/* ---------- Guarantee ---------- */
.guarantee {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(32px, 5vw, 72px);
  margin-top: 48px;
  align-items: center;
}
@media (max-width: 720px) { .guarantee { grid-template-columns: 1fr; justify-items: center; text-align: center; } }
.shield {
  width: clamp(180px, 22vw, 280px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-ink);
  display: grid;
  place-items: center;
  text-align: center;
  padding: 36px;
  position: relative;
  font-family: var(--ff-display);
  text-transform: uppercase;
}
.shield::before {
  content: "";
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1.5px dashed var(--accent);
  opacity: 0.6;
  animation: spin 40s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.shield .big { font-size: clamp(56px, 7vw, 88px); line-height: 0.9; letter-spacing: -0.04em; }
.shield .small { font-size: 14px; letter-spacing: 0.1em; margin-top: 4px; font-family: var(--ff-mono); font-weight: 700; }

.guarantee-copy h2 { margin-bottom: 20px; }
.guarantee-copy p {
  color: var(--muted-dark);
  font-size: clamp(17px, 1.3vw, 19px);
  line-height: 1.55;
  max-width: 58ch;
  margin: 0 0 12px;
}
.guarantee-copy p strong { color: var(--ink); }

/* ---------- FAQ ---------- */
.faq-grid {
  margin-top: 56px;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--line);
}
.faq {
  border-bottom: 1px solid var(--line);
  padding: 28px 0;
  cursor: pointer;
}
.faq summary {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  font-family: var(--ff-display);
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--paper);
}
.faq summary::-webkit-details-marker { display: none; }
.faq .plus {
  width: 40px; height: 40px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--accent);
  font-size: 22px;
  font-weight: 300;
  transition: transform .25s ease, background .2s ease;
  font-family: var(--ff-sans);
}
.faq[open] .plus { transform: rotate(45deg); background: var(--accent); color: var(--accent-ink); }
.faq .answer {
  margin-top: 20px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.55;
  max-width: 64ch;
}

/* ---------- Final offer ---------- */
.final {
  background: var(--ink);
  color: var(--paper);
  position: relative;
  overflow: hidden;
}
.final::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(50% 60% at 50% 10%, var(--accent-dim), transparent 60%);
  pointer-events: none;
}
.final .wrap { position: relative; z-index: 1; }

.final-head { text-align: center; }
.final-head h2 { margin-left: auto; margin-right: auto; max-width: 18ch; }

.final-card {
  margin-top: 56px;
  background: var(--ink-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 48px;
  display: grid;
  gap: 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 560px) { .final-card { padding: 32px 24px; } }

.final-price {
  display: grid;
  gap: 6px;
  text-align: center;
}
.final-price .old {
  font-family: var(--ff-mono);
  font-size: 16px;
  color: var(--muted);
  text-decoration: line-through;
  text-decoration-thickness: 2px;
}
.final-price .new {
  font-family: var(--ff-display);
  font-size: clamp(56px, 8vw, 104px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--accent);
}
.final-price .sub {
  font-family: var(--ff-mono);
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 8px;
}

.final-cta { display: flex; justify-content: center; }
.final-cta .btn-primary { font-size: 18px; padding: 24px 40px; }

.final-trust {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
.final-trust span { display: inline-flex; align-items: center; gap: 8px; }
.final-trust .dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }

.ps {
  margin-top: 48px;
  padding: 28px;
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 1.55;
  color: var(--muted);
}
.ps strong { color: var(--paper); font-weight: 700; }
.ps em { color: var(--accent); font-style: normal; font-weight: 700; }

/* ---------- Footer ---------- */
footer {
  border-top: 1px solid var(--line);
  padding: 48px 0 32px;
  background: var(--ink);
}
footer .wrap {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  align-items: center;
}
@media (max-width: 720px) { footer .wrap { grid-template-columns: 1fr; text-align: left; } }
footer .brand {
  font-family: var(--ff-display);
  font-size: 16px;
  letter-spacing: 0.1em;
  color: var(--paper);
  text-transform: uppercase;
}
footer .brand .accent { color: var(--accent); }
footer .tag {
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--muted);
  text-transform: uppercase;
}
footer .legal {
  display: flex; gap: 20px;
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
footer .legal a { color: var(--muted); text-decoration: none; }
footer .legal a:hover { color: var(--accent); }

/* ---------- MOBILE-FIRST OPTIMIZATION ---------- */
@media (max-width: 480px) {
  .hero h1 { font-size: clamp(32px, 9vw, 48px); }
  .hero-sub { font-size: 16px; }
  .price-card { padding: 20px; }
  .price-new { font-size: clamp(28px, 7vw, 64px); }
  .cd-block { min-width: 44px; padding: 8px; }
  .cd-block .num { font-size: 18px; }
  .btn { width: 100%; padding: 18px 20px; font-size: 14px; }
  .btn-primary { width: 100%; padding: 18px 20px; font-size: 14px; }
  .benefit { padding: 28px 20px 32px; }
  .deliver { gap: 12px; }
  .deliver .num { font-size: clamp(28px, 7vw, 64px); }
  .testi blockquote { font-size: 15px; }
  .final-price .new { font-size: clamp(40px, 10vw, 104px); }
  .ps { padding: 20px; font-size: 14px; }
  section { padding: clamp(48px, 8vw, 96px) 0; }
  h2.section-title { font-size: clamp(28px, 7vw, 84px); }
  .solution-callout { padding: 24px; }
  .solution-callout p { font-size: clamp(18px, 4.5vw, 32px); }
  .shield { width: clamp(140px, 35vw, 280px); }
  .cred-closer h3 { font-size: clamp(24px, 6vw, 56px); }
  .countdown { flex-direction: column; gap: 12px; align-items: flex-start; }
  .final-card { padding: 24px 16px; }
  .product-visual { aspect-ratio: 1; }
  .hero-cta .btn-primary { align-self: stretch; }
}
`,
        }}
      />

      {/* ====================== TOP BAR ====================== */}
      <div className="topbar">
        <div className="wrap">
          <div className="brand">
            <span className="dot" />
            EDUCACION FISICA DEL CERO
          </div>
          <div className="meta">
            <span>Sistema Fullbody &middot; v2.0</span>
            <span>
              <span className="pulse" />
              Lanzamiento activo
            </span>
          </div>
        </div>
      </div>

      {/* ====================== HERO ====================== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-badge">
            <span className="num">+{ALUNOS}</span> entrenadores ya lo usan
          </div>

          <div className="hero-grid">
            <div>
              <h1>
                &iquest;Tus alumnos
                <br />
                <span className="accent">se van</span> antes
                <br />
                de <span className="stroke">3 meses?</span>
              </h1>

              <p className="hero-sub">
                El sistema que resuelve eso <strong>existe</strong>. Y cuesta
                menos que una <strong>hora de entrenamiento</strong>.
              </p>

              <div className="price-card">
                <div className="price-row">
                  <span className="price-tag">Lanzamiento</span>
                  <span className="price-old">{PRECO_REGULAR}</span>
                  <span className="price-new">
                    <em>{PRECO_LANCAMENTO}</em>
                  </span>
                </div>

                <div className="hero-cta">
                  <CTAButton
                    text={`Quiero el Sistema \u00b7 ${PRECO_LANCAMENTO} \u2192`}
                  />
                  <div className="trust-row">
                    <span>
                      <span className="tick">{"\u2713"}</span> Garant&iacute;a{" "}
                      {GARANTIA_DIAS} d&iacute;as
                    </span>
                    <span>
                      <span className="tick">{"\u2713"}</span> Descarga inmediata
                    </span>
                    <span>
                      <span className="tick">{"\u2713"}</span> Pago seguro
                    </span>
                  </div>
                </div>

                <div className="countdown">
                  <div className="countdown-label">
                    {"\u23F3"} Precio de lanzamiento termina en
                  </div>
                  <div className="countdown-blocks" id="cd">
                    <div className="cd-block">
                      <span className="num" data-cd="h">
                        00
                      </span>
                      <span className="unit">horas</span>
                    </div>
                    <span className="cd-sep">:</span>
                    <div className="cd-block">
                      <span className="num" data-cd="m">
                        00
                      </span>
                      <span className="unit">min</span>
                    </div>
                    <span className="cd-sep">:</span>
                    <div className="cd-block">
                      <span className="num" data-cd="s">
                        00
                      </span>
                      <span className="unit">seg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-visual">
              <div className="product-chip tl">
                <span className="dot" />
                Sistema Fullbody
              </div>
              <div className="product-chip tr">v.2026</div>
              <img
                src="/mockup-produto.png"
                alt="Sistema Fullbody — Gu&iacute;a completa, plantillas, Kit del Entrenador y m&aacute;s"
              />
              <div className="product-chip br">6 piezas incluidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== MARQUEE ====================== */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            FULLBODY
            <span className="dot" />
          </span>
          <span className="ghost">HIPERTROFIA</span>
          <span>
            FUERZA
            <span className="dot" />
          </span>
          <span className="ghost">P&Eacute;RDIDA DE GRASA</span>
          <span>
            RETENCI&Oacute;N
            <span className="dot" />
          </span>
          <span className="ghost">PERIODIZACI&Oacute;N</span>
          <span>
            PRESCRIPCI&Oacute;N
            <span className="dot" />
          </span>
          <span className="ghost">EVALUACI&Oacute;N</span>
          {/* duplicate for seamless loop */}
          <span>
            FULLBODY
            <span className="dot" />
          </span>
          <span className="ghost">HIPERTROFIA</span>
          <span>
            FUERZA
            <span className="dot" />
          </span>
          <span className="ghost">P&Eacute;RDIDA DE GRASA</span>
          <span>
            RETENCI&Oacute;N
            <span className="dot" />
          </span>
          <span className="ghost">PERIODIZACI&Oacute;N</span>
          <span>
            PRESCRIPCI&Oacute;N
            <span className="dot" />
          </span>
          <span className="ghost">EVALUACI&Oacute;N</span>
        </div>
      </div>

      {/* ====================== PROBLEM ====================== */}
      <section className="paper">
        <div className="wrap">
          <span className="eyebrow">El Problema</span>
          <div className="problem-grid">
            <div>
              <h2 className="section-title">
                El problema
                <br />
                real de los
                <br />
                entrenadores hoy
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Tus alumnos no se van por falta de motivaci&oacute;n.
                <br />
                <strong style={{ color: "var(--ink)" }}>
                  Se van porque la monoton&iacute;a gana siempre.
                </strong>
              </p>
            </div>
            <ul className="problem-list">
              <li>
                <span className="x">{"\u2717"}</span>
                <span>
                  <span className="n">01</span>Tus alumnos tienen agendas cada
                  vez m&aacute;s apretadas
                </span>
              </li>
              <li>
                <span className="x">{"\u2717"}</span>
                <span>
                  <span className="n">02</span>No pueden ir al gimnasio 5
                  d&iacute;as a la semana
                </span>
              </li>
              <li>
                <span className="x">{"\u2717"}</span>
                <span>
                  <span className="n">03</span>La rutina A/B/C se vuelve
                  mon&oacute;tona en 60 d&iacute;as
                </span>
              </li>
              <li>
                <span className="x">{"\u2717"}</span>
                <span>
                  <span className="n">04</span>Sin resultados r&aacute;pidos, se
                  van antes de los 3 meses
                </span>
              </li>
              <li>
                <span className="x">{"\u2717"}</span>
                <span>
                  <span className="n">05</span>Pierdes contratos que ya estaban
                  cerrados
                </span>
              </li>
            </ul>
          </div>

          <div className="solution-callout">
            <p>
              El <em>Sistema Fullbody</em> resuelve exactamente eso. Puedes
              empezar a aplicarlo con tu pr&oacute;ximo alumno, <em>hoy</em>.
            </p>
            <div className="cta-row">
              <CTAButton
                text={`Ver el Sistema Completo \u00b7 ${PRECO_LANCAMENTO} \u2192`}
              />
              <span className="trust">
                {"\uD83D\uDEE1\uFE0F"} Garant&iacute;a {GARANTIA_DIAS}{" "}
                d&iacute;as &middot; Descarga inmediata
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BENEFITS ====================== */}
      <section className="dark">
        <div className="wrap">
          <div className="benefits-head">
            <span className="eyebrow">Por qu&eacute; funciona</span>
            <h2 className="section-title">
              Alumnos que
              <br />
              se quedan. Resultados
              <br />
              que se ven.{" "}
              <span style={{ color: "var(--accent)" }}>Un solo sistema.</span>
            </h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit">
              <span className="idx">01 / 04</span>
              <span className="check">{"\u2713"}</span>
              <h3>
                Alumnos que
                <br />
                duran m&aacute;s
                <br />
                de 3 meses
              </h3>
              <p>
                Rutinas que evolucionan semana a semana. Sin monoton&iacute;a,
                sin perder el contrato.
              </p>
            </div>
            <div className="benefit">
              <span className="idx">02 / 04</span>
              <span className="check">{"\u2713"}</span>
              <h3>
                Un sistema
                <br />
                para cualquier
                <br />
                alumno
              </h3>
              <p>
                Del principiante al atleta avanzado. Una prescripci&oacute;n,
                m&uacute;ltiples adaptaciones. Menos tiempo preparando,
                m&aacute;s tiempo entrenando.
              </p>
            </div>
            <div className="benefit">
              <span className="idx">03 / 04</span>
              <span className="check">{"\u2713"}</span>
              <h3>
                Hipertrofia, fuerza
                <br />
                y p&eacute;rdida de grasa
                <br />
                en el mismo protocolo
              </h3>
              <p>
                El Fullbody trabaja todos los objetivos en cada sesi&oacute;n.
                Base cient&iacute;fica real, no intuici&oacute;n.
              </p>
            </div>
            <div className="benefit">
              <span className="idx">04 / 04</span>
              <span className="check">{"\u2713"}</span>
              <h3>
                El m&eacute;todo
                <br />
                que van a querer
                <br />
                seguir haciendo
              </h3>
              <p>
                No es una rutina m&aacute;s. Es un sistema que se adapta y que
                ellos mismos piden repetir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="paper">
        <div className="wrap">
          <span className="eyebrow">Lo que dicen en Brasil</span>
          <div className="testi-head">
            <div>
              <h2 className="section-title">
                El m&eacute;todo que
                <br />
                ya transform&oacute;
                <br />
                {ALUNOS} entrenadores.
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Validado en Brasil. Ahora disponible en espa&ntilde;ol. Los
                primeros entrenadores colombianos ya est&aacute;n
                adopt&aacute;ndolo.
              </p>
            </div>
            <div className="testi-stat">
              <div className="big">
                <em>+40K</em>
              </div>
              <div className="sub">entrenadores validaron el sistema</div>
            </div>
          </div>

          <div className="testi-grid">
            <div className="testi">
              <div className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &quot;Cu&aacute;nto am&eacute; este contenido. Material
                excelente, f&aacute;cil de aprender, din&aacute;mico,
                simplemente incre&iacute;ble. Estoy encantada y agradecida por
                haber creado algo tan excepcional.&quot;
              </blockquote>
              <div className="testi-meta">
                <div className="avatar">A</div>
                <div className="meta-text">
                  <span className="name">Personal Trainer</span>
                  <small>{"\uD83C\uDDE7\uD83C\uDDF7"} Brasil</small>
                </div>
              </div>
            </div>
            <div className="testi">
              <div className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &quot;Muy bueno. Lo adquir&iacute; y me est&aacute; ayudando
                much&iacute;simo en el d&iacute;a a d&iacute;a con mis
                alumnos.&quot;
              </blockquote>
              <div className="testi-meta">
                <div className="avatar">S</div>
                <div className="meta-text">
                  <span className="name">@santino_personal</span>
                  <small>{"\uD83C\uDDE7\uD83C\uDDF7"} Brasil</small>
                </div>
              </div>
            </div>
            <div className="testi">
              <div className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &quot;&iexcl;Excelente! Lo compr&eacute; y lo recomiendo sin
                dudar. Vale cada peso.&quot;
              </blockquote>
              <div className="testi-meta">
                <div className="avatar">R</div>
                <div className="meta-text">
                  <span className="name">@rodrigueseduardo2</span>
                  <small>{"\uD83C\uDDE7\uD83C\uDDF7"} Brasil</small>
                </div>
              </div>
            </div>
          </div>

          <div className="testi-coda">
            <div className="tag">
              <em>Colombia</em> es el
              <br />
              siguiente.
            </div>
            <p>
              Mientras tu competencia sigue con la misma rutina de siempre,
              t&uacute; puedes llegar primero con el sistema que ya
              demostr&oacute; retener alumnos en el mercado m&aacute;s
              competitivo de Latinoam&eacute;rica.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== DELIVERABLES ====================== */}
      <section
        className="paper"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="wrap">
          <span className="eyebrow">Lo que recibes hoy</span>
          <div className="deliver-head">
            <h2 className="section-title">
              No es un curso que vas a ver.
              <br />
              Es un sistema que{" "}
              <span
                style={{ background: "var(--accent)", padding: "0 10px" }}
              >
                vas a usar.
              </span>
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Acceso inmediato tras la compra. Sin plataforma, sin
              contrase&ntilde;a.
            </p>
          </div>

          <div className="deliver-list">
            <div className="deliver">
              <div className="num">01</div>
              <div className="body">
                <h3>Gu&iacute;a Completa del Sistema Fullbody</h3>
                <p>
                  Todo lo que necesitas para prescribir Fullbody con base
                  cient&iacute;fica. Aplicable desde el primer d&iacute;a.
                </p>
              </div>
              <div className="price">
                <span className="new">INCLUIDO</span>
              </div>
            </div>
            <div className="deliver">
              <div className="num">02</div>
              <div className="body">
                <h3>Plantillas de Prescripci&oacute;n Editables</h3>
                <p>
                  Listos para entregar a tu alumno ma&ntilde;ana. Google Sheets /
                  Excel. Adapta en minutos.
                </p>
                <div className="tags">
                  <span className="tag-free">
                    $15.000 COP &rarr; GRATIS
                  </span>
                </div>
              </div>
              <div className="price">
                <span className="old">$15.000</span>
                <span className="new">GRATIS</span>
              </div>
            </div>
            <div className="deliver">
              <div className="num">03</div>
              <div className="body">
                <h3>Gu&iacute;a Cient&iacute;fica de Hipertrofia</h3>
                <p>
                  Directrices actualizadas de la ciencia aplicadas a la
                  pr&aacute;ctica. Lenguaje directo, sin relleno.
                </p>
                <div className="tags">
                  <span className="tag-free">
                    $10.000 COP &rarr; GRATIS
                  </span>
                </div>
              </div>
              <div className="price">
                <span className="old">$10.000</span>
                <span className="new">GRATIS</span>
              </div>
            </div>
            <div className="deliver">
              <div className="num">04</div>
              <div className="body">
                <h3>Checklist de Evaluaci&oacute;n del Alumno</h3>
                <p>
                  Eval&uacute;a a cada alumno antes de prescribir. Sin
                  improvisaci&oacute;n.
                </p>
              </div>
              <div className="price">
                <span className="new">INCLUIDO</span>
              </div>
            </div>
            <div className="deliver">
              <div className="num">05</div>
              <div className="body">
                <h3>
                  Protocolo de Periodizaci&oacute;n Semana a Semana
                </h3>
                <p>
                  Meses de programaci&oacute;n Fullbody sin repetir la misma
                  rutina dos veces.
                </p>
              </div>
              <div className="price">
                <span className="new">INCLUIDO</span>
              </div>
            </div>
            <div className="deliver">
              <div className="num">06</div>
              <div className="body">
                <h3>Kit del Entrenador Profesional</h3>
                <p>
                  3 fichas que usas CADA SEMANA: evaluaci&oacute;n inicial,
                  seguimiento mensual y script de renovaci&oacute;n para cuando
                  el alumno quiere irse.
                </p>
                <div className="tags">
                  <span className="tag-top">M&aacute;s valorado</span>
                  <span className="tag-free">
                    $18.000 COP &rarr; GRATIS
                  </span>
                </div>
              </div>
              <div className="price">
                <span className="old">$18.000</span>
                <span className="new">GRATIS</span>
              </div>
            </div>
          </div>

          <div className="deliver-totalizer">
            <div className="col-value">
              <span className="label">Valor Total</span>
              <span className="value">{PRECO_TOTAL_STACK}</span>
            </div>
            <div className="col-today">
              <span className="label">Hoy solo</span>
              <span className="value">{PRECO_LANCAMENTO}</span>
            </div>
            <div className="cta-row">
              <span className="count">
                <b>+{ALUNOS}</b> entrenadores ya lo tienen
              </span>
              <CTAButton
                text={`Obtener el Sistema \u00b7 ${PRECO_LANCAMENTO} \u2192`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CREDIBILITY ====================== */}
      <section className="dark">
        <div className="wrap">
          <span className="eyebrow">Credibilidad</span>
          <h2 className="section-title" style={{ maxWidth: "18ch" }}>
            El m&eacute;todo que ya form&oacute;
            <br />
            a m&aacute;s de{" "}
            <span style={{ color: "var(--accent)" }}>+{ALUNOS}</span>{" "}
            entrenadores
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Validado por m&aacute;s de {ALUNOS} entrenadores en Brasil. Ahora
            disponible para el mercado hispanohablante.
          </p>

          <div className="cred-grid">
            <div className="cred-cell">
              <span className="num">40K+</span>
              <span className="lbl">Entrenadores formados</span>
            </div>
            <div className="cred-cell">
              <span className="num">BR</span>
              <span className="lbl">Mercado de origen validado</span>
            </div>
            <div className="cred-cell">
              <span className="num">{GARANTIA_DIAS}d</span>
              <span className="lbl">Garant&iacute;a total</span>
            </div>
          </div>

          <div className="cred-closer">
            <h3>
              S&eacute; uno de los primeros entrenadores en Colombia con este
              sistema.
            </h3>
            <p>
              El m&eacute;todo ya transform&oacute; {ALUNOS} carreras en Brasil.
              Ahora llega al mercado hispanohablante, con precio de lanzamiento
              y garant&iacute;a total de {GARANTIA_DIAS} d&iacute;as.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== GUARANTEE ====================== */}
      <section className="paper">
        <div className="wrap">
          <span className="eyebrow">Garant&iacute;a Total</span>
          <div className="guarantee">
            <div className="shield">
              <div>
                <div className="big">{GARANTIA_DIAS}</div>
                <div className="small">
                  D&iacute;as &middot; Garant&iacute;a
                </div>
              </div>
            </div>
            <div className="guarantee-copy">
              <h2 className="section-title">
                {GARANTIA_DIAS} d&iacute;as de garant&iacute;a.
                <br />
                Sin preguntas.
              </h2>
              <p>
                Descarga el material, apl&iacute;calo con tu pr&oacute;ximo
                alumno. Tienes {GARANTIA_DIAS} d&iacute;as para verificar que el
                Sistema Fullbody transforma c&oacute;mo prescriben tus
                entrenamientos.
              </p>
              <p>
                Si no es para ti, solicita el reembolso.{" "}
                <strong>
                  Devoluci&oacute;n completa, sin cuestionamientos.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FAQ ====================== */}
      <section className="dark">
        <div className="wrap">
          <span className="eyebrow">Preguntas Frecuentes</span>
          <h2 className="section-title">
            Tus dudas,
            <br />
            respondidas
          </h2>

          <div className="faq-grid">
            <details className="faq">
              <summary>
                &iquest;C&oacute;mo recibo el material?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Al confirmar tu compra, recibes acceso inmediato para descargar
                todos los archivos. Sin plataforma, sin contrase&ntilde;a.
                Directo al dispositivo.
              </div>
            </details>
            <details className="faq">
              <summary>
                &iquest;Necesito experiencia previa?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                No. El protocolo est&aacute; dise&ntilde;ado para profesionales
                en cualquier etapa, desde reci&eacute;n graduados hasta
                entrenadores con a&ntilde;os de experiencia.
              </div>
            </details>
            <details className="faq">
              <summary>
                &iquest;Y si no me funciona?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Tienes {GARANTIA_DIAS} d&iacute;as de garant&iacute;a total. Si
                no es para ti por cualquier raz&oacute;n, solicitas el reembolso
                y te devolvemos el 100% sin preguntas.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ====================== FINAL OFFER ====================== */}
      <section className="final">
        <div className="wrap">
          <div className="final-head">
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Oferta de Lanzamiento
            </span>
            <h2 className="section-title">
              Empieza hoy.
              <br />
              Tu pr&oacute;ximo alumno
              <br />
              <span style={{ color: "var(--accent)" }}>no espera.</span>
            </h2>
            <p className="lede" style={{ margin: "24px auto 0" }}>
              Descarga el protocolo completo, las plantillas y el Kit del
              Entrenador — todo en minutos, directo en tu dispositivo.
            </p>
          </div>

          <div className="final-card">
            <div
              className="countdown"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <div className="countdown-label">
                {"\u23F3"} Precio de lanzamiento termina en
              </div>
              <div className="countdown-blocks">
                <div className="cd-block">
                  <span className="num" data-cd="h">
                    00
                  </span>
                  <span className="unit">horas</span>
                </div>
                <span className="cd-sep">:</span>
                <div className="cd-block">
                  <span className="num" data-cd="m">
                    00
                  </span>
                  <span className="unit">min</span>
                </div>
                <span className="cd-sep">:</span>
                <div className="cd-block">
                  <span className="num" data-cd="s">
                    00
                  </span>
                  <span className="unit">seg</span>
                </div>
              </div>
            </div>

            <div className="final-price">
              <span className="old">{PRECO_REGULAR}</span>
              <span className="new">{PRECO_LANCAMENTO}</span>
              <span className="sub">
                {PRECO_USD} &middot; pago &uacute;nico &middot; acceso de por
                vida
              </span>
            </div>

            <div className="final-cta">
              <CTAButton
                text={`Obtener el Sistema \u00b7 ${PRECO_LANCAMENTO} \u2192`}
              />
            </div>

            <div className="final-trust">
              <span>
                {"\uD83D\uDEE1\uFE0F"} Garant&iacute;a {GARANTIA_DIAS}{" "}
                d&iacute;as
              </span>
              <span>
                <span className="dot" />
                Pago 100% seguro
              </span>
              <span>
                <span className="dot" />
                Descarga inmediata
              </span>
              <span>
                <span className="dot" />
                Kit del Entrenador incluido
              </span>
              <span>
                <span className="dot" />
                Acceso de por vida
              </span>
            </div>
          </div>

          <div className="ps">
            <strong>P.D.:</strong> Recuerda: el precio de lanzamiento es{" "}
            <em>{PRECO_LANCAMENTO}</em> y la garant&iacute;a de {GARANTIA_DIAS}{" "}
            d&iacute;as significa <em>cero riesgo</em> para ti. Descarga en
            minutos, directo al dispositivo. Precio v&aacute;lido hasta{" "}
            <strong>{OFERTA_VALIDA_ATE}</strong>.
          </div>
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer>
        <div className="wrap">
          <div className="brand">
            EDUCACI&Oacute;N F&Iacute;SICA{" "}
            <span className="accent">DEL CERO</span>
          </div>
          <div className="tag">
            Sistema Fullbody &middot; Protocolo Completo para Entrenadores
            &middot; &copy; 2026
          </div>
          <div className="legal">
            <a href="#">Privacidad</a>
            <a href="#">T&eacute;rminos</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
