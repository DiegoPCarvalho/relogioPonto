
function createButton() {
   let btn = document.createElement('button');
   btn.className = "btn btn-success";
   let lbl = document.createTextNode('Entrar');
   btn.appendChild(lbl);
   // localStorage.logado = 0;

   btn.onclick = function () {
      const usuario = document.querySelector(".input-group-text").value
      const senhas = document.querySelector(".senhas").value

      
      const usd2 = 'natanael';
      const sns2 = '5532';

      if (((usuario === usds.us1) && (senhas === usds.sns)) || ((usuario === usd2) && (senhas === sns2))) {
         window.location.href = 'http://192.168.15.80:5000/home'
         localStorage.logado = 1;
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
   us1 : 'diego',
   sns : '12345'
}