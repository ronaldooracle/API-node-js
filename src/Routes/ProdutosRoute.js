const ProdutosController = require('../Controllers/ProdutosController');


module.exports = (app) => {
    const bodyparser = require('body-parser');
    app.use(bodyparser.json());
    app.post('/produtos', ProdutosController.post);
    app.put('/produtos', ProdutosController.put);
    app.delete('/produtos', ProdutosController.delete);
    app.get('/produtos', ProdutosController.get);
    app.get('/produtos/:id', ProdutosController.getById);

}
