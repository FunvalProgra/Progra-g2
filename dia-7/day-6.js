/* Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).*/

/* Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/


let edad = parseInt(prompt("Ingresa tu edad."));
let i = 1; 

while(edad >= i) {

  console.log(i);

  // Antes de terminar, sumar 1 a i
  i++;
}




let registro = prompt("Dime tu hobbie");

do {
  let hobbie = prompt("")
  registro = prompt("Quieres registrar un alumno?");
  nuevoRegistro = "";

  registro = prompt("Quieres añadir otro hobbie?")

} while(registro == 'si')