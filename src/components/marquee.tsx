import { TREATMENTS } from "@/lib/content";

/** Faixa dourada com os tratamentos passando em loop. Decorativa: os mesmos nomes já estão na seção Tratamentos. */
export function Marquee() {
  // repete a lista para a faixa nunca ficar com buraco em telas largas
  const items = [...TREATMENTS, ...TREATMENTS].map((t) => t.title);

  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
          <span>{t}</span>
          <span className="size-2 rotate-45 bg-gold-foreground/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <div aria-hidden className="marquee overflow-hidden bg-gold py-5 text-gold-foreground lg:py-6">
      <div className="marquee-track flex w-max font-serif text-2xl italic lg:text-[2rem]">
        {row}
        {row}
      </div>
    </div>
  );
}
