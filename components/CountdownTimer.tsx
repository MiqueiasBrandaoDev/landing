"use client"

import { useEffect, useState } from "react"
import { OFERTA_VALIDA_ATE } from "@/lib/constants"

// Parse "21 de abril de 2026" → Date
function parseTargetDate(dateStr: string): Date {
  const meses: Record<string, number> = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
  }
  const parts = dateStr.toLowerCase().split(" de ")
  const day = parseInt(parts[0])
  const month = meses[parts[1]] ?? 3
  const year = parseInt(parts[2])
  const d = new Date(year, month, day, 23, 59, 59)
  return d
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export default function CountdownTimer() {
  const target = parseTargetDate(OFERTA_VALIDA_ATE)
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0, expired: false })

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0, expired: true })
        return
      }
      const totalSeconds = Math.floor(diff / 1000)
      const h = Math.floor(totalSeconds / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60
      setTimeLeft({ h, m, s, expired: false })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft.expired) return null

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "rgba(255,107,0,0.08)",
        border: "1px solid rgba(255,107,0,0.25)",
        borderRadius: 8,
        padding: "0.5rem 1rem",
        fontSize: "0.85rem",
      }}
    >
      <span style={{ color: "var(--orange)" }}>⏳</span>
      <span style={{ color: "var(--text-muted)" }}>Precio de lanzamiento termina en</span>
      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        {[
          { val: pad(timeLeft.h), label: "h" },
          { val: pad(timeLeft.m), label: "m" },
          { val: pad(timeLeft.s), label: "s" },
        ].map(({ val, label }, i) => (
          <span key={i} style={{ display: "flex", alignItems: "baseline", gap: "0.1rem" }}>
            <strong
              style={{
                fontFamily: "var(--font-space), monospace",
                fontSize: "1rem",
                color: "var(--orange)",
                fontVariantNumeric: "tabular-nums",
                minWidth: "1.6ch",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              {val}
            </strong>
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{label}</span>
            {i < 2 && <span style={{ color: "var(--text-muted)", marginLeft: "0.1rem" }}>:</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
