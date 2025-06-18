const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
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
