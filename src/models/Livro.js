import mongoose from 'mongoose';

//Criação de um modelo para o livro que sera utilizado no banco na fforma do mongoose
const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
