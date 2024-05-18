// Función para validar el formulario
function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var motivo = document.getElementById("motivo").value;
  var prefContacto = document.querySelectorAll('input[name="prefContacto"]:checked').length;
  var imagen = document.getElementById("fileInput").files.length;

  if (nombre === "" || email === "" || mensaje === "" || motivo === "" || prefContacto === 0 || imagen === 0) {
      return false;
  }

  return true;
}-

// Función para habilitar o deshabilitar el botón de enviar según la validación del formulario
function actualizarBotonEnviar() {
  var botonEnviar = document.querySelector("#formularioContacto button[type='submit']");
  botonEnviar.disabled = !validarFormulario();
}

// Manejador del evento change para el campo de entrada de tipo archivo
document.getElementById('fileInput').addEventListener('change', function() {
  var nombreArchivo = document.getElementById('nombreArchivo');
  var fileInput = document.getElementById('fileInput');
  if (fileInput.files.length > 0) {
      nombreArchivo.innerHTML = '<i class="bi bi-check2-square"></i>';
  } else {
      nombreArchivo.innerHTML = '<i class="bi bi-upload"></i>';
  }
  actualizarBotonEnviar(); // Llama a la función actualizarBotonEnviar para habilitar/deshabilitar el botón de enviar
});

// Manejador del evento input para los campos del formulario
document.querySelectorAll('#formularioContacto input, #formularioContacto textarea, #formularioContacto select').forEach(function(element) {
  element.addEventListener('input', actualizarBotonEnviar);
});

// Llamar a la función actualizarBotonEnviar inicialmente para asegurarse de que el botón de enviar esté configurado correctamente al cargar la página
actualizarBotonEnviar();
