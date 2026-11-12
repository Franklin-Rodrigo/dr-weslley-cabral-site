export function Logo() {
  return (
    <a href="#inicio" aria-label="Dr. Weslley Cabral, início" className="flex items-center gap-3 lg:justify-self-center">
      <span className="grid size-[42px] place-items-center rounded-[4px] bg-gold font-serif text-[22px] font-medium text-gold-foreground">
        W
      </span>
      <span className="flex flex-col leading-tight">
        <strong className="font-serif text-[19px] font-medium whitespace-nowrap sm:text-[21px]">Dr. Weslley Cabral</strong>
        <small className="mt-0.5 hidden text-[11px] tracking-[0.09em] text-muted uppercase sm:block">
          Cirurgião-dentista
        </small>
      </span>
    </a>
  );
}
