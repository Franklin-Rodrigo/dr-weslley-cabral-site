"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfter({
  before,
  after,
  alt,
  sizes,
  className = "",
}: {
  before: StaticImageData;
  after: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className={`relative overflow-hidden rounded-[4px] bg-surface select-none ${className}`}>
      <Image src={after} alt={`Depois: ${alt}`} fill placeholder="blur" sizes={sizes} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`Antes: ${alt}`} fill placeholder="blur" sizes={sizes} className="object-cover" />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-[2px] bg-background/85 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
        Antes
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-[2px] bg-gold px-3 py-1.5 text-sm font-medium text-gold-foreground">
        Depois
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-gold" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg">
          <ChevronsLeftRight size={20} aria-hidden />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Arraste para comparar antes e depois"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
