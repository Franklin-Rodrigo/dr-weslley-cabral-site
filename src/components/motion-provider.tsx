"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Quem pede "reduzir movimento" no aparelho vê o site sem animações de deslocamento. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
