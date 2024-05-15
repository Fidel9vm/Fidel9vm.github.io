function scrollDown() {
  window.scrollBy(0, 700); // Desplaza la página hacia abajo 500 píxeles
}

function copyText(event, text, icon) {
  event.preventDefault();
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  // Cambia el ícono a uno de verificación (check-square)
  icon.innerHTML = '<i class="bi bi-check-square"></i>';
  // Elimina el evento de clic una vez que se ha cambiado el ícono
}

var frases = [
  "Si no tienes confianza, siempre encontrarás una forma de no ganar. - Carl Lewis",
  "Si tienes miedo de fallar, probablemente falles. - Kobe Bryant",
  "No se trata de si te derriban, se trata de si te levantas. - Vince Lombardi",
  "Un campeón es alguien que se levanta cuando el otro no puede. - William Harrison",
  "Aunque nadie puede volver atrás y hacer un nuevo comienzo, cualquiera puede comenzar a partir de ahora y crear un nuevo final. - Carl Bard",
  "Proponte alcanzar unas metas altas, y no te detengas hasta llegar allí. - Bo Jackson",
  "Trabaja en tu debilidad hasta que se convierta en tu fortaleza. - Knute Rockne",
  "El deporte no construye el carácter. Lo revela. - Heywood Broun",
  "Si nunca lo intentas, nunca lo conseguirás.",
  "Comer comida asquerosa no es una recompensa, es un castigo.",
  "¡Nunca te saltes un lunes!",
  "Confía en el proceso y los resultados llegarán."
];

function generarFrase() {
  // Generar un número aleatorio entre 0 y la longitud del array de frases
  var indice = Math.floor(Math.random() * frases.length);
  // Mostrar la frase en una alerta
  alert(frases[indice]);
}

