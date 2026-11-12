import { CRO, INSTAGRAM_URL } from "@/lib/content";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-black text-sm font-medium text-muted">
      <Container className="flex flex-col justify-between gap-3 py-8 sm:flex-row">
        <span>Dr. Weslley Cabral · Cirurgião-dentista · {CRO}</span>
        <span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            @dr.weslleycc
          </a>{" "}
          · Instituto Dr. Weslley · © {new Date().getFullYear()}
        </span>
      </Container>
    </footer>
  );
}
