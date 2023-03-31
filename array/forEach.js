Array.prototype.forEach2 = function forEach2(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }

}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach((nome, indice) => {
  console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach2((x, i, a) => {
  console.log(`${i + 1}) ${x}`);
  console.log(a);
});

