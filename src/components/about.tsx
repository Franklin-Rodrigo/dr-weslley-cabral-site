import { Check } from "lucide-react";
import { ABOUT } from "@/lib/content";
import { Container, Eyebrow, PhotoPlaceholder } from "./ui";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>Sobre o doutor</Eyebrow>
          <h2 className="mb-6 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.1] font-medium">Dr. Weslley Cabral</h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="mb-5 max-w-[640px] text-lg text-muted lg:text-[19px]">
              {p}
            </p>
          ))}
          <ul className="mt-7 grid gap-3">
            {ABOUT.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 font-medium">
                <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Check size={13} strokeWidth={3} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={120}>
          <PhotoPlaceholder label="Retrato do Dr. Weslley" className="h-[460px] rounded-[4px] lg:h-[620px]" />
        </Reveal>
      </Container>
    </section>
  );
}
