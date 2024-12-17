import livro from '../models/Livro.js';

//Métodos de requisições e respostas
//Controlador métodos de requisições e respostas
class LivroController {
  //
  //metodo de listar livros existentes
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar lista de livro` });
    }
  }

  //metodo de listar escolhido
  static async listarLivroId(req, res) {
    try {
      const id = req.params.id;

      const livroDesejado = await livro.findById(id);

      res.status(200).json(livroDesejado); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar livro` });
    }
  }

  //metodo de cadastrar novo livro
  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: 'Livro criado com sucesso', livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar livro` });
    }
  }

  //metodo de atualizar livro
  static async atualizarLivroId(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado com sucesso.' }); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar livro` });
    }
  }

  //metodo de deletar livro
  static async deletarLivroId(req, res) {
    try {
      const id = req.params.id;
      const livroDeletado = await livro.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: 'Livro deletado com sucesso.', livro: livroDeletado }); //retorna o bjeto js
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao deletar livro` });
    }
  }
}

export default LivroController;
