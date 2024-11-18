function carregarNome(){
    fetch("http://localhost:3000/cadastros").then(response => response.json()).then(usuario =>{
      usuario.forEach(pessoa => {
        document.getElementById("usuario").title = pessoa.username
      });
  })
}




let index = 0; // índice da imagem atual
const totalImagens = document.querySelectorAll('.produtosLivros').length; // total de imagens
const imagensPorVez = 3; // número de imagens exibidas ao mesmo tempo

function mostrarImagem(n) {
    index = n;

    if (index >= totalImagens - imagensPorVez + 1) {
        index = totalImagens - imagensPorVez; // não ultrapassar o limite
    } else if (index < 0) {
        index = 0; // não ir para a imagem anterior
    }

    atualizarCarrossel();
}

function mudarImagem(n) {
    mostrarImagem(index + n);
}

function atualizarCarrossel() {
    const imagens = document.querySelectorAll('.produtosLivros');
    const deslocamento = -index * (100 / imagensPorVez); // calcula o deslocamento em porcentagem
    document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;

    imagens.forEach((img, i) => {
        img.style.display = 'block'; // exibe todas as imagens
    });
}

// Inicia o carrossel mostrando as primeiras três imagens
atualizarCarrossel();

// TESTES 
// -----------------------------------------------------------
input.onfocus = function () {
    browsers.style.display = 'block';
    input.style.borderRadius = "5px 5px 0 0";  
  };
  for (let option of browsers.options) {
    option.onclick = function () {
      input.value = option.value;
      browsers.style.display = 'none';
      input.style.borderRadius = "5px";
    }
  };
  
  input.oninput = function() {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (let option of browsers.options) {
      if(option.value.toUpperCase().indexOf(text) > -1){
        option.style.display = "block";
    }else{
      option.style.display = "none";
      }
    };
  }
  var currentFocus = -1;
  input.onkeydown = function(e) {
    if(e.keyCode == 40){
      currentFocus++
     addActive(browsers.options);
    }
    else if(e.keyCode == 38){
      currentFocus--
     addActive(browsers.options);
    }
    else if(e.keyCode == 13){
      e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (browsers.options) browsers.options[currentFocus].click();
          }
    }
  }
  
  function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    }
// -----------------------------------------------------------
