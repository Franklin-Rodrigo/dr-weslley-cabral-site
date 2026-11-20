import { Clock, MapPin, Star } from "lucide-react";
import type { StaticImageData } from "next/image";
import { GOOGLE_REVIEW_URL, UNITS } from "@/lib/content";
import fotoJuazeiro from "@/assets/unidades/juazeiro.webp";
import fotoLavras from "@/assets/unidades/lavras.webp";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";
import { RevealImage } from "./reveal-image";

const PHOTOS: Record<string, { src: StaticImageData; alt: string }> = {
  juazeiro: {
    src: fotoJuazeiro,
    alt: "Fachada do Instituto Dr. Weslley Cabral no GMall, na Av. Leão Sampaio, em Juazeiro do Norte",
  },
  lavras: {
    src: fotoLavras,
    alt: "Fachada da unidade na Rua da Ferroviária, 147B, em Lavras da Mangabeira",
  },
};

const greeting = encodeURIComponent("Olá, Dr. Weslley! Gostaria de agendar uma avaliação.");

export function Units() {
  return (
    <section id="unidades" className="py-20 lg:py-28">
      <Container>
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Unidades</Eyebrow>
          <SectionTitle>Atendimento em duas cidades</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {UNITS.map((u, i) => (
            <Reveal key={u.id} delay={i * 120}>
              <article className="flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-surface">
                {PHOTOS[u.id] && (
                  <RevealImage
                    src={PHOTOS[u.id].src}
                    alt={PHOTOS[u.id].alt}
                    sizes="(min-width: 1328px) 640px, (min-width: 768px) 50vw, 100vw"
                    className="aspect-square w-full border-b border-border"
                  />
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-10">
                  <h3 className="mb-3 font-serif text-[2rem] leading-tight font-medium">{u.city}</h3>
                  <p className="flex items-start gap-2 text-muted">
                    <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                    {u.address.includes("a confirmar") ? (
                      u.address
                    ) : (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                      >
                        {u.address}
                      </a>
                    )}
                  </p>
                  {u.reference && <p className="mt-1 pl-[26px] text-sm text-muted">{u.reference}</p>}
                  {u.hours.map((h) => (
                    <p key={h.days} className="mt-3 flex items-start gap-2 text-muted">
                      <Clock size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                      <span>
                        <strong className="font-semibold text-foreground">{h.days}</strong> · {h.time}
                      </span>
                    </p>
                  ))}
                  <div className="mt-auto pt-6">
                    <p className="mb-6 text-lg font-semibold">WhatsApp {u.phoneLabel}</p>
                    <ButtonLink href={`https://wa.me/${u.whatsapp}?text=${greeting}`}>Chamar no WhatsApp</ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
          >
            <Star size={16} fill="currentColor" aria-hidden /> Já foi atendido? Avalie o Dr. Weslley no Google
          </a>
        </p>
      </Container>
    </section>
  );
}
