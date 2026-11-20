import { INSTAGRAM_URL } from "@/lib/content";
import reabAntes from "@/assets/resultados/reabilitacao-antes.webp";
import reabDepois from "@/assets/resultados/reabilitacao-depois.webp";
import reabRetrato from "@/assets/resultados/reabilitacao-retrato.webp";
import casoPerfil from "@/assets/resultados/caso-perfil.webp";
import casoSorriso from "@/assets/resultados/caso-sorriso.webp";
import casoFacetas from "@/assets/resultados/caso-facetas.webp";
import casoEtapas from "@/assets/resultados/caso-etapas.webp";
import casoResina from "@/assets/resultados/caso-resina.webp";
import casoLateral from "@/assets/resultados/caso-lateral.webp";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";
import { BeforeAfter } from "./before-after";
import { RevealImage } from "./reveal-image";
import { CaseCarousel, type CaseItem } from "./case-carousel";

const CASES: CaseItem[] = [
  {
    src: casoPerfil,
    alt: "Antes e depois do sorriso de um paciente, lado a lado",
    label: "Estética do sorriso",
    text: "Sorriso mais claro e harmônico, visto de frente.",
    imgClassName: "object-top",
  },
  {
    src: casoSorriso,
    alt: "Sorriso antes e depois do tratamento, um acima do outro",
    label: "Estética do sorriso",
    text: "Dentes mais uniformes, com cor e formato naturais.",
  },
  {
    src: casoFacetas,
    alt: "Dentes desgastados antes e sorriso alinhado depois",
    label: "Estética do sorriso",
    text: "Dentes desgastados recuperam formato e proporção.",
  },
  {
    src: casoEtapas,
    alt: "Três etapas do tratamento de um paciente que tinha dentes faltando",
    label: "Reabilitação oral",
    text: "Dentes que faltavam, devolvidos etapa por etapa.",
  },
  {
    src: casoResina,
    alt: "Restaurações metálicas antigas substituídas por resina da cor do dente",
    label: "Resina composta",
    text: "Restaurações metálicas antigas trocadas por resina da cor do dente.",
  },
  {
    src: casoLateral,
    alt: "Vista lateral dos dentes antes e depois do tratamento",
    label: "Estética do sorriso",
    text: "O mesmo cuidado visto de lado: antes e depois.",
  },
];

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

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          <Reveal className="lg:col-span-2">
            <BeforeAfter
              before={reabAntes}
              after={reabDepois}
              alt="sorriso de uma paciente com dentes faltando e o sorriso reabilitado"
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="aspect-video"
            />
          </Reveal>
          <RevealImage
            src={reabRetrato}
            alt="A mesma paciente sorrindo depois da reabilitação oral"
            sizes="(min-width: 1024px) 33vw, 100vw"
            delay={0.15}
            className="aspect-[4/5] rounded-[4px] lg:aspect-auto lg:h-full"
            imgClassName="object-top"
          >
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/95 to-transparent p-5 pt-16">
              <span className="mb-1 block text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                Reabilitação oral
              </span>
              <span className="font-serif text-xl">Um sorriso devolvido por completo.</span>
            </figcaption>
          </RevealImage>
        </div>

        <div className="mt-14 lg:mt-16">
          <CaseCarousel items={CASES} />
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Imagens de pacientes reais, publicadas com autorização. Cada caso tem um planejamento próprio.
        </p>
      </Container>
    </section>
  );
}
