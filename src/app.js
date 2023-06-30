import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "erro de conexão: "));
db.once("open", () => {
  console.log("conexão com o banco realizada com sucesso");
});

const app = express();

app.use(express.json());

routes(app)

function achaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}


  
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let id = achaLivro(req.params.id);
  livros[id].nome = req.body.nome;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let id = achaLivro(req.params.id);
  livros.splice(id, 1);
  res.send("livro excluido");
});

export default app;
