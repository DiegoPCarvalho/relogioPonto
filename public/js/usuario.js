function user(){
    let texto = document.createElement("h3");
    texto.className = "text-light espaco"
    let frase = document.createTextNode(`Bem Vindo Sr(a) Usuario(a) ${localStorage.getItem("nome")}`);
    texto.appendChild(frase)

    let divAtual = document.getElementById("lugar");
    divAtual.appendChild(texto)
   
}

user()