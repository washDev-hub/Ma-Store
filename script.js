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
