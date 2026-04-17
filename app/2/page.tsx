"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import CTAButton from "@/components/CTAButton"
import CountdownTimer from "@/components/CountdownTimer"
import { PRECO_LANCAMENTO, PRECO_REGULAR, ALUNOS, PRECO_USD, GARANTIA_DIAS } from "@/lib/constants"
import { cn } from "@/lib/utils"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-orange-500/[0.15]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(255,107,0,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
}

export default function PageV2() {
  return (
    <main
      style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}
    >
      {/* === HERO — Tudo acima do fold === */}
      <section className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100svh", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] via-transparent to-amber-500/[0.03] blur-3xl" />

        {/* Shapes — menos que a LP original para carregar rápido */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape delay={0.3} width={500} height={120} rotate={12} gradient="from-orange-500/[0.12]" className="left-[-10%] top-[15%]" />
          <ElegantShape delay={0.5} width={400} height={100} rotate={-15} gradient="from-amber-500/[0.10]" className="right-[-5%] top-[75%]" />
          <ElegantShape delay={0.6} width={200} height={50} rotate={20} gradient="from-yellow-500/[0.08]" className="right-[15%] top-[10%]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-lg mx-auto text-center px-5">
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5"
            style={{ background: "rgba(255,107,0,0.04)", borderColor: "rgba(255,107,0,0.2)" }}
          >
            <Circle className="h-2 w-2 fill-orange-500 text-orange-500" />
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              +{ALUNOS} entrenadores ya lo usan
            </span>
          </motion.div>

          {/* Headline — resultado específico */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1
              style={{
                fontFamily: "var(--font-space), system-ui, sans-serif",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
              }}
              className="text-3xl sm:text-4xl md:text-5xl"
            >
              <span style={{
                background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.85))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                El sistema que retiene
              </span>
              <br />
              <span style={{
                background: "linear-gradient(to right, #FF6B00, #ffffff90, #FF8C00)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                alumnos más de 6 meses
              </span>
            </h1>
          </motion.div>

          {/* Subheadline — FOMO competitivo */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p style={{
              color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5,
              marginBottom: "1.25rem", fontWeight: 400,
            }}>
              {ALUNOS} entrenadores en Brasil ya lo usan.{" "}
              <strong style={{ color: "var(--text)" }}>Tu competencia en Colombia todavía no.</strong>
            </p>
          </motion.div>

          {/* Mockup — mais compacto */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ position: "relative", marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}
          >
            <div style={{
              position: "absolute", width: "70%", height: "70%", top: "15%", left: "15%",
              background: "radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)",
              filter: "blur(30px)", pointerEvents: "none",
            }} />
            <img
              src="/mockup-produto.png"
              alt="Sistema Fullbody — Protocolo Completo"
              style={{ width: "100%", maxWidth: 320, height: "auto", position: "relative", zIndex: 1 }}
            />
          </motion.div>

          {/* Preço + CTA */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <p style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              <span style={{ textDecoration: "line-through", color: "var(--text-muted)", marginRight: "0.5rem" }}>
                {PRECO_REGULAR}
              </span>
              <strong style={{ color: "var(--orange)", fontSize: "1.4rem" }}>
                {PRECO_LANCAMENTO}
              </strong>
              <span style={{ color: "var(--text-muted)", marginLeft: "0.4rem", fontSize: "0.8rem" }}>
                {PRECO_USD}
              </span>
            </p>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
              <CTAButton text={`Quiero el Sistema · ${PRECO_LANCAMENTO} →`} />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
              <CountdownTimer />
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", opacity: 0.7 }}>
              🛡️ Garantía {GARANTIA_DIAS} días · ⚡ Descarga inmediata · 🔒 Pago seguro
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%)" }}
        />
      </section>

      {/* === PROVA RÁPIDA — 1 scroll máximo === */}
      <section style={{ padding: "3rem 1.5rem", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          {/* 3 bullets de prova */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              {
                icon: "📄",
                title: "Guía Completa del Sistema Fullbody",
                desc: "Protocolo de 50 páginas con base científica. Aplicable desde el primer día.",
              },
              {
                icon: "📊",
                title: "Plantillas de Prescripción editables",
                desc: "4 protocolos de 8 semanas en Excel. Principiante, intermedio, avanzado y pérdida de grasa.",
              },
              {
                icon: "📘",
                title: "Guía Científica de Hipertrofia",
                desc: "Mecanismos, variables óptimas y protocolo completo. Referencias reales.",
              },
              {
                icon: "📅",
                title: "Protocolo de Periodización — 12 semanas",
                desc: "Adaptación → Acumulación → Intensificación → Deload. Semana a semana.",
              },
              {
                icon: "✅",
                title: "Checklist de Evaluación del Alumno",
                desc: "Evalúa antes de prescribir. Datos, movimiento y clasificación por nivel.",
              },
              {
                icon: "🛠️",
                title: "Kit del Entrenador Profesional",
                desc: "3 fichas: evaluación inicial, seguimiento mensual y script de renovación.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "1rem",
                }}
              >
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-space), system-ui, sans-serif",
                    fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem",
                  }}>
                    {item.title}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Depoimento único — curto e específico */}
          <div style={{
            borderLeft: "3px solid var(--orange)",
            background: "rgba(255,107,0,0.04)",
            borderRadius: "0 8px 8px 0",
            padding: "1rem 1.25rem",
            marginBottom: "2rem",
          }}>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, fontStyle: "italic", color: "var(--text)", marginBottom: "0.5rem" }}>
              "¡Excelente! Lo compré y lo recomiendo sin dudar. Vale cada peso."
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              — @rodrigueseduardo2 · 🇧🇷 Brasil
            </p>
          </div>

          {/* CTA final */}
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              <span style={{ textDecoration: "line-through", color: "var(--text-muted)", marginRight: "0.5rem" }}>
                {PRECO_REGULAR}
              </span>
              <strong style={{ color: "var(--orange)", fontSize: "1.3rem" }}>
                {PRECO_LANCAMENTO}
              </strong>
            </p>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
              <CTAButton text={`Obtener el Sistema · ${PRECO_LANCAMENTO} →`} />
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              🛡️ Si no es para ti, reembolso completo en {GARANTIA_DIAS} días. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "1.5rem",
        textAlign: "center",
        color: "var(--text-muted)",
        fontSize: "0.7rem",
      }}>
        <p>Sistema Fullbody · © 2026 · Todos los derechos reservados</p>
      </footer>
    </main>
  )
}