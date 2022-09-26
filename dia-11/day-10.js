// Ejercicio 1

// Escribe un programa que tome los numeros de un array y devuelva la suma de todos ellos. Para esto utiliza el ciclo FOR

/* Ejemplo :
  dado el array = [1, 2, 3, 4, 5, 6, 7, 8, 100];

  valor de salida: 136.  
*/

/* Mejora tu programa tanto como el tiempo te lo permita (que el usuario te de los numeros, los guardes en un array y muestres la suma del array).
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/


/*
  Fibonacci: una sucesion de numeros que comienzan con 0 y 1, y los numeros posteriores serán la suma de dos de sus predecesores directos

*/


let fibonacci = [0, 1];

let longitud = parseInt(prompt("Escribe la longitud de fibonacci"));// let longitud = 11;


for(let i = 1;fibonacci.length < longitud;i++) {

  let suma = fibonacci[i] + fibonacci[i - 1];

  fibonacci.push(suma);

}

console.log(fibonacci);
