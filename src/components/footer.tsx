import { AtSign, MessageCircle, Star } from "lucide-react";
import { CRO, GOOGLE_REVIEW_URL, INSTAGRAM_URL, NAV_LINKS, UNITS, WHATSAPP, WHATSAPP_LABEL } from "@/lib/content";
import { Container } from "./ui";
import { Logo } from "./logo";

const linkClass = "transition-colors hover:text-gold";
const titleClass = "mb-5 font-serif text-lg font-medium text-foreground";

export function Footer() {
  const contacts = [
    { href: `https://wa.me/${WHATSAPP}`, icon: MessageCircle, label: `WhatsApp ${WHATSAPP_LABEL}` },
    { href: INSTAGRAM_URL, icon: AtSign, label: "@dr.weslleycc" },
    { href: GOOGLE_REVIEW_URL, icon: Star, label: "Avaliar no Google" },
  ];

  return (
    <footer className="border-t border-border bg-black text-sm text-muted">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr] lg:gap-10 lg:py-20">
        <div>
          {/* o logo centraliza a si mesmo no menu; aqui fica alinhado à esquerda */}
          <div className="flex">
            <Logo />
          </div>
          <p className="mt-6 max-w-[320px] leading-relaxed">
            Cirurgião-dentista em Juazeiro do Norte e Lavras da Mangabeira. Planejamento, estética e cuidado em cada
            etapa.
          </p>
          <ul className="mt-6 grid gap-3">
            {contacts.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2.5 ${linkClass}`}>
                  <Icon size={16} className="text-gold" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {UNITS.map((u) => (
          <div key={u.id}>
            <h3 className={titleClass}>{u.name}</h3>
            <p className="leading-relaxed">{u.address}</p>
            {u.reference && <p className="mt-1">{u.reference}</p>}
            {u.hours.map((h) => (
              <p key={h.days} className="mt-4 leading-relaxed">
                <span className="text-foreground">{h.days}</span>
                <br />
                {h.time}
              </p>
            ))}
          </div>
        ))}

        <nav aria-label="Rodapé">
          <h3 className={titleClass}>Navegação</h3>
          <ul className="grid gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#pre-cadastro" className={linkClass}>
                Pré-cadastro
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col justify-between gap-2 py-6 text-xs sm:flex-row">
          <span>Dr. Weslley Cabral · Cirurgião-dentista · {CRO}</span>
          <span>© {new Date().getFullYear()} Instituto Dr. Weslley Cabral</span>
        </Container>
      </div>
    </footer>
  );
}
