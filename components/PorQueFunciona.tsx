const beneficios = [
  {
    titulo: "Eficiencia que Fideliza",
    desc: "Resultados globales en menos tiempo. La solución perfecta para el alumno con agenda ocupada.",
  },
  {
    titulo: "Versatilidad Profesional",
    desc: "Un solo sistema para principiantes y atletas avanzados — simplificando tu prescripción.",
  },
  {
    titulo: "Resultados Probados",
    desc: "Eficaz para hipertrofia, pérdida de grasa y fuerza. Basado en evidencia científica.",
  },
  {
    titulo: "Alta Retención",
    desc: "El antídoto contra la monotonía. El método que tus alumnos pueden sostener de por vida.",
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
          Por qué el Sistema Fullbody funciona
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
