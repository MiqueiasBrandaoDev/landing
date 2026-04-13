import Hero from "@/components/Hero"
import Problema from "@/components/Problema"
import PorQueFunciona from "@/components/PorQueFunciona"
import StackValor from "@/components/StackValor"
import Credibilidade from "@/components/Credibilidade"
import Garantia from "@/components/Garantia"
import FAQ from "@/components/FAQ"
import CTAFinal from "@/components/CTAFinal"
import PS from "@/components/PS"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <PorQueFunciona />
      <StackValor />
      <Garantia />
      <Credibilidade />
      <FAQ />
      <CTAFinal />
      <PS />
      <Footer />
    </main>
  )
}
