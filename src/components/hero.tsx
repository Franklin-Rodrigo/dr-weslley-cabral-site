import { Fragment } from "react";
import Image from "next/image";
import { BOOKING_HREF, BOOKING_LABEL, HERO } from "@/lib/content";
import heroImg from "@/assets/hero-recepcao.webp";
import monograma from "@/assets/monograma.png";
import { ButtonLink, Container, Eyebrow } from "./ui";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const words = HERO.title.split(" ");
  const afterTitle = 250 + words.length * 90;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-20 lg:min-h-[860px] lg:items-center lg:pt-[98px]"
    >
      {/* foto da recepção, com aproximação lenta */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={heroImg}
          alt="Recepção do Instituto Dr. Weslley Cabral em Juazeiro do Norte, com o monograma WC na parede e luminária de hexágonos"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="hero-zoom object-cover object-[62%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background from-38% via-background/70 via-60% to-background/0 lg:bg-linear-to-r lg:from-background/80 lg:from-0% lg:via-background/55 lg:via-45% lg:to-transparent lg:to-80%" />
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background/70 to-transparent lg:h-48 lg:from-background/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="pb-28 lg:pb-32">
        <div className="max-w-[680px] [text-shadow:0_2px_18px_rgb(0_0_0/0.55)]">
          <div className="hero-fade" style={delay(100)}>
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
          </div>

          <h1 className="font-serif text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[1.04] font-medium">
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span className="hero-word inline-block" style={delay(250 + i * 90)}>
                    {w}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <span aria-hidden className="hero-line mt-5 mb-7 block h-px w-40 bg-gold" style={delay(afterTitle)} />

          <p className="hero-fade max-w-[540px] text-lg text-foreground/85 lg:text-xl" style={delay(afterTitle + 150)}>
            {HERO.subtitle}
          </p>

          <div className="hero-fade mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap" style={delay(afterTitle + 300)}>
            <ButtonLink href={BOOKING_HREF}>{BOOKING_LABEL}</ButtonLink>
            <ButtonLink href="#resultados" variant="ghost">
              Ver resultados
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* selo do instituto; o cartão de números logo abaixo já convida a rolar */}
      <Container className="pointer-events-none absolute inset-x-0 bottom-28 hidden justify-end lg:flex">
        <div
          className="hero-fade flex items-center gap-3 rounded-[2px] border border-gold/30 bg-background/70 px-4 py-3 backdrop-blur-md"
          style={delay(afterTitle + 450)}
        >
          <Image src={monograma} alt="" className="h-9 w-auto" />
          <span className="text-sm leading-tight">
            <strong className="block font-serif text-base font-medium">Instituto Dr. Weslley Cabral</strong>
            <span className="text-muted">Recepção · Juazeiro do Norte</span>
          </span>
        </div>
      </Container>
    </section>
  );
}
