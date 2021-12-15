// npm install express
const express = require('express'); // aqui chamamos o módulo express
const app = express(); // colocamos o módulo na var app

app.set("view engine", "ejs"); // aqui falamos que usaremos o ejs, por isso usamos o app.set()

// aqui criamos uma rota para nosso servidor, o user é só ir para o home e como resposta da requisição 
// renderizamos o index
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/sobre", function(req, res) {
    res.render("about");
});

app.listen(8080); // porta do servidor
console.log("Rodando"); // resposta pra ver se o server está rodando

// node server

// IMPORTANTE: por estarmos usando o EJS o server busca o arquivo index sempre dentro de uma pasta views