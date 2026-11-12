import { ArrowRight } from "lucide-react";
import { TREATMENTS } from "@/lib/content";
import { Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

export function Treatments() {
  return (
    <section id="tratamentos" className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Tratamentos</Eyebrow>
          <SectionTitle>Cuidado completo para o seu sorriso</SectionTitle>
        </Reveal>
        <ol className="mt-12 border-t border-border">
          {TREATMENTS.map((t, i) => (
            <li key={t.title}>
              <a
                href="#pre-cadastro"
                className="group grid grid-cols-[48px_1fr_28px] items-center gap-x-4 gap-y-1.5 border-b border-border py-6 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)_40px] md:gap-6 md:py-8"
              >
                <span className="font-serif text-lg font-medium text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight font-medium">{t.title}</h3>
                <p className="col-start-2 row-start-2 max-w-[560px] text-muted md:col-start-3 md:row-start-1">{t.text}</p>
                <ArrowRight
                  aria-hidden
                  className="col-start-3 row-start-1 justify-self-end text-gold transition-transform group-hover:translate-x-1 md:col-start-4"
                  size={26}
                />
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
