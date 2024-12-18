import mongoose from 'mongoose';
import { autorSchema } from './Autor.js';

//Criação de um modelo para o livro que sera utilizado no banco na forma do mongoose
const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema,
  },
  { versionKey: false }
);

//const de modelo livro para a importação
const livro = mongoose.model('livros', livroSchema);

export default livro;
