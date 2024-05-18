const filmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 4, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 5, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 6, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 7, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 8, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function filtrarFilmesPorAno(ano) {
    return filmes.filter((filme) => filme.anoLancamento === ano);
}

// console.log(filtrarFilmesPorAno(2010));
console.log(filtrarFilmesPorAno(1993));