"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/content";

const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Dr. Weslley! Gostaria de agendar uma avaliação.")}`;

/** Botão fixo de WhatsApp: aparece depois que a pessoa sai da abertura. */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 520));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group fixed right-5 bottom-5 z-40 flex items-center gap-3 sm:right-8 sm:bottom-8"
        >
          <span className="pointer-events-none hidden translate-x-2 rounded-[2px] border border-gold/30 bg-background/90 px-4 py-2.5 text-sm font-semibold whitespace-nowrap opacity-0 shadow-lg backdrop-blur-md transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
            Fale no WhatsApp
          </span>
          <span className="relative grid size-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-[0_10px_30px_-8px_rgba(201,164,92,0.6)] transition-transform duration-300 group-hover:scale-105">
            <span aria-hidden className="halo absolute inset-0 rounded-full bg-gold" />
            <MessageCircle size={26} strokeWidth={2.2} className="relative" aria-hidden />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
