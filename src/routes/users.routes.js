const express = require("express");
const routes = express.Router();

const UserController = require('../controllers/UserController');

// Rota para listar todos os usuários
routes.get('/', UserController.index);

// Rota para listar um usuário
routes.get('/show/:id', UserController.show);

// Rota para mostrar formulário de cadastro de usuário
routes.get('/create', UserController.create);
// Rota para mostrar formulário de edição de usuário
routes.get('/edit/:id', UserController.edit);

// Rota para criar um usuário
routes.post('/', UserController.store);

// Rota para atualizar um usuário
routes.put('/:id', UserController.update);
// Rota para deletar um usuário
routes.delete('/:id', UserController.delete);
module.exports = routes;