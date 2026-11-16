import Image, { type StaticImageData } from "next/image";
import { MapPin } from "lucide-react";
import recepcao from "@/assets/ambiente/recepcao.webp";
import consultorio from "@/assets/ambiente/consultorio.webp";
import recepcaoBalcao from "@/assets/ambiente/recepcao-balcao.webp";
import salaDeEspera from "@/assets/ambiente/sala-de-espera.webp";
import corredor from "@/assets/ambiente/corredor.webp";
import jardimVertical from "@/assets/ambiente/jardim-vertical.webp";
import salaDeAvaliacao from "@/assets/ambiente/sala-de-avaliacao.webp";
import consultorio2 from "@/assets/ambiente/consultorio-2.webp";
import { Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

type Photo = { src: StaticImageData; alt: string; label: string; className: string; sizes: string };

const PORTRAIT = "aspect-[3/4] lg:col-span-4";
const PORTRAIT_SIZES = "(min-width: 1024px) 33vw, 50vw";

const PHOTOS: Photo[] = [
  {
    src: recepcao,
    alt: "Recepção com balcão escuro, monograma WC na parede e luminária de hexágonos no teto",
    label: "Recepção",
    className: "col-span-2 aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:h-[520px]",
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
  {
    src: consultorio,
    alt: "Consultório com cadeira odontológica, mesa de atendimento e parede com a marca do Instituto Dr. Weslley Cabral",
    label: "Consultório 1",
    className: "col-span-2 aspect-[3/4] sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:h-[520px]",
    sizes: "(min-width: 1024px) 42vw, 100vw",
  },
  {
    src: salaDeAvaliacao,
    alt: "Sala de avaliação com mesa, cadeiras e estante iluminada com o monograma WC",
    label: "Sala de avaliação",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
  {
    src: consultorio2,
    alt: "Segundo consultório com cadeira odontológica, bancada clara e iluminação embutida",
    label: "Consultório 2",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
  {
    src: jardimVertical,
    alt: "Corredor com jardim vertical iluminado",
    label: "Jardim vertical",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
  {
    src: salaDeEspera,
    alt: "Sala de espera com sofá, poltronas e luz natural",
    label: "Sala de espera",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
  {
    src: recepcaoBalcao,
    alt: "Vista da recepção com o balcão de atendimento e a sala de espera ao fundo",
    label: "Balcão de recepção",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
  {
    src: corredor,
    alt: "Corredor com a frase “Conquiste sua melhor versão” na parede",
    label: "Corredor",
    className: PORTRAIT,
    sizes: PORTRAIT_SIZES,
  },
];

export function Ambiente() {
  return (
    <section id="ambiente" className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Ambiente</Eyebrow>
            <SectionTitle>Um espaço pensado para você se sentir bem</SectionTitle>
          </div>
          <p className="flex items-center gap-2 text-muted">
            <MapPin size={18} className="shrink-0 text-gold" aria-hidden />
            Unidade de Juazeiro do Norte
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.label} delay={(i % 3) * 100} className={p.className}>
              <figure className="group relative m-0 h-full overflow-hidden rounded-[4px] bg-surface">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  placeholder="blur"
                  sizes={p.sizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-[2px] bg-background/85 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
