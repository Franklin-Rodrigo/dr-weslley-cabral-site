# Dr. Weslley Cabral · site

Site do cirurgião-dentista Dr. Weslley Cabral (Juazeiro do Norte e Lavras da Mangabeira, CE). Modelo "Ouro e Preto", escolhido entre 10 propostas de design.

Next.js (App Router), TypeScript e Tailwind CSS v4. Publicado na Vercel: cada push na `main` atualiza o site.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Editando o conteúdo

Todos os textos e dados ficam em `src/lib/content.ts`:

- `WHATSAPP`: número que recebe o pré-cadastro e os botões das unidades.
- `BOOKING_URL`: endereço do site de agendamento. Vazio, os botões "Agendar" levam ao pré-cadastro.
- `UNITS`: cidade e endereço de cada unidade.
- `CRO`, tratamentos, textos do "Sobre".

## O que ainda falta

- Fotos reais (abertura, retrato, casos de antes e depois): hoje são espaços reservados.
- Endereço do site de agendamento.

## Pré-cadastro

O formulário monta a mensagem e abre o WhatsApp do consultório (`wa.me`) com o texto pronto, sem back-end.
