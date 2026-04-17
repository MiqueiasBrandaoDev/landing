"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import CTAButton from "./CTAButton"
import CountdownTimer from "./CountdownTimer"
import { PRECO_LANCAMENTO, PRECO_REGULAR, ALUNOS } from "@/lib/constants"
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
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] via-transparent to-amber-500/[0.03] blur-3xl" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-orange-500/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-amber-500/[0.12]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-orange-600/[0.10]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-yellow-500/[0.10]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-red-500/[0.08]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4 md:px-6">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 md:mb-10"
          style={{
            background: "rgba(255,107,0,0.04)",
            borderColor: "rgba(255,107,0,0.2)",
          }}
        >
          <Circle className="h-2 w-2 fill-orange-500 text-orange-500" />
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            +{ALUNOS} entrenadores ya lo usan
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h1
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
            className="text-4xl sm:text-5xl md:text-7xl"
          >
            <span
              style={{
                background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ¿Tus alumnos se van
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #FF6B00, #ffffff90, #FF8C00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              antes de 3 meses?
            </span>
          </h1>
        </motion.div>

        {/* Subheadline — una sola línea */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <p
            className="text-base sm:text-lg md:text-xl mx-auto px-4"
            style={{
              color: "var(--text-muted)",
              maxWidth: 520,
              lineHeight: 1.6,
              marginBottom: "2rem",
              fontWeight: 300,
            }}
          >
            El sistema que resuelve eso existe. Y cuesta menos que una hora de
            entrenamiento.
          </p>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            position: "relative",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "80%",
              height: "80%",
              top: "10%",
              left: "10%",
              background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/mockup-produto.png"
            alt="Sistema Fullbody — Guía completa, plantillas, Kit del Entrenador y más"
            style={{
              width: "100%",
              maxWidth: 420,
              height: "auto",
              position: "relative",
              zIndex: 1,
            }}
          />
        </motion.div>

        {/* Price + CTA */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            <span
              style={{
                textDecoration: "line-through",
                color: "var(--text-muted)",
                marginRight: "0.5rem",
              }}
            >
              {PRECO_REGULAR}
            </span>
            <strong style={{ color: "var(--orange)", fontSize: "1.3rem" }}>
              {PRECO_LANCAMENTO}
            </strong>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <CTAButton text={`Quiero el Sistema · ${PRECO_LANCAMENTO} →`} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.75rem",
            }}
          >
            <CountdownTimer />
          </div>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.78rem",
              opacity: 0.7,
            }}
          >
            Garantía 7 días · Descarga inmediata · Pago seguro
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--bg) 0%, transparent 30%, transparent 70%, var(--bg) 100%)",
        }}
      />
    </section>
  )
}
