setInterval(function () {

    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    //minuto = zero(minuto);
    //segundo = zero(segundo); 
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
}, 1000)

function data(){
    let data = new Date().toLocaleDateString();

    // let dia = data.getDate();
    // let mes = data.getMonth() + 1;
    // let ano = data.getFullYear();

    return document.getElementById('data').textContent = data;
        // .textContent = dia + "/" + mes + "/" + ano;
}

data()