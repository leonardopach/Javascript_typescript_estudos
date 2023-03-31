Array.prototype.map2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}
const nums = [1, 2, 3, 4, 5];

nums.map(dobro => console.log(dobro * 2));
console.log('\n');
nums.map2((dobro, indice) => console.log(`${indice + 1}) ${dobro} - ${dobro * 2}`));
console.log(nums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
let paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

let result = nums.map(soma10).map(triplo).map(paraDinheiro);
let resultado = nums.map2(soma10).map2(triplo).map2(paraDinheiro);

console.log(result);
console.log(resultado);

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "caderno", "preco": 13.90 }',
  '{"nome": "kit de lapis", "preco": 41.45 }',
  '{"nome": "caneta", "preco": 7.45 }',
];

const value = carrinho.map(v => JSON.parse(v)).map(x => x.preco);

console.log(value);

