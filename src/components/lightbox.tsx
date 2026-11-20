"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type LightboxItem = { src: StaticImageData; alt: string; label: string };

/** Foto em tela cheia, com setas, teclado (← → Esc) e arrastar com o dedo. */
export function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: LightboxItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const [dir, setDir] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);
  const startX = useRef<number | null>(null);
  const item = items[index];

  const go = (step: number) => {
    setDir(step);
    onIndex((index + step + items.length) % items.length);
  };

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${items.length}: ${item.label}`}
      className="fixed inset-0 z-[70] flex flex-col bg-black/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <p className="text-sm">
          <span className="font-serif text-lg text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-muted"> / {String(items.length).padStart(2, "0")}</span>
          <span className="ml-4 font-medium">{item.label}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
        >
          <X size={20} />
        </button>
      </div>

      <div
        className="relative flex-1 touch-pan-y"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            className="absolute inset-x-4 top-0 bottom-4 sm:inset-x-20 sm:bottom-8"
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" draggable={false} />
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute top-1/2 left-3 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-black/50 transition-colors hover:border-gold hover:text-gold sm:grid"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="absolute top-1/2 right-3 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-black/50 transition-colors hover:border-gold hover:text-gold sm:grid"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      <p className="px-5 py-4 text-center text-xs text-muted sm:hidden">Arraste para o lado para ver as outras fotos</p>
    </motion.div>
  );
}
