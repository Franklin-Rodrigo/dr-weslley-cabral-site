// Todo o conteúdo do site fica aqui. Itens marcados com "a confirmar" ou 00000 ainda precisam do dado real.

/** Endereço do site de agendamento. Vazio: os botões "Agendar" levam ao pré-cadastro. */
export const BOOKING_URL = "";

export const BOOKING_HREF = BOOKING_URL || "#pre-cadastro";
export const BOOKING_LABEL = "Agendar pelo nosso site de agendamento";

/** WhatsApp do consultório: recebe o pré-cadastro e os botões das duas unidades. Só dígitos, com DDI. */
export const WHATSAPP = "558892228841";
export const WHATSAPP_LABEL = "(88) 9222-8841";

export const INSTAGRAM_URL = "https://www.instagram.com/dr.weslleycc/";
export const CRO = "CRO-CE 00000";

export type Unit = {
  id: string;
  name: string;
  city: string;
  whatsapp: string; // só dígitos, com DDI
  phoneLabel: string;
  address: string;
  hours: { days: string; time: string }[];
};

export const UNITS: Unit[] = [
  {
    id: "juazeiro",
    name: "Juazeiro do Norte",
    city: "Juazeiro do Norte, CE",
    whatsapp: WHATSAPP,
    phoneLabel: WHATSAPP_LABEL,
    address: "Av. Leão Sampaio, 3200 - Lagoa Seca, Juazeiro do Norte - CE",
    hours: [{ days: "Segunda a sexta", time: "9h às 12h e 14h às 18h" }],
  },
  {
    id: "lavras",
    name: "Lavras da Mangabeira",
    city: "Lavras da Mangabeira, CE",
    whatsapp: WHATSAPP,
    phoneLabel: WHATSAPP_LABEL,
    address: "Rua Ferroviária, 15B, Lavras da Mangabeira - CE",
    hours: [{ days: "Quinta a sábado", time: "8h às 12h e 14h às 18h" }],
  },
];

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#unidades", label: "Unidades" },
];

export const HERO = {
  eyebrow: "Cirurgião-dentista · Juazeiro do Norte e Lavras",
  title: "Seu sorriso devolvido por completo.",
  subtitle:
    "Planejamento, estética e cuidado em cada etapa. Atendimento com o Dr. Weslley Cabral em duas unidades no Ceará.",
};

export const STATS = [
  { value: "10,4 mil", label: "pessoas acompanham no Instagram" },
  { value: "2 unidades", label: "Juazeiro do Norte e Lavras da Mangabeira" },
  { value: "Online", label: "agendamento pelo site e atendimento pelo WhatsApp" },
];

export const TREATMENTS = [
  {
    title: "Clareamento dental",
    text: "Sorriso mais claro com planejamento e segurança, sem atalhos que prejudicam o esmalte.",
  },
  { title: "Resina composta", text: "Restaurações e correções estéticas com acabamento natural e discreto." },
  { title: "Reabilitação oral", text: "Seu sorriso devolvido por completo: função, conforto e estética." },
  { title: "Lentes e facetas", text: "Ajuste de formato, cor e proporção para um sorriso harmônico." },
  { title: "Limpeza e prevenção", text: "Cuidado de rotina para manter o resultado por mais tempo." },
  { title: "Avaliação inicial", text: "Diagnóstico e plano de tratamento pensado para o seu caso." },
];

export const ABOUT = {
  paragraphs: [
    "Cirurgião-dentista com atendimento em Juazeiro do Norte e Lavras da Mangabeira, focado em devolver função e estética com planejamento individual para cada paciente.",
    "Fora do consultório, é apaixonado por perfumaria, e leva a mesma atenção aos detalhes para o atendimento.",
  ],
  highlights: [
    "Planejamento personalizado em cada caso",
    "Atendimento em duas cidades",
    "Acompanhamento direto pelo WhatsApp",
    CRO,
  ],
};

export const FORM_TREATMENTS = [
  "Clareamento",
  "Resina composta",
  "Reabilitação oral",
  "Lentes e facetas",
  "Limpeza",
  "Avaliação inicial",
  "Ainda não sei",
];

export const PERIODS = ["Manhã", "Tarde", "Noite"];
