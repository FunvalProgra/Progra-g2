// Escribir un programa que almacene en una lista los números del 1 al 10 
// y los muestre por pantalla en orden inverso separados por comas.

/* Mejora tu programa tanto como el tiempo te lo permita .
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = arr.reverse();
// console.log(arr.join(", "))
let resultado ='';

i = 1;
while (i <=arr.length) {

  resultado += arr[arr.length - i] + ', ';
  i++;
}


console.log(resultado);