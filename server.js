const http = require("http");
const porta = 4000

const rotas = {
    '/':'curso de node',
    '/livros':'entrei na pagina de livros',
    '/autores':'listagem de autores'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
})

server.listen(porta,() => {
    console.log(`API rodando em http://localhost:${porta}`);
});