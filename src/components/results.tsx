import Image, { type StaticImageData } from "next/image";
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

type Case = { src: StaticImageData; alt: string; tag: string; position?: string };

const CASES: Case[] = [
  {
    src: casoPerfil,
    alt: "Antes e depois do sorriso de um paciente, lado a lado",
    tag: "Estética do sorriso",
    position: "object-top",
  },
  { src: casoSorriso, alt: "Sorriso antes e depois do tratamento, um acima do outro", tag: "Estética do sorriso" },
  { src: casoFacetas, alt: "Dentes desgastados antes e sorriso alinhado depois", tag: "Estética do sorriso" },
  {
    src: casoEtapas,
    alt: "Três etapas do tratamento de um paciente que tinha dentes faltando",
    tag: "Reabilitação oral",
  },
  {
    src: casoResina,
    alt: "Restaurações metálicas antigas substituídas por resina da cor do dente",
    tag: "Resina composta",
  },
  { src: casoLateral, alt: "Vista lateral dos dentes antes e depois do tratamento", tag: "Estética do sorriso" },
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
          <Reveal delay={120}>
            <figure className="relative m-0 aspect-[4/5] overflow-hidden rounded-[4px] bg-surface lg:aspect-auto lg:h-full">
              <Image
                src={reabRetrato}
                alt="A mesma paciente sorrindo depois da reabilitação oral"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-5 pt-16">
                <span className="mb-1 block text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                  Reabilitação oral
                </span>
                <span className="font-serif text-xl">Um sorriso devolvido por completo.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:mt-6 lg:grid-cols-3 lg:gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.src.src} delay={(i % 3) * 100}>
              <figure className="relative m-0 aspect-square overflow-hidden rounded-[4px] bg-surface">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className={`object-cover ${c.position ?? ""}`}
                />
                <figcaption className="absolute bottom-3 left-3 rounded-[2px] bg-background/85 px-2.5 py-1 text-xs font-medium backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-sm">
                  {c.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Imagens de pacientes reais, publicadas com autorização. Cada caso tem um planejamento próprio.
        </p>
      </Container>
    </section>
  );
}
