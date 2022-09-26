// Los alumnos de un curso se han dividido en dos grupos A y B
//de acuerdo al sexo y el nombre. El grupo A esta formado por 
// las mujeres con un nombre anterior a la M y los hombres con 
// un nombre posterior a la N y el grupo B por el resto. 
// Escribir un programa que pregunte al usuario su nombre y 
//sexo, y muestre por pantalla el grupo que le corresponde.

// Mejora tu programa tanto como el tiempo te lo permita.
//Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/


let sexo = prompt("Ingresa tu sexo. (H si eres Hombre o M si eres Mujer)");

while (sexo.toUpperCase() != 'H' && sexo.toUpperCase() != 'M') {
  alert("Lo que ingresaste no es un sexo valido. intentalo nuevamente");
  sexo = prompt("Ingresa tu sexo. (H si eres Hombre o M si eres Mujer)");
}






let nombre = prompt("Ingresa tu nombre.");
let isMujerInA = 'ABCDEFGHIJKL';
let isHombreInA = 'OPQRSTUVWXYZ';
let isInA = false;


if(sexo == 'M' && isMujerInA.search(nombre[0]) >= 0) { // Mujer
  isInA = true;
} else if(sexo = 'H' && isHombreInA.search(nombre[0]) >= 0) {
  isInA = true;
}// Hombre

if(isInA) {
  alert("Perteneces al grupo A")
} else {
  alert("Perteneces al grupo B")
}

// nombre[0] esta en abecedario(las primeras 12 letas)
// Search == variable.search('queestasBuscando');