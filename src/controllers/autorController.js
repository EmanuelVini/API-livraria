import { autor } from '../models/Autor.js';

//Métodos de requisições e respostas
//Controlador métodos de requisições e respostas
class AutorController {
  //
  //metodo de listar autores existentes
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar lista de autor` });
    }
  }

  //metodo de listar escolhido
  static async listarAutorId(req, res) {
    try {
      const id = req.params.id;

      const autorDesejado = await autor.findById(id);

      res.status(200).json(autorDesejado); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar autor` });
    }
  }

  //metodo de cadastrar novo autor
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: 'autor criado com sucesso', autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar autor` });
    }
  }

  //metodo de atualizar autor
  static async atualizarAutorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'autor atualizado com sucesso.' }); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar autor` });
    }
  }

  //metodo de deletar autor
  static async deletarAutorId(req, res) {
    try {
      const id = req.params.id;
      const autorDeletado = await autor.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: 'autor deletado com sucesso.', autor: autorDeletado }); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao deletar autor` });
    }
  }
}

export default AutorController;
