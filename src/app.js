import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console,"erro de conexão: "))
db.once("open", () => {
  console.log("conexão com o banco realizada com sucesso");
})

const app = express();

app.use(express.json());

const livros = [
  {
    "id": 1,
    "nome": "codigo limpo",
  },  
];

function achaLivro(id)  {
  return livros.findIndex(livro => livro.id == id);
};

app.get("/", (req, res) => {
  res.status(200).send("Curso de node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let id = achaLivro(req.params.id);
  livros[id].nome = req.body.nome
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let id = achaLivro(req.params.id);
  livros.splice(id, 1);
  res.send("livro excluido")
});

export default app;
