// Validar que el usuario escriba un correo correctamente.

// @
// .edu

let correo = prompt("Escribe tu correo de la universidad:");

//verificamos si es correcto
// Entregamos resultado por si es correcto o uno diferente si no lo es.

let isEducacion = correo.indexOf(".edu") > -1;
let isValidEmail = correo.indexOf("@") > -1;

if (correo.indexOf(".edu") > -1 && correo.indexOf("@") > -1) {
  alert("Tienes un correo válido.");
} else if (isEducacion) {
  alert("tu cuenta es de educacion pero no tiene una estructura valida");
} else if (isValidEmail) {
  alert("tu correo no es educacional.");
} else {
  alert("Correo no valido, intenta nuevamente.");
}

// el correo es valido y es educacional
// que escriba al inicio .edu y @
// es correo valido pero no es educacional
// no es correo valido pero tiene .edu
// no cumple ningun requisito
// no escribio nada
