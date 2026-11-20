"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const CURTAIN = [0.77, 0, 0.175, 1] as const;
const SETTLE = [0.22, 1, 0.36, 1] as const;

/**
 * Foto que surge com uma cortina subindo e um leve recuo de zoom.
 * Com `parallax`, a foto rola um pouco mais devagar que a página.
 *
 * O recorte fica numa camada interna: o Chrome não avisa que um elemento
 * 100% recortado entrou na tela, então quem é observado é a moldura externa.
 */
export function RevealImage({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  parallax = false,
  delay = 0,
  children,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
  delay?: number;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const curtain: Variants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    shown: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: reduce ? { duration: 0 } : { duration: 1.1, ease: CURTAIN, delay },
    },
  };
  const settle: Variants = {
    hidden: { scale: 1.15 },
    shown: { scale: 1, transition: { duration: 1.6, ease: SETTLE, delay } },
  };

  return (
    <motion.figure
      ref={ref}
      className={`relative m-0 overflow-hidden ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={curtain} className="absolute inset-0 overflow-hidden bg-surface">
        <motion.div
          variants={settle}
          className={`absolute inset-x-0 ${parallax ? "-inset-y-[8%]" : "inset-y-0"}`}
          style={parallax ? { y } : undefined}
        >
          <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className={`object-cover ${imgClassName}`} />
        </motion.div>
        {children}
      </motion.div>
    </motion.figure>
  );
}
