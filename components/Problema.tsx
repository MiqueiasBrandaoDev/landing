import CTAButton from "./CTAButton"
import { PRECO_LANCAMENTO } from "@/lib/constants"

export default function Problema() {
  const problemas = [
    "Tus alumnos tienen agendas cada vez más apretadas",
    "No pueden ir al gimnasio 5 días a la semana",
    "La rutina A/B/C se vuelve monótona en 60 días",
    "Sin resultados rápidos, se van antes de los 3 meses",
    "Pierdes contratos que ya estaban cerrados",
  ]

  return (
    <section className="section" style={{ background: "var(--bg-alt, #0d0d0d)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          El Problema
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1rem",
            maxWidth: 640,
          }}
        >
          El problema real de los entrenadores hoy
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: 560,
          }}
        >
          Tus alumnos no se van por falta de motivación. Se van porque la
          monotonía gana siempre.
        </p>

        <div className="card" style={{ maxWidth: 560 }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {problemas.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {/* aria-hidden: o ✗ é decorativo, o texto já comunica o problema */}
                <span aria-hidden="true" style={{ color: "var(--orange)", fontSize: "1.1rem", flexShrink: 0 }}>✗</span>
                <span style={{ color: "var(--text-muted)" }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.25rem 1.5rem",
            borderLeft: "3px solid var(--orange)",
            background: "var(--orange-subtle, rgba(255,107,0,0.06))",
            borderRadius: "0 8px 8px 0",
            maxWidth: 560,
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            El <strong>Sistema Fullbody</strong> resuelve exactamente eso. Puedes
            empezar a aplicarlo con tu próximo alumno,{" "}
            <strong style={{ color: "var(--orange)" }}>hoy</strong>.
          </p>
        </div>

        {/* CTA extra após problema — Kusmich: tráfego mobile não espera #6 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
          <CTAButton text={`Ver el Sistema Completo · ${PRECO_LANCAMENTO} →`} />
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
            🛡️ Garantía 7 días · Descarga inmediata
          </p>
        </div>
      </div>
    </section>
  )
}
