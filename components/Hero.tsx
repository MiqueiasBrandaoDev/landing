import CTAButton from "./CTAButton"
import { PRECO_LANCAMENTO, PRECO_REGULAR, PRECO_USD, ALUNOS } from "@/lib/constants"

export default function Hero() {
  return (
    <section
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Glow */}
      <div
        className="glow"
        style={{
          width: 600,
          height: 600,
          background: "var(--orange-glow)",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container" style={{ textAlign: "center" }}>
        {/* Label */}
        <p className="label" style={{ marginBottom: "1.25rem" }}>
          Certificación Fullbody · +{ALUNOS} entrenadores
        </p>

        {/* Headline — DOR primeiro (Kennedy + Kusmich message match) */}
        <h1
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          ¿Tus alumnos se van{" "}
          <span style={{ color: "var(--orange)" }}>antes de los 3 meses?</span>
        </h1>

        {/* Subheadline — credencial como prova, não como abertura */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            color: "var(--text-muted)",
            maxWidth: 580,
            margin: "0 auto 0.75rem",
            lineHeight: 1.7,
          }}
        >
          No es falta de motivación de ellos. Es la rutina A/B/C que se vuelve
          monótona en 60 días.
        </p>
        <p
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
            color: "var(--text)",
            maxWidth: 560,
            margin: "0 auto 2rem",
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          El <strong style={{ color: "var(--orange)" }}>Sistema Fullbody</strong>{" "}
          resuelve exactamente eso — y puedes aplicarlo con tu próximo alumno,{" "}
          <strong>hoy</strong>.
        </p>

        {/* Mockup visual do produto */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { emoji: "📄", label: "Guía PDF 50 págs" },
            { emoji: "📊", label: "Plantillas editables" },
            { emoji: "🎓", label: "Certificado 20h" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "0.5rem 0.9rem",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Preço âncora */}
        <p style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
          <span
            style={{
              textDecoration: "line-through",
              color: "var(--text-muted)",
              marginRight: "0.5rem",
            }}
          >
            {PRECO_REGULAR}
          </span>
          <strong style={{ color: "var(--orange)", fontSize: "1.25rem" }}>
            SOLO {PRECO_LANCAMENTO}
          </strong>
          <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem", fontSize: "0.85rem" }}>
            {PRECO_USD}
          </span>
        </p>

        {/* CTA com preço — Kennedy: CTA confirma a decisão */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <CTAButton text={`Quiero el Sistema — ${PRECO_LANCAMENTO} →`} />
        </div>

        {/* Garantia logo abaixo do CTA — ICE #1 */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(255,107,0,0.06)",
            border: "1px solid rgba(255,107,0,0.2)",
            borderRadius: 6,
            padding: "0.4rem 0.9rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
          }}
        >
          <span>🛡️</span>
          <span>Garantía {String(7)} días — Reembolso completo, sin preguntas</span>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
            color: "var(--text-muted)",
            fontSize: "0.82rem",
          }}
        >
          <span>⚡ Descarga inmediata</span>
          <span>📁 Acceso de por vida</span>
          <span>🔒 Pago 100% seguro</span>
          <span>✅ +{ALUNOS} entrenadores</span>
        </div>
      </div>
    </section>
  )
}
