import Image from "next/image";
import monograma from "@/assets/monograma.png";

export function Logo() {
  return (
    <a href="#inicio" aria-label="Dr. Weslley Cabral, início" className="flex items-center gap-3 lg:justify-self-center">
      <Image src={monograma} alt="" priority className="h-11 w-auto" />
      <span className="flex flex-col leading-tight">
        <strong className="font-serif text-[19px] font-medium whitespace-nowrap sm:text-[21px]">Dr. Weslley Cabral</strong>
        <small className="mt-0.5 hidden text-[11px] tracking-[0.09em] text-muted uppercase sm:block">
          Cirurgião-dentista
        </small>
      </span>
    </a>
  );
}
