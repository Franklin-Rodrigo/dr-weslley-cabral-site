import { Clock, MapPin, Star } from "lucide-react";
import { UNITS } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

const greeting = encodeURIComponent("Olá, Dr. Weslley! Gostaria de agendar uma avaliação.");

export function Units() {
  return (
    <section id="unidades" className="py-20 lg:py-28">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>Unidades</Eyebrow>
          <SectionTitle>Atendimento em duas cidades</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {UNITS.map((u, i) => (
            <Reveal key={u.id} delay={i * 120}>
              <article className="flex h-full flex-col rounded-[4px] border border-border bg-surface p-6 sm:p-10">
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
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 text-center font-medium text-gold">
          <Star size={16} fill="currentColor" aria-hidden /> Atendeu com você? Avalie o Dr. Weslley no Google
        </p>
      </Container>
    </section>
  );
}
