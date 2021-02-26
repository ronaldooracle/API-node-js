const conexao = require('../Repository/ConexaoBD');

exports.post = (req, res, next) => {
    let id = req.body.id;
    let produto = req.body.produto;
    let marca = req.body.marca;
    let tipo = req.body.tipo;
    const sql = "INSERT INTO `produtos`(`id`,`produto`, `marca`,`tipo`) VALUES ('"+id+ "','" +produto+ "','" +marca+ "','" +tipo+ "')"
    conexao.query(sql, function (err, result) {
        if (!err)

            res.send({
                id: id,
                produto: produto,
                marca: marca,
                tipo: tipo,
                status: 'Inserido com Sucesso'
            });

                   else
            res.send("Erro ao Inserir Produto ");

    });
};

exports.put = (req, res, next) => {
    let id = req.body.id;
    let produto = req.body.produto;
    let marca = req.body.marca;
    let tipo = req.body.tipo;
    conexao.query('UPDATE `produtos` SET `produto`="'+produto+'",`marca`="'+marca+'",`tipo`="'+tipo+'" WHERE id="'+id+'"', function(err, result)  {
        if(!err)

            res.send({
                id: id,
                produto: produto,
                marca: marca,
                tipo: tipo,
                status: 'Alterado com Sucesso'
            });

        else
            res.send("Erro ao Alterar produto "+id)

    });

};

exports.delete = (req, res, next) => {
    let id = req.body.id;
    conexao.query("delete from produtos where id = '"+id+"'", function(err, result)  {
        if(!err)
            res.send({
                id: id,
                status: 'Deletado com Sucesso'
            });

        else
            res.send("Erro ao Deletado produto "+id)

    });

};

exports.get = (req, res, next) => {
    //res.status(200).send('Rota GET!');
    conexao.query('SELECT * FROM produtos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    })
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    conexao.query('SELECT * FROM produtos where id ="'+id+'"', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    })
};
