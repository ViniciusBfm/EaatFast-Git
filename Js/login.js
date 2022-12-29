const closeBtn = document.getElementById('closebtn')
const cadastarbtn = document.getElementById('btncadastrar')
const formEntrar = document.querySelector('.entrar')
const msg = document.querySelector('.msg')

const loginTelefoneUsuario = document.getElementById('login')
const labelLoginTelefoneUsuario = document.getElementById('labelLogin')

const loginSenha = document.getElementById('senhaLogin')
const labelsenha = document.getElementById('labelSenha')

closeBtn.addEventListener('click', ()=>{
    window.location = 'index.html'
})

cadastarbtn.addEventListener('click', ()=>{
    window.location = 'criarconta.html'
})

formEntrar.addEventListener('submit', (e)=>{
    e.preventDefault()
    let ListaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: '',
        endereco: '',
        celular: ''
    }

    ListaUser = JSON.parse(localStorage.getItem('listaUser'))

    ListaUser.forEach((item) =>{
        if(loginTelefoneUsuario.value == item.userCad && loginSenha.value == item.senhaCad || loginTelefoneUsuario.value == item.celularCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad,
                endereco: item.enderecoCad,
                celular: item.celularCad
            }
        }
    })

    if(loginTelefoneUsuario.value == userValid.user || loginTelefoneUsuario.value == userValid.celular && loginSenha.value == userValid.senha){
        window.location = 'conteudo.html'
        
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))




    }else{
        msg.style.display = 'block'
        msg.innerHTML = 'Usuário ou Senha Incorretos'
        loginTelefoneUsuario.focus()
    }
    
})