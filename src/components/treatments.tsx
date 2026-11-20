import Image from "next/image";
import { ArrowRight, ClipboardCheck, Gem, Layers, ShieldCheck, Smile, Sparkles, type LucideIcon } from "lucide-react";
import { BOOKING_HREF, TREATMENTS } from "@/lib/content";
import salaDeAvaliacao from "@/assets/ambiente/sala-de-avaliacao.webp";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

const ICONS: Record<string, LucideIcon> = {
  "Clareamento dental": Sparkles,
  "Resina composta": Layers,
  "Reabilitação oral": Smile,
  "Lentes e facetas": Gem,
  "Limpeza e prevenção": ShieldCheck,
  "Avaliação inicial": ClipboardCheck,
};

/** Tratamento em destaque no mosaico: é por onde todo paciente começa. */
const FEATURED = "Avaliação inicial";

// numeração na ordem em que os cards aparecem: o destaque é o 01
const num = (n: number) => String(n).padStart(2, "0");

export function Treatments() {
  const featured = TREATMENTS.find((t) => t.title === FEATURED)!;
  const rest = TREATMENTS.filter((t) => t.title !== FEATURED);

  return (
    <section id="tratamentos" className="pt-24 pb-20 lg:pt-32 lg:pb-28">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* destaque: ocupa 2 colunas e 2 linhas no computador */}
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <article className="group grid h-full overflow-hidden rounded-[4px] border border-gold/40 bg-surface md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                <Image
                  src={salaDeAvaliacao}
                  alt="Sala de avaliação do Instituto Dr. Weslley Cabral, com mesa, cadeiras e estante iluminada"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 rounded-[2px] bg-gold px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase">
                  Comece por aqui
                </span>
              </div>
              <div className="flex flex-col p-7 lg:p-10">
                <div className="mb-8 flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-full bg-gold text-gold-foreground">
                    <ClipboardCheck size={24} strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="font-serif text-lg text-gold">{num(1)}</span>
                </div>
                <h3 className="mb-4 font-serif text-[clamp(2rem,3vw,2.6rem)] leading-[1.1] font-medium">
                  {featured.title}
                </h3>
                <p className="mb-4 text-lg text-muted">{featured.text}</p>
                <p className="text-muted">
                  Toda mudança no sorriso começa por aqui: uma conversa sobre o que você quer melhorar e um plano
                  pensado para o seu caso, explicado etapa por etapa.
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
                  <ButtonLink href={BOOKING_HREF}>Agendar avaliação</ButtonLink>
                  <a
                    href="#resultados"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-foreground"
                  >
                    Ver resultados <ArrowRight size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {rest.map((t, i) => {
            const Icon = ICONS[t.title] ?? Sparkles;
            return (
              <Reveal key={t.title} delay={(i % 3) * 110} className="h-full">
                <a
                  href="#pre-cadastro"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-surface p-7 transition duration-500 hover:border-gold/60 motion-safe:hover:-translate-y-1.5 lg:p-8"
                >
                  {/* brilho dourado que acende no canto ao passar o mouse */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-28 -right-28 size-64 rounded-full bg-gold/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                      <Icon size={22} strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="font-serif text-lg text-muted transition-colors group-hover:text-gold">
                      {num(i + 2)}
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-[1.65rem] leading-tight font-medium">{t.title}</h3>
                  <p className="text-muted">{t.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-gold">
                    Quero uma avaliação
                    <ArrowRight size={18} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
