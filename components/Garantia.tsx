import { GARANTIA_DIAS } from "@/lib/constants"

export default function Garantia() {
  return (
    <section className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="container" style={{ maxWidth: 600 }}>
        <div
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            border: "1px solid var(--orange-border)",
            borderRadius: 16,
            background: "var(--orange-subtle)",
          }}
        >
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🛡️</div>
          <p className="label" style={{ marginBottom: "0.75rem" }}>
            Garantía Total
          </p>
          <h2
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            {GARANTIA_DIAS} Días de Garantía. Sin Preguntas.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            Descarga el material, aplícalo con tu próximo alumno. Tienes{" "}
            {GARANTIA_DIAS} días para verificar que el Sistema Fullbody
            transforma cómo prescriben tus entrenamientos.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Si no es para ti, solicita el reembolso.{" "}
            <strong style={{ color: "var(--text)" }}>
              Devolución completa, sin cuestionamientos.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}
