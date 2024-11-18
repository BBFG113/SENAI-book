
const inputUsername = document.getElementById("inputUsername")
const inputSenha = document.getElementById("inputPassword")
const loginIncorrect = document.getElementById("LoginIncorrect")

function verificarCriarConta(){
    fetch("http://localhost:3000/cadastros").then(response => response.json()).then(usuario =>{

        usuario.forEach(pessoa => {
            if( inputUsername.value == pessoa.username &&
                inputSenha.value == pessoa.password){

                    loginIncorrect.innerHTML = "Carregando..."
                    window.location.href = 'produtos.html'
                }
            else{
                loginIncorrect.innerHTML = "Usuário não encontrado"
            }
        });
    })
}
