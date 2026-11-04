import express from "express";
import pets from "./pets.js";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(pets);
});

app.get("/pet/:nome", (requisicao, resposta) => {
  const nomeInformado = requisicao.params.nome.toLowerCase();

  const pet = pets.find(
    (infoPet) => infoPet.nome.toLowerCase() === nomeInformado
  );

  resposta.send(pet);
});

app.get("/tutor/:tutor", (requisicao, resposta) => {
  const tutorInformado = requisicao.params.tutor.toLowerCase();

  const petDoTutor = pets.filter(
    (infoPet) =>  infoPet.tutor.toLowerCase().includes(tutorInformado)
  );

  resposta.send(petDoTutor);
});

app.post("/", (req, res) => {
const novoPet = req.body;
pets.push(novoPet);
res.status(200).send(novoPet);

});

app.put("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const nomeSelecionado = pets.find((pet) => pet.nome === nomeInformado);
  const campos = Object.keys(req.body);

  for (let campo of campos) {
    nomeSelecionado[campo] = req.body[campo];
  }
  res.status(200).send(nomeSelecionado);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));