//Menu
const menuMobile = document.querySelector('.listMenuMobile')
const btnMenuMobile = document.getElementById('btnInicio')
//Aparece os cupons
const btnImg = document.getElementById('cupomDisplay')
const cupomContainer = document.querySelector('.cupomOptions')

//Pegando as informações do localsotorage e passando para outra pagina//
const info = document.querySelector('.infoNome')
const endereco = document.querySelector('.infoEndereco')
const enderecoCompleto = document.querySelector('.infoEnderecoCompleto')
const NomeCompleto = document.querySelector('.infoNomeCompletoTodo')

let userLogado =JSON.parse(localStorage.getItem('userLogado')) 

endereco.innerHTML = `${userLogado.endereco}`
enderecoCompleto.innerHTML = `${userLogado.endereco}`
NomeCompleto.innerHTML = `${userLogado.nome}`
info.innerHTML = `Olá, ${userLogado.nome}`


/*se não houver token preicsa logar*/
if(localStorage.getItem('token') == null){
    alert('Você precisa esta logado para acessar')
    window.location = 'login.html'
}
//sair da pagina//
function sair(){
    localStorage.removeItem('token')
    window.location = 'index.html'
}
//menu
btnMenuMobile.addEventListener('click',()=>{
    if(menuMobile.classList.contains('listMenuMobileDisplay')){
        menuMobile.classList.remove('listMenuMobileDisplay')
        menuMobile.classList.add('listMenuMobileDisplayNone')
    }else{
        menuMobile.classList.add('listMenuMobileDisplay')
        menuMobile.classList.remove('listMenuMobileDisplayNone')
        enderecoCompleto.classList.add('listMenuMobileDisplayNone')
    }
})

btnImg.addEventListener('click', ()=>{
    if(cupomContainer.classList.contains('listMenuMobileDisplay')){
        cupomContainer.classList.remove('listMenuMobileDisplay')
        cupomContainer.classList.add('listMenuMobileDisplayNone')
        btnImg.src = '../Images/arrowbottom1.png'
    }else{
        cupomContainer.classList.add('listMenuMobileDisplay')
        cupomContainer.classList.remove('listMenuMobileDisplayNone')
        btnImg.src = '../Images/arrowbottom.png'
    }

})
//Aparecer o endereço completo e nome 
const btnEnderecoCompleto = document.getElementById('arrowender')
const btnNomeCompleto = document.getElementById('arrownome')

btnEnderecoCompleto.addEventListener('click', ()=>{
    if(enderecoCompleto.classList.contains('listMenuMobileDisplay')){
        enderecoCompleto.classList.remove('listMenuMobileDisplay')
        enderecoCompleto.classList.add('listMenuMobileDisplayNone')
    }else{
        enderecoCompleto.classList.add('listMenuMobileDisplay')
        enderecoCompleto.classList.remove('listMenuMobileDisplayNone')
        NomeCompleto.classList.add('listMenuMobileDisplayNone')
                cupomContainer.classList.add('listMenuMobileDisplayNone')
    }
    
})

btnNomeCompleto.addEventListener('click',()=>{
    if(NomeCompleto.classList.contains('listMenuMobileDisplay')){
        NomeCompleto.classList.remove('listMenuMobileDisplay')
        NomeCompleto.classList.add('listMenuMobileDisplayNone')
    }else{
        NomeCompleto.classList.add('listMenuMobileDisplay')
        NomeCompleto.classList.remove('listMenuMobileDisplayNone')
        enderecoCompleto.classList.add('listMenuMobileDisplayNone')
    }
})
//Slider
class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide= ${id}]`)
        this.active = 0
        this.init()
    }
    activeSlide(index){
        this.active = index
        this.itens.forEach(item => item.classList.remove('active'))
        this.itens[index].classList.add('active')
        this.thumbItens.forEach(item => item.classList.remove('active'))
        this.thumbItens[index].classList.add('active')
        this.autoSlide()
    }
    prev(){
        if(this.active > 0){
            this.activeSlide(this.active - 1 )
        }else{
            this.activeSlide(this.itens.length - 1)
        }
    }
    next(){
        if(this.active < this.itens.length - 1){
            this.activeSlide(this.active + 1 )
        }else{
            this.activeSlide(0)
        }
    }
    addNavegation(){
        const btnNext = this.slide.querySelector('.slide-next')
        const btnPrev = this.slide.querySelector('.slide-prev')
        btnNext.addEventListener('click', this.next)
        btnPrev.addEventListener('click', this.prev)
    }
    addThumbItens(){
        this.itens.forEach (() => (this.thumb.innerHTML += '<span></span>'))
        this.thumbItens = Array.from(this.thumb.children)
    }
    autoSlide(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }
    init(){
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.itens = this.slide.querySelectorAll('.slide-itens > *')
        this.thumb = this.slide.querySelector('.slide-thumb')
        this.addThumbItens()
        this.activeSlide(0)
        this.addNavegation()
    }
}
new SlideStories('slide')
//fechar ordenar
const BtnOrdenar = document.getElementById('ordenar')
const OrdenarBox = document.querySelector('.filtrosBoxOrdenar')
const BtnCloseOrdenar = document.querySelector('.closeBtn')

BtnOrdenar.addEventListener('click', ()=>{
    OrdenarBox.classList.add('listMenuMobileDisplay')
})

BtnCloseOrdenar.addEventListener('click', ()=>{
    OrdenarBox.classList.remove('listMenuMobileDisplay')
})
//vale refeição//
const BtnValeRefeicao = document.getElementById('valerefeicao')
const ValeRefeicaoBox = document.querySelector('.valeRefeicao')
const BtnCloseVale = document.querySelector('.closeBtnVale')

BtnValeRefeicao.addEventListener('click', ()=>{
    ValeRefeicaoBox.classList.add('listMenuMobileDisplay') 
})

BtnCloseVale.addEventListener('click', ()=>{
    ValeRefeicaoBox.classList.remove('listMenuMobileDisplay')
})
//Lojas abrir o catalogo 
const lojasCatalogo = document.querySelectorAll('.lojasSingle')

lojasCatalogo.forEach(function(lojas,i){
    lojas.addEventListener('click', ()=>{
        window.location = 'catalogo.html'
    })
})


