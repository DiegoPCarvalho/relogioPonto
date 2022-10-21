const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const { engine } = require("express-handlebars");


app.use(express.static(__dirname + '/public'));


//config handlebars
app.engine('handlebars', engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//config servidor
app.get('/', (req, res) =>{

//     const usuarios = await axios("http://192.168.1.227:7000/contas");
//     const usuario = usuarios.data
//     let dados = {dado:[]}

//     for(let i = 0; i < usuario.length; i++){
//         dados.dado.push({
//             user : usuario[i].usuario,
//             pass: usuario[i].senha
//         })
//     }


//     // const resultado = dados.dado.map(user);

//     // console.log(resultado)

// const apenasUsuarios = aUsuario => aUsuario.user
// const resultadoUsuario = dados.dado.map(apenasUsuarios)

// const apenasSenhas = aSenha => aSenha.pass
// const resultadoSenha = dados.dado.map(apenasSenhas)

    // const active = "desactive";
    // const desactive = "active";
    res.render('login')
    // res.sendFile(__dirname + "/index.html");
});

app.get('/home', (req, res) =>{
   
    const active = "active";
    const desactive = "";
    res.render('home', {active, desactive})
});

app.get('/tabelaPonto', async (req, res) =>{

    const active = "desactive";
    const desactive = "active";
    res.render('tabelaPonto', {active, desactive})
   
});

app.listen(port, (err) =>{
    try{
        console.log('server is running!!!')
    }catch(error){
        console.log("Error: " + error);
    }
});