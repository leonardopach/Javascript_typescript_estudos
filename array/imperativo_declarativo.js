const alunos = [
  { nome: "joao", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];


// imperativo - como e feito
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1);
console.log(total1 / alunos.length);

// declarativa - o que que tem que ser feito
const getNota = aluno => aluno.nota;
const total2 = alunos.map(getNota).reduce((acc, atual) => acc + atual);

console.log(total2);
console.log(total2 / alunos.length);
