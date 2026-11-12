import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Treatments } from "@/components/treatments";
import { Results } from "@/components/results";
import { About } from "@/components/about";
import { PreRegister } from "@/components/pre-register";
import { Units } from "@/components/units";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Stats />
        <Treatments />
        <Results />
        <About />
        <PreRegister />
        <Units />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
