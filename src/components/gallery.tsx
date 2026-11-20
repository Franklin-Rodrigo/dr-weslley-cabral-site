"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Expand } from "lucide-react";
import { RevealImage } from "./reveal-image";
import { Lightbox, type LightboxItem } from "./lightbox";

export type GalleryItem = LightboxItem & {
  className?: string;
  imgClassName?: string;
  sizes: string;
  parallax?: boolean;
};

/** Grade de fotos com cortina ao aparecer; clicar abre a foto em tela cheia. */
export function Gallery({ items, className = "" }: { items: GalleryItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {items.map((it, i) => (
          <RevealImage
            key={it.src.src}
            src={it.src}
            alt={it.alt}
            sizes={it.sizes}
            parallax={it.parallax}
            delay={(i % 3) * 0.1}
            className={`group rounded-[4px] ${it.className ?? ""}`}
            imgClassName={`transition-transform duration-700 group-hover:scale-[1.04] ${it.imgClassName ?? ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Ampliar foto: ${it.label}`}
              className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-gold"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-background/80 text-gold opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
            >
              <Expand size={17} />
            </span>
            <figcaption className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-[2px] bg-background/85 px-2.5 py-1 text-xs font-medium backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-sm">
              {it.label}
            </figcaption>
          </RevealImage>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
