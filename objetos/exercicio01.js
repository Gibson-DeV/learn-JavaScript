const pessoa = {
    nome: 'Gibson',
    notas: [10, 8, 9.5, 10],
    calcularMediaNotas: function (notas) {
        let soma = 0;
        
        for (let nota of notas) {
            soma += nota;
        }
        const media = soma / notas.length;

        return media.toFixed(2)
    },
    classifcarDesempenho: function (media) {
        if (media >= 9) {
            return 'Desemplenho Excelente!';
        }
        else if (media >= 7.6 && media <= 8.9) {
            return 'Bom desempenho';
        }
        else if (media >= 6 && media <= 7.5) {
            return 'Desempenho Regular';
        }
        else if (media < 6) {
            return 'Desempenho Insuficiente';
        }
    }
}

console.log(pessoa.calcularMediaNotas(pessoa.notas))

console.log(pessoa.classifcarDesempenho(pessoa.calcularMediaNotas(pessoa.notas)))
