import express from 'express';
import LivroController from '../controllers/livroController.js';

//Lida com as rotas de maneira independente
const routes = express.Router();

routes.get('/livros', LivroController.listarLivros); //rota de listar livros
routes.get('/livros/:id', LivroController.listarLivroId); //rota de buscar livro por id
routes.post('/livros', LivroController.cadastrarLivro); //rota de cadastrar um novo livro
routes.put('/livros/:id', LivroController.atualizarLivroId); //rota para atualizar um livro por id
routes.delete('/livros/:id', LivroController.deletarLivroId); //rota para deletar um livro por id

export default routes;
