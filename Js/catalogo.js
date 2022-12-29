//Menu
const menuMobile = document.querySelector('.listMenuMobile')
const btnMenuMobile = document.getElementById('btnInicio')

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

//abrir a box da comida para realizar a escolha
const comida1 = document.querySelectorAll('.comida1Container > .comida1Single')
const SelecionarBox = document.querySelector('.selecionarCompra')

comida1.forEach((comidas, i)=>{
    comidas.addEventListener('click', ()=>{
        SelecionarBox.style.display = 'block'
    })
})

// abrir a box da bebida para realizar a escolha
const bebida1 = document.querySelectorAll('.comida2Single')
const SelecionarBox2 = document.querySelector('.selecionarCompra')

bebida1.forEach((bebidas)=>{
    bebidas.addEventListener('click', ()=>{
        SelecionarBox.style.display = 'block'
    })
})

//Recuperar info de cada comida1 selecionada
const recuperarInfoComida = document.querySelectorAll('.comida1Single')
const tituloTextSelecionado = document.querySelector('.selecionarCompraTitulo')
const descrisaoTextSelecionado = document.querySelector('.selecionarCompraTextDescrisao')
const precoTextSelecionado = document.querySelector('.selecionarCompraTextPreco')
const addPrecoTextSelecionado = document.querySelector('.selecionarCompraTextAdicionar')
const imagemSelecionada = document.querySelector('.selecionarCompraImg')


recuperarInfoComida.forEach((infoComida)=>{
    infoComida.addEventListener('click', ()=>{
        const tituloComidaSelecionada = infoComida.children[0].children[0].innerHTML
        const descrisaoComidaSlecionada = infoComida.children[0].children[1].innerHTML
        const precoComidaSelecionada = infoComida.children[0].children[2].innerHTML
        const imgComidaSelecionada = infoComida.children[1].innerHTML
        const precoComidaSelecionadaNumber = Number.parseFloat(precoComidaSelecionada.substring(2))

        tituloTextSelecionado.innerHTML = `<h1>${tituloComidaSelecionada}</h1>`
        descrisaoTextSelecionado.innerHTML =  `<h3>${descrisaoComidaSlecionada}</h3>`
        precoTextSelecionado.innerHTML =  `<h3>${precoComidaSelecionada}</h3>`
        addPrecoTextSelecionado.innerHTML = `<h3>${precoComidaSelecionada}</h3>`
        imagemSelecionada.innerHTML = imgComidaSelecionada

        //quantidade de itens
        const quantidadeMenos = document.querySelector('.selecionarQuantidadeMenos')
        const quantidadeMais = document.querySelector('.selecionarQuantidadeMais')
        const quantidadeValor = document.querySelector('.selecionarQuantidade')
        
        valorAtual = 0
        let contador = 1
        quantidadeValor.innerHTML = contador

        quantidadeMais.addEventListener('click', ()=>{
            quantidadeValor.innerHTML = ++contador
            //preco a pagar aumentando o valor
            valorAtual = precoComidaSelecionadaNumber * contador
            var valorComidaFinal = valorAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            addPrecoTextSelecionado.innerHTML = `<h3>${valorComidaFinal}</h3>`
            
        })

        quantidadeMenos.addEventListener('click', ()=>{
            contador --
            if(contador <= 1){
                contador = 1
                quantidadeValor.innerHTML = contador
                var valorComidaFinalMenos = precoComidaSelecionadaNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                addPrecoTextSelecionado.innerHTML = `<h3>${valorComidaFinalMenos}</h3>`
            }else{
                //preços diminuindo o valor
                valorAtualMenos = valorAtual - precoComidaSelecionadaNumber
                var valorComidaFinalMenos = valorAtualMenos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                addPrecoTextSelecionado.innerHTML = `<h3>${valorComidaFinalMenos}</h3>`

                quantidadeValor.innerHTML = contador                
            }
        })       
    })
})
//

const carrinhoBox = document.querySelector('.carrinhoCompras')
const carrinhoLogoLoja = document.querySelector('.carrinhoComprasLogo')
const carrinhoNomeLoja = document.querySelector('.carrinhoComprasNome')
const carrinhoCloseBtn = document.querySelector('.carrinhoCloseBtn')
const selecionarComida = document.querySelector('.selecionarCompraBox')
const carrinhoSingle = document.querySelector('.carrinhoComprasSingle')
const carrinhoComprasBox = document.querySelector('.carrinhoComprasBox')

addPrecoTextSelecionado.addEventListener('click', carrinhoCompras )

