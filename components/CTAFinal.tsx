import CTAButton from "./CTAButton"
import { PRECO_LANCAMENTO, PRECO_REGULAR, PRECO_USD, OFERTA_VALIDA_ATE, GARANTIA_DIAS } from "@/lib/constants"

export default function CTAFinal() {
  return (
    <section
      className="section"
      style={{
        background: "var(--bg-alt, #0d0d0d)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        className="glow"
        style={{
          width: 700,
          height: 400,
          background: "var(--orange-glow)",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container" style={{ maxWidth: 680 }}>
        <p className="label" style={{ marginBottom: "1rem" }}>
          Oferta de Lanzamiento
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Empieza hoy.
          <br />
          <span style={{ color: "var(--orange)" }}>Tu próximo alumno no espera.</span>
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Descarga el protocolo completo, las plantillas y el certificado —
          todo en minutos, directo en tu dispositivo.
        </p>

        {/* Urgência real com data — Kennedy #8 */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,107,0,0.1)",
            border: "1px solid rgba(255,107,0,0.3)",
            borderRadius: 6,
            padding: "0.4rem 1rem",
            fontSize: "0.82rem",
            color: "var(--orange)",
            fontWeight: 600,
            marginBottom: "1.5rem",
            letterSpacing: "0.03em",
          }}
        >
          ⏳ Precio de lanzamiento válido hasta {OFERTA_VALIDA_ATE}
        </div>

        {/* Preço */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              textDecoration: "line-through",
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              marginBottom: "0.25rem",
            }}
          >
            {PRECO_REGULAR}
          </p>
          <p
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: 700,
              color: "var(--orange)",
              letterSpacing: "-0.02em",
              marginBottom: "0.25rem",
              lineHeight: 1,
            }}
          >
            {PRECO_LANCAMENTO}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            {PRECO_USD} · pago único · acceso de por vida
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
          <CTAButton text={`Obtener el Sistema — ${PRECO_LANCAMENTO} →`} />
        </div>

        {/* Garantia reforçada */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.82rem",
            marginBottom: "1.25rem",
          }}
        >
          🛡️ Garantía de {GARANTIA_DIAS} días — si no es para ti, reembolso completo sin preguntas.
        </p>

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
          <span>🔒 Pago 100% seguro</span>
          <span>⚡ Descarga inmediata</span>
          <span>🎓 Certificado incluido</span>
          <span>📁 Acceso de por vida</span>
        </div>
      </div>
    </section>
  )
}
