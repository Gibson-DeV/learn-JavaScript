import http from "http";

const PORT = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Entrei na rota',
    '/autores': 'rota autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain" });
    res.end(rotas[req.url])
});

server.listen(PORT, () => {
    console.log('Escutando na porta 3000!');
});

