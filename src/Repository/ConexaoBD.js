const mysql = require('mysql');


const  conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c1sn3bronz3',
    database: 'bd',
    multipleStatements: true
});

conexao.connect((err) => {
    if(!err)
        console.log('Banco de Dados Conectado');
    else
        console.log('Erro Na conexao com Banco de Dados'+ JSON.stringify(err,undefined,2));
})

module.exports = conexao;

