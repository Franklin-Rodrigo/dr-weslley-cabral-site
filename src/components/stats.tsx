import { STATS } from "@/lib/content";
import { Container } from "./ui";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

export function Stats() {
  return (
    <section aria-label="Números" className="border-y border-border bg-surface-alt">
      <Container className="grid gap-8 py-11 md:grid-cols-3 md:divide-x md:divide-border">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="flex items-center gap-4 md:pl-8 md:first:pl-0">
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
            <span className="max-w-[190px] text-sm leading-snug text-muted">{s.label}</span>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
