function ativandoSlide() {
  const tabRelogio = document.querySelectorAll(".js-tab li");
  const infoRelogio = document.querySelectorAll(".js-tabinfo div");

  if (tabRelogio.length && infoRelogio.length) {
    infoRelogio[0].classList.add("ativo");

    function animalSelecao(index) {
      infoRelogio.forEach((div) => {
        div.classList.remove("ativo");
      });
      infoRelogio[index].classList.add("ativo");
    }
    tabRelogio.forEach((item, index) => {
      item.addEventListener("click", function () {
        animalSelecao(index);
      });
    });
  }
}
ativandoSlide();
/* Slide de produtos exclusivos */



/* Carrinho de compras */
const carrinho = document.querySelector(".carrinho");
const menuCarrinho = document.querySelector(".sessao-carrinho");
const produtos = document.querySelectorAll('.addItens'); 
const listaItens = document.querySelectorAll('.lista-itens')

function toggleMenu() {
  menuCarrinho.classList.toggle("active");
  
}

function handleProduto (produto, index, lista) {
    produto =  ['brovick-pro','brovick-low','brovick-lit','smart-vik','sport-vik','edge-vik']

  if (menuCarrinho.className.endsWith('active')){

  if (index === 0) {
        menuCarrinho.innerHTML = `<li>${produto[0]} Adicionado</>`  
        console.log(menuCarrinho)      
  }
  if (index === 1) {
    menuCarrinho.innerHTML = `<li>${produto[1]} Adicionado</li>`
    console.log(menuCarrinho)    
  }
  }
}

carrinho.addEventListener("click", toggleMenu);

produtos.forEach((produto, index) => {
    produto.addEventListener('click', () => {
        handleProduto(produto, index)
    })
})


//menuCarrinho.className.endsWith('active')