import { ALUNOS } from "@/lib/constants"

const stats = [
  { numero: `${ALUNOS}`, label: "entrenadores formados" },
  { numero: "Brasil", label: "mercado de origen validado" },
  { numero: "7 días", label: "garantía total" },
]

export default function Credibilidade() {
  return (
    <section className="section">
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          Credibilidad
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          El método que ya formó a más de{" "}
          <span style={{ color: "var(--orange)" }}>{ALUNOS} entrenadores</span>
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: 540,
          }}
        >
          Validado por más de {ALUNOS} entrenadores en Brasil.
          Ahora disponible para el mercado hispanohablante.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--orange)",
                  marginBottom: "0.25rem",
                }}
              >
                {s.numero}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Early adopter positioning */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(255,107,0,0.25)",
            borderRadius: 12,
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              fontWeight: 600,
              marginBottom: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            Sé uno de los primeros entrenadores en Colombia
            <br />
            <span style={{ color: "var(--orange)" }}>con este sistema.</span>
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
            El método ya transformó {ALUNOS} carreras en Brasil.
            Ahora llega al mercado hispanohablante, con precio de lanzamiento
            y garantía total de 7 días.
          </p>
        </div>
      </div>
    </section>
  )
}
