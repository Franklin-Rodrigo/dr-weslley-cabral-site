"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/** Número que conta do zero até o valor quando aparece na tela. */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  suffixOne,
  className = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  /** sufixo no singular, usado quando o número mostrado é 1 (ex.: " unidade") */
  suffixOne?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const fmt = (v: number) => {
    const n = v.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return n + (suffixOne && n === "1" ? suffixOne : suffix);
  };
  const [text, setText] = useState(() => fmt(0));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(fmt(v)),
    });
    return () => controls.stop();
    // fmt depende só de props estáveis
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to]);

  const shown = reduce && inView ? fmt(to) : text;

  return (
    <span ref={ref} className={className}>
      <span aria-hidden className="tabular-nums">
        {shown}
      </span>
      <span className="sr-only">{fmt(to)}</span>
    </span>
  );
}
