import { ArrowRight, ClipboardCheck, Gem, Layers, ShieldCheck, Smile, Sparkles, type LucideIcon } from "lucide-react";
import { TREATMENTS } from "@/lib/content";
import { Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

const ICONS: Record<string, LucideIcon> = {
  "Clareamento dental": Sparkles,
  "Resina composta": Layers,
  "Reabilitação oral": Smile,
  "Lentes e facetas": Gem,
  "Limpeza e prevenção": ShieldCheck,
  "Avaliação inicial": ClipboardCheck,
};

export function Treatments() {
  return (
    <section id="tratamentos" className="py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Tratamentos</Eyebrow>
            <SectionTitle>Cuidado completo para o seu sorriso</SectionTitle>
          </div>
          <p className="max-w-[380px] text-muted">
            Cada tratamento começa com uma avaliação e um plano pensado para o seu caso.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TREATMENTS.map((t, i) => {
            const Icon = ICONS[t.title] ?? Sparkles;
            return (
              <li key={t.title}>
                <Reveal delay={(i % 3) * 110} className="h-full">
                  <a
                    href="#pre-cadastro"
                    className="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-surface p-7 transition duration-500 hover:border-gold/60 motion-safe:hover:-translate-y-1.5 lg:p-9"
                  >
                    {/* brilho dourado que acende no canto ao passar o mouse */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-28 -right-28 size-64 rounded-full bg-gold/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="mb-10 flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                        <Icon size={24} strokeWidth={1.6} aria-hidden />
                      </span>
                      <span className="font-serif text-lg text-muted transition-colors group-hover:text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-3 font-serif text-[1.75rem] leading-tight font-medium">{t.title}</h3>
                    <p className="text-muted">{t.text}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-gold">
                      Quero uma avaliação
                      <ArrowRight size={18} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
