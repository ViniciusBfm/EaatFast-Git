const cupom = document.querySelector('.lembreteCupom')
const cupomInner = window.innerWidth
const form = document.querySelector('.enderecoForm')
const endereco = document.getElementById('endereco')
const button = document.getElementById('buscar')
const criarconta = document.querySelector('.linkCriarConta')
const criarconta2 = document.querySelector('.linkCriarConta2')
const btnEntrar = document.getElementById('entrarLogin')

/*abrir o cupom na tela*/
window.onload = () =>{
    setTimeout(()=>{
        if(cupomInner > 1374 ){
            cupom.style.display = 'block'
        }
    }, 3000)
}

/*salvar o que digitou no input e enviar para a pagina inicial*/
const buscarEndereco = (event)=>{
    event.preventDefault()
    localStorage.setItem('endereco', endereco.value)
    window.location = 'menu.html'   
}

/*validar o input se o endereço tem 7 letras*/
const validarEndereco = ({target})=>{
    if(target.value.length > 7){
        button.removeAttribute('disabled')
        button.style.backgroundColor = '#ea1d2c'
    }else{
        button.style.backgroundColor = '#b31822'
    }
}
/*Abrir criar conta*/
const abrirCriarConta = ()=>{
    window.location = 'criarconta.html'
    
}
const abrirCriarConta2 = ()=>{
    window.location = 'criarconta.html'
}


form.addEventListener('submit',buscarEndereco)
endereco.addEventListener('input', validarEndereco)
criarconta.addEventListener('click', abrirCriarConta)
criarconta2.addEventListener('click', abrirCriarConta2)
btnEntrar.addEventListener('click', ()=>{
    window.location = 'login.html'
})
