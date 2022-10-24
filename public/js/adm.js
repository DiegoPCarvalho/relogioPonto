function adm(){
    if(localStorage.getItem("nome") == "DiegoC"){
        let texto = document.createElement("input:text")
        let button
    }
}

adm()




function carregarDB(){
    const user = document.getElementById("texto-user").value

    if(localStorage.logado == "1"){
        window.location.href = `http://192.168.15.120:5000/tabelaPonto/${user2}`
    }
}