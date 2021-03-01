const MetodosProdutos = require('../Repository/MetodosProdutos');


module.exports = (app) => {
    const bodyparser = require('body-parser');
    app.use(bodyparser.json());
    app.post('/produtos', MetodosProdutos.post);
    app.put('/produtos', MetodosProdutos.put);
    app.delete('/produtos', MetodosProdutos.delete);
    app.get('/produtos', MetodosProdutos.get);
    app.get('/produtos/:id', MetodosProdutos.getById);

}
