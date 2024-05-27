// JavaScript para actualizar el icono del archivo
document.getElementById('image').addEventListener('change', function (e) {
  var fileIcon = document.getElementById('file-icon');
  if (this.files && this.files.length > 0) {
    fileIcon.className = 'bi bi-check-square';
    fileIcon.style.color = 'black';
  } else {
    fileIcon.className = 'bi bi-box-arrow-in-down';
    fileIcon.style.color = 'white';
  }
});

// Función para mostrar mensaje de error
function mostrarError() {
  var errorMensaje = document.getElementById('error-mensaje');
  var imageInput = document.getElementById('image');
  if (imageInput.value === '') {
    errorMensaje.style.display = 'block';
  } else {
    errorMensaje.style.display = 'none';
  }
}

// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  var form = event.target;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    alert('Por favor, rellene todos los campos obligatorios.');
  }
  form.classList.add('was-validated');
  mostrarError(); // Llamada a la función para mostrar mensaje de error al enviar el formulario
}, false);