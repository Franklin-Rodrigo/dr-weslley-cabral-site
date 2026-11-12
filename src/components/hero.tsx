import { BOOKING_HREF, BOOKING_LABEL, HERO } from "@/lib/content";
import Image from "next/image";
import heroImg from "@/assets/hero-monograma.webp";
import { ButtonLink, Container, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col lg:min-h-[760px] lg:flex-row lg:items-center">
      <Container className="relative z-10">
        <div className="max-w-[640px] py-14 lg:py-16">
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1 className="mb-6 font-serif text-[clamp(2.9rem,6vw,5rem)] leading-[1.08] font-medium text-balance">
            {HERO.title}
          </h1>
          <p className="max-w-[540px] text-lg text-muted lg:text-xl">{HERO.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <ButtonLink href={BOOKING_HREF}>{BOOKING_LABEL}</ButtonLink>
            <ButtonLink href="#resultados" variant="ghost">
              Ver resultados
            </ButtonLink>
          </div>
        </div>
      </Container>
      <figure className="relative m-0 h-[420px] w-full overflow-hidden bg-[#1c1c1c] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[48.6%]">
        <Image
          src={heroImg}
          alt="Monograma do Instituto Dr. Weslley Cabral"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 49vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-6 left-6 z-10 flex items-center gap-2.5 rounded-[2px] bg-background px-4 py-2.5 text-sm font-medium">
          <i className="size-2.5 rounded-full bg-gold" />
          Instituto Dr. Weslley
        </span>
      </figure>
    </section>
  );
}
