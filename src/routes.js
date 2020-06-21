const express = require('express');

const authenticate = require('../src/middleware/authenticate'); //use on routes that require authentication or user information
const CadastroController = require('./controllers/cadastroController');
const TokenController = require('./controllers/tokenController');

const routes = express.Router();

routes.post('/cadastro', CadastroController.cadastro);
//LogIn and return a Token
routes.post('/token', TokenController.token);

module.exports = routes;