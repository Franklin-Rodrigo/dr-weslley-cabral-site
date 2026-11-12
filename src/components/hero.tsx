import { BOOKING_HREF, BOOKING_LABEL, HERO } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, PhotoPlaceholder } from "./ui";

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
      <PhotoPlaceholder
        label="Foto do Dr. Weslley"
        badge="Instituto Dr. Weslley"
        className="h-[420px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[48.6%]"
      />
    </section>
  );
}
