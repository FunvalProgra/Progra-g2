/* 
Hoy tienes el ultimo ejercicio de JavaScript de este nivel.

Veamos una nueva forma de usar las cosas que aprendiste.

Hoy la tarea será sobre unir dos arrays en uno.

INSTRUCCIONES

Dados 2 arrays, imprime en consola un tercer array que tenga los datos del primer array y del segundo. Puedes usar ciclos, metodos segun sea conveniente.

También puedes buscar en la documentación de W3Schools, si tienes dudas puedes preguntar al grupo de discord :D

Ejemplo:

array1 : ["Pedro", "Marcos", "Maria", "Ignacio"]
array2 : ["Carla", "Gonzalo", "Piero", "Mercedes"]

array3 : ["Pedro", "Marcos", "Maria", "Ignacio", "Carla", "Gonzalo", "Piero", "Mercedes"]


Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado

*/

let array1 = ["Pedro", "Marcos", "Maria", "Ignacio"]
let array2 = ["Carla", "Gonzalo", "Piero", "Mercedes"]

// let array3 = array1.concat(array2);

let array3 = [...array1,...array2];


// for(let i = 0; i < array2.length; i++) {

//   array3.push(array1[i], array2[i])
  
// }


console.log(array3);