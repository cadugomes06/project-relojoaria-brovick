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
const car = document.querySelector(".carrinho");
const menuCarrinho = document.querySelector(".sessao-carrinho");
const btnAdicionar = document.querySelectorAll('.addItens'); 
const rel = document.querySelectorAll('.relogio')

let relogios = [
  {
    name: 'Brovick-pro',
    tag: 'brovickpro',
    price: 700,
    inCart: 0,
  },
  {
    name: 'Brovick-low',
    tag: 'brovicklow',
    price: 600,
    inCart: 0,
  },
  {
    name: 'Brovick-lit',
    tag: 'brovicklit',
    price: 650,
    inCart: 0,
  },
  {
    name: 'Smart-vik',
    tag: 'smartvik',
    price: 500,
    inCart: 0,
  },
  {
    name: 'Sport-vik',
    tag: 'sportvik',
    price: 350,
    inCart: 0,
  },
  {
    name: 'Edge-vik',
    tag: 'edgevik',
    price: 350,
    inCart: 0,
  },
]

function toggleMenu() {
    menuCarrinho.classList.toggle("active");  
}
car.addEventListener("click", toggleMenu);


for (let i = 0; i < btnAdicionar.length; i++ ) {
  btnAdicionar[i].addEventListener('click', () => {
    cartNumbers(relogios[i]);
    totalCost(relogios[i])
  })
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')   // manter o valor do storage no refresh
  if ( productNumbers ) {
    document.querySelector('.valueCart').textContent = productNumbers
  }
}
function cartNumbers(relogios) {

  productNumbers = localStorage.getItem('cartNumbers')
  productNumbers = parseInt(productNumbers)

  if ( productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.valueCart').textContent = productNumbers + 1
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.valueCart').textContent = 1
  }
 setItens(relogios)
}

function totalCost(relogios) {
  let totalStorage = localStorage.getItem('totalCost')
  
  if (totalStorage != null) {
    totalStorage = parseInt(totalStorage)
    localStorage.setItem('totalCost', relogios.price + totalStorage)  
  } else {
    localStorage.setItem('totalCost', relogios.price)  
  }
  console.log(relogios.price)

}

function setItens(relogios) {
  let cartItens = localStorage.getItem('relogiosInCart')

  if (relogios.inCart == 0) {
    relogios.inCart = 1
  }  else {
    relogios.inCart += 1
  }
  cartItens = {
    [relogios.tag]: relogios
  }
  localStorage.setItem('relogiosInCart', JSON.stringify(cartItens))
}

function displayCart() {
  let cartItems = localStorage.getItem('relogiosInCart')
  cartItems = JSON.parse(cartItems)
  
  let cartSection = document.querySelector('.relogios-valores')
  if ( cartItems && cartSection  ) {
     cartSection.innerHTML = '';
     Object.values(cartItems).map((item) => {
       cartSection.innerHTML += 
       `<div class='products'>
       <i class="fa-solid fa-circle-xmark"></i>
        <img src='/img/${item.tag}.jpg' width='40px'/>
        <span >${item.name}</span>
        </div>
        <div class='price'>R$${item.price}</div>
        <div class='quantity'></div> `
     })
  }
}

onLoadCartNumbers()
displayCart() 