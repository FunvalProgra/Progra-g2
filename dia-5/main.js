// voy a decirle a la persona cuanto impuesto pagar, dependiento su monto de renta anual.

/* 
  Menos de 10000€ 	5%
  Entre 10000€ y 20000€ 	15%
  Entre 20000€ y 35000€ 	20%
  Entre 35000€ y 60000€ 	30%
  Más de 60000€ 	45%
*/

let edad = parseInt(prompt("Cuantos años tienes?"));

// let resultado = " ";

// let resultado = condicion ? true : false;

let resultado = edad < 18 ? 'No puede pasar' : 'Adelante Señor';



// if (edad < 18) {
//   resultado = "no puedes pasar";
// } else {
//   resultado = 'Adelante señor';
// }

alert(resultado);
// let renta = 10000;