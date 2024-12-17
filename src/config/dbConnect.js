//Conexão da API com o banco de dados e utilizando o .env
import mongoose, { mongo } from 'mongoose';

async function connectDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default connectDatabase;
