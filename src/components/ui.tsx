import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "ghost" | "inverse";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-gold-foreground border-gold hover:brightness-110",
  ghost: "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-gold-foreground",
  inverse: "bg-gold-foreground text-gold border-gold-foreground hover:brightness-125",
};

export function buttonClass(variant: Variant = "gold", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-[2px] border px-7 py-[18px] text-center text-[15px] leading-none font-semibold transition duration-200 motion-safe:hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${extra}`;
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
    <p className={`mb-4 text-xs font-semibold tracking-[0.15em] text-gold uppercase ${className}`}>{children}</p>
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

/** Espaço reservado para foto, até o Dr. Weslley mandar as imagens reais. */
export function PhotoPlaceholder({
  label,
  badge,
  silhouette = true,
  className = "",
}: {
  label: string;
  badge?: string;
  silhouette?: boolean;
  className?: string;
}) {
  return (
    <figure
      aria-label={label}
      className={`relative m-0 flex items-end justify-center overflow-hidden bg-linear-to-br from-gold-deep to-background ${className}`}
    >
      {silhouette && (
        <>
          <span className="absolute top-[36%] left-1/2 aspect-square w-[22%] max-w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30" />
          <span className="absolute bottom-0 left-1/2 h-[36%] w-[62%] -translate-x-1/2 rounded-t-[50%] bg-gold/30" />
        </>
      )}
      {badge && (
        <span className="absolute top-6 left-6 z-10 flex items-center gap-2.5 rounded-[2px] bg-background px-4 py-2.5 text-sm font-medium">
          <i className="size-2.5 rounded-full bg-gold" />
          {badge}
        </span>
      )}
      <figcaption className="relative z-10 pb-6 text-center text-xs font-semibold tracking-[0.12em] text-gold uppercase">
        {label}
      </figcaption>
    </figure>
  );
}
