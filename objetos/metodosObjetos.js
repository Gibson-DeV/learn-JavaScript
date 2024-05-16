const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    cor: 'branco',
    ligado: false,
    ligar: function () {
        if (this.ligado === false) {
            this.ligado = true;
            console.log(`Motor: ${this.ligado}`)
        }
    },
    desligar: function () {
        if (this.ligado === true) {
            this.ligado = false;
            console.log(`Motor: ${this.ligado}`)
        }
    },
    obterDetalhes: function () {
       for (let key in carro){
        const type = typeof carro[key];
        if(type !== 'object' && type !== 'function'){
            console.log(`${key}: ${carro[key]}`)
        }
       }
    }
}

// carro.obterDetalhes();

Object.defineProperty(carro, 'placa', {
    enumerable: false,
    value: 'lsk-1452'
})

// carro.obterDetalhes();

// console.log(Object.keys(carro));

const carroNovo = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2022,
    cor: 'Preto'
}

const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
}

console.log(carroComNovosDetalhes);


console.log(carroComNovosDetalhes);