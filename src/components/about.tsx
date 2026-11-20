import { Check } from "lucide-react";
import { ABOUT } from "@/lib/content";
import retrato from "@/assets/dr-weslley.webp";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./reveal";
import { RevealImage } from "./reveal-image";

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
        <div className="relative order-1 lg:order-2">
          {/* moldura dourada deslocada atrás do retrato */}
          <span aria-hidden className="absolute inset-0 hidden translate-x-5 translate-y-5 rounded-[4px] border border-gold/40 lg:block" />
          <RevealImage
            src={retrato}
            alt="Retrato do Dr. Weslley Cabral, de suéter azul-marinho e braços cruzados"
            sizes="(min-width: 1024px) 520px, 100vw"
            parallax
            className="h-[460px] rounded-[4px] lg:h-[620px]"
          >
            <figcaption className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-[2px] bg-background/85 px-4 py-2.5 text-sm font-medium backdrop-blur-sm">
              <i className="size-2.5 rounded-full bg-gold" />
              Cirurgião-dentista
            </figcaption>
          </RevealImage>
        </div>
      </Container>
    </section>
  );
}
