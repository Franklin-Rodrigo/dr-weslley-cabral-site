import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "ghost" | "inverse";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-gold-foreground border-gold hover:brightness-110",
  ghost: "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-gold-foreground",
  inverse: "bg-gold-foreground text-gold border-gold-foreground hover:brightness-125",
};

/** Brilho que atravessa o botão ao passar o mouse. */
const shine =
  "relative isolate overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/2 before:-skew-x-12 before:bg-linear-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[400%] motion-reduce:before:hidden";

export function buttonClass(variant: Variant = "gold", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-[2px] border px-7 py-[18px] text-center text-[15px] leading-none font-semibold transition duration-200 motion-safe:hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${shine} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  variant = "gold",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  const external = typeof props.href === "string" && props.href.startsWith("http");
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className={buttonClass(variant, className)}
    />
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.15em] text-gold uppercase ${className}`}>
      <span aria-hidden className="h-px w-8 shrink-0 bg-gold" />
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.1] font-medium text-balance ${className}`}>
      {children}
    </h2>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1328px] px-6 ${className}`}>{children}</div>;
}
