/*
  Fibonacci: una sucesion de numeros que comienzan con 0 y 1, y los numeros posteriores serán la suma de dos de sus predecesores directos

*/


let fibonacci = [0, 1];

// let logitud = prompt("Escribe la longitud de fibonacci");
let longitud = 10;

for(let i = 1;fibonacci.length < longitud;i++) {

  let suma = fibonacci[i] + fibonacci[i - 1];

fibonacci.push(suma);

}

console.log(fibonacci);