import livros from "../models/livro.js";

class livrosController{
    static listarLivros = async (req,res) => {
        try {
            const livrosEncontrados = await livros.find();
            res.status(200).json(livrosEncontrados);
          } catch (error) {
            res.status(500).json({ error: "Erro ao obter os livros." });
          }
    }
}

export default livrosController