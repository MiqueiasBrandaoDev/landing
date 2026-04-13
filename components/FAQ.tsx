"use client";

const perguntas = [
  {
    q: "¿Para quién es este sistema?",
    a: "Para estudiantes de Educación Física y personal trainers que desean aplicar el método Fullbody con respaldo científico desde el primer día.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No. El protocolo está diseñado para profesionales en cualquier etapa — desde recién graduados hasta entrenadores con años de experiencia.",
  },
  {
    q: "¿Cómo recibo el material?",
    a: "Al confirmar tu compra, recibes acceso inmediato para descargar todos los archivos. Sin plataforma, sin contraseña — directo al dispositivo.",
  },
  {
    q: "¿El acceso es de por vida?",
    a: "Sí. Los archivos son tuyos para siempre, incluyendo actualizaciones futuras del material.",
  },
  {
    q: "¿El sistema ofrece certificado?",
    a: "Sí. Al completar el programa recibes un certificado de especialización de 20 horas, válido para horas complementarias y comprobación de especialización.",
  },
  {
    q: "¿Funciona para el mercado colombiano?",
    a: "Sí. El sistema está basado en evidencia científica universal — ya lo usan entrenadores en toda Latinoamérica. El contenido está completamente en español.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          Preguntas Frecuentes
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "2.5rem",
          }}
        >
          Tus dudas, respondidas
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {perguntas.map((item, i) => (
            <details
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  padding: "1.1rem 1.25rem",
                  fontFamily: "var(--font-space), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  userSelect: "none",
                }}
              >
                {item.q}
                <span aria-hidden="true" style={{ color: "var(--orange)", fontSize: "1.25rem", lineHeight: 1 }}>+</span>
              </summary>
              <p
                style={{
                  padding: "0 1.25rem 1.1rem",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
