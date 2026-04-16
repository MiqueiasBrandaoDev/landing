import CTAButton from "./CTAButton"
import { PRECO_LANCAMENTO, PRECO_TOTAL_STACK, ALUNOS } from "@/lib/constants"

const itens = [
  {
    emoji: "📄",
    titulo: "Guía Completa del Sistema Fullbody",
    desc: "Todo lo que necesitas para prescribir Fullbody con base científica. Aplicable desde el primer día.",
    valor: null,
    destaque: true,
  },
  {
    emoji: "📊",
    titulo: "Plantillas de Prescripción Editables",
    desc: "Listos para entregar a tu alumno mañana. Google Sheets / Excel. Adapta en minutos.",
    valor: "$15.000 COP",
    destaque: false,
  },
  {
    emoji: "📘",
    titulo: "Guía Científica de Hipertrofia",
    desc: "Directrices actualizadas de la ciencia aplicadas a la práctica. Lenguaje directo, sin relleno.",
    valor: "$10.000 COP",
    destaque: false,
  },
  {
    emoji: "✅",
    titulo: "Checklist de Evaluación del Alumno",
    desc: "Evalúa a cada alumno antes de prescribir. Sin improvisación.",
    valor: null,
    destaque: false,
  },
  {
    emoji: "📅",
    titulo: "Protocolo de Periodización Semana a Semana",
    desc: "Meses de programación Fullbody sin repetir la misma rutina dos veces.",
    valor: null,
    destaque: false,
  },
  {
    emoji: "🛠️",
    titulo: "Kit del Entrenador Profesional",
    desc: "3 fichas que usas CADA SEMANA: evaluación inicial, seguimiento mensual y script de renovación para cuando el alumno quiere irse.",
    valor: "$18.000 COP",
    destaque: false,
    badge: "MÁS VALORADO",
  },
];

export default function StackValor() {
  return (
    <section className="section" style={{ background: "var(--bg-alt)" }}>
      {/* Glow */}
      <div
        className="glow"
        style={{
          width: 500,
          height: 500,
          background: "var(--orange-glow)",
          bottom: "-20%",
          right: "-10%",
        }}
      />

      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>
          Lo que recibes hoy
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
          No es un curso que vas a ver.
          <br />
          <span style={{ color: "var(--orange)" }}>Es un sistema que vas a usar.</span>
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
          Acceso inmediato tras la compra. Sin plataforma, sin contraseña.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
          {itens.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                border: item.destaque
                  ? "1px solid rgba(255,107,0,0.35)"
                  : "1px solid var(--border)",
                background: item.destaque ? "rgba(255,107,0,0.05)" : "var(--bg-card)",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-space), system-ui, sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.titulo}
                  </h3>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "var(--orange)",
                        border: "1px solid var(--orange)",
                        borderRadius: 4,
                        padding: "0.15rem 0.4rem",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.valor && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textDecoration: "line-through",
                      }}
                    >
                      {item.valor} → GRATIS
                    </span>
                  )}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Valor total + CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            VALOR TOTAL
          </p>
          <p style={{ textDecoration: "line-through", color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
            {PRECO_TOTAL_STACK}
          </p>
          <p
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: 700,
              color: "var(--orange)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            HOY SOLO {PRECO_LANCAMENTO}
          </p>
          {/* Prova social ANTES do botão — Kennedy: fecha o hesitante antes de clicar */}
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            +{ALUNOS} entrenadores ya lo tienen.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
