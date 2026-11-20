"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { RevealImage } from "./reveal-image";
import { Lightbox, type LightboxItem } from "./lightbox";

export type CaseItem = LightboxItem & { text: string; imgClassName?: string };

/** Casos em faixa horizontal: rola com o dedo/trackpad ou pelas setas; clicar na foto abre em tela cheia. */
export function CaseCarousel({ items }: { items: CaseItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const progress = useMotionValue(0);
  const bar = useSpring(progress, { stiffness: 220, damping: 30 });

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // a barra mostra quanto da faixa já passou pela tela
    progress.set(el.scrollWidth > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1);
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
  };

  useEffect(() => {
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onScroll);
    };
    // onScroll só lê o DOM e atualiza estado
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step = (dir: number) => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        onScroll={onScroll}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((c, i) => (
          <article
            key={c.src.src}
            data-card
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2.2)] lg:w-[calc((100%-3rem)/3.25)]"
          >
            <RevealImage
              src={c.src}
              alt={c.alt}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 78vw"
              delay={Math.min(i, 3) * 0.08}
              className="group aspect-square rounded-[4px]"
              imgClassName={`transition-transform duration-700 group-hover:scale-[1.04] ${c.imgClassName ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar foto: ${c.label}`}
                className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-gold"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-background/80 text-gold opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              >
                <Expand size={17} />
              </span>
            </RevealImage>
            <p className="mt-5 mb-1.5 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
              {String(i + 1).padStart(2, "0")} · {c.label}
            </p>
            <p className="text-muted">{c.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div className="relative h-px flex-1 bg-border">
          <motion.span style={{ scaleX: bar }} className="absolute inset-0 origin-left bg-gold" />
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={edges.start}
            aria-label="Casos anteriores"
            className="grid size-12 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-35"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={edges.end}
            aria-label="Próximos casos"
            className="grid size-12 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-35"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
