console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () { }
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto { } // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())


function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        falar() {
            console.log("Ola mundo");
        }
    };
}

const pessoa1 = criarPessoa("leonardo", "pacheco", 25);

pessoa1.falar();
console.log(pessoa1);