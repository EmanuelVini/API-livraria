//import http from 'http';
//conexão do servidor
import 'dotenv/config';
import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Servidor escutando na porta:', PORT);
});
