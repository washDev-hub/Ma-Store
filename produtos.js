// Lista de produtos (poderia vir de um backend futuramente)
const produtos = [
  { nome: "Garrafa PACO 350", preco: "R$ 120,00", imagem: "assets/pacco 350", categoria: "garrafas" },
  { nome: "Película IP13 Pro", preco: "R$ 29,90", imagem: "assets/película ip13 pro", categoria: "peliculas" },
  { nome: "Pulseira Infantil", preco: "R$ 45,50", imagem: "assets/pulseira infantil", categoria: "fones" },
  { nome: "Chaveiro Geek", preco: "R$ 25,00", imagem: "assets/chaveiro geek", categoria: "fones" },
  { nome: "Capinha S21 Ultra", preco: "R$ 29,90", imagem: "assets/capinha 600", categoria: "capinhas" },
  { nome: "Fone JBL", preco: "R$ 180,90", imagem: "assets/fone b JBL", categoria: "fones" },
  { nome: "HDMI 10m", preco: "R$ 32,90", imagem: "assets/cabo hdmi 10n", categoria: "carregadores" },
];

// Renderizar produtos
function renderizarProdutos(lista) {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  lista.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("produto-card");

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p class="preco">${produto.preco}</p>
      <button class="btn-comprar">Comprar</button>
    `;
    container.appendChild(card);
  });
}

// Filtro
document.getElementById("filtro-categoria").addEventListener("change", (e) => {
  const valor = e.target.value;
  if (valor === "todos") {
    renderizarProdutos(produtos);
  } else {
    const filtrados = produtos.filter(p => p.categoria === valor);
    renderizarProdutos(filtrados);
  }
});
function toggleMenu() {
  const menu = document.getElementById("menuLateral");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("ativo");
  overlay.classList.toggle("ativo");
}

function fecharMenu() {
  const menu = document.getElementById("menuLateral");
  const overlay = document.getElementById("overlay");

  menu.classList.remove("ativo");
  overlay.classList.remove("ativo");
}

// Busca
document.getElementById("busca-produto").addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
  renderizarProdutos(filtrados);
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



// Inicialização
renderizarProdutos(produtos);
