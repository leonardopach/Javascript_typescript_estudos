const pilotos = ['vettel', 'Alonso', 'raikkonen', 'Massa'];

pilotos.pop();

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift();
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

pilotos.splice(2, 0, 'Bottas', 'Masa');
console.log(pilotos);

pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 2);
console.log(algunsPilotos2);
