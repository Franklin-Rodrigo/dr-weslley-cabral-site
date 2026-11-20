import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Treatments } from "@/components/treatments";
import { Results } from "@/components/results";
import { About } from "@/components/about";
import { PreRegister } from "@/components/pre-register";
import { Units } from "@/components/units";
import { Ambiente } from "@/components/ambiente";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Stats />
        <Treatments />
        <Marquee />
        <Results />
        <About />
        <PreRegister />
        <Units />
        <Ambiente />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
