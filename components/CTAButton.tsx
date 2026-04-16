"use client"

import { KIWIFY_URL, PRECO_LANCAMENTO } from "@/lib/constants"

interface CTAButtonProps {
  text?: string
}

function handleCTAClick() {
  if (typeof window === "undefined") return

  // GA4
  if (typeof (window as any).gtag === "function") {
    ;(window as any).gtag("event", "begin_checkout", {
      currency: "COP",
      value: 39000,
      items: [
        {
          item_id: "sistema-fullbody",
          item_name: "Sistema Fullbody — Protocolo Completo",
          price: 39000,
          currency: "COP",
          quantity: 1,
        },
      ],
    })
  }

  // Meta Pixel
  if (typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "InitiateCheckout", {
      value: 39000,
      currency: "COP",
      content_ids: ["sistema-fullbody"],
      content_type: "product",
      num_items: 1,
    })
  }
}

export default function CTAButton({
  text = `Obtener el Sistema · ${PRECO_LANCAMENTO} →`,
}: CTAButtonProps) {
  return (
    <a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      aria-label={`Comprar Sistema Fullbody por ${PRECO_LANCAMENTO}`}
      onClick={handleCTAClick}
    >
      {text}
    </a>
  )
}
