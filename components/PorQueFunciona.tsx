const beneficios = [
  {
    titulo: "Alumnos que duran más de 3 meses",
    desc: "Rutinas que evolucionan semana a semana. Sin monotonía, sin perder el contrato.",
  },
  {
    titulo: "Un sistema para cualquier alumno",
    desc: "Del principiante al atleta avanzado. Una prescripción, múltiples adaptaciones. Menos tiempo preparando, más tiempo entrenando.",
  },
  {
    titulo: "Hipertrofia, fuerza y pérdida de grasa en el mismo protocolo",
    desc: "El Fullbody trabaja todos los objetivos en cada sesión. Base científica real, no intuición.",
  },
  {
    titulo: "El método que tus alumnos van a querer seguir haciendo",
    desc: "No es una rutina más. Es un sistema que se adapta y que ellos mismos piden repetir.",
  },
];

export default function PorQueFunciona() {
  return (
    <section className="section">
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          Por qué funciona
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "3rem",
          }}
        >
          Alumnos que se quedan.{" "}
          <span style={{ color: "var(--orange)" }}>Resultados que se ven.</span>{" "}
          Un solo sistema.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    background: "rgba(255,107,0,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--orange)",
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {b.titulo}
                </h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, paddingLeft: "2.5rem" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
