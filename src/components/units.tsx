import { Clock, MapPin, MessageCircle, Star } from "lucide-react";
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
const mapsLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsEmbed = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&hl=pt-BR&z=16&output=embed`;

export function Units() {
  return (
    <section id="unidades" className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Unidades</Eyebrow>
            <SectionTitle>Atendimento em duas cidades</SectionTitle>
          </div>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
          >
            <Star size={16} fill="currentColor" aria-hidden /> Já foi atendido? Avalie no Google
          </a>
        </Reveal>

        <div className="grid gap-6 lg:gap-8">
          {UNITS.map((u, i) => (
            <Reveal key={u.id} delay={i * 120}>
              <article className="grid overflow-hidden rounded-[4px] border border-border bg-surface md:grid-cols-2 lg:grid-cols-[360px_minmax(0,1fr)_minmax(0,1fr)]">
                {PHOTOS[u.id] && (
                  <RevealImage
                    src={PHOTOS[u.id].src}
                    alt={PHOTOS[u.id].alt}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="aspect-square md:aspect-auto md:h-full md:min-h-[360px]"
                  />
                )}

                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                    Unidade {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-5 font-serif text-[2rem] leading-tight font-medium">{u.city}</h3>
                  <p className="flex items-start gap-2.5 text-muted">
                    <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                    <span>
                      <a
                        href={mapsLink(u.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                      >
                        {u.address}
                      </a>
                      {u.reference && <span className="mt-1 block text-sm">{u.reference}</span>}
                    </span>
                  </p>
                  {u.hours.map((h) => (
                    <p key={h.days} className="mt-3 flex items-start gap-2.5 text-muted">
                      <Clock size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                      <span>
                        <strong className="font-semibold text-foreground">{h.days}</strong> · {h.time}
                      </span>
                    </p>
                  ))}
                  <p className="mt-3 flex items-start gap-2.5 text-muted">
                    <MessageCircle size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                    <span>
                      <strong className="font-semibold text-foreground">WhatsApp</strong> · {u.phoneLabel}
                    </span>
                  </p>
                  <div className="mt-auto pt-8">
                    <ButtonLink href={`https://wa.me/${u.whatsapp}?text=${greeting}`}>Chamar no WhatsApp</ButtonLink>
                  </div>
                </div>

                {/* mapa: escurecido por filtro para combinar com o site */}
                <div className="relative min-h-[260px] border-t border-border bg-surface-alt md:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l">
                  <iframe
                    src={mapsEmbed(u.mapQuery)}
                    title={`Mapa da unidade de ${u.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_brightness(0.95)]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
