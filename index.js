//Inicia o framework express
var express = require("express");
//Cria variavel com todos os metodos do framework
const app = express();

//cria rota principal
app.get("/",function(req,res){
    res.send("Sejá bem vindo");
});

// rota com parametro
app.get("/ola/:nome/:sobrenome",function(req,res){
    //retorna o parametro recebido
    res.send(req.params);
});

//enviar arquivo HTML
app.get("/html",function(req,res){
    //retorna o arquivo html
    //__dirname retorna o diretorio raiz do arquivo evita erros
    res.sendFile(__dirname + "/html/index.html");
});

//Cria servidor, o servidor deve esta sempre no final do codigo
app.listen(9000,function(){
    console.log("Servidor rodando na url http://localhost:9000");
});


