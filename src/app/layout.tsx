import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";
import { MotionProvider } from "@/components/motion-provider";
import { Intro } from "@/components/intro";

/**
 * Decide antes da primeira pintura se a abertura do WC toca (ver components/intro.tsx).
 * Se algo falhar no JavaScript, o atributo é removido em 6 s para a página nunca ficar presa.
 */
const introScript = `try{var r=document.documentElement;if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!location.hash&&!sessionStorage.getItem("intro-visto")){r.dataset.intro="play";setTimeout(function(){delete r.dataset.intro},6000)}}catch(e){}`;

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const title = "Dr. Weslley Cabral · Cirurgião-dentista";
const description =
  "Cirurgião-dentista em Juazeiro do Norte e Lavras da Mangabeira (CE). Clareamento, resina composta, reabilitação oral, lentes e facetas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "dentista Juazeiro do Norte",
    "dentista Lavras da Mangabeira",
    "Dr. Weslley Cabral",
    "clareamento dental",
    "lentes de contato dental",
    "reabilitação oral",
  ],
  openGraph: { title, description, type: "website", locale: "pt_BR" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0c0c0c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${manrope.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gold-foreground"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Intro />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
