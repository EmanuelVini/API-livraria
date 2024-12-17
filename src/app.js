import express from 'express';
import connectDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';

//Utilização da função importada para conexão com o banco
const conection = await connectDatabase();

//Tratamento para verificar o stado da conexão e exibir um log de acordo
conection.on('error', (erro) => {
  console.error('erro de conexão:', erro);
});

conection.once('open', () => {
  console.log('Conexão feita com sucesso!');
});

const app = express();
app.use(express.json()); //Executa as requisições com body convertidos para json

//Função para a busca do indice do livro, e retorno caso o objeto livro tenha o id válido que foi utilizado como parametro
function buscarLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

//Rotas no express:

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros); //retorna o bjeto js
});

app.get('/livros/:id', (req, res) => {
  // Utilizando ':' para indicar que o parametro 'id' é variavel, podendo ser recuperada com o req.params.
  const index = buscarLivro(req.params.id); //objeto referente ao id
  res.status(200).send(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body); //Req do tipo body na resposta, usado para criar dados p/ ser armazenados
  res.status(201).send('Livro cadastrado com sucesso!');
});

//Editar um livro
app.put('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros[index]);
});

//Deletar um livro
app.delete('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('O livro foi removido com sucesso');
});

export default app; //Export do app para outros serviços
