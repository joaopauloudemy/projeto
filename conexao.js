const Sequelize = require('sequelize');

// 1) Nome do banco de dados.
// 2) usario
// 3) senha
// Host= servidor
// 
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(response){
    console.log("falha ao se conectar:"+ response )
})