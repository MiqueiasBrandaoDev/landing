import { KIWIFY_URL, PRECO_LANCAMENTO } from "@/lib/constants"

interface CTAButtonProps {
  text?: string
}

export default function CTAButton({
  text = `Obtener el Sistema — ${PRECO_LANCAMENTO} →`,
}: CTAButtonProps) {
  return (
    <a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      aria-label={`Comprar Sistema Fullbody por ${PRECO_LANCAMENTO}`}
    >
      {text}
    </a>
  )
}
