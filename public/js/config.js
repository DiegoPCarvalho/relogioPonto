
function createButton() {
   let btn = document.createElement('button');
   btn.className = "btn btn-success";
   let lbl = document.createTextNode('Entrar');
   btn.appendChild(lbl);

   btn.onclick = function () {

      const usuario = document.querySelector(".input-group-text").value
      const senhas = document.querySelector(".senhas").value

      const usd1 = usds.us1;
      const sns1 = usds.sns;

      const usd2 = 'natanael';
      const sns2 = '5532';

      if (((usuario === usd1) && (senhas === sns1)) || ((usuario === usd2) && (senhas === sns2))) {
         window.location.href = 'http://localhost:5000/home'
      } else {
         alert(`Usuario ou Senha Invalida!!! Verifique as inforções e veja se estão corretas`)
         
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