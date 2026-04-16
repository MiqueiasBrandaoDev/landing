import { PRECO_LANCAMENTO, GARANTIA_DIAS, OFERTA_VALIDA_ATE } from "@/lib/constants"

export default function PS() {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "var(--text-muted)",
          }}
        >
          <strong style={{ color: "var(--text)" }}>P.D.:</strong> Recuerda: el
          precio de lanzamiento es{" "}
          <strong style={{ color: "var(--orange)" }}>{PRECO_LANCAMENTO}</strong>{" "}
          y la garantía de {GARANTIA_DIAS} días significa{" "}
          <strong style={{ color: "var(--text)" }}>cero riesgo</strong> para ti.
          Descarga en minutos, directo al dispositivo.{" "}
          {OFERTA_VALIDA_ATE && (
            <>
              Precio válido hasta{" "}
              <strong style={{ color: "var(--text)" }}>{OFERTA_VALIDA_ATE}</strong>.
            </>
          )}
        </p>
      </div>
    </div>
  )
}
