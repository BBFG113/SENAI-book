//Função para enviar os dados POST - CREATE
function SendData() {
    //Obter os valores dos campos informados pelo usuário
    var name = document.getElementById('inputName').value
    var surname = document.getElementById('inputSurname').value
    var username = document.getElementById('inputUsername').value
    var password = document.getElementById('inputSenha').value

    if(name == "" || surname == "" || username == "" || password == ""){
        alert("Todos os campos devem estar completos!")
        return
    }

    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/cadastros', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({name: name, surname: surname,username: username, password: password}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
    console.log(name)
    console.log(surname)
    console.log(username)
    console.log(password)
}