const depoimentos = [
  {
    texto:
      "Cuánto amé este contenido. Material excelente, fácil de aprender, dinámico, simplemente increíble. Estoy encantada y agradecida por haber creado algo tan excepcional.",
    nome: "Personal Trainer",
    origem: "🇧🇷 Brasil",
    inicial: "A",
  },
  {
    texto:
      "Muy bueno. Lo adquirí y me está ayudando muchísimo en el día a día con mis alumnos.",
    nome: "@santino_personal",
    origem: "🇧🇷 Brasil",
    inicial: "S",
  },
  {
    texto:
      "¡Excelente! Lo compré y lo recomiendo sin dudar. Vale cada peso.",
    nome: "@rodrigueseduardo2",
    origem: "🇧🇷 Brasil",
    inicial: "R",
  },
]

export default function Depoimentos() {
  return (
    <section className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          Lo que dicen en Brasil
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
          El método que ya transformó{" "}
          <span style={{ color: "var(--orange)" }}>40.000 entrenadores.</span>
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: 560,
          }}
        >
          Validado en Brasil. Ahora disponible en español. Los primeros
          entrenadores colombianos ya están adoptándolo.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              {/* Estrelas */}
              <div style={{ color: "var(--orange)", fontSize: "0.9rem", letterSpacing: 2 }}>
                ★★★★★
              </div>

              {/* Texto */}
              <p
                style={{
                  color: "var(--text)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{d.texto}"
              </p>

              {/* Autor */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,107,0,0.15)",
                    border: "1px solid rgba(255,107,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--orange)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  {d.inicial}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "0.1rem",
                    }}
                  >
                    {d.nome}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {d.origem}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ponte — early adopter */}
        <div
          style={{
            borderLeft: "3px solid var(--orange)",
            background: "rgba(255,107,0,0.05)",
            borderRadius: "0 8px 8px 0",
            padding: "1rem 1.5rem",
            maxWidth: 560,
          }}
        >
          <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--orange)" }}>Colombia es el siguiente.</strong>{" "}
            Mientras tu competencia sigue con la misma rutina de siempre, tú
            puedes llegar primero con el sistema que ya demostró retener alumnos
            en el mercado más competitivo de Latinoamérica.
          </p>
        </div>
      </div>
    </section>
  )
}
