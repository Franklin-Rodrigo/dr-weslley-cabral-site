"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { FORM_TREATMENTS, PERIODS, UNITS } from "@/lib/content";
import { Container, Eyebrow, SectionTitle } from "./ui";
import { Reveal } from "./reveal";

type Data = { name: string; phone: string; unit: string; treatment: string; period: string; notes: string };

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length > 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
  if (d.length > 3) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  if (d.length > 2) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return d;
}

function buildMessage(d: Data, preview: boolean) {
  const name = d.name.trim() || (preview ? "Maria Souza" : "");
  const phone = d.phone.trim() || (preview ? "(88) 9 0000-0000" : "");
  const notes = d.notes.trim() || (preview ? "Quero clarear os dentes e tenho sensibilidade." : "");
  const unit = UNITS.find((u) => u.id === d.unit)?.name ?? "";
  const interest =
    d.treatment === "Ainda não sei" ? "conhecer as opções de tratamento" : `uma avaliação de ${d.treatment.toLowerCase()}`;

  let msg = `Olá, Dr. Weslley! Me chamo ${name}${phone ? `, meu WhatsApp é ${phone}` : ""}. Gostaria de ${interest} na unidade de ${unit}, no período da ${d.period.toLowerCase()}.`;
  if (notes) msg += ` ${notes}`;
  return msg;
}

const inputClass =
  "w-full rounded-[4px] border border-border bg-background px-5 py-4 text-base text-foreground placeholder:text-muted transition-colors focus:border-gold focus:outline-none aria-invalid:border-[#d9685c]";

function Chips({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mb-6">
      <legend className="mb-2 text-[13px] font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((o) => (
          <label key={o.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className="inline-block rounded-[2px] border border-border px-4 py-2.5 text-sm font-medium transition peer-checked:border-gold peer-checked:bg-gold peer-checked:font-semibold peer-checked:text-gold-foreground peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-foreground hover:border-gold">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function PreRegister() {
  const id = useId();
  const [data, setData] = useState<Data>({
    name: "",
    phone: "",
    unit: UNITS[0].id,
    treatment: FORM_TREATMENTS[0],
    period: PERIODS[0],
    notes: "",
  });
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const set = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = {
      name: data.name.trim().length < 3,
      phone: data.phone.replace(/\D/g, "").length < 10,
    };
    setErrors(next);
    if (next.name || next.phone) {
      document.getElementById(`${id}-${next.name ? "name" : "phone"}`)?.focus();
      return;
    }
    const unit = UNITS.find((u) => u.id === data.unit) ?? UNITS[0];
    const url = `https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(buildMessage(data, false))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const missing = [errors.name && "nome", errors.phone && "WhatsApp"].filter(Boolean);

  return (
    <section id="pre-cadastro" className="bg-surface-alt py-20 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,680px)] lg:gap-16">
        <Reveal>
          <Eyebrow>Pré-cadastro</Eyebrow>
          <SectionTitle className="max-w-[520px]">Conte o que você precisa e fale direto com a clínica</SectionTitle>
          <p className="mt-5 max-w-[500px] text-lg text-muted">
            Preencha seus dados e o que você busca. Ao enviar, o WhatsApp abre com a mensagem já pronta para o consultório.
          </p>
          <ol className="mt-7 mb-8 grid gap-3.5">
            {[
              "Preencha seus dados e o tratamento de interesse",
              "Clique em enviar",
              "O WhatsApp abre com tudo pronto, é só confirmar",
            ].map((s, i) => (
              <li key={s} className="flex items-center gap-4 font-medium">
                <b className="grid size-9 shrink-0 place-items-center rounded-full bg-gold font-serif text-base font-medium text-gold-foreground">
                  {i + 1}
                </b>
                {s}
              </li>
            ))}
          </ol>
          <p className="mb-3.5 text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            Prévia da mensagem que vai para o WhatsApp
          </p>
          <div aria-live="polite" className="max-w-[480px] rounded-2xl bg-[#DCF8C6] px-5 py-4 text-[15px] leading-relaxed text-[#1F2D1F]">
            {buildMessage(data, true)}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form noValidate onSubmit={onSubmit} className="rounded-[4px] border border-border bg-surface p-6 sm:p-10">
            <div className="mb-6">
              <label htmlFor={`${id}-name`} className="mb-2 block text-[13px] font-semibold">
                Nome completo
              </label>
              <input
                id={`${id}-name`}
                type="text"
                autoComplete="name"
                placeholder="Como você se chama?"
                value={data.name}
                aria-invalid={errors.name || undefined}
                onChange={(e) => set("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="mb-6">
              <label htmlFor={`${id}-phone`} className="mb-2 block text-[13px] font-semibold">
                Seu WhatsApp
              </label>
              <input
                id={`${id}-phone`}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(88) 9 0000-0000"
                value={data.phone}
                aria-invalid={errors.phone || undefined}
                onChange={(e) => set("phone", formatPhone(e.target.value))}
                className={inputClass}
              />
            </div>

            <Chips
              legend="Unidade"
              name="unidade"
              options={UNITS.map((u) => ({ value: u.id, label: u.name }))}
              value={data.unit}
              onChange={(v) => set("unit", v)}
            />
            <Chips
              legend="Tratamento de interesse"
              name="tratamento"
              options={FORM_TREATMENTS.map((t) => ({ value: t, label: t }))}
              value={data.treatment}
              onChange={(v) => set("treatment", v)}
            />
            <Chips
              legend="Melhor período"
              name="periodo"
              options={PERIODS.map((p) => ({ value: p, label: p }))}
              value={data.period}
              onChange={(v) => set("period", v)}
            />

            <div className="mb-6">
              <label htmlFor={`${id}-notes`} className="mb-2 block text-[13px] font-semibold">
                Conte o que você precisa
              </label>
              <textarea
                id={`${id}-notes`}
                rows={4}
                placeholder="Ex.: quero clarear os dentes, tenho sensibilidade, quero marcar para esta semana..."
                value={data.notes}
                onChange={(e) => set("notes", e.target.value)}
                className={`${inputClass} min-h-28 resize-y`}
              />
            </div>

            {missing.length > 0 && (
              <p role="alert" className="mb-4 text-sm text-[#e88b80]">
                Preencha seu {missing.join(" e ")} para enviar.
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[2px] bg-gold py-5 text-[17px] font-semibold text-gold-foreground transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Enviar pelo WhatsApp <ArrowRight size={18} aria-hidden />
            </button>
            <p className="mt-4 text-center text-[13px] text-muted">Seus dados seguem direto para o WhatsApp do consultório.</p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
