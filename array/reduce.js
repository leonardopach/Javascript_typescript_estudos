Array.prototype.reduce2 = function(callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1
  let acumulador = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador;
}
const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21));

const alunos = [
  { nome: "Leonardo", nota: 8.2, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: false },
]
const bolsitas = alunos.map(a => a.bolsista).reduce((ac, atual) => {
  return ac && atual
});

console.log(bolsitas);

const eBolsita = alunos.map(a => a.bolsista).reduce((ac, atual) => {
  return ac || atual
})
console.log(eBolsita);

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
  console.log(acumulador, atual);
  return acumulador + atual;
}, 0);

console.log(resultado);
