import { STATS } from "@/lib/content";
import { Container } from "./ui";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

/** Cartão de números sobreposto à base da abertura. */
export function Stats() {
  return (
    <section aria-label="Números" className="relative z-10 -mt-14 lg:-mt-16">
      <Container>
        <Reveal className="grid gap-6 rounded-[4px] border border-border bg-surface/90 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)] backdrop-blur-md sm:p-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border md:p-0">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4 md:px-8 md:py-8 lg:px-10">
              <strong className="font-serif text-4xl font-medium whitespace-nowrap text-gold lg:text-[2.6rem]">
                {s.count !== undefined ? (
                  <CountUp to={s.count} decimals={s.decimals} suffix={s.suffix} suffixOne={s.suffixOne} />
                ) : (
                  <span className="flex items-center gap-3">
                    <span aria-hidden className="relative flex size-2.5">
                      <span className="halo absolute inset-0 rounded-full bg-gold" />
                      <span className="relative size-2.5 rounded-full bg-gold" />
                    </span>
                    {s.value}
                  </span>
                )}
              </strong>
              <span className="max-w-[200px] text-sm leading-snug text-muted">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
