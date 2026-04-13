export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        color: "var(--text-muted)",
        fontSize: "0.8rem",
        lineHeight: 1.8,
      }}
    >
      <p style={{ marginBottom: "0.5rem" }}>
        <strong style={{ color: "var(--text)" }}>EDUCACIÓN FÍSICA DEL CERO</strong>
      </p>
      <p>Sistema Fullbody — Protocolo Completo para Entrenadores</p>
      <p style={{ marginTop: "1rem" }}>
        © 2026 · Todos los derechos reservados
      </p>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
        <a href="#" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Política de Privacidad</a>
        <a href="#" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Términos de Uso</a>
      </div>
    </footer>
  );
}
