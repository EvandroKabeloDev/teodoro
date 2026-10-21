// ===== Dicas do Teodoro =====

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu do celular
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => menu.classList.toggle("aberto"));
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => menu.classList.remove("aberto"))
);

// Mascote que fala
const frases = [
  "Oi! Eu sou o mascote do Teodoro! 🦙",
  "Beba água e faça pausas! 💧",
  "Nunca conte sua senha! 🔒",
  "Seja gentil com todo mundo! 😊",
  "Treinar construir é muito legal! 🧱",
  "Perder faz parte. Tente de novo! 💪",
  "Peça ajuda a um adulto! 👨‍👩‍👧",
];
let iFrase = 0;
document.getElementById("mascote").addEventListener("click", () => {
  document.getElementById("balao").textContent = frases[iFrase];
  iFrase = (iFrase + 1) % frases.length;
});

// Cartas que viram
document.querySelectorAll(".flip").forEach((carta) =>
  carta.addEventListener("click", () => carta.classList.toggle("virada"))
);

// Confete
function confete() {
  const area = document.getElementById("confete");
  const itens = ["⭐", "🎉", "✨", "🌈", "🦙", "🏆"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("span");
    p.className = "pedaco";
    p.textContent = itens[Math.floor(Math.random() * itens.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 0.6 + "s";
    area.appendChild(p);
    setTimeout(() => p.remove(), 3200);
  }
}

// Relógio de pausa
let timerId = null;
const display = document.getElementById("timerDisplay");
function mostrar(seg) {
  const m = String(Math.floor(seg / 60)).padStart(2, "0");
  const s = String(seg % 60).padStart(2, "0");
  display.textContent = `${m}:${s}`;
}
document.querySelectorAll(".timer-botoes [data-min]").forEach((btn) =>
  btn.addEventListener("click", () => {
    clearInterval(timerId);
    let restante = parseInt(btn.dataset.min, 10) * 60;
    mostrar(restante);
    timerId = setInterval(() => {
      restante--;
      mostrar(restante);
      if (restante <= 0) {
        clearInterval(timerId);
        display.textContent = "Hora da pausa! 🧃🌳";
        confete();
      }
    }, 1000);
  })
);
document.getElementById("pararTimer").addEventListener("click", () => {
  clearInterval(timerId);
  display.textContent = "--:--";
});

// Quiz
const perguntas = [
  {
    p: "Qual peça serve para subir bem alto? 🧗",
    o: ["Parede", "Rampa", "Piso"],
    c: 1,
    e: "A rampa é como uma escada inclinada!",
  },
  {
    p: "Qual é o material mais forte? 💪",
    o: ["Madeira", "Pedra", "Metal"],
    c: 2,
    e: "O metal é o mais resistente de todos!",
  },
  {
    p: "Qual cor mostra o item mais raro? 🌈",
    o: ["Verde", "Azul", "Dourado"],
    c: 2,
    e: "Dourado é lendário! ✨",
  },
  {
    p: "Alguém no jogo pediu seu endereço. O que fazer? 🤔",
    o: ["Contar para ele", "Não contar e avisar um adulto", "Mandar uma foto da casa"],
    c: 1,
    e: "Isso! Informações pessoais são segredo. Sempre avise um adulto.",
  },
  {
    p: "Quando a tempestade está chegando, você deve... 🌪️",
    o: ["Ir para o círculo seguro", "Ficar parado", "Dormir"],
    c: 0,
    e: "Isso aí! Olhe o mapa e vá para o círculo seguro.",
  },
  {
    p: "Seu time perdeu a partida. O que um campeão diz? 🏆",
    o: ["Que jogo chato!", "Bom jogo! Vamos de novo?", "Nunca mais jogo!"],
    c: 1,
    e: "Isso mesmo! Ser gentil é coisa de campeão.",
  },
  {
    p: "Você quer comprar algo no jogo. O que fazer? 💳",
    o: ["Comprar sozinho", "Pedir para um adulto", "Usar o cartão escondido"],
    c: 1,
    e: "Perfeito! Compras só com a autorização de um adulto.",
  },
];

let atual = 0;
let estrelas = 0;
const elPergunta = document.getElementById("pergunta");
const elOpcoes = document.getElementById("opcoes");
const elFeedback = document.getElementById("feedback");
const elProxima = document.getElementById("proxima");
const elProgresso = document.getElementById("quizProgresso");

function carregar() {
  const q = perguntas[atual];
  elProgresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length} • ⭐ ${estrelas}`;
  elPergunta.textContent = q.p;
  elFeedback.textContent = "";
  elProxima.classList.add("escondido");
  elOpcoes.innerHTML = "";
  q.o.forEach((texto, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = texto;
    b.addEventListener("click", () => responder(i, b));
    elOpcoes.appendChild(b);
  });
}

function responder(i, botao) {
  const q = perguntas[atual];
  const botoes = elOpcoes.querySelectorAll("button");
  if (i === q.c) {
    estrelas++;
    botao.classList.add("certa");
    elFeedback.textContent = "🎉 Acertou! " + q.e;
    botoes.forEach((b) => (b.disabled = true));
    elProxima.classList.remove("escondido");
    elProgresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length} • ⭐ ${estrelas}`;
  } else {
    botao.classList.add("errada");
    botao.disabled = true;
    elFeedback.textContent = "😅 Quase! Tente outra vez.";
  }
}

elProxima.addEventListener("click", () => {
  if (atual >= perguntas.length) {
    atual = 0;
    estrelas = 0;
    elProxima.textContent = "Próxima ➜";
    carregar();
    return;
  }
  atual++;
  if (atual < perguntas.length) {
    carregar();
  } else {
    elProgresso.textContent = "⭐".repeat(estrelas);
    elPergunta.textContent = `Parabéns! Você ganhou ${estrelas} estrelas! 🏆`;
    elOpcoes.innerHTML = "";
    elFeedback.textContent = "O Teodoro está muito orgulhoso de você!";
    elProxima.textContent = "Jogar de novo 🔁";
    confete();
  }
});

carregar();
