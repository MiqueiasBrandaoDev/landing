import CTAButton from "./CTAButton"
import CountdownTimer from "./CountdownTimer"
import { PRECO_LANCAMENTO, PRECO_REGULAR, PRECO_USD, GARANTIA_DIAS } from "@/lib/constants"

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
          Descarga el protocolo completo, las plantillas y el Kit del Entrenador —
          todo en minutos, directo en tu dispositivo.
        </p>

        {/* Countdown timer ao vivo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <CountdownTimer />
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
          <CTAButton text={`Obtener el Sistema · ${PRECO_LANCAMENTO} →`} />
        </div>

        {/* Garantia reforçada */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.82rem",
            marginBottom: "1.25rem",
          }}
        >
          🛡️ Garantía de {GARANTIA_DIAS} días. Si no es para ti, reembolso completo sin preguntas.
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
          <span>🛠️ Kit del Entrenador incluido</span>
          <span>📁 Acceso de por vida</span>
        </div>
      </div>
    </section>
  )
}
