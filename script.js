function toggleMenu() {
  const menu = document.querySelector('.menu-navegacao');
  menu.classList.toggle('ativo');
}

// Fecha o menu se clicar fora dele ou em um link
document.addEventListener('click', function (e) {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu-navegacao');
  if (
    !menu.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    menu.classList.remove('ativo');
  }
});


const campoPesquisa = document.getElementById("campo-pesquisa");
campoPesquisa.addEventListener("input", function () {
  const termo = campoPesquisa.value.toLowerCase();
  const produtos = document.querySelectorAll(".produto-card");

  produtos.forEach((produto) => {
    const nome = produto.querySelector("h3").textContent.toLowerCase();
    produto.style.display = nome.includes(termo) ? "block" : "none";
  });
});

let carrinhoVisivel = false;
let totalCarrinho = 0;
let quantidadeItens = 0;

function alternarCarrinho() {
  const carrinho = document.getElementById('carrinho');
  carrinhoVisivel = !carrinhoVisivel;
  carrinho.classList.toggle('oculto', !carrinhoVisivel);
}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.add('oculto');
  carrinhoVisivel = false;
}

function adicionarAoCarrinho(nome, preco) {
  const lista = document.getElementById('lista-carrinho');
  const item = document.createElement('li');
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
  lista.appendChild(item);

  totalCarrinho += preco;
  quantidadeItens++;
  document.getElementById('total-carrinho').textContent = totalCarrinho.toFixed(2);
  document.getElementById('quantidade-carrinho').textContent = quantidadeItens;
}
function toggleMenu() {
  const menu = document.getElementById('menuLateral');
  const overlay = document.getElementById('overlay');
  menu.classList.toggle('ativo');
  overlay.classList.toggle('ativo');
}

// Fechar ao clicar fora
document.addEventListener('click', function (e) {
  const menu = document.getElementById('menuLateral');
  const overlay = document.getElementById('overlay');
  const toggle = document.querySelector('.menu-toggle');

  if (
    !menu.contains(e.target) &&
    !toggle.contains(e.target) &&
    menu.classList.contains('ativo')
  ) {
    menu.classList.remove('ativo');
    overlay.classList.remove('ativo');
  }
});
