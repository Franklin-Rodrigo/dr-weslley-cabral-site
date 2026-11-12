import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/content";
import { ButtonLink, Container } from "./ui";

export function FinalCta() {
  return (
    <section className="bg-gold py-20 text-gold-foreground lg:py-24">
      <Container className="text-center">
        <h2 className="mx-auto mb-9 max-w-[1000px] font-serif text-[clamp(2.1rem,4.6vw,4rem)] leading-[1.06] font-medium text-balance">
          Pronto para o sorriso que você merece?
        </h2>
        <ButtonLink href={BOOKING_HREF} variant="inverse">
          {BOOKING_LABEL}
        </ButtonLink>
      </Container>
    </section>
  );
}
