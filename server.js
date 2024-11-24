// Importa o framework Express para criar e gerenciar o servidor.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express.
const app = express();

app.use(express.static("uploads"))

routes(app);

// Inicia o servidor na porta 3000 e imprime uma mensagem no console.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});