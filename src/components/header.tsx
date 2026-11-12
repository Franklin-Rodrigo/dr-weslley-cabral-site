"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_HREF, NAV_LINKS } from "@/lib/content";
import { ButtonLink, Container } from "./ui";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const close = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    // trava a rolagem da página enquanto o menu está aberto
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const left = NAV_LINKS.slice(0, 3);
  const right = NAV_LINKS.slice(3, 4);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="grid h-20 grid-cols-[auto_1fr] items-center gap-6 lg:h-[98px] lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Principal" className="hidden gap-8 text-[15px] font-medium lg:flex">
          {left.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <Logo />

        <div className="flex items-center justify-end gap-8">
          {right.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-[15px] font-medium transition-colors hover:text-gold lg:inline">
              {l.label}
            </a>
          ))}
          <span className="hidden md:block">
            <ButtonLink href={BOOKING_HREF} className="px-6! py-4!">
              Agendar consulta
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-[2px] border border-border lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl last:border-0"
              >
                {l.label}
              </a>
            ))}
            <ButtonLink href={BOOKING_HREF} onClick={() => setOpen(false)} className="mt-4">
              Agendar consulta
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
