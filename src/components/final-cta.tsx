import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { BOOKING_HREF, BOOKING_LABEL, WHATSAPP } from "@/lib/content";
import monograma from "@/assets/monograma.png";
import retrato from "@/assets/dr-weslley.webp";
import { ButtonLink, Container } from "./ui";
import { Reveal } from "./reveal";

const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Dr. Weslley! Gostaria de agendar uma avaliação.")}`;

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-gold text-gold-foreground">
      {/* monograma grande e sutil ao fundo */}
      <Image
        src={monograma}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-24 -z-10 h-[150%] w-auto -translate-y-1/2 opacity-[0.07] brightness-0 select-none lg:left-[8%]"
      />

      <Container className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <Reveal className="py-20 lg:py-28">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase">
            <span aria-hidden className="h-px w-8 bg-gold-foreground" />
            Agende sua avaliação
          </p>
          <h2 className="mb-6 max-w-[680px] font-serif text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[1.05] font-medium text-balance">
            Pronto para o sorriso que você merece?
          </h2>
          <p className="mb-9 max-w-[520px] text-lg text-gold-foreground/80">
            Atendimento em Juazeiro do Norte e Lavras da Mangabeira. Fale com a gente e marque o melhor horário para você.
          </p>
          <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <ButtonLink href={BOOKING_HREF} variant="inverse">
              {BOOKING_LABEL}
            </ButtonLink>
            <ButtonLink href={whatsappHref} variant="outlineDark">
              <MessageCircle size={18} aria-hidden /> Falar no WhatsApp
            </ButtonLink>
          </div>
        </Reveal>

        {/* retrato em arco, encostado na base da faixa */}
        <Reveal delay={150} className="relative hidden h-[480px] self-end lg:block">
          <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-t-full border-x border-t border-gold-foreground/25 bg-gold-foreground/10">
            <Image
              src={retrato}
              alt="Dr. Weslley Cabral"
              fill
              sizes="400px"
              placeholder="blur"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
