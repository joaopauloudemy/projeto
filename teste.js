const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagem',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.STRING
    }
});

//insere na base de dados

// força e garante que a tabela vai ser gerada
Postagem.sync({force : true});