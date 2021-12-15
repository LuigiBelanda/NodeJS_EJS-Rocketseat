// npm install express
const express = require('express'); // aqui chamamos o módulo express
const app = express(); // colocamos o módulo na var app

app.set("view engine", "ejs"); // aqui falamos que usaremos o ejs, por isso usamos o app.set()

// aqui criamos uma rota para nosso servidor, o user é só ir para o home e como resposta da requisição 
// renderizamos o index
app.get("/", function(req, res) {

    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil" 
        },
        {
            title: "E",
            message: "JS usa JS para renderizar HTML" 
        },
        {
            title: "M",
            message: "uito fácil de usar" 
        },
        {
            title: "A",
            message: "morzinho" 
        },
        {
            title: "I",
            message: "nstall ejs" 
        },
        {
            title: "S",
            message: "intaxe simples" 
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS";

    res.render("pages/index", {
        qualitys: items,
        subtitle,
    });
});

app.get("/sobre", function(req, res) {
    res.render("pages/about");
});

app.listen(8080); // porta do servidor
console.log("Rodando"); // resposta pra ver se o server está rodando

// node server

// IMPORTANTE: por estarmos usando o EJS o server busca o arquivo index sempre dentro de uma pasta views