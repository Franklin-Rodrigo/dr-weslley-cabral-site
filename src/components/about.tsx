import Image from "next/image";
import { Check } from "lucide-react";
import { ABOUT } from "@/lib/content";
import retrato from "@/assets/dr-weslley.webp";
import { Container, Eyebrow } from "./ui";
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
          <figure className="relative m-0 h-[460px] overflow-hidden rounded-[4px] bg-surface lg:h-[620px]">
            <Image
              src={retrato}
              alt="Retrato do Dr. Weslley Cabral, de suéter azul-marinho e braços cruzados"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
