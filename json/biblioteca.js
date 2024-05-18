const livros = [
    { id: 1, titulo: 'O Senhor dos Anaies', autor: 'JJJ', anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLibroPorIDd(id) {
    return livros.find((livro) => livro.id === id);
}

console.log(encontrarLibroPorIDd(5));
