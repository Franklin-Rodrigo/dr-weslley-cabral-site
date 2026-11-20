"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "motion/react";
import monograma from "@/assets/monograma.png";

/**
 * Abertura: o monograma WC aparece no centro da tela e voa até o lugar dele no menu.
 *
 * Quem decide se ela toca é o script no <head> (layout.tsx), antes da página pintar:
 * só na primeira visita da sessão, sem âncora na URL e sem "reduzir movimento".
 * Ele marca <html data-intro="play">; o CSS mostra esta camada e pausa a abertura da foto.
 * Na hora do voo vira data-intro="fly" (a foto e o título começam a entrar) e no fim o atributo some.
 * Clicar, rolar ou apertar uma tecla adianta direto para o voo.
 */
export function Intro() {
  const bgRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const bg = bgRef.current;
    const mark = markRef.current;
    const caption = captionRef.current;
    const line = lineRef.current;
    if (root.dataset.intro !== "play" || !bg || !mark || !caption || !line) return;

    let alive = true;
    let skip = () => {};
    const skipped = new Promise<void>((resolve) => (skip = resolve));
    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, skip, { once: true, passive: true }));
    const wait = (ms: number) => Promise.race([new Promise<void>((r) => setTimeout(r, ms)), skipped]);

    const finish = () => {
      delete root.dataset.intro;
      try {
        sessionStorage.setItem("intro-visto", "1");
      } catch {}
    };

    (async () => {
      // 1. o WC surge no centro, com o nome embaixo
      animate(mark, { opacity: [0, 1], scale: [0.86, 1], filter: ["blur(12px)", "blur(0px)"] }, { duration: 0.75, ease: [0.22, 1, 0.36, 1] });
      animate(line, { scaleX: [0, 1] }, { duration: 0.8, delay: 0.3, ease: [0.7, 0, 0.2, 1] });
      animate(caption, { opacity: [0, 1], y: [10, 0] }, { duration: 0.6, delay: 0.3, ease: "easeOut" });

      await wait(1200);
      if (!alive) return;

      // 2. voo até o logo do menu, enquanto o fundo some e a página entra
      root.dataset.intro = "fly";
      animate(caption, { opacity: 0, y: -6 }, { duration: 0.25 });
      animate(bg, { opacity: 0 }, { duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] });

      const target = document.querySelector("header [data-logo-mark]")?.getBoundingClientRect();
      if (target && target.height > 0) {
        const from = mark.getBoundingClientRect();
        await animate(
          mark,
          {
            x: target.left + target.width / 2 - (from.left + from.width / 2),
            y: target.top + target.height / 2 - (from.top + from.height / 2),
            scale: target.height / mark.offsetHeight,
            opacity: 1,
            filter: "blur(0px)",
          },
          { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
        );
      } else {
        await animate(mark, { opacity: 0 }, { duration: 0.3 });
      }
      if (alive) finish();
    })();

    return () => {
      alive = false;
      events.forEach((e) => window.removeEventListener(e, skip));
    };
  }, []);

  return (
    <div data-intro-overlay aria-hidden className="pointer-events-none fixed inset-0 z-[100] items-center justify-center">
      <div ref={bgRef} className="absolute inset-0 bg-background" />
      <div className="relative flex flex-col items-center">
        <div ref={markRef} className="opacity-0">
          <Image src={monograma} alt="" priority className="h-28 w-auto sm:h-36" />
        </div>
        <div ref={captionRef} className="mt-7 flex flex-col items-center opacity-0">
          <span ref={lineRef} className="mb-5 block h-px w-24 origin-center scale-x-0 bg-gold" />
          <span className="font-serif text-xl text-foreground sm:text-2xl">Dr. Weslley Cabral</span>
          <span className="mt-1.5 text-[11px] tracking-[0.28em] text-muted uppercase">Cirurgião-dentista</span>
        </div>
      </div>
    </div>
  );
}
