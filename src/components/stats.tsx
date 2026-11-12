import { STATS } from "@/lib/content";
import { Container } from "./ui";

export function Stats() {
  return (
    <section aria-label="Números" className="border-y border-border bg-surface-alt">
      <Container className="grid gap-8 py-11 md:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.value} className="flex items-center gap-4">
            <strong className="font-serif text-4xl font-medium whitespace-nowrap">{s.value}</strong>
            <span className="max-w-[190px] text-sm leading-snug text-muted">{s.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
