const hero = document.querySelector('.hero');
const title = document.getElementById('hero-title');
const sub = document.getElementById('hero-sub');
const btn = document.getElementById('hero-btn');
const dotsContainer = document.querySelector('.dots');

const slides = [
  {
    img: "https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-28275-desktop.webp",
    title: "Primeira parcela para depois da páscoa",
    sub: "Encontre o seminovo ideal para você.",
    button: "Ver Catálogo"
  },
  {
    img: "https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-19645-desktop.webp",
    title: "Blidandadosa  à pronta entrega",
    sub: "Veículos revisados e com procedência.",
    button: "Ver Estoque"
  },
  {
    img: "https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-28419-desktop.webp",
    title: "conheça nossa loja",
    sub: "Venha conhecer nossa frota.",
    button: "ver mais"
  },
  {
    img: "https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-92727-desktop.webp",
    title: "IPVA grátis para você",
    sub: "Condições especiais para você.",
    button: "Saiba Mais"
  },
  {
    img: "https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-43088-desktop.webp",
    title: "Atendimento personalizado",
    sub: "Nossa equipe está pronta para ajudar.",
    button: "Falar com Consultor"
  }
];

let index = 0;
let interval;

// Criar bolinhas
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    index = i;
    changeSlide();
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

function changeSlide() {
  hero.style.backgroundImage = `url(${slides[index].img})`;
  title.textContent = slides[index].title;
  sub.textContent = slides[index].sub;
  btn.textContent = slides[index].button;

  document.querySelectorAll('.dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Reinicia animação
  const text = document.querySelector('.hero-text');
  text.style.animation = 'none';
  text.offsetHeight;
  text.style.animation = 'slideDown 1s ease';
}

function nextSlide() {
  index = (index + 1) % slides.length;
  changeSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  changeSlide();
}

// Setas
document.querySelector('.right').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.left').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Auto play
function startInterval() {
  interval = setInterval(nextSlide, 7000);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Inicializar
changeSlide();
startInterval();

// =========================
// MODAL - análise de crédito
// (agora usando #telephone)
// =========================
const creditForm = document.getElementById("creditForm");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");
const telephone = document.getElementById("telephone");

function openModal() {
  successModal.classList.add("show");
  successModal.setAttribute("aria-hidden", "false");
}

function closeModalFn() {
  successModal.classList.remove("show");
  successModal.setAttribute("aria-hidden", "true");
}

// (Opcional) máscara simples para telefone (BR) ao digitar
function formatPhoneBR(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11); // limita 11
  const d = digits;

  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; // 11 dígitos
}

if (telephone) {
  telephone.addEventListener("input", (e) => {
    e.target.value = formatPhoneBR(e.target.value);
  });
}

if (creditForm) {
  creditForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = (telephone?.value || "").trim();
    // validação mínima: pelo menos 10 dígitos (com DDD)
    const digits = value.replace(/\D/g, "");

    if (digits.length < 10) {
      // se quiser, dá pra trocar por um aviso inline depois
      alert("Digite um telefone válido com DDD (ex: (11) 99999-9999).");
      return;
    }

    openModal();
    creditForm.reset();
  });
}

if (closeModal) closeModal.addEventListener("click", closeModalFn);

if (successModal) {
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) closeModalFn();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && successModal.classList.contains("show")) {
      closeModalFn();
    }
  });
}