function carrinhoCompras(){
    SelecionarBox.style.display = 'none'
    //verificar se tem algo no carrinho
    carrinhoSingle.classList.add('aberto')

    const pedidoTitulo = document.querySelector('.selecionarCompraTitulo').outerText
    const tituloRestaurante = document.querySelector('.textRestaurante').children[0].outerText
    const imgRestaurante = document.querySelector('.imgRestaurante').children[0].outerHTML
    const pedidoImg = document.querySelector('.selecionarCompraImg').children[0].outerHTML
    
    //add uma imagem via js
    const img1 = new Image();
    img1.src = '../remove.png';
    document.body.appendChild(img1);

    carrinhoSingle.innerHTML +=  `<div class="carrinhoComprasSingleBox"> <h3>${pedidoTitulo}</h3> <div class="carrinhoComprasSingleBoxPedido"> ${pedidoImg} ${img1.outerHTML}</div>`
    carrinhoNomeLoja.innerHTML = `<h3>${tituloRestaurante}</h3>`
    carrinhoLogoLoja.innerHTML = `<div>${imgRestaurante}</div>`


    carrinhoBox.style.display = 'block'
    sacolaAbrindo()

    console.log()



}
//abrir sacola
const sacolaAbrir = document.querySelector('.sacoladeCompras')
sacolaAbrir.addEventListener('click', sacolaAbrindo)

function sacolaAbrindo(){
    carrinhoBox.style.display = 'block'

}

const removerItem = document.querySelector('.carrinhoComprasSingleBoxPedido img:nth-child(2)')

//Fechar o carrinho de compras
carrinhoCloseBtn.addEventListener('click', ()=>{           
    carrinhoBox.style.display = 'none'
})



//Recuperar info de cada bebida selecionada 

const recuperarInfoBebida = document.querySelectorAll('.comida2Single')
const tituloTextSelecionadoBebida = document.querySelector('.selecionarCompraTitulo')
const descrisaoTextSelecionadoBebida = document.querySelector('.selecionarCompraTextDescrisao')
const precoTextSelecionadoBebida = document.querySelector('.selecionarCompraTextPreco')
const addPrecoTextSelecionadoBebida = document.querySelector('.selecionarCompraTextAdicionar')
const imagemSelecionadaBebida = document.querySelector('.selecionarCompraImg')

recuperarInfoBebida.forEach((infoBebida)=>{
    infoBebida.addEventListener('click', ()=>{
        const tituloBebidaSelecionada = infoBebida.children[0].children[0].innerHTML
        const descrisaoBebidaSlecionada = infoBebida.children[0].children[1].innerHTML
        const precoBebidaSelecionada = infoBebida.children[0].children[2].innerHTML
        const imgBebidaSelecionada = infoBebida.children[1].innerHTML
        const precoBebidaSelecionadaNumber = Number.parseFloat(precoBebidaSelecionada.substring(2))
        
        tituloTextSelecionadoBebida.innerHTML = `<h1>${tituloBebidaSelecionada}</h1>`
        descrisaoTextSelecionadoBebida.innerHTML = `<h3>${descrisaoBebidaSlecionada}</h3>`
        precoTextSelecionadoBebida.innerHTML = `<h3>${precoBebidaSelecionada}</h3>`
        addPrecoTextSelecionadoBebida.innerHTML = `<h3>${precoBebidaSelecionada}</h3>`
        imagemSelecionadaBebida.innerHTML = imgBebidaSelecionada


        //Bebidas aumentar e diminuir a quantidade
        const quantidadeMenos = document.querySelector('.selecionarQuantidadeMenos')
        const quantidadeMais = document.querySelector('.selecionarQuantidadeMais')
        const quantidadeValor = document.querySelector('.selecionarQuantidade')
        
        valorAtual = 0
        let contador = 1      
        quantidadeValor.innerHTML = contador

        quantidadeMais.addEventListener('click', ()=>{
            quantidadeValor.innerHTML = ++contador

            //preco a pagar aumentando o valor
            valorAtual = precoBebidaSelecionadaNumber * contador
            var valorComidaFinal = valorAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            addPrecoTextSelecionado.innerHTML = `<h3>${valorComidaFinal}</h3>`
            
            
        })
        quantidadeMenos.addEventListener('click', ()=>{
            contador --
            if(contador <= 1){
                contador = 1
                quantidadeValor.innerHTML = contador
                var valorBebidaFinalMenos = precoBebidaSelecionadaNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                addPrecoTextSelecionado.innerHTML = `<h3>${valorBebidaFinalMenos}</h3>`
            }else{
                quantidadeValor.innerHTML = contador
                //preços diminuindo o valor
                valorAtualMenos = valorAtual - precoBebidaSelecionadaNumber
                var valorBebidaFinalMenos = valorAtualMenos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                addPrecoTextSelecionado.innerHTML = `<h3>${valorBebidaFinalMenos}</h3>`

                
            }
        })

        
    })
})
//Remover um item da lista 


//Fechar o selecionar
const BtnCloseSelecionar = document.querySelector('.closeBtnSelecionar')

BtnCloseSelecionar.addEventListener('click', ()=>{
    SelecionarBox.style.display = 'none'
})
