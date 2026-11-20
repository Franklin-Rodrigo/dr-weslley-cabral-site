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
import { Gallery, type GalleryItem } from "./gallery";

const PORTRAIT = "aspect-[3/4] lg:col-span-4";
const PORTRAIT_SIZES = "(min-width: 1024px) 33vw, 50vw";

const PHOTOS: GalleryItem[] = [
  {
    src: recepcao,
    alt: "Recepção com balcão escuro, monograma WC na parede e luminária de hexágonos no teto",
    label: "Recepção",
    className: "col-span-2 aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:h-[520px]",
    sizes: "(min-width: 1024px) 58vw, 100vw",
    parallax: true,
  },
  {
    src: consultorio,
    alt: "Consultório com cadeira odontológica, mesa de atendimento e parede com a marca do Instituto Dr. Weslley Cabral",
    label: "Consultório 1",
    className: "col-span-2 aspect-[3/4] sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:h-[520px]",
    sizes: "(min-width: 1024px) 42vw, 100vw",
    parallax: true,
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
        <Gallery items={PHOTOS} className="grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-6" />
      </Container>
    </section>
  );
}
