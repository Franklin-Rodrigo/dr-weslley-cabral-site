// ===== Configuração =====
// Endereço do site de agendamento. Enquanto estiver vazio, os botões "Agendar" levam ao pré-cadastro.
const BOOKING_URL = '';

// WhatsApp de cada unidade (DDI + DDD + número, só dígitos)
const UNIDADES = {
  'Juazeiro do Norte': '5588992228841',
  'Lavras da Mangabeira': '5588999566867',
};

// ===== Botões de agendamento =====
if (BOOKING_URL) {
  document.querySelectorAll('[data-booking]').forEach((a) => {
    a.href = BOOKING_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

// ===== Botões "Chamar no WhatsApp" das unidades =====
document.querySelectorAll('[data-wa]').forEach((a) => {
  const msg = 'Olá, Dr. Weslley! Gostaria de agendar uma avaliação.';
  a.href = `https://wa.me/${a.dataset.wa}?text=${encodeURIComponent(msg)}`;
});

// ===== Pré-cadastro =====
const form = document.getElementById('form');
const previa = document.getElementById('previa');
const erro = document.getElementById('erro');
const val = (n) => form.elements[n].value.trim();

function montaMensagem(preview) {
  const nome = val('nome') || (preview ? 'Maria Souza' : '');
  const tel = val('tel') || (preview ? '88 9 0000-0000' : '');
  const un = val('unidade');
  const trat = val('trat');
  const per = val('periodo');
  const obs = val('obs') || (preview ? 'Quero clarear os dentes e tenho sensibilidade.' : '');

  const interesse = trat === 'Ainda não sei' ? 'conhecer as opções de tratamento' : `uma avaliação de ${trat.toLowerCase()}`;
  let m = `Olá, Dr. Weslley! Me chamo ${nome}${tel ? ` (${tel})` : ''}. Gostaria de ${interesse} na unidade de ${un}, no período da ${per}.`;
  if (obs) m += ` ${obs}`;
  return m;
}

function atualizaPrevia() {
  previa.textContent = montaMensagem(true);
}
form.addEventListener('input', atualizaPrevia);
form.addEventListener('change', atualizaPrevia);
atualizaPrevia();

// máscara simples de telefone: (88) 9 0000-0000
form.elements.tel.addEventListener('input', (e) => {
  let d = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (d.length > 6) d = `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
  else if (d.length > 3) d = `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  else if (d.length > 2) d = `(${d.slice(0, 2)}) ${d.slice(2)}`;
  e.target.value = d.replace(/[\s-]+$/, '');
  atualizaPrevia();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const digitos = val('tel').replace(/\D/g, '');
  const faltando = [];
  if (val('nome').length < 3) faltando.push('nome');
  if (digitos.length < 10) faltando.push('WhatsApp');

  form.querySelectorAll('.f').forEach((f) => f.classList.remove('invalid'));
  if (faltando.length) {
    erro.hidden = false;
    erro.textContent = `Preencha seu ${faltando.join(' e ')} para enviar.`;
    (val('nome').length < 3 ? form.elements.nome : form.elements.tel).closest('.f').classList.add('invalid');
    (val('nome').length < 3 ? form.elements.nome : form.elements.tel).focus();
    return;
  }
  erro.hidden = true;

  const numero = UNIDADES[val('unidade')];
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(montaMensagem(false))}`, '_blank', 'noopener');
});
