function ativandoSlide() {
    
}
const tabRelogio = document.querySelectorAll('.js-tab li')
const infoRelogio = document.querySelectorAll('.js-tabinfo div')


if (tabRelogio.length && infoRelogio.length) {
infoRelogio[0].classList.add('ativo')

function animalSelecao(index){
    infoRelogio.forEach((div) => {
    div.classList.remove('ativo')

    })
    infoRelogio[index].classList.add('ativo')
}

tabRelogio.forEach((item, index) => {
    item.addEventListener('click', function(){
        animalSelecao(index)
    })
})
}
ativandoSlide();





const carrinho = document.querySelector('.carrinho')
const menuCarrinho = document.querySelector('.sessao-compras')

function toggleMenu() {
    carrinho.classList.toggle('active')
    menuCarrinho.classList.toggle('active')
}
carrinho.addEventListener('click', toggleMenu)





const adicionar = document.querySelectorAll('.js-add label')
const produtos = document.querySelectorAll('.js-produto div')

function activeTab(index) {
    produtos.forEach((div) => {
        // div.classList.remove('comprando')
    })
    produtos[index].classList.add('comprando')
}
adicionar.forEach((item, index) => {
    item.addEventListener('click', function (){
       activeTab(index) 
    })

})




