import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

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
routes(app);

export default app; //Export do app para outros serviços
