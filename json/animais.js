const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

function ordenarAnimais(comparacao){
    return comparacao;
}

function ordenarIdadeCrescente() {
   return animais.sort((a, b) => {
        if(a.idade < b.idade) return -1;  
        if(a.idade > b.idade) return 1;
        return 0;
    })
}

function ordenarIdadeDecrescente() {
    return animais.sort((a, b) => {
        if(a.idade < b.idade) return 1;
        if(a.idade > b.idade) return -1;
        return 0; 
    })
}

// console.log(ordenarAnimais(ordenarIdadeCrescente()));
console.log(ordenarAnimais(ordenarIdadeDecrescente()));

