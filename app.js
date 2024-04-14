function scrollDown() {
  window.scrollBy(0, 760); // Desplaza la página hacia abajo 500 píxeles
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
