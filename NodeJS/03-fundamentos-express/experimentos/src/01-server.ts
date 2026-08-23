import express from 'express';
import rotasProdutos from './routes/01-produtos.js';

const app = express();

// Dizemos que todas as rotas dentro de 'rotasProdutos' agora começam com o prefixo '/produtos'
app.use('/produtos', rotasProdutos);

app.listen(3000, () => console.log("Servidor modularizado com sucesso"));


