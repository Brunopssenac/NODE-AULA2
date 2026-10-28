import expres from "express"
import pets from "./pets.js";

const app = expres();
const port = 3000;

app.get("/", (requisicao, resposta) => {
resposta.send(pets);
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));
