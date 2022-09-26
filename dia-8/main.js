// Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, 
// Física, Química, Historia y Lengua) en un array y la muestre por pantalla.

/* Mejora tu programa tanto como el tiempo te lo permita (que lo muestre uno por uno, que lo muestre contatenado con una indicacion, etc).
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/

let cursos = ['Fisica', 'Matematica','Quimica','Biologia','Programación','Ingles','ALgo mas'];

cursos.push('Un nuevo curso')

// console.log(typeof(cursos))

console.log(cursos[0]);
console.log(cursos[cursos.length - 1])

cursos.unshift('Hola');



let i = 0;
while (i < cursos.length) {

  console.log(cursos[i])

  i++;
}