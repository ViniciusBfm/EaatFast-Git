const fechar = document.querySelector('.fechar')

const nome = document.getElementById('nome')
const labelNome = document.getElementById('labelnome')
let validNome = false

const usuario = document.getElementById('usuario')
const labelusuario = document.getElementById('labelusuario')
let validUsuario = false

const celular  = document.getElementById('celular')
const labelcelular = document.getElementById('labelcelular')
let validCelular = false

const endreco = document.getElementById('ender')
const labelendereco = document.getElementById('labelender')
let validEndereco = false

const senha = document.getElementById('senha1')
const labelsenha = document.getElementById('labelsenha')
let validSenha = false

const confirmesenha = document.getElementById('senha2')
const labelconfirmesenha = document.getElementById('labelconfirmesenha')
let validConfirmeSenha = false

const msg = document.getElementById('msg')
const formCriarConta = document.querySelector('.contaNova')

const fecharCriarConta = ()=>{
    window.location = 'index.html'
}


fechar.addEventListener('click',fecharCriarConta)

/*Validar Nome*/
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 9){
        labelNome.innerHTML = 'Nome Completo (Insira no minimo 9 caracteres) <img src="../Images/x.png" alt="">'
        nome.style.borderBottom = '1px solid black'
        validNome = false
    }else{
        labelNome.innerHTML = 'Nome Completo <img src="../Images/verificado.png" alt="">'
        nome.style.borderBottom = '1px solid #ea1d2c'
        validNome = true
    }
})
/*Validar Uusário*/
usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 4){
        labelusuario.innerHTML = 'Usuário <img src="../Images/x.png" alt="">'
        usuario.style.borderBottom = '1px solid black'
        validUsuario = false
    }else{
        labelusuario.innerHTML = 'Usuário <img src="../Images/verificado.png" alt="">'
        usuario.style.borderBottom = '1px solid #ea1d2c'
        validUsuario = true
    }
})

/*Validar Celular*/
celular.addEventListener('keyup', ()=>{
    if(celular.value.length <= 6){
        labelcelular.innerHTML = 'Celular <img src="../Images/x.png" alt="">'
        celular.style.borderBottom = '1px solid black'
        validCelular = false
    }else{
        labelcelular.innerHTML = 'Celular <img src="../Images/verificado.png" alt="">'
        celular.style.borderBottom = '1px solid #ea1d2c'
        validCelular = true
    }
})

/*Validar Endereço*/
endreco.addEventListener('keyup', ()=>{
    if(endreco.value.length <= 6){
        labelendereco.innerHTML = 'Endereço <img src="../Images/x.png" alt="">'
        endreco.style.borderBottom = '1px solid black'
        validEndereco = false
    }else{
        labelendereco.innerHTML = 'Endereço <img src="../Images/verificado.png" alt="">'
        endreco.style.borderBottom = '1px solid #ea1d2c'
        validEndereco = true
    }
})

/*Validar Senha*/
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 6){
        labelsenha.innerHTML = 'Senha <img src="../Images/x.png" alt="">'
        senha.style.borderBottom = '1px solid black'
        validSenha = false
    }else{
        labelsenha.innerHTML = 'Senha <img src="../Images/verificado.png" alt="">'
        senha.style.borderBottom = '1px solid #ea1d2c'
        validSenha = true
    }
})

/*Validar Confirmar Senha*/
confirmesenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmesenha.value){
        labelconfirmesenha.innerHTML = 'Senhas Diferentes <img src="../Images/x.png" alt="">'
        confirmesenha.style.borderBottom = '1px solid black'
        validConfirmeSenha = false
    }else{
        labelconfirmesenha.innerHTML = 'Senhas Confirmadas <img src="../Images/verificado.png" alt="">'
        confirmesenha.style.borderBottom = '1px solid #ea1d2c'
        validConfirmeSenha = true
    }
})



/*Criar conta e Salvar Localmente*/
const criarConta = (e)=>{
    e.preventDefault()
    if(validNome && validUsuario && validCelular && validEndereco && validSenha && validConfirmeSenha){
        let ListaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        ListaUser.push(
        {
            nomeCad: nome.value,
            userCad: usuario.value,
            enderecoCad: endreco.value,
            celularCad: celular.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(ListaUser))

        msg.innerHTML = 'Cadastrado com Sucesso!'
        msg.style.display = 'block'

        setTimeout(()=>{
            window.location = 'login.html'
        }, 3000)
    
    }else{
        msg.innerHTML = 'Preencha todos os Campos Corretamente!'
        msg.style.display = 'block'
    }
}

formCriarConta.addEventListener('submit', criarConta)





