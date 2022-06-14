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

const menuCarrinho = document.querySelector(".sessao-carrinho");
const btnAdicionar = document.querySelectorAll('.addItens'); 
const rel = document.querySelectorAll('.relogio')
const car = document.querySelector(".carrinho");

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
 displayCart()
}

function totalCost(relogios) {
  let totalStorage = localStorage.getItem('totalCost')
  let fechamento = document.querySelector('.total-final')
  
  if (totalStorage != null) {
    totalStorage = parseInt(totalStorage)
    localStorage.setItem('totalCost', relogios.price + totalStorage)  
    fechamento.innerHTML = localStorage.getItem('totalCost',  relogios.price + totalStorage)
  } else {
    localStorage.setItem('totalCost', relogios.price)  
    fechamento.innerHTML = ' ' +  localStorage.getItem('totalCost',  relogios.price) + ',00'
  }
}

function setItens(relogios) {
  let cartItems = localStorage.getItem('relogiosInCart')
  cartItems = JSON.parse(cartItems)

  if (cartItems != null) {
  if (cartItems[relogios.tag] == undefined) {
    cartItems = {
      ...cartItems, [relogios.tag]: relogios
    }
  }
  cartItems[relogios.tag].inCart += 1;
  }  else {
    relogios.inCart = 1
    cartItems = {
      [relogios.tag]: relogios
    }
  }
  localStorage.setItem('relogiosInCart', JSON.stringify(cartItems))
}

function displayCart() {
  let cartItems = localStorage.getItem('relogiosInCart')
  cartItems = JSON.parse(cartItems)
  let cartSection = document.querySelector('.products')

  if ( cartItems && cartSection  ) {
    cartSection.innerHTML = '';
    Object.values(cartItems).map(item => {
      cartSection.innerHTML += 
      `
      <div class='product'>
      <i class="fa-solid fa-circle-xmark"></i>
      <img src='/img/${item.tag}.jpg' width='40px'/>
      <span >${item.name}</span>
      <span >Un/ ${item.inCart}</span>
      <span >Preço:R$ ${item.price}</span>
      </div>
      `
     /* <span class='total'>
      Todos: R$ ${item.inCart * item.price}
      </span>*/
      //<h3 class='total-final'>Total final: R$ ${localStorage.getItem('totalCost') }</h3>
    })
  }
}
displayCart() 
onLoadCartNumbers()

/* ----------Limpando o carrinho -------------- */
  const btnClear = document.querySelector('.cartClear')

 function cartClear() {
   localStorage.setItem('cartNumbers', 0)
   localStorage.setItem('totalCost', 0)
   document.querySelector('.valueCart').textContent = 0
   localStorage.setItem('relogiosInCart', null)
   let cartSection = document.querySelector('.products')
   cartSection.innerHTML = ''
   let fechamento = document.querySelector('.total-final')
   fechamento.innerHTML = ''
   console.log('funcionando')
 }
  btnClear.addEventListener('click', cartClear)

/* ----------Feedback de compra pro usuário --------------- */

const modal = document.querySelectorAll('.addItens') 

function ativarModal(bt) {
  bt.classList.add('ativandoModal')
  bt.innerText = 'Item adicionado' 
  setTimeout(() => {
    bt.classList.remove('ativandoModal')
    bt.innerText = 'comprar'
  }, 800)
}

modal.forEach((bt) => {
  bt.addEventListener('click', () => {
    ativarModal(bt)
  })
})    