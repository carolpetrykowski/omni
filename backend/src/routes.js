const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

/* 
O express vai acessar a rota /
Que não recebe nada do user
E que devolve como resposta para o user um json (estrutura de dados)

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"})
});
*/

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// Exportando as rotas
module.exports = routes;