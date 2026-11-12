import { INSTAGRAM_URL } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, PhotoPlaceholder, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

export function Results() {
  return (
    <section id="resultados" className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Resultados</Eyebrow>
            <SectionTitle>Casos reais, acompanhados de perto</SectionTitle>
          </div>
          <ButtonLink href={INSTAGRAM_URL} variant="ghost">
            Ver mais no Instagram
          </ButtonLink>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 120}>
              <PhotoPlaceholder
                silhouette={false}
                label={`Antes / depois · Caso 0${n}`}
                className="h-[380px] rounded-[4px]"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
