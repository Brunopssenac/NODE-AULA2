import expres from "express"
import pets from "./pets";

const app = expres();
const port = 3000;

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));
