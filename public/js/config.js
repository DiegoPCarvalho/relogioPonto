
function createButton() {
   let btn = document.createElement('button');
   btn.className = "btn btn-success";
   let lbl = document.createTextNode('Entrar');
   btn.appendChild(lbl);
   // localStorage.logado = 0;

   btn.onclick = function () {
      const usuario = document.querySelector(".input-group-text").value
      const senhas = document.querySelector(".senhas").value


      if (((usuario === usds.us1) && (senhas === usds.sns1)) || ((usuario === usds.us2) && (senhas === usds.sns2)) || ((usuario === usds.us3) && (senhas === usds.sns3)) || ((usuario === usds.us4) && (senhas === usds.sns4))) {
         window.location.href = 'http://192.168.15.120:5000/home'
         localStorage.logado = 1;
         localStorage.nome = usuario;
         localStorage.tempo = 0;
      } else {
         alert(`Usuario ou Senha Invalida!!! Verifique as inforções e veja se estão corretas`)
         localStorage.logado = 0;
      }
   }

   let divAtual = document.getElementById("nova");
   divAtual.appendChild(btn)

}

createButton()

const usds = {
   us1 : 'DiegoC',
   sns1 : '12345',
   us2: 'Natanael',
   sns2: '55321',
   us3: 'Mateus',
   sns3: '77852',
   us4: 'Lucas',
   sns4: '1313'
}