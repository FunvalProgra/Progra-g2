// COMPLETANDO NUESTRA HISTORIA

/* Crea un Programa que le pida a los usuarios los siguientes datos: 

ADJETIVO-1
ANIMAL
VERBO-1
EXCLAMACION
VERBO-2
VERBO-3
MIEMBRO-DE-FAMILIA
VERBO-4
VERBO-5
ADJETIVO-2
COSA-1
COSA-2

Luego imprime un mensaje como el siguiente:

"El otro día, estaba realmente en problemas. Todo empezó cuando vi un ADJETIVO-1 ANIMAL VERBO-1 en el pasillo. 'EXCLAMACION!' Yo grité. Pero todo que podía pensar en hacer era VERBO-2 una y otra vez. Milagrosamente, eso hizo que se detuviera, pero no antes de que intentara VERBO-3 justo en frente de mi familia. Entonces, mi MIEMBRO-DE-FAMILIA corre a mi lado y comenzó a VERBO-4 con energía, toda mi familia nos miraba. Después de un par de minutos salí de la casa, ¡era hora de VERBO-5! Estaba preparado, usando mi ADJETIVO-2 COSA-1 y una COSA-2, nada podía detenerme."

reemplazando cada uno de los valores que te dió el usuario en su posicion correspondiente en el texto.

Ejemplo:
EXCLAMACIÓN = "Oh no"

texto salida:

... 'Oh no!' Yo grité...

Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado
*/


// Tu codigo Comienza Aqui

const ADJETIVO1 = "alto";
const ANIMAL = "perro";
const VERBO1 = "trotar";
const EXCLAMACION = prompt("Escribe un EXCLAMACION");
const VERBO2 = prompt("Escribe un VERBO2");
const VERBO3 = prompt("Escribe un VERBO3");
const MIEMBRODEFAMILIA = prompt("Escribe un MIEMBRODEFAMILIA");
const VERBO4 = prompt("Escribe un VERBO4");
const VERBO5 = prompt("Escribe un VERBO5");
const ADJETIVO2 = prompt("Escribe un ADJETIVO2");
const COSA1 = prompt("Escribe un COSA1");
const COSA2 = prompt("Escribe un COSA2");

let resultado = "El otro día, estaba realmente en problemas. Todo empezó cuando vi un " + ADJETIVO1+ " " + ANIMAL+ " " + VERBO1 + " en el pasillo. '" + EXCLAMACION +"!' Yo grité. Pero todo que podía pensar en hacer era VERBO-2 una y otra vez. Milagrosamente, eso hizo que se detuviera, pero no antes de que intentara VERBO-3 justo en frente de mi familia. Entonces, mi MIEMBRO-DE-FAMILIA corre a mi lado y comenzó a VERBO-4 con energía, toda mi familia nos miraba. Después de un par de minutos salí de la casa, ¡era hora de VERBO-5! Estaba preparado, usando mi ADJETIVO-2 COSA-1 y una COSA-2, nada podía detenerme."

console.log(resultado);



let resultado2 = `El otro día, estaba realmente en problemas. Todo empezó cuando vi un ${ADJETIVO1} ${ANIMAL} ${VERBO1} en el pasillo. 'EXCLAMACION!' Yo grité. Pero todo que podía pensar en hacer era VERBO-2 una y otra vez. Milagrosamente, eso hizo que se detuviera, pero no antes de que intentara VERBO-3 justo en frente de mi familia. Entonces, mi MIEMBRO-DE-FAMILIA corre a mi lado y comenzó a VERBO-4 con energía, toda mi familia nos miraba. Después de un par de minutos salí de la casa, ¡era hora de VERBO-5! Estaba preparado, usando mi ADJETIVO-2 COSA-1 y una COSA-2, nada podía detenerme.`;
