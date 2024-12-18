import express from 'express';
import AutorController from '../controllers/autorController.js';

//Lida com as rotas de maneira independente
const routes = express.Router();

routes.get('/autores', AutorController.listarAutores); //rota de listar autores
routes.get('/autores/:id', AutorController.listarAutorId); //rota de buscar autor por id
routes.post('/autores', AutorController.cadastrarAutor); //rota de cadastrar um novo autor
routes.put('/autores/:id', AutorController.atualizarAutorId); //rota para atualizar um autor por id
routes.delete('/autores/:id', AutorController.deletarAutorId); //rota para deletar um autor por id

export default routes;
